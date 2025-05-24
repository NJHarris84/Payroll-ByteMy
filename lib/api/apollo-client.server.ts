// lib/api/apollo-client.server.ts
// This file is server-only and must not be imported in client components
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { tokenManagerServer } from "@/lib/auth/token-manager.server";
import 'server-only'; // Mark this module as server-only

// Create optimized cache instance
const createCache = () => {
  return new InMemoryCache({
    resultCaching: true,
    canonizeResults: true
  });
};

// Enhanced error handling 
const createErrorLink = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions }) => {
        console.error(`[GraphQL error on server]: Message: ${message}`, extensions);
      });
    }
    
    if (networkError) {
      console.error(`[Network error on server]: ${networkError}`);
    }
  });
};

// Retry link with progressive backoff
const createRetryLink = () => {
  return new RetryLink({
    delay: {
      initial: 300,
      max: 10000,
      jitter: true,
    },
    attempts: {
      max: 3, // Fewer retries on server side
      retryIf: (error) => {
        // Don't retry on permission errors
        if (error.message && error.message.includes('permission-denied')) {
          return false;
        }
        
        // Retry on network errors and other temporary failures
        return !!error;
      }
    }
  });
};

// Server-side Apollo Client using TokenManager
export const getServerApolloClient = async (): Promise<ApolloClient<NormalizedCacheObject>> => {
  const token = await tokenManagerServer.getToken();
  
  const authLink = setContext((_, { headers }) => {
    let authHeader = '';
    if (token) {
      // Remove Bearer prefix if it exists, then add it back consistently
      const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
      authHeader = `Bearer ${tokenValue}`;
    }

    return {
      headers: {
        ...headers,
        authorization: authHeader,
        'Content-Type': 'application/json'
      },
    };
  });

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
    credentials: "include",
    fetchOptions: {
      mode: 'cors',
      credentials: 'include'
    }
  });

  // Create the link chain
  const link = ApolloLink.from([
    createErrorLink(),
    createRetryLink(),
    authLink,
    httpLink
  ]);

  return new ApolloClient({
    link,
    cache: createCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  });
};

// Admin Client (Bypasses Authentication)
export const adminApolloClient = new ApolloClient({
  link: ApolloLink.from([
    createErrorLink(),
    createRetryLink(),
    new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
      },
    })
  ]),
  cache: createCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});
