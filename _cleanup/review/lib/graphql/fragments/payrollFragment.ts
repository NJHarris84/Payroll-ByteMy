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
