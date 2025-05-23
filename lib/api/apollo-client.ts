// lib/api/apollo-client.ts
import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { createHttpLink } from '@apollo/client/link/http'
import { createAuthLink } from './apollo-auth-link'

export function createApolloClient(isServer: boolean = false) {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
    credentials: 'include',
  })
  
  const authLink = createAuthLink(isServer)
  
  return new ApolloClient({
    ssrMode: isServer,
    link: from([authLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            payrolls: {
              merge(existing = [], incoming) {
                return incoming
              }
            }
          }
        }
      }
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: isServer ? 'network-only' : 'cache-and-network',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: isServer ? 'network-only' : 'cache-first',
        errorPolicy: 'all',
      },
    },
  })
}

// Singleton instances
let serverClient: ApolloClient<any> | null = null
let clientClient: ApolloClient<any> | null = null

export function getApolloClient(isServer: boolean = false) {
  if (isServer) {
    // Always create new instance on server
    return createApolloClient(true)
  }
  
  // Reuse client instance
  if (!clientClient) {
    clientClient = createApolloClient(false)
  }
  return clientClient
}