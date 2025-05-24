// app/(dashboard)/clients/page.tsx
'use client'

import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { PlusCircle, Search } from "lucide-react";
import { useQuery } from "@apollo/client";

import { ClientsTable } from "@/components/client";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GET_CLIENTS_LIST as GET_CLIENTS } from "@/lib/graphql";
import { useSmartPolling, useUserRole } from "@/lib/hooks";
import { Client } from "@/types/interface";

export default function ClientsPage() {
  const { isAdmin, isManager, isDeveloper } = useUserRole();
  
  const { loading, error, data, refetch, startPolling, stopPolling } = useQuery(GET_CLIENTS, {

    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    pollInterval: 60000 // Poll every minute
  });
  
  useSmartPolling({ startPolling, stopPolling, refetch }, { /* options */ });
  
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  
  const clients = data?.clients || [];

  return (
    <div className="space-y-6">
      {/* Header section as before */}
      
      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
          <CardDescription>View and manage all your clients in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <ClientsTable clients={clients} isLoading={loading} />
        </CardContent>
      </Card>
    </div>
  );
}