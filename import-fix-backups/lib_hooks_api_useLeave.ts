import { useQuery, useMutation } from '@apollo/client';
import { GET_LEAVE } from '@/lib/graphql/queries/leave/getLeave';
import { CREATE_LEAVE } from '@/lib/graphql/mutations/leave/createLeave';
import { UPDATE_LEAVE } from '@/lib/graphql/mutations/leave/updateLeave';

export function useLeave(staffId?: string, options = {}) {
  return useQuery(GET_LEAVE, {
    variables: { staffId },
    skip: !staffId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreateLeave() {
  return useMutation(CREATE_LEAVE);
}

export function useUpdateLeave() {
  return useMutation(UPDATE_LEAVE);
}