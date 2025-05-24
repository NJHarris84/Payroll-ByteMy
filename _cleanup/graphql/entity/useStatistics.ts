import { useQuery } from '@apollo/client';
import {
  GET_PAYROLL_STATISTICS,
  GET_CLIENT_STATISTICS,
  GET_COMPLETION_RATE_STATISTICS,
  GET_PROCESSING_TIME_STATISTICS
} from '@/lib/graphql';

// Get overall payroll statistics
export function usePayrollStatistics(options = {}) {
  return useQuery(GET_PAYROLL_STATISTICS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get client-specific statistics
export function useClientStatistics(clientId?: string, options = {}) {
  return useQuery(GET_CLIENT_STATISTICS, {
    variables: { clientId },
    skip: !clientId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get completion rate statistics
export function useCompletionRateStatistics(startDate?: string, endDate?: string, options = {}) {
  return useQuery(GET_COMPLETION_RATE_STATISTICS, {
    variables: { startDate, endDate },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get processing time statistics
export function useProcessingTimeStatistics(startDate?: string, endDate?: string, options = {}) {
  return useQuery(GET_PROCESSING_TIME_STATISTICS, {
    variables: { startDate, endDate },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}
