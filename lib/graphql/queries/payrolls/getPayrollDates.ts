import { gql } from "@apollo/client";
import { PAYROLL_DATE_FRAGMENT } from "../../fragments/payrollDateFragment";

export const GET_PAYROLL_DATES = gql`
  query GetPayrollDates($payrollId: uuid!, $startDate: date, $endDate: date) {
    payroll_dates(
      where: {
        payroll_id: {_eq: $payrollId},
        _and: [
          { processing_date: {_gte: $startDate} },
          { processing_date: {_lte: $endDate} }
        ]
      },
      order_by: {processing_date: asc}
    ) {
      ...PayrollDateFragment
      payroll {
        id
        name
        client {
          id
          name
        }
      }
    }
  }
  ${PAYROLL_DATE_FRAGMENT}
`;