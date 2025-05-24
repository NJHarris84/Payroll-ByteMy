/**
 * Payroll Date Service
 * 
 * This service is responsible for managing payroll dates, including:
 * - Calculating and generating future payroll dates
 * - Ensuring dates are adjusted for holidays and business days
 * - Recalculating dates when payroll configurations change
 * - Extending date ranges for all active payrolls
 * 
 * Business rules implemented:
 * - Different calculation methods based on payroll cycle (weekly, monthly, etc.)
 * - Date adjustment based on business days (previous/next business day)
 * - Holiday-aware processing date calculations
 */

// lib/payroll-date-service.ts
import { db } from "@/lib/db";
import { adjustment_rules, holidays, payrolls, payroll_dates } from "@/drizzle/schema"
import { eq, and, gte, lte, or } from "drizzle-orm"
import { addMonths } from "date-fns"
import { calculatePayrollDates } from "@/lib/utils";

/**
 * Ensures payroll dates are calculated and stored for the given period
 * 
 * This function:
 * 1. Checks for existing dates in the requested range
 * 2. Calculates additional dates if needed
 * 3. Stores new dates in the database
 * 4. Returns all dates (existing + newly calculated)
 * 
 * @param {string} payrollId - The unique identifier of the payroll
 * @param {Date} [fromDate=new Date()] - The start date for calculations (defaults to today)
 * @param {Date} [toDate=addMonths(new Date(), 24)] - The end date for calculations (defaults to 2 years from now)
 * @returns {Promise<Array<PayrollDate>>} All payroll dates in the requested range
 * @throws {Error} If payroll is not found
 */
export async function ensurePayrollDatesExist(
  payrollId: string, 
  fromDate: Date = new Date(), 
  toDate: Date = addMonths(new Date(), 24) // 2 years by default
) {
  // Get the payroll details
  const payroll = await db.query.payrolls.findFirst({
    where: eq(payrolls.id, payrollId),
    with: {
      cycle: true,
      dateType: true,
    },
  })
  
  if (!payroll) {
    throw new Error(`Payroll not found: ${payrollId}`)
  }
  
  // Check existing dates for this payroll
  const existingDates = await db.query.payroll_dates.findMany({
    where: and(
      eq(payroll_dates.payroll_id, payrollId),
      gte(payroll_dates.adjusted_eft_date, fromDate)
    ),
    orderBy: [payroll_dates.adjusted_eft_date],
  })
  
  // Find the last calculated date, if any
  let lastCalculatedDate = fromDate
  if (existingDates.length > 0) {
    lastCalculatedDate = existingDates[existingDates.length - 1].adjusted_eft_date
  }
  
  // If we already have dates up to the target end date, no need to calculate more
  if (lastCalculatedDate >= toDate) {
    return existingDates
  }
  
  // Get applicable adjustment rule
  const rule = await db.query.adjustment_rules.findFirst({
    where: and(
      eq(adjustment_rules.cycle_id, payroll.cycle_id),
      eq(adjustment_rules.date_type_id, payroll.date_type_id)
    ),
  })
  
  const adjustmentRule = rule ? rule.rule_code : 'previous'
  
  // Get relevant holidays
  const holidayList = await db.query.holidays.findMany({
    where: or(
      // Date falls within range
      and(
        gte(holidays.date, lastCalculatedDate),
        lte(holidays.date, toDate)
      ),
      // Or it's a recurring holiday
      eq(holidays.recurring, true)
    ),
  })
  
  // Format holidays for our date utility
  const formattedHolidays = holidayList.map(h => ({
    id: h.id,
    date: new Date(h.date),
    name: h.name,
    recurring: h.recurring,
    region: h.region
  }))
  
  // Calculate new dates starting from the last calculated date
  // We need to determine how many periods to generate to reach the target end date
  // This depends on the payroll cycle, but a reasonable estimate would be:
  const periodsEstimate = payroll.cycle.name === 'weekly' ? 104 : // 2 years of weeks
                          payroll.cycle.name === 'fortnightly' ? 52 : // 2 years of fortnights
                          payroll.cycle.name === 'monthly' ? 24 : // 2 years of months
                          payroll.cycle.name === 'quarterly' ? 8 : // 2 years of quarters
                          24 // Default to 2 years of months
  
  // Calculate the dates
  const calculatedDates = calculatePayrollDates(
    lastCalculatedDate,
    payroll.cycle.name,
    payroll.dateType.name,
    payroll.date_value,
    payroll.processing_days_before_eft,
    adjustmentRule,
    formattedHolidays,
    periodsEstimate
  )
  
  // Filter to only include dates up to our target end date
  const filteredDates = calculatedDates.filter(date => 
    date.adjustedEftDate <= toDate
  )
  
  // Store the new dates in the database
  const newDatesToStore = filteredDates.map(date => ({
    payroll_id: payrollId,
    original_eft_date: date.originalEftDate,
    adjusted_eft_date: date.adjustedEftDate,
    processing_date: date.processingDate,
    notes: null
  }))
  
  if (newDatesToStore.length > 0) {
    await db.insert(payroll_dates).values(newDatesToStore)
  }
  
  // Return all dates in the requested range
  return [...existingDates, ...newDatesToStore]
}

/**
 * Recalculates and updates all future payroll dates for a given payroll
 * 
 * This function should be called when a payroll's configuration changes (e.g., 
 * cycle type, date type, processing days before EFT, etc.) to ensure all future
 * dates reflect the updated configuration.
 * 
 * @param {string} payrollId - The unique identifier of the payroll to recalculate
 * @returns {Promise<Array<PayrollDate>>} The newly calculated payroll dates
 */
export async function recalculatePayrollDates(payrollId: string) {
  // First, delete all future dates
  const today = new Date()
  
  await db.delete(payroll_dates)
    .where(and(
      eq(payroll_dates.payroll_id, payrollId),
      gte(payroll_dates.adjusted_eft_date, today)
    ))
  
  // Then recalculate them
  return await ensurePayrollDatesExist(payrollId)
}

/**
 * Monthly job to ensure all payrolls have dates extending 2 years out
 * 
 * This function should be scheduled to run periodically (e.g., once a month)
 * to ensure that all active payrolls have dates calculated far enough into the future.
 * It iterates through all active payrolls and calls ensurePayrollDatesExist for each.
 * 
 * @returns {Promise<void>}
 */
export async function extendAllPayrollDates() {
  // Get all active payrolls
  const activePayrolls = await db.query.payrolls.findMany({
    where: eq(payrolls.status, 'Active')
  })
  
  // Update dates for each payroll
  for (const payroll of activePayrolls) {
    await ensurePayrollDatesExist(payroll.id)
  }
}