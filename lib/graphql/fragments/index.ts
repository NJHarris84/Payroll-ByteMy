/**
 * GraphQL Fragments
 * 
 * This module exports all GraphQL fragments used in the application.
 * Fragments are organized by entity type and follow the naming convention:
 * - File name: entityFragment.ts
 * - Fragment name: EntityFragment
 * - Export constant: ENTITY_FRAGMENT
 */

// Client fragments
export * from './clientFragment';

// Holiday fragments
export * from './holidayFragment';

// Leave fragments
export * from './leaveFragment';

// Note fragments
export * from './noteFragment';

// Payroll fragments
export * from './payrollFragment';
export * from './payrollDateFragment';

// Staff/User fragments
export * from './staffFragment';

// Work schedule fragments
export * from './workScheduleFragment';