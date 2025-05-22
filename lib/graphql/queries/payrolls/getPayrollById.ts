// graphql/queries/payrolls/getPayrollById.ts
import { gql } from '@apollo/client';
import { PAYROLL_DETAIL_FRAGMENT } from '../../fragments/payrollFragment';
import { PAYROLL_DATE_FRAGMENT } from '../../fragments/payrollDateFragment';

export const GET_PAYROLL_BY_ID = gql`
  query GetPayrollById($id: uuid!) {
    payrolls_by_pk(id: $id) {
      ...PayrollDetailFragment
      payroll_dates {
        ...PayrollDateFragment
      }
    }
  }
  ${PAYROLL_DETAIL_FRAGMENT}
  ${PAYROLL_DATE_FRAGMENT}
`;