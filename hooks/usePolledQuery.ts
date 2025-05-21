import { useQuery, QueryHookOptions, DocumentNode, OperationVariables, ApolloQueryResult, QueryResult } from "@apollo/client";
import { useSmartPolling } from "./usePolling";

export function usePolledQuery<TData = any, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables> & { pollInterval?: number }
) {
  const queryResult = useQuery<TData, TVariables>(query, {
    fetchPolicy: "cache-and-network",
    ...options
  });
  
  // Type cast the result to match the expected type for useSmartPolling
  useSmartPolling(queryResult as QueryResult<TData, OperationVariables>, {
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