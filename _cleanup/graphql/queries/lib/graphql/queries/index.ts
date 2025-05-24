/**
 * GraphQL Queries
 * 
 * This module exports all GraphQL queries used in the application.
 * Queries are organized by entity type.
 */

// Adjustment Rules queries
export * from './adjustment-rules/GetAdjustmentRuleByCycleAndType'
export * from './adjustment-rules/GetAdjustmentRules'

// App Settings queries
export * from './app-settings/GetAppSettings'

// Clients queries
export * from './clients/GetClientById'
export * from './clients/GetClientExternalSystems'
export * from './clients/GetClientsList'
export * from './clients/GetClientStatistics'

// Dashboard queries
export * from './dashboard/GetDashboardData'

// External Systems queries
export * from './externalSystems/GetExternalSystems'

// Feature Flags queries
export * from './feature-flags/GetFeatureFlags'

// Holidays queries
export * from './holidays/GetHolidays'
export * from './holidays/GetHolidaysByCountry'

// Leave queries
export * from './leave/GetLeave'
export * from './leave/GetLeaveStatistics'

// Notes queries
export * from './notes/GetNotes'

// Payrolls queries
export * from './payrolls/GeneratePayrollDates'
export * from './payrolls/GetPayrollCycles'
export * from './payrolls/GetPayrollDates'
export * from './payrolls/GetPayrollDateTypes'
export * from './payrolls/GetPayrollList'
export * from './payrolls/GetPayrolls'
export * from './payrolls/GetPayrollsByMonth'
export * from './payrolls/GetPayrollsMissingDates'
export * from './payrolls/GetPayrollStatistics'
export * from './payrolls/GetUserPayrolls'

// Staff queries
export * from './staff/GetStaffById'
export * from './staff/GetStaffList'
export * from './staff/GetUserWorkSchedule'
