import { gql } from "@apollo/client";

export const GENERATE_PAYROLL_DATES = gql`
  mutation GeneratePayrollDates($payrollId: uuid!, $startDate: date, $endDate: date, $maxDates: Int) {
    generate_payroll_dates(
      p_payroll_id: $payrollId, 
      p_start_date: $startDate, 
      p_end_date: $endDate, 
      p_max_dates: $maxDates
    ) {
      id
      payroll_id
      calculation_date
      eft_date
      adjusted_eft_date
      created_at
      updated_at
    }
  }
`;