// graphql/queries/payrolls/getPayrollsByMonth.ts
import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';
import { PAYROLL_DATE_FRAGMENT } from '../../fragments/payrollDateFragment';

export const GET_PAYROLLS_BY_MONTH = gql`
  query GetPayrollsByMonth($startDate: date!, $endDate: date!) {
    payrolls(
      where: {
        payroll_dates: {
          original_eft_date: {
            _gte: $startDate
            _lt: $endDate
          }
        }
      }
    ) {
      ...PayrollFragment
      payroll_dates(
        where: {
          original_eft_date: {
            _gte: $startDate
            _lt: $endDate
          }
        }
      ) {
        ...PayrollDateFragment
      }
    }
  }
  ${PAYROLL_FRAGMENT}
  ${PAYROLL_DATE_FRAGMENT}
`;