// graphql/mutations/payrolls/createPayroll.ts
import { gql } from "@apollo/client";
import { PAYROLL_DETAIL_FRAGMENT } from "../../fragments/payrollFragment";

export const CREATE_PAYROLL = gql`
  mutation CreatePayroll($input: payrolls_insert_input!) {
    insert_payrolls_one(object: $input) {
      ...PayrollDetailFragment
    }
  }
  ${PAYROLL_DETAIL_FRAGMENT}
`;


