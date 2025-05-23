// app/providers.tsx
'use client'

import { ReactNode, useState, useEffect } from 'react'
import { ApolloProvider, ApolloClient, HttpLink, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { Observable } from '@apollo/client'
import { TokenProvider, useToken, isTokenExpiringSoon } from "@/lib/auth/token-provider"
import { TokenRefreshHandler } from "@/lib/auth/token-refresh-handler"
import { useAuth } from '@clerk/nextjs'

// Define ErrorHandler type to fix TypeScript errors
type ErrorHandler = ReturnType<typeof onError>;

function ApolloClientProvider({ children }: { children: ReactNode }) {
  const { token, refreshToken, isRefreshing } = useToken()
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null)
  const [initializationTimeout, setInitializationTimeout] = useState(false)
  const [initializationError, setInitializationError] = useState<string | null>(null)
  const { isLoaded: isClerkLoaded } = useAuth()

  // Add a shorter timeout for initial loading
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!client) {
        console.warn('Apollo client initialization timed out, creating client without waiting for token')
        setInitializationTimeout(true)
      }
    }, 3000) // 3 second timeout is reasonable for production
    
    return () => clearTimeout(timeoutId)
  }, [client])

  // Effect to initialize Apollo client
  useEffect(() => {
    // Skip initialization until Clerk is loaded or timeout occurs
    if (!isClerkLoaded && !initializationTimeout) {
      console.log('Waiting for Clerk to load...')
      return
    }
    
    try {
      console.log('Initializing Apollo client, token status:', token ? 'available' : 'not available')
      
      // Auth middleware that checks token before each operation
      const authMiddleware = setContext(async (_, { headers }) => {
        // If token exists and is expiring soon, try to refresh it
        if (!isRefreshing && token && isTokenExpiringSoon(token)) {
          try {
            console.log('Token is expiring soon, refreshing...')
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
        
        // Use existing token or proceed without one
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
          },
        }
      })

      // Error handling link for auth errors
      const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
        // Log all GraphQL errors for debugging
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            console.error(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
              extensions
            )
          })
        }
        
        // Handle authentication errors
        const hasAuthError = graphQLErrors?.some(err => 
          err.extensions?.code === 'invalid-jwt' || 
          err.message.toLowerCase().includes('jwt') || 
          err.message.toLowerCase().includes('token')
        )
        
        if (hasAuthError) {
          console.log('Token error detected in GraphQL response')
          
          return new Observable(observer => {
            // If already refreshing, wait before retrying
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
            
            // Refresh token and retry
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
                
                // Retry the request
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
        
        return undefined
      })

      // Create HTTP link with proper error handling
      const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
        // Add fetch options for better network handling
        fetchOptions: {
          mode: 'cors',
          credentials: 'include',
        },
      })

      // Create Apollo Client with enhanced configuration
      const apolloClient = new ApolloClient({
        link: from([errorLink, authMiddleware, httpLink]),
        cache: new InMemoryCache({
          typePolicies: {
            Query: {
              fields: {
                // Add cache policies as needed
              }
            }
          }
        }),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'all',
          },
          query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
          },
          mutate: {
            errorPolicy: 'all',
          },
        },
        connectToDevTools: process.env.NODE_ENV === 'development',
      })

      setClient(apolloClient)
    } catch (error) {
      // Capture any initialization errors
      console.error('Error initializing Apollo client:', error)
      setInitializationError(error instanceof Error ? error.message : 'Unknown error initializing GraphQL client')
      
      // Create a fallback client without authentication
      const fallbackClient = new ApolloClient({
        link: new HttpLink({
          uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
        }),
        cache: new InMemoryCache(),
      })
      
      setClient(fallbackClient)
    }
  }, [token, refreshToken, isRefreshing, initializationTimeout, isClerkLoaded])

  // Show loading state while initializing
  if (!client) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium">Initializing Application</p>
          {initializationError && (
            <p className="mt-2 text-sm text-red-500">Error: {initializationError}</p>
          )}
        </div>
      </div>
    )
  }

  // Render children with Apollo provider
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