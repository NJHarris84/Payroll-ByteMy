import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type PayrollDateTypeFragmentFragment = { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null };

export const PayrollDateTypeFragmentFragmentDoc = gql`
    fragment PayrollDateTypeFragment on payroll_date_types {
  id
  name
  description
  created_at
  updated_at
}
    `;