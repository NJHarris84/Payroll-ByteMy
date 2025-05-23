// lib/api/apollo-client.ts
import { onError } from '@apollo/client/link/error';

export function createApolloClient(isServer: boolean = false) {
  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions }) => {
        // Handle authentication errors
        if (extensions?.code === 'invalid-jwt') {
          TokenManager.getInstance().clearCache();
          if (!isServer) {
            window.location.href = '/sign-in';
          }
        }
        
        console.error(`[GraphQL error]: ${message}`);
      });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
    credentials: 'include',
  });

  const authLink = createAuthLink(isServer);

  return new ApolloClient({
    ssrMode: isServer,
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            payrolls: {
              merge(existing = [], incoming) {
                return incoming;
              }
            }
          }
        }
      }
    })
  });
}