import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CREATE_CLIENT_MUTATIONVariables = Types.Exact<{
  input: Types.Clients_Insert_Input;
}>;


export type CREATE_CLIENT_MUTATION = { __typename?: 'mutation_root', insert_clients_one?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };


export const CREATE_CLIENT = gql`
    mutation CreateClient($input: clients_insert_input!) {
  insert_clients_one(object: $input) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type CREATE_CLIENT_MUTATIONFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CREATE_CLIENT_MUTATIONHookResult = ReturnType<typeof useCreateClientMutation>;
export type CREATE_CLIENT_MUTATIONResult = Apollo.MutationResult<CreateClientMutation>;
export type CREATE_CLIENT_MUTATIONOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;