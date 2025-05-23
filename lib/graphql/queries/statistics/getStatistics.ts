import { gql } from '@apollo/client';

export const GET_PAYROLL_STATISTICS = gql`
  query GetPayrollStatistics {
    payrolls_aggregate {
      aggregate {
        count
      }
      nodes {
        status
      }
    }
    active_payrolls: payrolls_aggregate(where: { status: { _eq: "Active" } }) {
      aggregate {
        count
      }
    }
    implementation_payrolls: payrolls_aggregate(where: { status: { _eq: "Implementation" } }) {
      aggregate {
        count
      }
    }
    inactive_payrolls: payrolls_aggregate(where: { status: { _eq: "Inactive" } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_CLIENT_STATISTICS = gql`
  query GetClientStatistics {
    clients_aggregate {
      aggregate {
        count
      }
    }
    active_clients: clients_aggregate(where: { active: { _eq: true } }) {
      aggregate {
        count
      }
    }
    clients_with_payrolls: clients_aggregate(where: { payrolls: {} }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_LEAVE_STATISTICS = gql`
  query GetLeaveStatistics($startDate: date!, $endDate: date!) {
    leave_aggregate(
      where: {
        start_date: { _gte: $startDate }
        end_date: { _lte: $endDate }
      }
    ) {
      aggregate {
        count
      }
      nodes {
        leave_type
        status
      }
    }
  }
`;
