// hooks/useSubscription.ts
import { useState, useEffect } from 'react';
import { DocumentNode, useApolloClient } from '@apollo/client';
import { toast } from 'sonner'; // Using Sonner for toast notifications

interface UseRealTimeSubscriptionOptions {
  document: DocumentNode;
  variables?: Record<string, any>;
  refetchQueries?: string[];
  shouldToast?: boolean;
  onData?: (data: any) => void;
}

/**
 * Custom hook for handling GraphQL subscriptions with proper error handling and reconnection
 */
export function useRealTimeSubscription({
  document,
  variables,
  refetchQueries = [],
  shouldToast = false,
  onData
}: UseRealTimeSubscriptionOptions) {
  const client = useApolloClient();
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let subscription: any;
    let reconnectTimeout: NodeJS.Timeout;
    let retryCount = 0;
    const maxRetries = 5;

    const initSubscription = () => {
      try {
        subscription = client.subscribe({
          query: document,
          variables
        }).subscribe({
          next: (result) => {
            setIsConnected(true);
            retryCount = 0;
            
            if (result.data) {
              setData(result.data);
              if (onData) {
                onData(result.data);
              }
            }
          },
          error: (err) => {
            setIsConnected(false);
            setError(err);
            
            if (shouldToast) {
              toast.error("Subscription Error", {
                description: "Lost connection to real-time updates. Reconnecting..."
              });
            }
            
            // Attempt to reconnect with exponential backoff
            if (retryCount < maxRetries) {
              const delay = Math.min(1000 * 2 ** retryCount, 30000);
              retryCount++;
              
              reconnectTimeout = setTimeout(() => {
                if (subscription) {
                  subscription.unsubscribe();
                }
                initSubscription();
              }, delay);
            }
          },
          complete: () => {
            setIsConnected(false);
          }
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setIsConnected(false);
      }
    };

    initSubscription();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
    };
  }, [client, document, JSON.stringify(variables), shouldToast]);

  return {
    isConnected,
    error,
    data
  };
}