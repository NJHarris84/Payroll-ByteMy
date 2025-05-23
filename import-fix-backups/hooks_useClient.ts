import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_CLIENTS_LIST 
} from "@/lib/graphql/queries/clients/getClientsList";
import { 
  GET_CLIENT_BY_ID 
} from "@/lib/graphql/queries/clients/getClientById";
import { 
  CREATE_CLIENT 
} from "@/lib/graphql/mutations/clients/createClient";
import { 
  UPDATE_CLIENT 
} from "@/lib/graphql/mutations/clients/updateClient";
import { 
  DELETE_CLIENT 
} from "@/lib/graphql/mutations/clients/deleteClient";

export function useClientsList(options = {}) {
  return useQuery(GET_CLIENTS_LIST, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useClientById(id: string, options = {}) {
  return useQuery(GET_CLIENT_BY_ID, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreateClient() {
  return useMutation(CREATE_CLIENT);
}

export function useUpdateClient() {
  return useMutation(UPDATE_CLIENT);
}

export function useDeleteClient() {
  return useMutation(DELETE_CLIENT);
}