import { useQuery, useMutation } from '@apollo/client';
import { GET_LEAVE } from "@/lib/graphql";
import { CREATE_LEAVE } from "@/lib/graphql";
import { UPDATE_LEAVE } from "@/lib/graphql";
import { DELETE_LEAVE } from "@/lib/graphql";

export function useLeave(staffId?: string, startDate?: string, endDate?: string, options = {}) {
  return useQuery(GET_LEAVE, {
    variables: { staffId, startDate, endDate },
    skip: !staffId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreateLeave() {
  return useMutation(CREATE_LEAVE, {
    refetchQueries: ['GetLeave']
  });
}

export function useUpdateLeave() {
  return useMutation(UPDATE_LEAVE);
}

export function useDeleteLeave() {
  return useMutation(DELETE_LEAVE, {
    refetchQueries: ['GetLeave']
  });
}

// Helper hook for pending leave count
export function usePendingLeaveCount(userId?: string) {
  const { data } = useLeave(userId);
  
  const pendingCount = data?.leaves?.filter(
    (leave: any) => leave.status === 'Pending'
  ).length || 0;
  
  return pendingCount;
}