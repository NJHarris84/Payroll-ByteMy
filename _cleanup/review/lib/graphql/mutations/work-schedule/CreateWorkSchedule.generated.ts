import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { WorkScheduleFragmentFragmentDoc } from './fragments/WorkScheduleFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateWorkScheduleMutationVariables = Types.Exact<{
  input: Types.Work_Schedule_Insert_Input;
}>;


export type CreateWorkScheduleMutation = { __typename?: 'mutation_root', insert_work_schedule_one?: { __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null } | null };


export const CreateWorkScheduleDocument = gql`
    mutation CreateWorkSchedule($input: work_schedule_insert_input!) {
  insert_work_schedule_one(object: $input) {
    ...WorkScheduleFragment
  }
}
    ${WorkScheduleFragmentFragmentDoc}`;
export type CreateWorkScheduleMutationFn = Apollo.MutationFunction<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;

/**
 * __useCreateWorkScheduleMutation__
 *
 * To run a mutation, you first call `useCreateWorkScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkScheduleMutation, { data, loading, error }] = useCreateWorkScheduleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>(CreateWorkScheduleDocument, options);
      }
export type CreateWorkScheduleMutationHookResult = ReturnType<typeof useCreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationResult = Apollo.MutationResult<CreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationOptions = Apollo.BaseMutationOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;