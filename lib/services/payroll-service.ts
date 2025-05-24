/**
 * Payroll Service
 * 
 * This service handles core payroll functionality including:
 * - Retrieving payroll information
 * - Generating payroll schedules
 * - Calculating processing and EFT dates
 * - Managing holidays and business day adjustments
 */

// lib/payroll-service.ts
import { db } from "@/lib/db";
import * as schema from "@/drizzle/schema"; // Now points to our new schema file
import { and, eq, isNull, sql } from "drizzle-orm";
import {
  addDays,
  addWeeks,
  addMonths,
  addQuarters,
  lastDayOfMonth,
  setDate,
} from "date-fns";
import {
  adjustDate,
  calculatePayrollDates,
  getBusinessDaysInMonth,
  type Holiday,
} from "@/lib/utils/date-utils";

/**
 * Payroll cycle type constants
 * Used to determine the frequency of payroll runs
 */
export const CYCLE_TYPES = {
  /** Weekly payroll cycle */
  WEEKLY: 1,
  /** Every two weeks */
  FORTNIGHTLY: 2,
  /** Monthly on a specific day (e.g., 15th of month) */
  MONTHLY_SPECIFIC_DAY: 3,
  /** Monthly on the last day of month */
  MONTHLY_LAST_DAY: 4,
  /** Every three months (quarterly) */
  QUARTERLY: 5,
};

/**
 * Date type constants
 * Used to determine how dates are calculated in payroll schedules
 */
export const DATE_TYPES = {
  /** A specific day of the month (e.g., 15th) */
  SPECIFIC_DAY: 1,
  /** Last day of the month */
  LAST_DAY: 2,
  /** Specific day of week (e.g., Monday=1, Tuesday=2, etc.) */
  DAY_OF_WEEK: 3,
};

const { payrolls, payrollDates, holidays } = schema;

/**
 * Retrieves a payroll record by its ID with related entities
 * 
 * @param {number} id - The unique identifier of the payroll to retrieve
 * @returns {Promise<Payroll | undefined>} The payroll record with client and consultant details
 */
export async function getPayrollById(id: number) {
  return db.query.payrolls.findFirst({
    where: eq(payrolls.id, id),
    with: {
      client: true,
      primaryConsultant: true,
      backupConsultant: true,
      manager: true,
    },
  });
}

/**
 * Get holidays for a specific date range
 * 
 * @param {Date} startDate - The start date of the range to check for holidays
 * @param {Date} endDate - The end date of the range
 * @returns {Promise<Holiday[]>} List of holidays within the date range
 */
export async function getHolidays(startDate: Date, endDate: Date): Promise<Holiday[]> {
  // In a real implementation, you would fetch holidays from your database
  // For now, return a sample list
  return [
    { date: new Date(2025, 0, 1), name: "New Year's Day", isPublic: true },
    { date: new Date(2025, 0, 26), name: "Australia Day", isPublic: true },
    { date: new Date(2025, 3, 18), name: "Good Friday", isPublic: true },
    { date: new Date(2025, 3, 21), name: "Easter Monday", isPublic: true },
    { date: new Date(2025, 4, 25), name: "ANZAC Day", isPublic: true },
    { date: new Date(2025, 11, 25), name: "Christmas Day", isPublic: true },
    { date: new Date(2025, 11, 26), name: "Boxing Day", isPublic: true },
  ];
}

/**
 * Generate payroll schedule for the next several periods
 * 
 * This is a key business logic function that:
 * 1. Takes a payroll configuration 
 * 2. Calculates future payroll dates based on the cycle type
 * 3. Adjusts dates for business days and holidays
 * 4. Returns a detailed schedule of processing and payment dates
 * 
 * @param {number} payrollId - The ID of the payroll to generate schedule for
 * @param {Date} startDate - The starting date for the schedule generation
 * @param {number} [periodsToGenerate=12] - Number of periods to generate (default: 12)
 * @returns {Promise<Array<PayrollScheduleItem>>} List of payroll schedule items
 * @throws {Error} If payroll record is not found
 */
export async function generatePayrollServiceSchedule(
  payrollId: number,
  startDate: Date,
  periodsToGenerate: number = 12
) {
  const payroll = await getPayrollById(payrollId);
  if (!payroll) throw new Error("Payroll not found");

  const results = [];
  const holidays = await getHolidays(startDate, addMonths(startDate, 12));

  let currentDate = new Date(startDate);

  for (let i = 0; i < periodsToGenerate; i++) {
    // Calculate the next date based on cycle type
    if (i > 0) {
      switch (payroll.cycle_id) {
        case CYCLE_TYPES.WEEKLY:
          currentDate = addWeeks(currentDate, 1);
          break;
        case CYCLE_TYPES.FORTNIGHTLY:
          currentDate = addWeeks(currentDate, 2);
          break;
        case CYCLE_TYPES.MONTHLY_SPECIFIC_DAY:
        case CYCLE_TYPES.MONTHLY_LAST_DAY:
          currentDate = addMonths(currentDate, 1);
          break;
        case CYCLE_TYPES.QUARTERLY:
          currentDate = addQuarters(currentDate, 1);
          break;
      }
      
      // Handle special date types
      if (payroll.date_type_id === DATE_TYPES.LAST_DAY) {
        currentDate = lastDayOfMonth(currentDate);
      } else if (payroll.date_type_id === DATE_TYPES.SPECIFIC_DAY && payroll.date_value) {
        // Set to a specific day of month, e.g., "15" for 15th
        const dayOfMonth = parseInt(payroll.date_value);
        currentDate = setDate(currentDate, dayOfMonth);
      }
    }

    // Calculate processing and EFT dates
    const { eftDate, processingDate } = calculatePayrollDates(
      currentDate,
      payroll.cycle_id.toString(),
      payroll.processing_days_before_eft,
      "previous", // Default rule
      holidays
    );

    results.push({
      payrollId: payroll.id,
      payrollName: payroll.name,
      clientName: payroll.client.name,
      periodNumber: i + 1,
      baseDate: new Date(currentDate),
      processingDate,
      eftDate,
    });
  }

  return results;
}

/**
 * Type definition for payroll date information
 * @interface PayrollDate
 */
interface PayrollDate {
  /** The base date for this payroll period */
  date: Date;
  /** Optional cutoff date for payroll submissions */
  cutoffDate?: Date;
  /** Date when payment is released */
  paymentDate?: Date;
  /** Date when electronic funds transfer occurs */
  eftDate?: Date;
  /** Status of the payroll date (e.g., "scheduled", "completed") */
  status?: string;
}

/**
 * Type definition for a holiday
 * @interface Holiday
 */
interface Holiday {
  /** Name of the holiday */
  name: string;
  /** Date when the holiday occurs */
  date: Date;
  /** Whether this is a public holiday */
  isPublic: boolean;
}