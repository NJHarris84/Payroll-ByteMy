// graphql/queries/payrolls/getPayrollList.ts
import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';

export const GET_PAYROLL_LIST = gql`
  ${PAYROLL_FRAGMENT.PayrollFields}
  ${PAYROLL_FRAGMENT.PayrollRelationshipFields}
  
  query GetPayrollList($limit: Int, $offset: Int, $where: payrolls_bool_exp) {
    payrolls(
      where: $where,
      limit: $limit,
      offset: $offset,
      order_by: {name: asc}
    ) {
      ...PayrollFields
      ...PayrollRelationshipFields
      payroll_dates(order_by: {adjusted_eft_date: desc}, limit: 1) {
        adjusted_eft_date
      }
    }
    payrolls_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
