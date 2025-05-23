import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const GET_USER_PAYROLLS = gql`
  query GetUserPayrolls {
    user_payrolls {
      id
      user_id
      payroll_id
      role
      payroll {
        ...PayrollFragment
        client {
          id
          name
        }
      }
    }
  }
  ${PAYROLL_FRAGMENT}
`;
