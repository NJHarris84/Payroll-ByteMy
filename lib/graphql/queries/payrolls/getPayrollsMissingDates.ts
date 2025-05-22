// graphql/queries/payrolls/getPayrollsMissingDates.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const GET_PAYROLLS_MISSING_DATES = gql`
  query GetPayrollsMissingDates($startDate: date!, $endDate: date!) {
    payrolls(
      where: {
        status: { _eq: "Active" }
        _not: {
          payroll_dates: { processing_date: { _gte: $startDate, _lte: $endDate } }
        }
      }
    ) {
      ...PayrollFragment
      payroll_cycle {
        id
        name
        days
      }
      payroll_date_type {
        id
        name
      }
    }
  }
  ${PAYROLL_FRAGMENT}
`;