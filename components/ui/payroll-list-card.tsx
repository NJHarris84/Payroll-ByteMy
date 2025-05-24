// components/payroll-list-card.tsx
"use client"

import Link from "next/link";
import { Calendar, Filter, Search } from "lucide-react";
import { useState } from "react";

import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { formatDate } from "@/lib/utils";

interface Payroll {
  id: string
  name: string
  cycle_type: number
  status: string
  client?: {
    id: string
    name: string
  }
  next_payroll_date?: string
}

interface PayrollListCardProps {
  payrolls: Payroll[]
  title?: string
  description?: string
}

export function PayrollListCard({ payrolls, title = "Payrolls", description = "Manage your payrolls" }: PayrollListCardProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Apply filters to payrolls
  const filteredPayrolls = payrolls.filter(payroll => {
    // Search filter - check both payroll name and client name
    const matchesSearch = 
      payroll.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (payroll.client?.name && payroll.client.name.toLowerCase().includes(searchQuery.toLowerCase()))
    
    // Status filter
    const matchesStatus = filterStatus === "all" || payroll.status.toLowerCase() === filterStatus

    return matchesSearch && matchesStatus
  })

  // Get cycle type display name
  const getCycleTypeName = (cycleType: number): string => {
    switch (cycleType) {
      case 1: return "Weekly"
      case 2: return "Fortnightly"
      case 3: return "Monthly (Specific Day)"
      case 4: return "Monthly (Last Day)"
      case 5: return "Quarterly"
      default: return "Unknown"
    }
  }

  // Get status badge variant
  const getStatusVariant = (status: string): "default" | "outline" | "secondary" | "destructive" => {
    switch (status.toLowerCase()) {
      case "active": return "default"
      case "pending": return "secondary"
      case "completed": return "outline"
      case "cancelled": return "destructive"
      default: return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-4">
          <div className="relative w-full sm:w-auto sm:flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search payrolls..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payroll Name</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Cycle Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Payroll</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayrolls.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No payrolls found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredPayrolls.map((payroll) => (
                  <TableRow key={payroll.id}>
                    <TableCell className="font-medium">{payroll.name}</TableCell>
                    <TableCell>{payroll.client?.name || "N/A"}</TableCell>
                    <TableCell>{getCycleTypeName(payroll.cycle_type)}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(payroll.status)}>
                        {payroll.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {payroll.next_payroll_date ? (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(payroll.next_payroll_date)}</span>
                        </div>
                      ) : (
                        "Not scheduled"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/payrolls/${payroll.id}`}>View</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/payroll-schedule">View Schedule</Link>
        </Button>
        <Button asChild>
          <Link href="/payrolls/new">Add Payroll</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
