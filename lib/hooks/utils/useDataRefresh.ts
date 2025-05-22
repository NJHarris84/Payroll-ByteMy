import { useApolloClient } from "@apollo/client";
import { useCacheInvalidation } from "./useCacheInvalidation";
import { toast } from "sonner";

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
      
      // Then refetch any queries that need fresh data
      if (queryNames.length > 0) {
        await refetchQueries(queryNames, false);
      }
      
      // Show success message if specified
      if (showToast && message) {
        toast.success(message);
      }
      
      return true;
    } catch (error) {
      console.error("Error refreshing data:", error);
      if (showToast) {
        toast.error("Failed to refresh data");
      }
      return false;
    }
  };
  
  return {
    refreshAfterMutation
  };
}