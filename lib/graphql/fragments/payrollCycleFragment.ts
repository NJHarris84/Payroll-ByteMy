import { gql } from '@apollo/client';

export const PAYROLL_CYCLE_FRAGMENT = gql`
  fragment PayrollCycleFragment on payroll_cycles {
    id
    name
    description
    created_at
    updated_at
  }
`;
