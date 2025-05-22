import { gql } from "@apollo/client";

/**
 * Fragment containing core payroll fields
 * Used in payroll queries and mutations
 */
export const PAYROLL_FRAGMENT = gql`
  fragment PayrollFragment on payrolls {
    id
    name
    client_id
    payroll_cycle_id
    payroll_date_type_id
    specific_pay_day
    pay_day_of_week
    status
    created_at
    updated_at
  }
`;

/**
 * Extended fragment containing payroll fields with related entities
 * Used in detailed payroll queries
 */
export const PAYROLL_DETAIL_FRAGMENT = gql`
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
  ${PAYROLL_FRAGMENT}
`;
