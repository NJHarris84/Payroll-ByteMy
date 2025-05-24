import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UPDATE_STAFF_MUTATIONVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Users_Set_Input;
}>;


export type UPDATE_STAFF_MUTATION = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const UPDATE_STAFF = gql`
    mutation UpdateStaff($id: uuid!, $input: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type UPDATE_STAFF_MUTATIONFn = Apollo.MutationFunction<UpdateStaffMutation, UpdateStaffMutationVariables>;

/**
 * __useUpdateStaffMutation__
 *
 * To run a mutation, you first call `useUpdateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffMutation, { data, loading, error }] = useUpdateStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStaffMutation, UpdateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, options);
      }
export type UPDATE_STAFF_MUTATIONHookResult = ReturnType<typeof useUpdateStaffMutation>;
export type UPDATE_STAFF_MUTATIONResult = Apollo.MutationResult<UpdateStaffMutation>;
export type UPDATE_STAFF_MUTATIONOptions = Apollo.BaseMutationOptions<UpdateStaffMutation, UpdateStaffMutationVariables>;