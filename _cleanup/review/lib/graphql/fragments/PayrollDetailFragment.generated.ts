import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import { PayrollFragmentFragmentDoc } from './PayrollFragment.generated';
export type PayrollDetailFragmentFragment = { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } };

export const PayrollDetailFragmentFragmentDoc = gql`
    fragment PayrollDetailFragment on payrolls {
  ...PayrollFragment
  client {
    id
    name
  }
  payroll_cycle {
    id
    name
  }
  payroll_date_type {
    id
    name
  }
}
    ${PayrollFragmentFragmentDoc}`;