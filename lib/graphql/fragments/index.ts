/**
 * GraphQL Fragments
 * 
 * This module exports all GraphQL fragments used in the application.
 * Fragments are organized by entity type and follow the naming convention:
 * - File name: entityFragment.ts
 * - Fragment name: EntityFragment
 * - Export constant: ENTITY_FRAGMENT
 */

// Account fragments
export * from './accountFragment';

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

// Session fragments
export * from './sessionFragment';

// Staff/User fragments
export * from './staffFragment';

// Token fragments
export * from './verificationTokenFragment';

// Work schedule fragments
export * from './workScheduleFragment';