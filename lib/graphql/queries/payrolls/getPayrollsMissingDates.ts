// graphql/queries/payrolls/getPayrollsMissingDates.ts
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const GET_PAYROLLS_MISSING_DATES = gql`
  query GetPayrollsMissingDates($startDate: date!, $endDate: date!) {
    payrolls(
      where: {
        _not: {
          payroll_dates: {
            original_eft_date: {
              _gte: $startDate
              _lte: $endDate
            }
          }
        }
        status: { _eq: "Active" }
      }
    ) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;