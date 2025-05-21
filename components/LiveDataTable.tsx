import React, { useState } from 'react';
import { usePolledQuery } from '../hooks/usePolledQuery';
import { DocumentNode, OperationVariables } from '@apollo/client';
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/common/alert"; // Importing from common instead of ui

interface LiveDataTableProps<TData, TVariables extends OperationVariables> {
  title: string;
  query: DocumentNode;
  variables?: TVariables;
  pollInterval?: number;
  renderItem: (item: any) => React.ReactNode;
  getItems: (data: TData) => any[];
  emptyMessage?: string;
  errorMessage?: string;
}

export function LiveDataTable<TData = any, TVariables extends OperationVariables = OperationVariables>({
  title,
  query,
  variables,
  pollInterval = 15000,
  renderItem,
  getItems,
  emptyMessage = "No data available",
  errorMessage = "Could not load data"
}: LiveDataTableProps<TData, TVariables>) {
  const [isPolling, setIsPolling] = useState(true);
  
  const { data, loading, error, polling, refetch } = usePolledQuery<TData, TVariables>(query, {
    variables,
    pollInterval,
    notifyOnNetworkStatusChange: true,
  });
  
  const togglePolling = () => {
    if (isPolling) {
      polling.pausePolling();
    } else {
      polling.resumePolling();
    }
    setIsPolling(!isPolling);
  };
  
  const items = data ? getItems(data) : [];
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          {isPolling && (
            <span className="text-sm text-gray-500 flex items-center">
              <Spinner size="sm" className="mr-2" /> Auto-refreshing
            </span>
          )}
          <Button
            variant={isPolling ? "outline" : "default"}
            size="sm"
            onClick={togglePolling}
          >
            {isPolling ? "Pause Updates" : "Resume Updates"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            disabled={loading}
          >
            Refresh Now
          </Button>
        </div>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <p>{errorMessage}</p>
          <p className="text-sm">{error.message}</p>
        </Alert>
      )}
      
      {loading && !data && <Spinner className="mx-auto my-8" />}
      
      {!loading && items.length === 0 ? (
        <div className="text-center py-8 text-gray-500">{emptyMessage}</div>
      ) : (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={item.id || index}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}