/**
 * Central exports for all components.
 * Organised by domain and functionality.
 */

// Auth
export * from './auth/role-gates'
export * from './auth/user-role-management'

// Client
export * from './client/clients-table'
export * from './client/client-theme-provider'
export * from './client/client-wrapper'
export { ErrorBoundary as ClientErrorBoundary } from './client/error-boundary.client'

// Common
export * from './common/add-note'
export * from './common/ai-chat'
export * from './common/data-table'
export * from './common/error-boundary'
export * from './common/error-display'
export * from './common/error-handling'
export * from './common/export-csv'
export * from './common/export-pdf'
export * from './common/live-data-table'
export * from './common/loading-states'
export * from './common/markdown-viewer'
export * from './common/notes-list'
export * from './common/notes-list-with-add'
export * from './common/recent-activity'


// Layout
export * from './layout/dashboard-shell'
export * from './layout/layout'
export * from './layout/main-nav'
export * from './layout/page-header'
export * from './layout/sidebar'
export * from './layout/user-nav'

// Payroll
export * from './payroll/australian-tax-calculator'
export * from './payroll/client-payroll-table'
export * from './payroll/payroll-dates-view'
export * from './payroll/payroll-schedule-view'
export * from './payroll/payrolls-missing-dates'
export * from './payroll/regenerate-dates'
export * from './payroll/upcoming-payrolls'

// Providers
export * from './providers'

// UI
export * from './ui'