// hooks/useCacheInvalidation.ts
import { DocumentNode, useApolloClient } from '@apollo/client';

/**
 * Options for invalidating a specific entity
 */
interface EntityOptions {
  /**
   * The type name as defined in the GraphQL schema (e.g., 'payrolls')
   */
  typename: string;
  
  /**
   * The ID of the entity to invalidate
   */
  id: string | number;
}

/**
 * Options for invalidating a specific query
 */
interface QueryOptions {
  /**
   * The query to invalidate
   */
  query: DocumentNode;
  
  /**
   * Optional variables for the query
   */
  variables?: Record<string, any>;
}

/**
 * A hook providing methods to invalidate the Apollo cache
 */
export function useCacheInvalidation() {
  const client = useApolloClient();
  
  /**
   * Invalidate a specific entity in the cache
   */
  const invalidateEntity = ({ typename, id }: EntityOptions) => {
    // Convert string ID to number if needed
    const normalizedId = typeof id === 'string' && !isNaN(Number(id)) ? Number(id) : id;
    
    try {
      // This tells Apollo to refetch this entity next time it's requested
      client.cache.evict({ id: `${typename}:${normalizedId}` });
      client.cache.gc(); // Garbage collection to clean up unreachable references
      
      return true;
    } catch (error) {
      console.error(`Error invalidating ${typename}:${normalizedId}`, error);
      return false;
    }
  };
  
  /**
   * Refetch a specific query
   */
  const refetchQuery = async ({ query, variables }: QueryOptions) => {
    try {
      const result = await client.refetchQueries({
        include: [{ query, variables }]
      });
      
      return result;
    } catch (error) {
      console.error('Error refetching query', error);
      throw error;
    }
  };
  
  /**
   * Refetch multiple queries by their names
   */
  const refetchQueries = async (queryNames: string[]) => {
    try {
      const result = await client.refetchQueries({
        include: queryNames
      });
      
      return result;
    } catch (error) {
      console.error('Error refetching queries', error);
      throw error;
    }
  };
  
  /**
   * Invalidate all queries in the cache (use with caution)
   */
  const invalidateAllQueries = () => {
    try {
      client.resetStore();
      return true;
    } catch (error) {
      console.error('Error invalidating all queries', error);
      return false;
    }
  };
  
  return {
    invalidateEntity,
    refetchQuery,
    refetchQueries,
    invalidateAllQueries
  };
}
