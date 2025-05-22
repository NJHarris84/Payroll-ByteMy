// graphql/queries/payrolls/getPayrollList.ts
import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';

export const GET_PAYROLL_LIST = gql`
  query GetPayrollList {
    payrolls(order_by: { name: asc }) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;
