import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DELETE_CLIENT_MUTATIONVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type DELETE_CLIENT_MUTATION = { __typename?: 'mutation_root', delete_clients_by_pk?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };


export const DELETE_CLIENT = gql`
    mutation DeleteClient($id: uuid!) {
  delete_clients_by_pk(id: $id) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type DELETE_CLIENT_MUTATIONFn = Apollo.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, options);
      }
export type DELETE_CLIENT_MUTATIONHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DELETE_CLIENT_MUTATIONResult = Apollo.MutationResult<DeleteClientMutation>;
export type DELETE_CLIENT_MUTATIONOptions = Apollo.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;