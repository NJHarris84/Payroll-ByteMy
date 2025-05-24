import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../..";

export const INSERT_PAYROLL = gql`
  mutation InsertPayroll($input: payrolls_insert_input!) {
    insert_payrolls_one(object: $input) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;
