import { gql } from "@apollo/client";

export const UPDATE_PAYROLL_DATE = gql`
  mutation UpdatePayrollDate(
    $id: uuid!, 
    $adjusted_eft_date: date, 
    $notes: String
  ) {
    update_payroll_dates_by_pk(
      pk_columns: { id: $id },
      _set: {
        adjusted_eft_date: $adjusted_eft_date,
        notes: $notes,
        updated_at: "now()"
      }
    ) {
      id
      adjusted_eft_date
      notes
      updated_at
    }
  }
`;