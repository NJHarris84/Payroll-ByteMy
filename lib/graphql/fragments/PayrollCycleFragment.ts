import type * as Types from '../../generated';

import type { DocumentNode } from 'graphql';
export type PayrollCycleFragment = { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null };

export const PayrollCycleFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollCycleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_cycles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;