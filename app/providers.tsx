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
import { RetryLink } from '@apollo/client/link/retry';

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
        // Format authorization header helper function
        const formatAuthHeader = (tokenStr: string | null) => {
          if (!tokenStr) return ''
          // Normalize token by removing any existing Bearer prefix
          const cleanToken = tokenStr.startsWith('Bearer ') ? tokenStr.slice(7) : tokenStr
          const header = `Bearer ${cleanToken}`
          // Log header for debugging (redact token)
          console.debug('Authorization header:', 'Bearer [redacted]')
          return header
        }

        // If token exists and is expiring soon, try to refresh it
        if (!isRefreshing && token && isTokenExpiringSoon(token)) {
          try {
            console.log('Token is expiring soon, refreshing...')
            const newToken = await refreshToken()
            
            return {
              headers: {
                ...headers,
                authorization: formatAuthHeader(newToken),
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
            authorization: formatAuthHeader(token),
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
              {
                extensions,
                operationName: operation.operationName,
                variables: operation.variables,
                context: operation.getContext()
              }
            )
          })
        }
        
        if (networkError) {
          console.error(`[Network error]: ${networkError}`, {
            operationName: operation.operationName,
            headers: operation.getContext().headers,
            uri: operation.getContext().uri
          })
          
          // Log specific CORS-related errors
          if ('statusCode' in networkError && networkError.statusCode === 0) {
            console.error('Possible CORS or network connectivity issue detected')
            console.debug('Request details:', {
              uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
              headers: operation.getContext().headers
            })
          }
        }
      })

      // Retry link for handling network issues
      const retryLink = new RetryLink({
        delay: {
          initial: 300,
          max: 3000,
          jitter: true
        },
        attempts: {
          max: 3,
          retryIf: (error, _operation) => {
            // Retry on network errors and specific GraphQL errors
            if (error?.message?.includes('Failed to fetch') || error?.statusCode === 0) {
              console.debug('Retrying due to network/CORS error:', error)
              return true
            }
            if (error?.message?.includes('JWT')) {
              console.debug('Retrying due to JWT/auth error:', error)
              return true
            }
            return false
          }
        }
      })

      // Create HTTP link with proper error handling
      const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
        // Add fetch options for better network handling
        fetchOptions: {
          mode: 'cors',
          credentials: 'include',
        },
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // Create Apollo Client with enhanced configuration
      const apolloClient = new ApolloClient({
        link: from([errorLink, retryLink, authMiddleware, httpLink]),
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