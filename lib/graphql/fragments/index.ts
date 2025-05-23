/**
 * GraphQL Fragments
 * 
 * This module exports all GraphQL fragments used in the application.
 * Fragments are organized by entity type and follow the naming convention:
 * - File name: entityFragment.ts
 * - Fragment name: EntityFragment
 * - Export constant: ENTITY_FRAGMENT
 */



// Adjustment rule fragments
export * from './adjustmentRuleFragment';

// App settings fragments
export * from './appSettingsFragment';

// Client fragments
export * from './clientFragment';
export * from './clientExternalSystemFragment';

// External system fragments
export * from './externalSystemFragment';

// Feature flag fragments
export * from './featureFlagFragment';

// Holiday fragments
export * from './holidayFragment';

// Leave fragments
export * from './leaveFragment';

// Note fragments
export * from './noteFragment';

// Payroll fragments
export * from './payrollFragment';
export * from './payrollDateFragment';
export * from './payrollCycleFragment';
export * from './payrollDateTypeFragment';


// Staff/User fragments
export * from './staffFragment';

// Work schedule fragments
export * from './workScheduleFragment';