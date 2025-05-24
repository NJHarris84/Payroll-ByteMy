import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateLeaveMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Leave_Set_Input;
}>;


export type UPDATE_LEAVE_MUTATION = { __typename?: 'mutation_root', update_leave_by_pk?: { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null } | null };


export const UPDATE_LEAVE = gql`
    mutation UpdateLeave($id: uuid!, $input: leave_set_input!) {
  update_leave_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...LeaveFragment
  }
}
    ${LeaveFragmentFragmentDoc}`;
export type UPDATE_LEAVE_MUTATIONFn = Apollo.MutationFunction<UpdateLeaveMutation, UpdateLeaveMutationVariables>;

/**
 * __useUpdateLeaveMutation__
 *
 * To run a mutation, you first call `useUpdateLeaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLeaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLeaveMutation, { data, loading, error }] = useUpdateLeaveMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLeaveMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLeaveMutation, UpdateLeaveMutationVariables>(UpdateLeaveDocument, options);
      }
export type UPDATE_LEAVE_MUTATIONHookResult = ReturnType<typeof useUpdateLeaveMutation>;
export type UPDATE_LEAVE_MUTATIONResult = Apollo.MutationResult<UpdateLeaveMutation>;
export type UPDATE_LEAVE_MUTATIONOptions = Apollo.BaseMutationOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>;