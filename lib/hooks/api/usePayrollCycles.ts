import { useQuery } from '@apollo/client';
import { GET_PAYROLL_CYCLES } from '@/lib/graphql';

export function usePayrollCycles(options = {}) {
  return useQuery(GET_PAYROLL_CYCLES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Helper hook to get cycle options for dropdowns
export function usePayrollCycleOptions() {
  const { data, loading } = usePayrollCycles();
  
  const options = data?.payroll_cycles?.map((cycle: any) => ({
    value: cycle.id,
    label: cycle.name,
    description: cycle.description
  })) || [];
  
  return { options, loading };
}
