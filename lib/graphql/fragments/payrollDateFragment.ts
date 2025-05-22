import { gql } from '@apollo/client';

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

export const PAYROLL_DATE_FIELDS_FRAGMENT = gql`
  fragment PayrollDateFields on payroll_dates {
    id
    payroll_id
    original_eft_date
    adjusted_eft_date
    processing_date
    notes
  }
`;