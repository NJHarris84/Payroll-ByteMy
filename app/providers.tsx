// app/providers.tsx
'use client'

import { ReactNode, useState, useEffect } from 'react'
import { ApolloProvider, ApolloClient, HttpLink, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { Observable } from '@apollo/client'
import { TokenProvider, useToken, isTokenExpiringSoon } from '@/lib/token-provider'
import { TokenRefreshHandler } from '@/lib/token-refresh-handler'

// Define ErrorHandler type to fix TypeScript errors
type ErrorHandler = ReturnType<typeof onError>;

function ApolloClientProvider({ children }: { children: ReactNode }) {
  const { token, refreshToken, isRefreshing } = useToken()
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null)

  useEffect(() => {
    // Skip initialization until we have a token value (even if it's null)
    if (token === undefined) return
    
    // Auth middleware that checks token before each operation
    const authMiddleware = setContext(async (_, { headers }) => {
      // Don't check during active refresh to avoid infinite loops
      if (!isRefreshing && token && isTokenExpiringSoon(token)) {
        try {
          // Get a fresh token
          const newToken = await refreshToken()
          
          return {
            headers: {
              ...headers,
              authorization: newToken ? `Bearer ${newToken}` : '',
            },
          }
        } catch (e) {
          console.error('Failed to refresh token in auth middleware:', e)
        }
      }
      
      // Use existing token
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })

    // Error handling link for auth errors
    const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
      // Handle authentication errors (like expired tokens)
      const hasAuthError = graphQLErrors?.some(err => 
        err.extensions?.code === 'invalid-jwt' || 
        err.message.toLowerCase().includes('jwt') || 
        err.message.toLowerCase().includes('token')
      )
      
      if (hasAuthError) {
        console.log('Token error detected in GraphQL response')
        
        // Return Observable for proper typing
        return new Observable(observer => {
          // If already refreshing, wait a bit
          if (isRefreshing) {
            setTimeout(() => {
              forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              })
            }, 1000)
            return
          }
          
          // Refresh token
          refreshToken()
            .then(newToken => {
              // Update the authorization header with new token
              const oldHeaders = operation.getContext().headers || {}
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: newToken ? `Bearer ${newToken}` : '',
                },
              })
              
              // Retry the request and pass the results to our observer
              forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              })
            })
            .catch(error => {
              console.error('Failed to refresh token in error handler:', error)
              observer.error(error)
            })
        })
      }

      if (networkError) {
        console.error(`[Network error]: ${networkError}`)
      }
      
      // For non-auth errors, return undefined
      return undefined
    })

    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
    })

    // Create Apollo Client
    const apolloClient = new ApolloClient({
      link: from([errorLink, authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    })

    setClient(apolloClient)
  }, [token, refreshToken, isRefreshing])

  if (!client) {
    return <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium">Initializing Application</p>
      </div>
    </div>
  }

  return (
    <ApolloProvider client={client}>
      <TokenRefreshHandler />
      {children}
    </ApolloProvider>
  )
}

// Main provider wrapper that combines token and Apollo providers
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TokenProvider>
      <ApolloClientProvider>
        {children}
      </ApolloClientProvider>
    </TokenProvider>
  )
}