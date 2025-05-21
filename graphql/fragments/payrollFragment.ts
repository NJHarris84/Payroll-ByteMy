import { gql } from "@apollo/client";

export const PAYROLL_FRAGMENT = gql`
  fragment PayrollFields on payrolls {
    id
    name
    payroll_system
    processing_days_before_eft
    date_value
    employee_count
    processing_time
    status
    created_at
    updated_at
  }

  fragment PayrollRelationshipFields on payrolls {
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
    userByPrimaryConsultantUserId {
      id
      name
      role
    }
    userByBackupConsultantUserId {
      id
      name
      role
    }
    userByManagerUserId {
      id
      name
      role
    }
  }

  fragment PayrollDatesFields on payrolls {
    payroll_dates(order_by: {adjusted_eft_date: asc}) {
      id
      original_eft_date
      adjusted_eft_date
      processing_date
      notes
    }
  }
`;
