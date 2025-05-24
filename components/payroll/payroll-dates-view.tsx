"use client";

import * as React from "react";
import { ArrowUpDown, ChevronDown, Calendar, Pencil } from "lucide-react";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, PaginationState } from "@tanstack/react-table";
import { format, parseISO, isEqual } from "date-fns";
import { useQuery, gql } from "@apollo/client";

import { Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, NotesModal, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { GetPayrollDates } from "@/lib/graphql";

import { EditPayrollDateDialog } from "./EditPayrollDateDialog";

// Ensure the query matches the schema types
const GET_PAYROLL_DATES = GetPayrollDates;

interface PayrollDate {
  id: string;
  original_eft_date: string;
  adjusted_eft_date: string;
  processing_date: string;
  notes?: string;
}

export function PayrollDatesView({ payrollId }: { payrollId: string }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = React.useState({});
  const [showNoteDialog, setShowNoteDialog] = React.useState(false);
  const [selectedNote, setSelectedNote] = React.useState<string | null>(null);

  // UseQuery hook
  const { loading, error, data, refetch } = useQuery(GET_PAYROLL_DATES, {
    variables: { id: payrollId },
    skip: !payrollId,
  });

  const columns: ColumnDef<PayrollDate>[] = [
    {
      accessorKey: "original_eft_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 font-medium"
          >
            Original EFT Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        if (!row.original.original_eft_date) return null;
        return format(parseISO(row.original.original_eft_date), "MMM d, yyyy");
      },
    },
    {
      accessorKey: "adjusted_eft_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 font-medium"
          >
            Adjusted EFT Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        if (!row.original.original_eft_date || !row.original.adjusted_eft_date) return null;
        
        const originalDate = parseISO(row.original.original_eft_date);
        const adjustedDate = parseISO(row.original.adjusted_eft_date);
        const isAdjusted = !isEqual(originalDate, adjustedDate);

        return (
          <div>
            {format(adjustedDate, "MMM d, yyyy")} {isAdjusted && <span className="text-amber-600 ml-1">(Adjusted)</span>}
          </div>
        );
      },
    },
    {
      accessorKey: "processing_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 font-medium"
          >
            Processing Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        if (!row.original.processing_date) return null;
        return format(parseISO(row.original.processing_date), "MMM d, yyyy");
      }
    },
    {
      accessorKey: "id", // Use a unique key for the column definition
      header: () => <div className="text-right">Actions</div>,
      enableSorting: false, // Disable sorting for action column
      cell: ({ row }) => (
        <div className="text-right">
          <EditPayrollDateDialog
            payrollDate={row.original}
            onSuccess={() => refetch()}
          />
        </div>
      ),
    },
    // Add a column for Notes
    // This column definition seems misplaced in the original code, moving it here
    {
      accessorKey: "notes",
      header: "Notes",
      cell: ({ row }) => (
        <div>
          {row.original.notes ? (
            <NotesModal 
              note={{ // Pass the note object
                id: row.original.id,
                content: row.original.notes
              }}
              refetchNotes={() => refetch()} // Add a refetch function
            />
          ) : (
            <span className="text-gray-500">-</span>
          )}
        </div>
      ),
    },

  ];

  const dates: PayrollDate[] = data?.payroll_dates || [];

  const table = useReactTable({
    data: dates,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination,
    },
  });

  const handleValueChange = (value: string) => {
    // Handle value change
    console.log(value);
  };

  if (loading) return <div className="flex justify-center py-8">Loading payroll dates...</div>;
  if (error) return <div className="text-red-500 py-4">Error: {error.message}</div>;

  return (
    <div className="w-full">
      <div className="flex items-center justify-end py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : 
                      flexRender(header.column.columnDef.header, header.getContext())
                    }
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No payroll dates found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}