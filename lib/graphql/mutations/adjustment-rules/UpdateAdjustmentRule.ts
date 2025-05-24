import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateAdjustmentRuleMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.AdjustmentRulesSetInput;
}>;


export type UpdateAdjustmentRuleMutation = { __typename?: 'mutation_root', update_adjustment_rules_by_pk?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };


export const UpdateAdjustmentRule = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAdjustmentRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_adjustment_rules_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdjustmentRuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export type UpdateAdjustmentRuleMutationFn = Apollo.MutationFunction<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;

/**
 * __useUpdateAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useUpdateAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdjustmentRuleMutation, { data, loading, error }] = useUpdateAdjustmentRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>(UpdateAdjustmentRule, options);
      }
export type UpdateAdjustmentRuleMutationHookResult = ReturnType<typeof useUpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationResult = Apollo.MutationResult<UpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;