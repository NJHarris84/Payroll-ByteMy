import { useState, useCallback, useEffect } from 'react';
import { toast } from 'sonner'; // Using Sonner for toast notifications

interface FetchOptions extends RequestInit {
  skipError?: boolean;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<T | null>;
}

export function useDataFetching<T>(url: string, options: FetchOptions = {}): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { skipError, ...fetchOptions } = options;

  const fetchData = useCallback(async (): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, fetchOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(new Error(errorMessage));
      
      if (!skipError) {
        toast.error("Error fetching data", {
          description: errorMessage
        });
      }
      
      return null;
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(fetchOptions), skipError]);

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
}