import { useApolloClient } from "@apollo/client";
import { toast } from "sonner"; // Using Sonner for toast notifications
import { useCacheInvalidation } from "./";

export function useDataRefresh() {
  const { invalidateEntity, refetchQuery, refetchQueries } = useCacheInvalidation();
  const client = useApolloClient();
  
  /**
   * Refresh data after mutation
   */
  const refreshAfterMutation = async (options: {
    typename: string;
    id?: string;
    queryNames?: string[];
    message?: string;
    showToast?: boolean;
  }) => {
    const { typename, id, queryNames = [], message, showToast = true } = options;
    
    try {
      // First, if we have a specific entity, invalidate it
      if (id) {
        await invalidateEntity({ typename, id });
      }
      
      // Then, refetch any specified queries
      if (queryNames.length > 0) {
        await refetchQueries(queryNames);
      }
      
      // Show success toast if requested
      if (showToast && message) {
        toast.success("Success", {
          description: message
        });
      }
    } catch (error) {
      console.error("Error refreshing data:", error);
      
      if (showToast) {
        toast.error("Error", {
          description: "Failed to refresh data. Please try again."
        });
      }
    }
  };
  
  return {
    refreshAfterMutation
  };
}