import { useQuery, useMutation } from '@apollo/client';
import { GET_CLIENT_EXTERNAL_SYSTEMS } from '@/lib/graphql/queries/clientExternalSystems/getClientExternalSystems';
import {
  CREATE_CLIENT_EXTERNAL_SYSTEM,
  DELETE_CLIENT_EXTERNAL_SYSTEM
} from '@/lib/graphql/mutations';

export function useClientExternalSystems(clientId: string, options = {}) {
  return useQuery(GET_CLIENT_EXTERNAL_SYSTEMS, {
    variables: { clientId },
    skip: !clientId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreateClientExternalSystem() {
  return useMutation(CREATE_CLIENT_EXTERNAL_SYSTEM, {
    update(cache, { data }) {
      // Update cache after creation
      if (data?.insert_client_external_systems_one) {
        const clientId = data.insert_client_external_systems_one.client_id;
        const existing = cache.readQuery({
          query: GET_CLIENT_EXTERNAL_SYSTEMS,
          variables: { clientId }
        });
        
        if (existing) {
          cache.writeQuery({
            query: GET_CLIENT_EXTERNAL_SYSTEMS,
            variables: { clientId },
            data: {
              client_external_systems: [
                ...existing.client_external_systems,
                data.insert_client_external_systems_one
              ]
            }
          });
        }
      }
    }
  });
}

export function useDeleteClientExternalSystem() {
  return useMutation(DELETE_CLIENT_EXTERNAL_SYSTEM);
}
