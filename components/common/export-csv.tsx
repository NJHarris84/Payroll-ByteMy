/**
 * Export CSV Component
 * 
 * This component allows exporting payroll dates to a CSV file for download.
 * It fetches payroll date data using GraphQL and formats it into a downloadable CSV.
 */

import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";

import { Button } from "@/components/ui";
import { GET_PAYROLL_DATES } from "@/lib/graphql";

/**
 * Interface representing a payroll date record
 * @interface PayrollDate
 * @property {string} id - Unique identifier for the payroll date
 * @property {string} original_eft_date - Original electronic funds transfer date (ISO string)
 * @property {string} adjusted_eft_date - Adjusted EFT date after business day rules (ISO string)
 * @property {string} processing_date - Date when payroll processing should occur (ISO string)
 * @property {string} [notes] - Optional notes about this payroll date
 */
interface PayrollDate {
    id: string;
    original_eft_date: string;
    adjusted_eft_date: string;
    processing_date: string;
    notes?: string;
}

/**
 * Props for the ExportCsv component
 * @interface ExportCsvProps
 * @property {string} payrollId - ID of the payroll to export dates for
 */
interface ExportCsvProps {
    payrollId: string;
}

/**
 * Component that exports payroll dates to a CSV file
 * 
 * This component:
 * 1. Fetches payroll dates using GraphQL
 * 2. Formats the dates according to requirements
 * 3. Creates a downloadable CSV file when the button is clicked
 * 4. Handles loading and error states
 * 
 * @example
 * <ExportCsv payrollId="123" />
 */
export function ExportCsv({ payrollId }: ExportCsvProps) {
    const { loading, error, data } = useQuery(GET_PAYROLL_DATES, {
        variables: { id: payrollId },
        skip: !payrollId,
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const dates: PayrollDate[] = data?.payroll_dates || [];

    /**
     * Creates and triggers download of CSV file containing payroll dates
     * 
     * The CSV includes columns for:
     * - Period number
     * - Original EFT date
     * - Adjusted EFT date
     * - Processing date
     * - Notes
     */
    const downloadCsv = () => {
        if (dates.length === 0) return;

        const headers = ['Period', 'Original EFT Date', 'Adjusted EFT Date', 'Processing Date', 'Notes'];
        const rows = dates.map((date: PayrollDate, index: number) => [
            index + 1,
            format(parseISO(date.original_eft_date), 'yyyy-MM-dd'),
            format(parseISO(date.adjusted_eft_date), 'yyyy-MM-dd'),
            format(parseISO(date.processing_date), 'yyyy-MM-dd'),
            date.notes || '',
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map((row) => row.join(',')),
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `payroll_schedule.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button onClick={downloadCsv}>
            Export CSV
        </Button>
    );
}
