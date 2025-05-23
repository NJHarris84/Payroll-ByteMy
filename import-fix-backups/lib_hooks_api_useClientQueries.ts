import { Client } from '@/types/interface';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CLIENTS_LIST } from '@/lib/graphql/queries/clients/getClientsList';
import { GET_CLIENT_BY_ID } from '@/lib/graphql/queries/clients/getClientById';
import { CREATE_CLIENT } from '@/lib/graphql/mutations/clients/createClient';
import { UPDATE_CLIENT } from '@/lib/graphql/mutations/clients/updateClient';

export function useClients(options = {}) {
  const { data, loading, error, refetch } = useQuery(GET_CLIENTS_LIST, options);
  
  return {
    clients: data?.clients as Client[] || [],
    loading,
    error,
    refetch
  };
}

export function useClientById(id: string, options = {}) {
  const { data, loading, error, refetch } = useQuery(GET_CLIENT_BY_ID, {
    variables: { id },
    ...options
  });
  
  return {
    client: data?.clients_by_pk as Client | null,
    loading,
    error,
    refetch
  };
}

export function useCreateClient() {
  const [createClient, { loading }] = useMutation(CREATE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS_LIST }]
  });
  
  return { createClient, loading };
}

export function useUpdateClient() {
  const [updateClient, { loading }] = useMutation(UPDATE_CLIENT);
  
  return { updateClient, loading };
}