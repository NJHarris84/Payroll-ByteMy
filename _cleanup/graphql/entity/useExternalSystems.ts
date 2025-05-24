import { useQuery, useMutation } from '@apollo/client';
import {
  GET_EXTERNAL_SYSTEMS,
  GET_EXTERNAL_SYSTEM_BY_ID,
  GET_EXTERNAL_SYSTEM_LOGS
} from '@/lib/graphql';
import {
  CREATE_EXTERNAL_SYSTEM,
  UPDATE_EXTERNAL_SYSTEM,
  DELETE_EXTERNAL_SYSTEM,
  TEST_EXTERNAL_SYSTEM_CONNECTION
} from '@/lib/graphql';

// Get all external systems
export function useExternalSystems(options = {}) {
  return useQuery(GET_EXTERNAL_SYSTEMS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get specific external system by ID
export function useExternalSystemById(id: string, options = {}) {
  return useQuery(GET_EXTERNAL_SYSTEM_BY_ID, {
    variables: { id },
    skip: !id,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Get logs for an external system
export function useExternalSystemLogs(systemId: string, startDate?: string, endDate?: string, options = {}) {
  return useQuery(GET_EXTERNAL_SYSTEM_LOGS, {
    variables: { systemId, startDate, endDate },
    skip: !systemId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Create a new external system
export function useCreateExternalSystem() {
  return useMutation(CREATE_EXTERNAL_SYSTEM, {
    refetchQueries: [{ query: GET_EXTERNAL_SYSTEMS }],
    update: (cache, { data: { insert_external_systems_one } }) => {
      const newSystem = insert_external_systems_one;
      cache.modify({
        fields: {
          external_systems(existingSystems = []) {
            const newSystemRef = cache.writeFragment({
              data: newSystem,
              fragment: EXTERNAL_SYSTEM_FRAGMENT
            });
            return [...existingSystems, newSystemRef];
          }
        }
      });
    }
  });
}

// Update an external system
export function useUpdateExternalSystem() {
  return useMutation(UPDATE_EXTERNAL_SYSTEM, {
    refetchQueries: [{ query: GET_EXTERNAL_SYSTEMS }]
  });
}

// Delete an external system
export function useDeleteExternalSystem() {
  return useMutation(DELETE_EXTERNAL_SYSTEM, {
    refetchQueries: [{ query: GET_EXTERNAL_SYSTEMS }],
    update: (cache, { data: { delete_external_systems_by_pk } }) => {
      cache.modify({
        fields: {
          external_systems(existingSystems = [], { readField }) {
            return existingSystems.filter(
              systemRef => readField('id', systemRef) !== delete_external_systems_by_pk.id
            );
          }
        }
      });
    }
  });
}

// Test connection to an external system
export function useTestExternalSystemConnection() {
  return useMutation(TEST_EXTERNAL_SYSTEM_CONNECTION);
}
