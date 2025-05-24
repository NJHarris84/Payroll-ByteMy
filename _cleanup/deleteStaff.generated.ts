import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeleteStaffMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type DELETE_STAFF_MUTATION = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const DELETE_STAFF = gql`
    mutation DeleteStaff($id: uuid!) {
  delete_users_by_pk(id: $id) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type DELETE_STAFF_MUTATIONFn = Apollo.MutationFunction<DeleteStaffMutation, DeleteStaffMutationVariables>;

/**
 * __useDeleteStaffMutation__
 *
 * To run a mutation, you first call `useDeleteStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStaffMutation, { data, loading, error }] = useDeleteStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStaffMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStaffMutation, DeleteStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStaffMutation, DeleteStaffMutationVariables>(DeleteStaffDocument, options);
      }
export type DELETE_STAFF_MUTATIONHookResult = ReturnType<typeof useDeleteStaffMutation>;
export type DELETE_STAFF_MUTATIONResult = Apollo.MutationResult<DeleteStaffMutation>;
export type DELETE_STAFF_MUTATIONOptions = Apollo.BaseMutationOptions<DeleteStaffMutation, DeleteStaffMutationVariables>;