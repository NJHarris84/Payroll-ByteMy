import { useState, useEffect } from 'react';
import { useErrorHandler } from '@/lib/utils/error-handling';

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
  const { handleError } = useErrorHandler();
  const { skipError, ...fetchOptions } = options;

  const fetchData = async (): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, fetchOptions);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `Request failed with status ${response.status}`
        );
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      
      if (!skipError) {
        handleError(error);
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}