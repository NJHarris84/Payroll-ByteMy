import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Users_Set_Input;
}>;


export type UPDATE_USER_MUTATION = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const UPDATE_USER = gql`
    mutation UpdateUser($id: uuid!, $input: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type UPDATE_USER_MUTATIONFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UPDATE_USER_MUTATIONHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UPDATE_USER_MUTATIONResult = Apollo.MutationResult<UpdateUserMutation>;
export type UPDATE_USER_MUTATIONOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;