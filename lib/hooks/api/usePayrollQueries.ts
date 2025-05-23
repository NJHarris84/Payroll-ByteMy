import { useQuery, useMutation } from '@apollo/client';
import {
  GET_PAYROLLS,
  GET_PAYROLL_BY_ID,
  GET_PAYROLLS_BY_STATUS,
  GET_PAYROLLS_BY_CONSULTANT,
  GET_PAYROLLS_BY_MANAGER,
  GET_PAYROLLS_BY_MONTH,
  GET_PAYROLLS_MISSING_DATES
} from "@/lib/graphql/queries";
import {
  CREATE_PAYROLL,
  UPDATE_PAYROLL,
  DELETE_PAYROLL,
  UPDATE_PAYROLL_STATUS,
  GENERATE_PAYROLL_DATES_FUNCTION
} from "@/lib/graphql/mutations";

// Main payroll queries
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
    skip: !id,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Status-based queries
export function usePayrollsByStatus(status: 'Active' | 'Implementation' | 'Inactive', options = {}) {
  return useQuery(GET_PAYROLLS_BY_STATUS, {
    variables: { status },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// User-based queries
export function usePayrollsByConsultant(userId: string, options = {}) {
  return useQuery(GET_PAYROLLS_BY_CONSULTANT, {
    variables: { userId },
    skip: !userId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function usePayrollsByManager(userId: string, options = {}) {
  return useQuery(GET_PAYROLLS_BY_MANAGER, {
    variables: { userId },
    skip: !userId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Date-based queries
export function usePayrollsByMonth(startDate: string, endDate: string, options = {}) {
  return useQuery(GET_PAYROLLS_BY_MONTH, {
    variables: { startDate, endDate },
    skip: !startDate || !endDate,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function usePayrollsMissingDates(startDate: string, endDate: string, options = {}) {
  return useQuery(GET_PAYROLLS_MISSING_DATES, {
    variables: { startDate, endDate },
    skip: !startDate || !endDate,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Mutations
export function useCreatePayroll() {
  return useMutation(CREATE_PAYROLL);
}

export function useUpdatePayroll() {
  return useMutation(UPDATE_PAYROLL);
}

export function useDeletePayroll() {
  return useMutation(DELETE_PAYROLL);
}

export function useGeneratePayrollDates() {
  return useMutation(GENERATE_PAYROLL_DATES_FUNCTION);
}

// Helper hook to generate dates for a payroll
export function useGeneratePayrollDatesForPayroll(payrollId: string) {
  const [generateDates, { loading, error }] = useGeneratePayrollDates();
  
  const generate = async (startDate?: string, endDate?: string, maxDates?: number) => {
    const result = await generateDates({
      variables: {
        payrollId,
        startDate,
        endDate,
        maxDates: maxDates || 52
      }
    });
    
    return result.data?.generatePayrollDates;
  };
  
  return { generate, loading, error };
}