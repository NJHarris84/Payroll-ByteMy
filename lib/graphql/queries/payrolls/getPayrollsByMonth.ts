// graphql/queries/payrolls/getPayrollsByMonth.ts
import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';
import { PAYROLL_DATE_FRAGMENT } from '../../fragments/payrollDateFragment';

export const GET_PAYROLLS_BY_MONTH = gql`
  query GetPayrollsByMonth($startDate: date!, $endDate: date!) {
    payrolls(
      where: {
        payroll_dates: {
          processing_date: { _gte: $startDate, _lte: $endDate }
        }
      }
    ) {
      ...PayrollFragment
      userByPrimaryConsultantUserId {
        id
        name
        leaves(where: {
          _or: [
            { start_date: { _gte: $startDate, _lte: $endDate } },
            { end_date: { _gte: $startDate, _lte: $endDate } },
            { _and: [
              { start_date: { _lte: $startDate } },
              { end_date: { _gte: $endDate } }
            ]}
          ]
        }) {
          id
          start_date
          end_date
          leave_type
        }
      }
      userByBackupConsultantUserId {
        id
        name
      }
      payroll_dates(
        where: { processing_date: { _gte: $startDate, _lte: $endDate } },
        order_by: { processing_date: asc }
      ) {
        ...PayrollDateFragment
      }
    }
  }
  ${PAYROLL_FRAGMENT}
  ${PAYROLL_DATE_FRAGMENT}
`;