// graphql/mutations/payrolls/deletePayroll.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../..";

export const DELETE_PAYROLL = gql`
  mutation DeletePayroll($id: uuid!) {
    delete_payrolls_by_pk(id: $id) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;
