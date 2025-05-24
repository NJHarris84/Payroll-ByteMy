import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type PayrollFragmentFragment = { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null };

export const PAYROLL_FRAGMENT = gql`
    fragment PayrollFragment on payrolls {
  id
  name
  client_id
  cycle_id
  date_type_id
  date_value
  primary_consultant_user_id
  backup_consultant_user_id
  manager_user_id
  processing_days_before_eft
  payroll_system
  status
  go_live_date
  created_at
  updated_at
}
    `;