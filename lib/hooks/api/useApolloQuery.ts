import { useQuery, useMutation, QueryHookOptions, MutationHookOptions } from '@apollo/client';
import { DocumentNode } from 'graphql';

// Generic hook for Apollo queries
export function useApolloQuery<TData, TVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>
) {
  return useQuery<TData, TVariables>(query, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Generic hook for Apollo mutations
export function useApolloMutation<TData, TVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>
) {
  return useMutation<TData, TVariables>(mutation, options);
}