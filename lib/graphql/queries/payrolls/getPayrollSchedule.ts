import { gql } from "@apollo/client";

export const GET_PAYROLL_SCHEDULE = gql`
  query GetPayrollSchedule {
    payroll_schedule {
      id
      cycle_id
      date_type_id
      date_value
      start_date
      end_date
      payroll_cycle {
        id
        name
      }
      payroll_date_type {
        id
        name
      }
    }
  }
`;
