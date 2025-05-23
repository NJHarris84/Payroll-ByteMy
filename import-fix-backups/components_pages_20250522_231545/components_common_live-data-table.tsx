"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { DataTable } from "./data-table"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { RefreshCw } from "lucide-react"

interface LiveDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  fetchData: () => Promise<TData[]>
  refreshInterval?: number
  onRowClick?: (row: TData) => void
  searchable?: boolean
  searchColumn?: string
  pagination?: boolean
  pageSize?: number
  className?: string
  emptyMessage?: string
  hideColumns?: string[]
}

export function LiveDataTable<TData, TValue>({
  columns,
  fetchData,
  refreshInterval = 0,
  onRowClick,
  searchable = false,
  searchColumn = "name",
  pagination = true,
  pageSize = 10,
  className,
  emptyMessage = "No data found",
  hideColumns = [],
}: LiveDataTableProps<TData, TValue>) {
  const [data, setData] = useState<TData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const loadData = async () => {
    try {
      const newData = await fetchData()
      setData(newData)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    loadData()
  }

  useEffect(() => {
    loadData()
    
    if (refreshInterval > 0) {
      const intervalId = setInterval(() => {
        loadData()
      }, refreshInterval)
      
      return () => clearInterval(intervalId)
    }
  }, [refreshInterval])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {lastUpdated && (
          <div className="text-sm text-muted-foreground">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={lastUpdated ? "" : "ml-auto"}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        onRowClick={onRowClick}
        searchable={searchable}
        searchColumn={searchColumn}
        pagination={pagination}
        pageSize={pageSize}
        className={className}
        emptyMessage={emptyMessage}
        hideColumns={hideColumns}
      />
    </div>
  )
}