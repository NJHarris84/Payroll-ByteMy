import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_STAFF_LIST, 
  GET_STAFF_BY_ID 
} from '@/lib/graphql/queries/staff/getStaffList';
import { 
  CREATE_STAFF, 
  UPDATE_STAFF, 
  DELETE_STAFF 
} from '@/lib/graphql/mutations/staff/createStaff';

export function useStaffList(options = {}) {
  return useQuery(GET_STAFF_LIST, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useStaffById(id: string, options = {}) {
  return useQuery(GET_STAFF_BY_ID, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreateStaff() {
  return useMutation(CREATE_STAFF);
}

export function useUpdateStaff() {
  return useMutation(UPDATE_STAFF);
}

export function useDeleteStaff() {
  return useMutation(DELETE_STAFF);
}