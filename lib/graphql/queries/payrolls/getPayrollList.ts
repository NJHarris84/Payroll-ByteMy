// graphql/queries/payrolls/getPayrollList.ts
import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';

export const GET_PAYROLL_LIST = gql`
  query GetPayrollList($where: payrolls_bool_exp) {
    payrolls(where: $where, order_by: { created_at: desc }) {
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
  }
  ${PAYROLL_FRAGMENT}
`;
