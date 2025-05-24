import { gql } from '@apollo/client';

/**
 * Fragment containing payroll date fields
 * Used in payroll date queries and mutations
 */
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