// graphql/mutations/payrolls/updatePayrollStatus.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const UPDATE_PAYROLL_STATUS = gql`
  mutation UpdatePayrollStatus($id: uuid!, $status: payroll_status!) {
    update_payrolls_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;