import { Loader2 } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PageLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <h3 className="text-lg font-medium">Loading...</h3>
      <p className="text-sm text-muted-foreground">Please wait while we fetch your data</p>
    </div>
  )
}

export function TableLoading({ columns = 5, rows = 5 }) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-24" />
      </div>
      
      <div className="border rounded-md">
        <div className="h-12 px-4 border-b flex items-center">
          {Array(columns).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full max-w-[120px] mx-2" />
          ))}
        </div>
        
        <div className="divide-y">
          {Array(rows).fill(0).map((_, i) => (
            <div key={i} className="h-16 px-4 flex items-center">
              {Array(columns).fill(0).map((_, j) => (
                <Skeleton key={j} className="h-4 w-full max-w-[120px] mx-2" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CardLoading() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-2/3 mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  )
}