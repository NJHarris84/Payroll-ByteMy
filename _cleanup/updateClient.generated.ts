import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateClientMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Clients_Set_Input;
}>;


export type UPDATE_CLIENT_MUTATION = { __typename?: 'mutation_root', update_clients_by_pk?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };


export const UPDATE_CLIENT = gql`
    mutation UpdateClient($id: uuid!, $input: clients_set_input!) {
  update_clients_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type UPDATE_CLIENT_MUTATIONFn = Apollo.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, options);
      }
export type UPDATE_CLIENT_MUTATIONHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UPDATE_CLIENT_MUTATIONResult = Apollo.MutationResult<UpdateClientMutation>;
export type UPDATE_CLIENT_MUTATIONOptions = Apollo.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;