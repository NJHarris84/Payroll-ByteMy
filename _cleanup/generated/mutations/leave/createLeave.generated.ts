import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CREATE_LEAVE_MUTATIONVariables = Types.Exact<{
  input: Types.Leave_Insert_Input;
}>;


export type CREATE_LEAVE_MUTATION = { __typename?: 'mutation_root', insert_leave_one?: { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null } | null };


export const CREATE_LEAVE = gql`
    mutation CreateLeave($input: leave_insert_input!) {
  insert_leave_one(object: $input) {
    ...LeaveFragment
  }
}
    ${LeaveFragmentFragmentDoc}`;
export type CREATE_LEAVE_MUTATIONFn = Apollo.MutationFunction<CreateLeaveMutation, CreateLeaveMutationVariables>;

/**
 * __useCreateLeaveMutation__
 *
 * To run a mutation, you first call `useCreateLeaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeaveMutation, { data, loading, error }] = useCreateLeaveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLeaveMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeaveMutation, CreateLeaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeaveMutation, CreateLeaveMutationVariables>(CreateLeaveDocument, options);
      }
export type CREATE_LEAVE_MUTATIONHookResult = ReturnType<typeof useCreateLeaveMutation>;
export type CREATE_LEAVE_MUTATIONResult = Apollo.MutationResult<CreateLeaveMutation>;
export type CREATE_LEAVE_MUTATIONOptions = Apollo.BaseMutationOptions<CreateLeaveMutation, CreateLeaveMutationVariables>;