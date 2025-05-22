import { gql } from "@apollo/client";

export const PAYROLL_FRAGMENT = gql`
  fragment PayrollFragment on payrolls {
    id
    name
    client {
      id
      name
    }
    status
    notes
    cycle_id
    date_type_id
    date_value
    processing_days_before_eft
    created_at
    updated_at
  }
`;

export const PAYROLL_FIELDS_FRAGMENT = gql`
  fragment PayrollFields on payrolls {
    id
    name
    status
    notes
    cycle_id
    date_type_id
    date_value
    processing_days_before_eft
    updated_at
  }
`;

export const PAYROLL_DETAIL_FRAGMENT = gql`
  fragment PayrollDetailFragment on payrolls {
    id
    name
    client_id
    client {
      id
      name
    }
    status
    notes
    cycle_id
    payroll_cycle {
      id
      name
    }
    date_type_id
    payroll_date_type {
      id
      name
    }
    date_value
    processing_days_before_eft
    primary_consultant_user_id
    userByPrimaryConsultantUserId {
      id
      name
      email
    }
    backup_consultant_user_id
    userByBackupConsultantUserId {
      id
      name
      email
    }
    manager_user_id
    userByManagerUserId {
      id
      name
      email
    }
    created_at
    updated_at
  }
`;
