// lib/api/apollo-client-enhanced.ts
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { tokenManager } from "@/lib/auth/token-manager";
import { toast } from "sonner"; // Changed from react-hot-toast to sonner

// Comprehensive cache configuration
const defaultCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        // Add field policies for queries that need special handling
        payrolls: {
          // Only cache for 5 minutes to ensure fresh data
          maxAge: 300000,
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        clients: {
          merge(existing = [], incoming) {
            return incoming;
          },
          maxAge: 300000
        },
        staff: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        users: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        holidays: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        adjustment_rules: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        leave: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        notes: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        work_schedules: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        payroll_dates: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        payroll_date_types: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        external_systems: {
          merge(existing = [], incoming) {
            return incoming;
          }
        },
        feature_flags: {
          merge(existing = [], incoming) {
            return incoming;
          }
        }
      }
    },
    payrolls: {
      keyFields: ["id"],
      fields: {
        payroll_dates: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
    clients: {
      keyFields: ["id"],
      fields: {
        payrolls: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
    staff: {
      keyFields: ["id"],
    },
    holidays: {
      keyFields: ["date", "country_code"],
    }
  }
};

// Create optimized cache instance
const createCache = () => {
  return new InMemoryCache({
    ...defaultCacheConfig,
    resultCaching: true,
    canonizeResults: true
  });
};

// Enhanced error handling with user feedback
const createErrorLink = (isServer = false) => {
  return onError(({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions }) => {
        console.error(`[GraphQL error]: Message: ${message}`, extensions);
        
        // Handle authentication errors
        if (extensions?.code === 'invalid-jwt' || 
            extensions?.code === 'unauthenticated' ||
            message.includes('JWTExpired')) {
          
          // Clear token cache
          tokenManager.clearCache();
          
          // Only redirect on client side and if not already on sign-in page
          if (!isServer && typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            if (!currentPath.includes('/sign-in')) {
              toast.error("Your session has expired. Please sign in again.");
              setTimeout(() => {
                window.location.href = '/sign-in';
              }, 1000);
            }
          }
        }
      });
    }
    
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      if (!isServer) {
        toast.error("Network error. Please check your connection.");
      }
    }
  });
};

// Retry link with progressive backoff
const createRetryLink = (isServer = false) => {
  return new RetryLink({
    delay: {
      initial: 300,
      max: 10000,
      jitter: true,
    },
    attempts: {
      max: isServer ? 3 : 5, // More retries on client side
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
  const token = await tokenManager.getToken(true); // true for server-side
  
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
    createErrorLink(true), // Server-side error link
    createRetryLink(true), // Server-side retry link
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

// Client-side Apollo Client with TokenManager
let clientSideApolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export function getClientApolloClient(): ApolloClient<NormalizedCacheObject> {
  // If we already have a client instance, return it
  if (clientSideApolloClient && typeof window !== 'undefined') {
    return clientSideApolloClient;
  }

  // Create auth link that uses TokenManager
  const authLink = setContext(async (_, { headers }) => {
    try {
      // Get token from TokenManager
      const token = await tokenManager.getToken(false); // false for client-side
      
      // Format authorization header
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
          'content-type': 'application/json',
        },
      };
    } catch (error) {
      console.error("Failed to get authentication token:", error);
      return { 
        headers: {
          ...headers,
          'content-type': 'application/json',
        }
      };
    }
  });

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
    credentials: "include",
    fetchOptions: {
      mode: 'cors',
      credentials: 'include',
    },
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Create the link chain
  const link = ApolloLink.from([
    createErrorLink(false), // Client-side error link
    createRetryLink(false), // Client-side retry link
    authLink,
    httpLink
  ]);

  clientSideApolloClient = new ApolloClient({
    link,
    cache: createCache(),
    connectToDevTools: process.env.NODE_ENV !== 'production',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
      mutate: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  });

  return clientSideApolloClient;
}

// Admin Client (Bypasses Authentication)
export const adminApolloClient = new ApolloClient({
  link: ApolloLink.from([
    createErrorLink(true),
    createRetryLink(true),
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

// Default export for easy imports
export const createApolloClient = getClientApolloClient;
export default getClientApolloClient();