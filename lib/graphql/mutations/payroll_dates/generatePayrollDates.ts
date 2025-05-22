import { gql } from "@apollo/client";
import { PAYROLL_DATE_FRAGMENT } from "../../fragments/payrollDateFragment";

export const INSERT_BULK_PAYROLL_DATES = gql`
  mutation InsertBulkPayrollDates($objects: [payroll_dates_insert_input!]!) {
    insert_payroll_dates(objects: $objects) {
      returning {
        ...PayrollDateFragment
      }
    }
  }
  ${PAYROLL_DATE_FRAGMENT}
`;