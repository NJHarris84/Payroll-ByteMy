// graphql/queries/payrolls/getPayrolls.ts
import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';

export const GET_PAYROLLS = gql`
  query GetPayrolls {
    payrolls {
      ...PayrollFragment
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