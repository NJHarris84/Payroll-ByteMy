import { useQuery, useMutation } from '@apollo/client';
import {
  GET_PAYROLLS,
  GET_PAYROLL_BY_ID
} from '@/lib/graphql/queries';
import {
  CREATE_PAYROLL,
  UPDATE_PAYROLL,
  DELETE_PAYROLL
} from '@/lib/graphql/mutations';

export function usePayrolls(options = {}) {
  return useQuery(GET_PAYROLLS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function usePayrollById(id: string, options = {}) {
  return useQuery(GET_PAYROLL_BY_ID, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreatePayroll() {
  return useMutation(CREATE_PAYROLL);
}

export function useUpdatePayroll() {
  return useMutation(UPDATE_PAYROLL);
}

export function useDeletePayroll() {
  return useMutation(DELETE_PAYROLL);
}