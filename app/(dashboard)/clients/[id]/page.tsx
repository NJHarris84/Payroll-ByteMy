// app/(dashboard)/clients/[id]/page.tsx
'use client'

import Link from "next/link";
import { Pencil, RefreshCw } from "lucide-react";
import { gql } from "@apollo/client";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";

import { ClientPayrollTable } from "@/components/client";
import { NotesListWithAdd } from "@/components/common";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GET_CLIENT_BY_ID } from "@/lib/graphql";
import { useSmartPolling } from "@/lib/hooks";

export default function ClientPage() {
  const params = useParams();
  const id = params?.id as string;

  const { loading, error, data, refetch, startPolling, stopPolling } = useQuery(GET_CLIENT_BY_ID, {
    variables: { id },
    skip: !id,
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    pollInterval: 60000 // Poll every minute
  });
  
  // Use our smart polling hook
  useSmartPolling(
    { startPolling, stopPolling, refetch },
    {
      defaultInterval: 60000,
      pauseOnHidden: true,
      refetchOnVisible: true
    }
  );

  if (loading) return <div>Loading client data...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  
  const client = data?.clients_by_pk;
  
  if (!client) {
    return <div>Client not found</div>;
  }
  
  // Format date for display
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  // Format cycle and date type names
  const formatName = (name: string) => {
    if (!name) return "N/A";
    return name
      .replace(/_/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{client.name}</h1>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline"
            onClick={() => refetch()}
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
          
          <Button>
            <Link href={`/clients/${id}/edit`} className="flex items-center">
              <Pencil className="mr-2 h-4 w-4" /> Edit Client
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Client details card */}
        <Card className="md:col-span-2 overflow-y-auto max-h-96">
          <CardHeader>
            <CardTitle>Client Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="font-medium">Contact Person:</div>
              <div>{client.contact_person || "N/A"}</div>
              
              <div className="font-medium">Email:</div>
              <div>{client.contact_email || "N/A"}</div>
              
              <div className="font-medium">Phone:</div>
              <div>{client.contact_phone || "N/A"}</div>
              
              <div className="font-medium">Status:</div>
              <div>
                <Badge variant={client.active ? "default" : "secondary"}>
                  {client.active ? "Active" : "Inactive"}
                </Badge>
              </div>
              
              <div className="font-medium">Created:</div>
              <div>{formatDate(client.created_at)}</div>
              
              <div className="font-medium">Last Updated:</div>
              <div>{formatDate(client.updated_at)}</div>
            </div>
          </CardContent>
        </Card>
  
        {/* Notes section */}
        {/* Ensure this is rendered only once */}
          <NotesListWithAdd 
            entityType="client"
            entityId={id}
            title="Client Notes"
            description="Notes and comments about this client"
          />
      </div>
  
      {/* Payrolls section */}
      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Client Payrolls</CardTitle>
          <CardDescription>
            Payrolls associated with this client
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClientPayrollTable 
            payrolls={client.payrolls || []} 
            isLoading={loading} 
          />
        </CardContent>
      </Card>
    </div>
  );  
}