import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type PayrollDateFragment = { __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null };

export const PAYROLL_DATE_FRAGMENT = gql`
    fragment PayrollDateFragment on payroll_dates {
  id
  payroll_id
  original_eft_date
  adjusted_eft_date
  processing_date
  notes
  created_at
  updated_at
}
    `;