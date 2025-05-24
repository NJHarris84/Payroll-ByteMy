// graphql/mutations/payrolls/createPayroll.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../..";

export const CREATE_PAYROLL = gql`
  mutation CreatePayroll($input: payrolls_insert_input!) {
    insert_payrolls_one(object: $input) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;


