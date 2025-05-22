import { useQuery, useMutation, QueryHookOptions, MutationHookOptions } from '@apollo/client';
import { DocumentNode, ApolloError } from 'graphql';
import { useEffect } from 'react';
import { toast } from 'sonner';

// Generic hook for Apollo queries
export function useApolloQuery<TData, TVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>
) {
  const {
    onError,
    showErrorToast = true,
    errorMessage = 'An error occurred while fetching data',
    ...queryOptions
  } = options || {};

  const result = useQuery<TData, TVariables>(query, {
    ...queryOptions,
    onError: (error) => {
      // Log the error to console for debugging
      console.error('GraphQL Error:', error);

      // Show toast notification if enabled
      if (showErrorToast) {
        toast.error(errorMessage, {
          description: error.message,
          duration: 5000,
        });
      }

      // Call custom error handler if provided
      if (onError) {
        onError(error);
      }
    },
  });

  // Show error toast when error appears after initial render
  useEffect(() => {
    if (result.error && showErrorToast) {
      toast.error(errorMessage, {
        description: result.error.message,
        duration: 5000,
      });
    }
  }, [result.error, showErrorToast, errorMessage]);

  return result;
}

// Generic hook for Apollo mutations
export function useApolloMutation<TData, TVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>
) {
  return useMutation<TData, TVariables>(mutation, options);
}