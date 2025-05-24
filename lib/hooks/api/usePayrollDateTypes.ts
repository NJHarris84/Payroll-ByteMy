import { useQuery, useMutation } from '@apollo/client';
import { GET_PAYROLL_DATE_TYPES } from '@/lib/graphql/queries/payrollDateTypes/getPayrollDateTypes';
import {
  CREATE_PAYROLL_DATE_TYPE,
  UPDATE_PAYROLL_DATE_TYPE,
  DELETE_PAYROLL_DATE_TYPE
} from '@/lib/graphql';

export function usePayrollDateTypes(options = {}) {
  return useQuery(GET_PAYROLL_DATE_TYPES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreatePayrollDateType() {
  return useMutation(CREATE_PAYROLL_DATE_TYPE, {
    refetchQueries: [{ query: GET_PAYROLL_DATE_TYPES }]
  });
}

export function useUpdatePayrollDateType() {
  return useMutation(UPDATE_PAYROLL_DATE_TYPE);
}

export function useDeletePayrollDateType() {
  return useMutation(DELETE_PAYROLL_DATE_TYPE, {
    refetchQueries: [{ query: GET_PAYROLL_DATE_TYPES }]
  });
}

// Helper hook to get date type options for dropdowns
export function usePayrollDateTypeOptions() {
  const { data, loading } = usePayrollDateTypes();
  
  const options = data?.payroll_date_types?.map((type: any) => ({
    value: type.id,
    label: type.name,
    description: type.description
  })) || [];
  
  return { options, loading };
}
