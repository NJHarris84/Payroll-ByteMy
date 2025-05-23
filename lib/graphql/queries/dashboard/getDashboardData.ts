import { gql } from '@apollo/client';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';
import { HOLIDAY_FRAGMENT } from '../../fragments/holidayFragment';
import { LEAVE_FRAGMENT } from '../../fragments/leaveFragment';

export const GET_DASHBOARD_DATA = gql`
  query GetDashboardData($userId: uuid!, $startDate: date!, $endDate: date!) {
    # User's payrolls
    user_payrolls: payrolls(
      where: {
        _or: [
          { primary_consultant_user_id: { _eq: $userId } }
          { backup_consultant_user_id: { _eq: $userId } }
          { manager_user_id: { _eq: $userId } }
        ]
      }
    ) {
      id
      name
      status
      client {
        id
        name
      }
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
    
    # Upcoming holidays
    upcoming_holidays: holidays(
      where: {
        date: { _gte: $startDate, _lte: $endDate }
        country_code: { _eq: "AU" }
      }
      order_by: { date: asc }
      limit: 5
    ) {
      ...HolidayFragment
    }
    
    # Leave requests
    pending_leave: leave_aggregate(
      where: {
        status: { _eq: "Pending" }
        start_date: { _gte: $startDate }
      }
    ) {
      aggregate {
        count
      }
    }
    
    # Statistics
    total_clients: clients_aggregate(where: { active: { _eq: true } }) {
      aggregate {
        count
      }
    }
    
    total_payrolls: payrolls_aggregate(where: { status: { _eq: "Active" } }) {
      aggregate {
        count
      }
    }
  }
  ${HOLIDAY_FRAGMENT}
`;
