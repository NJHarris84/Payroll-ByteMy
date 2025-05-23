import { useQuery } from '@apollo/client';
import {
  GET_DASHBOARD_SUMMARY,
  GET_DASHBOARD_CHARTS,
  GET_DASHBOARD_ALERTS,
  GET_DASHBOARD_UPCOMING_TASKS
} from '@/lib/graphql/queries/dashboard';

// Get dashboard summary data
export function useDashboardSummary(options = {}) {
  return useQuery(GET_DASHBOARD_SUMMARY, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get dashboard chart data
export function useDashboardCharts(period: 'day' | 'week' | 'month' | 'year' = 'month', options = {}) {
  return useQuery(GET_DASHBOARD_CHARTS, {
    variables: { period },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get dashboard alerts
export function useDashboardAlerts(options = {}) {
  return useQuery(GET_DASHBOARD_ALERTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    pollInterval: 300000, // Poll every 5 minutes for new alerts
    ...options
  });
}

// Get upcoming tasks for the dashboard
export function useDashboardUpcomingTasks(days: number = 7, options = {}) {
  return useQuery(GET_DASHBOARD_UPCOMING_TASKS, {
    variables: { days },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}
