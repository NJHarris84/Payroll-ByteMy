import { gql } from '@apollo/client';
import { PAYROLL_CYCLE_FRAGMENT } from '../../fragments/payrollCycleFragment';

export const GET_PAYROLL_CYCLES = gql`
  query GetPayrollCycles {
    payroll_cycles(order_by: { name: asc }) {
      ...PayrollCycleFragment
      adjustment_rules {
        id
        date_type_id
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
  ${PAYROLL_CYCLE_FRAGMENT}
`;
