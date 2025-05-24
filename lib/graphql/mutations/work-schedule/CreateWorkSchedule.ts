import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateWorkScheduleMutationVariables = Types.Exact<{
  input: Types.WorkScheduleInsertInput;
}>;


export type CreateWorkScheduleMutation = { __typename?: 'mutation_root', insert_work_schedule_one?: { __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null } | null };


export const CreateWorkSchedule = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"work_schedule_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_work_schedule_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkScheduleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkScheduleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"work_schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"work_day"}},{"kind":"Field","name":{"kind":"Name","value":"work_hours"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
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
        return Apollo.useMutation<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>(CreateWorkSchedule, options);
      }
export type CreateWorkScheduleMutationHookResult = ReturnType<typeof useCreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationResult = Apollo.MutationResult<CreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationOptions = Apollo.BaseMutationOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;