"use client";

import Link from "next/link";
import { ChevronRight, Circle, Clock, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TableLoading } from "@/components/ui/loading-states";
import { Badge } from "@/components/ui/badge";

interface Payroll {
  id: string;
  name: string;
  cycle_type: number;
  status: string;
  next_payroll_date?: string;
}

interface Client {
  id: string;
  name: string;
}

interface ClientPayrollsTableProps {
  client: Client;
  payrolls: Payroll[];
  loading?: boolean;
  error?: Error | null;
}

export function ClientPayrollTable({ client, payrolls, loading = false, error = null }: ClientPayrollsTableProps) {
  // Get cycle type display name
  const getCycleTypeName = (cycleType: number): string => {
    switch (cycleType) {
      case 1:
        return "Weekly";
      case 2:
        return "Fortnightly";
      case 3:
        return "Monthly (Specific Day)";
      case 4:
        return "Monthly (Last Day)";
      case 5:
        return "Quarterly";
      default:
        return "Unknown";
    }
  };

  // Get status badge variant
  const getStatusVariant = (status: string): "default" | "outline" | "secondary" | "destructive" => {
    switch (status.toLowerCase()) {
      case "active":
        return "default";
      case "pending":
        return "secondary";
      case "completed":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Payrolls for {client.name}</CardTitle>
          <CardDescription>Error loading payrolls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-destructive">Failed to load payrolls: {error.message}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payrolls for {client.name}</CardTitle>
        <CardDescription>Manage client payroll schedules</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <TableLoading columns={5} rows={3} />
        ) : payrolls.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">No payrolls found for this client.</p>
            <Button asChild>
              <Link href={`/payrolls/new?clientId=${client.id}`}>Create Payroll</Link>
            </Button>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payroll Name</TableHead>
                  <TableHead>Cycle Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Payroll Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrolls.map((payroll) => (
                  <TableRow key={payroll.id}>
                    <TableCell className="font-medium">{payroll.name}</TableCell>
                    <TableCell>{getCycleTypeName(payroll.cycle_type)}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(payroll.status)}>{payroll.status}</Badge>
                    </TableCell>
                    <TableCell>
                      {payroll.next_payroll_date ? (
                        formatDate(payroll.next_payroll_date)
                      ) : (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Not scheduled</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/payrolls/${payroll.id}`}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
