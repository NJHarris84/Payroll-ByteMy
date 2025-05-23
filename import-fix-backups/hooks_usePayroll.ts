import { Payroll, PayrollStatus } from '@/types/interface';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PAYROLLS } from '@/lib/graphql/queries/payrolls/getPayrolls';
import { GET_PAYROLL_SCHEDULE } from '@/lib/graphql/queries/payrolls/getPayrollSchedule';
import { GET_USER_PAYROLLS } from '@/lib/graphql/queries/payrolls/getUserPayrolls';
import { UPDATE_PAYROLL_STATUS } from '@/lib/graphql/mutations/payrolls/updatePayrollStatus';
import { INSERT_PAYROLL } from '@/lib/graphql/mutations/payrolls/insertPayroll';
import { UPDATE_PAYROLL } from '@/lib/graphql/mutations/payrolls/updatePayroll';

export function usePayrollList(options = {}) {
  const { data, loading, error, refetch } = useQuery(GET_PAYROLLS, options);
  
  return {
    payrolls: data?.payrolls as Payroll[] || [],
    loading,
    error,
    refetch
  };
}

export function usePayrollSchedule(options = {}) {
  return useQuery(GET_PAYROLL_SCHEDULE, {
    notifyOnNetworkStatusChange: true,
    ...options
  });
}

export function useUserPayrolls(options = {}) {
  return useQuery(GET_USER_PAYROLLS, {
    notifyOnNetworkStatusChange: true,
    ...options
  });
}

// Renamed to avoid conflicts with usePayrollQueries
export function useCreatePayrollBasic() {
  return useMutation(INSERT_PAYROLL);
}

// Renamed to avoid conflicts with usePayrollQueries
export function useUpdatePayrollBasic() {
  return useMutation(UPDATE_PAYROLL);
}

export function useUpdatePayrollStatus() {
  const [updateStatus, { loading }] = useMutation(UPDATE_PAYROLL_STATUS);
  
  const updatePayrollStatus = async (id: string, status: PayrollStatus) => {
    try {
      const result = await updateStatus({
        variables: { id, status },
        optimisticResponse: {
          update_payrolls_by_pk: {
            __typename: 'payrolls',
            id,
            status
          }
        }
      });
      
      return result.data?.update_payrolls_by_pk;
    } catch (error) {
      console.error('Error updating payroll status:', error);
      throw error;
    }
  };
  
  return { updatePayrollStatus, loading };
}
