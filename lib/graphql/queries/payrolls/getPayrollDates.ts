import { gql } from "@apollo/client";
import { PAYROLL_DATE_FRAGMENT } from "../../fragments/payrollDateFragment";

export const GET_PAYROLL_DATES = gql`
  query GetPayrollDates($payrollId: uuid!, $startDate: date, $endDate: date) {
    payroll_dates(
      where: {
        payroll_id: { _eq: $payrollId },
        _and: [
          { original_eft_date: { _gte: $startDate } },
          { original_eft_date: { _lte: $endDate } }
        ]
      },
      order_by: { original_eft_date: asc }
    ) {
      ...PayrollDateFragment
    }
  }
  ${PAYROLL_DATE_FRAGMENT}
`;