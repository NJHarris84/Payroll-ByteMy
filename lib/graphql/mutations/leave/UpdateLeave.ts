import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateLeaveMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.LeaveSetInput;
}>;


export type UpdateLeaveMutation = { __typename?: 'mutation_root', update_leave_by_pk?: { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null } | null };


export const UpdateLeave = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leave_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leave_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leave"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"leave_type"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode;
export type UpdateLeaveMutationFn = Apollo.MutationFunction<UpdateLeaveMutation, UpdateLeaveMutationVariables>;

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
        return Apollo.useMutation<UpdateLeaveMutation, UpdateLeaveMutationVariables>(UpdateLeave, options);
      }
export type UpdateLeaveMutationHookResult = ReturnType<typeof useUpdateLeaveMutation>;
export type UpdateLeaveMutationResult = Apollo.MutationResult<UpdateLeaveMutation>;
export type UpdateLeaveMutationOptions = Apollo.BaseMutationOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>;