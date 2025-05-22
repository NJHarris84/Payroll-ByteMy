// Client mutations
export * from './clients/createClient';
export * from './clients/updateClient';
export * from './clients/deleteClient';

// Holiday mutations
export * from './holidays/syncHolidays';

// Leave mutations
export * from './leave/createLeave';
export * from './leave/updateLeave';

// Note mutations
export * from './notes/addNote';
export * from './notes/updateNote';

// Payroll mutations
export * from './payrolls/createPayroll';
export * from './payrolls/updatePayroll';
export * from './payrolls/deletePayroll';
export * from './payrolls/updatePayrollStatus';
export * from './payrolls/generatePayrollDates';  // For date range generation
export { INSERT_BULK_PAYROLL_DATES } from './payroll_dates/generatePayrollDates';  // For bulk insertion

// Payroll date mutations
export * from './payroll_dates/generatePayrollDates';
export * from './payroll_dates/updatePayrollDate';

// Staff mutations
export * from './staff/createStaff';
export * from './staff/updateStaff';
export * from './staff/deleteStaff';
export * from './staff/updateUser';

// Work schedule mutations
export * from './work_schedule/createWorkSchedule';
