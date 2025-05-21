// hooks/usePolling.ts
import { useEffect } from "react";
import { ApolloQueryResult, OperationVariables, QueryResult } from "@apollo/client";

type PollingOptions = {
  defaultInterval: number;
  pauseOnHidden?: boolean;
  refetchOnVisible?: boolean;
  pauseOnOffline?: boolean;
  refetchOnOnline?: boolean;
};

export function useSmartPolling(
  queryResult: Pick<QueryResult<any, OperationVariables>, "startPolling" | "stopPolling" | "refetch">,
  options: PollingOptions
) {
  const {
    defaultInterval,
    pauseOnHidden = true,
    refetchOnVisible = true,
    pauseOnOffline = true,
    refetchOnOnline = true
  } = options;

  useEffect(() => {
    // Start polling when component mounts
    queryResult.startPolling(defaultInterval);
    
    // Set up event listeners for document visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (pauseOnHidden) {
          queryResult.stopPolling();
        }
      } else {
        if (refetchOnVisible) {
          queryResult.refetch();
        }
        queryResult.startPolling(defaultInterval);
      }
    };
    
    // Set up event listeners for online/offline status
    const handleOnlineStatusChange = () => {
      if (navigator.onLine) {
        if (refetchOnOnline) {
          queryResult.refetch();
        }
        queryResult.startPolling(defaultInterval);
      } else if (pauseOnOffline) {
        queryResult.stopPolling();
      }
    };

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Initial check for online status
    if (!navigator.onLine && pauseOnOffline) {
      queryResult.stopPolling();
    }

    // Cleanup function
    return () => {
      queryResult.stopPolling();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, [queryResult, defaultInterval, pauseOnHidden, refetchOnVisible, pauseOnOffline, refetchOnOnline]);
}