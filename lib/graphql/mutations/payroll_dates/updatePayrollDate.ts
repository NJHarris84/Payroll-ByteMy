import { gql } from "@apollo/client";
import { PAYROLL_DATE_FRAGMENT } from "../../fragments/payrollDateFragment";

export const UPDATE_PAYROLL_DATE = gql`
  mutation UpdatePayrollDate($id: uuid!, $input: payroll_dates_set_input!) {
    update_payroll_dates_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...PayrollDateFragment
    }
  }
  ${PAYROLL_DATE_FRAGMENT}
`;