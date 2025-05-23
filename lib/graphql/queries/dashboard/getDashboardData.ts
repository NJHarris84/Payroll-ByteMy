import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';
import { HOLIDAY_FRAGMENT } from '../../fragments/holidayFragment';
import { LEAVE_FRAGMENT } from '../../fragments/leaveFragment';

export const GET_DASHBOARD_DATA = gql`
  query GetDashboardData($userId: uuid!, $startDate: date!, $endDate: date!) {
    payrolls(
      where: {
        _or: [
          { primary_consultant_user_id: { _eq: $userId } }
          { backup_consultant_user_id: { _eq: $userId } }
          { manager_user_id: { _eq: $userId } }
        ]
      }
    ) {
      ...PayrollFragment
      payroll_dates(
        where: {
          processing_date: { _gte: $startDate, _lte: $endDate }
        }
        order_by: { processing_date: asc }
        limit: 5
      ) {
        id
        processing_date
        adjusted_eft_date
      }
    }
    holidays(
      where: {
        date: { _gte: $startDate, _lte: $endDate }
        country_code: { _eq: "AU" }
      }
      order_by: { date: asc }
      limit: 5
    ) {
      ...HolidayFragment
    }
    leave(
      where: {
        user_id: { _eq: $userId }
        start_date: { _gte: $startDate }
        end_date: { _lte: $endDate }
      }
      order_by: { start_date: asc }
      limit: 5
    ) {
      ...LeaveFragment
    }
  }
  ${PAYROLL_FRAGMENT}
  ${HOLIDAY_FRAGMENT}
  ${LEAVE_FRAGMENT}
`;
