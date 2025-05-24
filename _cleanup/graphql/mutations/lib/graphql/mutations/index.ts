/**
 * GraphQL Mutations
 * 
 * This module exports all GraphQL mutations used in the application.
 * Mutations are organized by entity type.
 */

// Adjustment Rules mutations
export * from './adjustment-rules/CreateAdjustmentRule'
export * from './adjustment-rules/DeleteAdjustmentRule'
export * from './adjustment-rules/UpdateAdjustmentRule'

// Client mutations
export * from './clients/CreateClient'
export * from './clients/DeleteClient'
export * from './clients/UpdateClient'

// Holiday mutations
export * from './holidays/SyncHolidays'

// Leave mutations
export * from './leave/CreateLeave'
export * from './leave/UpdateLeave'

// Note mutations
export * from './notes/AddNote'
export * from './notes/UpdateNote'

// Payroll mutations
export * from './payrolls/InsertPayroll'
export * from './payrolls/DeletePayroll'
export * from './payrolls/UpdatePayroll'
export * from './payrolls/UpdatePayrollStatus'

// Staff mutations
export * from './staff/CreateStaff'
export * from './staff/DeleteStaff'
export * from './staff/UpdateStaff'
export * from './staff/updateUser'

// Work Schedule mutations 
export * from './work-schedule/CreateWorkSchedule'

