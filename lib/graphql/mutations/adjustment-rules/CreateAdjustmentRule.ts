import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateAdjustmentRuleMutationVariables = Types.Exact<{
  input: Types.AdjustmentRulesInsertInput;
}>;


export type CreateAdjustmentRuleMutation = { __typename?: 'mutation_root', insert_adjustment_rules_one?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };


export const CreateAdjustmentRule = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdjustmentRule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_adjustment_rules_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdjustmentRuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export type CreateAdjustmentRuleMutationFn = Apollo.MutationFunction<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;

/**
 * __useCreateAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useCreateAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdjustmentRuleMutation, { data, loading, error }] = useCreateAdjustmentRuleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>(CreateAdjustmentRule, options);
      }
export type CreateAdjustmentRuleMutationHookResult = ReturnType<typeof useCreateAdjustmentRuleMutation>;
export type CreateAdjustmentRuleMutationResult = Apollo.MutationResult<CreateAdjustmentRuleMutation>;
export type CreateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;