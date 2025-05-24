import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type PayrollCycleFragment = { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null };

export const PAYROLL_CYCLE_FRAGMENT = gql`
    fragment PayrollCycleFragment on payroll_cycles {
  id
  name
  description
  created_at
  updated_at
}
    `;