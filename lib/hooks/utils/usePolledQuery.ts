import { useQuery, QueryHookOptions, DocumentNode, ApolloError } from '@apollo/client';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { useSmartPolling } from "../utils/usePolling";

interface UsePolledQueryOptions<T, V> extends QueryHookOptions<T, V> {
  pollInterval?: number;
  onError?: (error: ApolloError) => void;
  maxRetries?: number;
  showErrorToast?: boolean;
}

/**
 * Custom hook for polled queries with error handling and retry logic
 */
export function usePolledQuery<T, V = Record<string, any>>(
  query: DocumentNode,
  options?: UsePolledQueryOptions<T, V>
) {
  const {
    pollInterval = 30000,
    onError,
    maxRetries = 3,
    showErrorToast = true,
    ...queryOptions
  } = options || {};

  const retryCount = useRef(0);
  const lastError = useRef<ApolloError | null>(null);

  const queryResult = useQuery<T, V>(query, {
    pollInterval,
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    ...queryOptions,
    onError: (error) => {
      // Log error for debugging
      console.error('GraphQL polling error:', error);
      lastError.current = error;
      
      // Increment retry count
      retryCount.current += 1;

      // Show toast for first error only (to avoid spam)
      if (showErrorToast && retryCount.current === 1) {
        toast.error('Error fetching data', { 
          description: error.message,
          duration: 5000
        });
      }

      // Call custom error handler if provided
      if (onError) {
        onError(error);
      }
    },
  });

  // Reset retry count when query succeeds after error
  useEffect(() => {
    if (queryResult.data && lastError.current) {
      if (retryCount.current > 0) {
        toast.success('Connection restored', { duration: 3000 });
        retryCount.current = 0;
        lastError.current = null;
      }
    }
  }, [queryResult.data]);

  // Stop polling if max retries exceeded
  useEffect(() => {
    if (retryCount.current >= maxRetries && queryResult.startPolling && queryResult.stopPolling) {
      toast.error('Too many failed attempts', { 
        description: 'Polling has been paused. Please refresh the page.',
        duration: 0 // Persist until dismissed
      });
      queryResult.stopPolling();
    }
  }, [maxRetries, queryResult]);

  // Type cast the result to match the expected type for useSmartPolling
  useSmartPolling(queryResult as any, {
    defaultInterval: options?.pollInterval || 15000,
    pauseOnHidden: true,
    refetchOnVisible: true,
    pauseOnOffline: true,
    refetchOnOnline: true
  });
  
  return {
    ...queryResult,
    polling: {
      pausePolling: queryResult.stopPolling,
      resumePolling: () => queryResult.startPolling(options?.pollInterval || 15000)
    }
  };
}