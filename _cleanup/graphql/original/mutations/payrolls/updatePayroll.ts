// graphql/mutations/payrolls/updatePayroll.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../..";

export const UPDATE_PAYROLL = gql` 
mutation UpdatePayroll($id: uuid!, $input: payrolls_set_input!) {
    update_payrolls_by_pk(
      pk_columns: { id: $id },
      _set: $input
    ) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
  `;