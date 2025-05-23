import { gql } from '@apollo/client';

export const PAYROLL_DATE_TYPE_FRAGMENT = gql`
  fragment PayrollDateTypeFragment on payroll_date_types {
    id
    name
    description
    created_at
    updated_at
  }
`;
