/**
 * Central exports for all components.
 * Organised by domain and functionality.
 */

// Auth
export * from './auth/RoleGates'
export * from './auth/UserRoleManagement'

// Client
export * from './client/ClientsTable'
export * from './client/ClientThemeProvider'
export * from './client/ClientWrapper'
export { ErrorBoundary as ClientErrorBoundary } from './client/ErrorBoundary.client'

// Common
export * from './common/AddNote'
export * from './common/AiChat'
export * from './common/DataTable'
export * from './common/ErrorBoundary'
export * from './common/ErrorDisplay'
export * from './common/ErrorHandling'
export * from './common/ExportCsv'
export * from './common/ExportPdf'
export * from './common/LiveDataTable'
export * from './common/LoadingStates'
export * from './common/MarkdownViewer'
export * from './common/NotesList'
export * from './common/NotesListWithAdd'
export * from './common/RecentActivity'


// Layout
export * from './layout/DashboardShell'
export * from './layout/layout'
export * from './layout/MainNav'
export * from './layout/PageHeader'
export * from './layout/sidebar'
export * from './layout/UserNav'

// Payroll
export * from './payroll/AustralianTaxCalculator'
export * from './payroll/ClientPayrollTable'
export * from './payroll/PayrollDatesView'
export * from './payroll/PayrollScheduleView'
export * from './payroll/PayrollsMissingDates'
export * from './payroll/RegenerateDates'
export * from './payroll/UpcomingPayrolls'

// Providers
export * from './providers'

// UI
export * from './ui'