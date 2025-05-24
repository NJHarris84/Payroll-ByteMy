import { useEffect, useRef, useState } from 'react';
import { apolloClient } from "@/lib/api/apollo-client.client"; // Import your Apollo client

interface UseSmartPollingOptions {
  interval?: number;
  enabled?: boolean;
  onError?: (error: any) => void;
  immediate?: boolean;
  retryCount?: number;
  retryDelay?: number;
}

export function useSmartPolling<T>(
  fetchFn: () => Promise<T>,
  options: UseSmartPollingOptions = {}
) {
  const {
    interval = 30000,
    enabled = true,
    onError,
    immediate = true,
    retryCount = 3,
    retryDelay = 5000
  } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  
  const attemptCountRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);
  
  const reset = () => {
    setData(null);
    setLoading(true);
    setError(null);
  };
  
  const fetchData = async () => {
    if (!enabled || !isMountedRef.current) return;
    
    setLoading(true);
    
    try {
      // Use your fetchFn which could use apolloClient internally
      const result = await fetchFn();
      
      if (isMountedRef.current) {
        setData(result);
        setError(null);
        setLastUpdated(new Date());
        attemptCountRef.current = 0;
      }
    } catch (err) {
      attemptCountRef.current += 1;
      
      if (isMountedRef.current) {
        setError(err as Error);
        if (onError) onError(err);
        
        // Retry logic
        if (attemptCountRef.current <= retryCount) {
          timerRef.current = setTimeout(fetchData, retryDelay);
          return;
        }
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
    
    if (enabled && isMountedRef.current) {
      timerRef.current = setTimeout(fetchData, interval);
    }
  };
  
  useEffect(() => {
    isMountedRef.current = true;
    
    if (immediate) {
      fetchData();
    } else if (enabled) {
      timerRef.current = setTimeout(fetchData, interval);
    }
    
    return () => {
      isMountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [enabled, interval, immediate]);
  
  const refetch = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    fetchData();
  };
  
  return { data, loading, error, lastUpdated, refetch, reset };
}