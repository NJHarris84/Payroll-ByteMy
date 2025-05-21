// graphql/mutations/payrolls/updatePayrollStatus.ts
import { gql } from "@apollo/client";

export const UPDATE_PAYROLL_STATUS = gql`
  mutation UpdatePayrollStatus($payrollId: uuid!, $status: payroll_status!) {
    update_payrolls_by_pk(
      pk_columns: { id: $payrollId },
      _set: {
        status: $status,
        updated_at: "now()"
      }
    ) {
      id
      status
      updated_at
    }
  }
`;