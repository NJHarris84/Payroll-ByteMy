// pages/payroll-page.tsx
'use client'

import { useParams, notFound } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_PAYROLL_BY_ID } from '@/lib/graphql/queries/payrolls';
import { PayrollDatesView } from "@/components/payroll/payroll-dates-view";
import { ClientCard } from "@/components/client/client-card";
import { PayrollDetailsCard } from "@/components/payroll/payroll-details-card";
import { ExportCsv } from "@/components/common/export-csv";
import { ExportPdf } from "@/components/common/export-pdf";
import { toast } from 'sonner';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pencil, RefreshCw } from "lucide-react";
import { RefreshButton } from "@/components/common/refresh-button";
import { NotesListWithAdd } from "@/components/common/notes-list-with-add";
import { useEffect, useState } from "react";
import { handleApiError } from '@/lib/utils';
import { ErrorBoundary } from "@/components/common/error-boundary";
import { Card, CardContent } from "@/components/ui/card";

export default function PayrollPage() {
  const params = useParams();
  const id = params?.id as string;
  const [loadingToastShown, setLoadingToastShown] = useState(false);
  
  if (!id) {
    toast.error('Error: Payroll ID is required.');
    return notFound();
  }

  const { loading, error, data, refetch } = useQuery(GET_PAYROLL_BY_ID, {
    variables: { id },
    skip: !id,
    onError: (err) => {
      handleApiError(err, 'Failed to load payroll details');
    }
  });
  
  useEffect(() => {
    // Only show toast once and only if still loading after 2 seconds
    if (loading && !loadingToastShown) {
      const timer = setTimeout(() => {
        if (loading) {
          toast.info('Loading payroll data...');
          setLoadingToastShown(true);
        }
      }, 2000);

      return () => clearTimeout(timer); // Clean up timer
    }
  }, [loading, loadingToastShown]);

  if (loading) {
    return (
      <Card className="p-6">
        <CardContent className="flex justify-center items-center min-h-[200px]">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
            <p>Loading payroll data...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-6 my-4">
        <h2 className="text-red-800 font-medium mb-2">Error Loading Payroll</h2>
        <p className="text-red-600 mb-4">{error.message}</p>
        <Button onClick={() => refetch()}>Try Again</Button>
      </div>
    );
  }

  if (!data || !data.payrolls || data.payrolls.length === 0) {
    toast.error('No payroll data found.');
    return notFound();
  }

  const payroll = data.payrolls[0];
  const client = payroll.client;

  const payrollDates = payroll.payroll_dates.map((date: any) => ({
    ...date,
  }));

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{payroll.name}</h1>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Refresh Button */}
            <RefreshButton
              type="query"
              data={["GET_CLIENT_DETAILS"]}
              text="Refresh"
              showIcon={true}
              variant="outline"
              className="px-4 py-2"
            />

            <Button className="flex items-center gap-1">
              <Link href={`/payrolls/${id}/edit`} className="flex items-center">
                <Pencil className="h-4 w-4 mr-1" /> Edit Payroll
              </Link>
            </Button>
          </div>
        </div>
        <div>
          {/* Export Buttons */}
          <div className="flex space-x-2 mb-4">
            <ExportCsv payrollId={id} />
            <ExportPdf payrollId={id} />
          </div>
        </div>
        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Table Column */}
          <div className="md:col-span-2">
            <ErrorBoundary>
              <PayrollDatesView payrollId={id} />
            </ErrorBoundary>
          </div>

          {/* Cards and Notes Column */}
          <div className="md:col-span-1 space-y-4">
            <ErrorBoundary>
              <ClientCard client={client} />
            </ErrorBoundary>
            <ErrorBoundary>
              <PayrollDetailsCard payroll={payroll} />
            </ErrorBoundary>
            <ErrorBoundary>
              <NotesListWithAdd
                entityType="payroll"
                entityId={payroll.id}
                title="Payroll Notes"
              />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
