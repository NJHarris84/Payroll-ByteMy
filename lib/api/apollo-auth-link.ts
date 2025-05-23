// lib/api/apollo-auth-link.ts
import { ApolloLink, Observable } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { tokenManager } from '@/lib/auth/token-manager'

export function createAuthLink(isServer: boolean = false): ApolloLink {
  // Auth middleware
  const authLink = new ApolloLink((operation, forward) => {
    return new Observable(observer => {
      tokenManager.getToken(isServer)
        .then(token => {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: token ? `Bearer ${token}` : '',
            }
          })
          forward(operation).subscribe(observer)
        })
        .catch(error => {
          observer.error(error)
        })
    })
  })
  
  // Error handling with retry
  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'invalid-jwt' || 
            err.message.includes('JWTExpired')) {
          // Clear cache and retry
          tokenManager.clearCache()
          
          return new Observable(observer => {
            tokenManager.getToken(isServer)
              .then(token => {
                operation.setContext({
                  headers: {
                    ...operation.getContext().headers,
                    authorization: token ? `Bearer ${token}` : '',
                  }
                })
                forward(operation).subscribe(observer)
              })
              .catch(error => {
                observer.error(error)
              })
          })
        }
      }
    }
  })
  
  return ApolloLink.from([errorLink, authLink])
}