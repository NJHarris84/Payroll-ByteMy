// graphql/mutations/payrolls/generatePayrollDates.ts
import { gql } from '@apollo/client';
import { PAYROLL_DATE_FRAGMENT } from '../..';

export const GENERATE_PAYROLL_DATES = gql`
  mutation GeneratePayrollDates($payroll_id: uuid!, $original_eft_date: date!, $adjusted_eft_date: date!, $processing_date: date, $notes: String) {
    insert_payroll_dates(objects: [
      { 
        payroll_id: $payroll_id, 
        original_eft_date: $original_eft_date,
        adjusted_eft_date: $adjusted_eft_date,
        processing_date: $processing_date,
        notes: $notes
      }
    ]) {
      returning {
        ...PayrollDateFragment
      }
    }
  }
  ${PAYROLL_DATE_FRAGMENT}
`;