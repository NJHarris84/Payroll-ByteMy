// graphql/mutations/payrolls/generatePayrollDates.ts
import { gql } from '@apollo/client';
import { PAYROLL_DATE_FRAGMENT } from '../../fragments/payrollDateFragment';

export const GENERATE_PAYROLL_DATES = gql`
  mutation GeneratePayrollDates($payrollId: uuid!, $startDate: date!, $endDate: date!) {
    generatePayrollDates(payrollId: $payrollId, startDate: $startDate, endDate: $endDate) {
      payroll_dates {
        ...PayrollDateFragment
      }
      success
      message
    }
  }
  ${PAYROLL_DATE_FRAGMENT}
`;