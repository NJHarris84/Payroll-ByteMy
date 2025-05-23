import { gql } from '@apollo/client';
import { PAYROLL_DATE_TYPE_FRAGMENT } from '../../fragments/payrollDateTypeFragment';

export const GET_PAYROLL_DATE_TYPES = gql`
  query GetPayrollDateTypes {
    payroll_date_types(order_by: { name: asc }) {
      ...PayrollDateTypeFragment
      adjustment_rules {
        id
        cycle_id
        rule_code
        rule_description
      }
      payrolls_aggregate {
        aggregate {
          count
        }
      }
    }
  }
  ${PAYROLL_DATE_TYPE_FRAGMENT}
`;
