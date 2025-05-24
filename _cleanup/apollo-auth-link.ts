// lib/api/apollo-auth-link.ts
import { ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { tokenManager } from '@/lib/auth/token-manager'

export function createAuthLink(isServer: boolean = false): ApolloLink {
  // Auth context link
  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await tokenManager.getToken(isServer)
      
      return {
        headers: {
          ...headers,
          ...(token && { authorization: `Bearer ${token}` }),
        },
      }
    } catch (error) {
      console.error('Auth link error:', error)
      return { headers }
    }
  })
  
  // Error handling link
  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    // Handle GraphQL errors
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        console.error('[GraphQL error]:', {
          message: err.message,
          code: err.extensions?.code,
          operation: operation.operationName
        })
        
        // Handle auth errors
        if (err.extensions?.code === 'invalid-jwt' || 
            err.message.includes('JWTExpired')) {
          tokenManager.clearCache()
          console.log('JWT error detected, cache cleared')
        }
      }
    }
    
    // Handle network errors
    if (networkError) {
      console.error('[Network error]:', {
        message: networkError.message,
        operation: operation.operationName
      })
    }
  })
  
  return ApolloLink.from([errorLink, authLink])
}