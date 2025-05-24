import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CREATE_ADJUSTMENT_RULE_MUTATIONVariables = Types.Exact<{
  input: Types.Adjustment_Rules_Insert_Input;
}>;


export type CREATE_ADJUSTMENT_RULE_MUTATION = { __typename?: 'mutation_root', insert_adjustment_rules_one?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };


export const CREATE_ADJUSTMENT_RULE = gql`
    mutation CreateAdjustmentRule($input: adjustment_rules_insert_input!) {
  insert_adjustment_rules_one(object: $input) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;
export type CREATE_ADJUSTMENT_RULE_MUTATIONFn = Apollo.MutationFunction<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;

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
        return Apollo.useMutation<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>(CreateAdjustmentRuleDocument, options);
      }
export type CREATE_ADJUSTMENT_RULE_MUTATIONHookResult = ReturnType<typeof useCreateAdjustmentRuleMutation>;
export type CREATE_ADJUSTMENT_RULE_MUTATIONResult = Apollo.MutationResult<CreateAdjustmentRuleMutation>;
export type CREATE_ADJUSTMENT_RULE_MUTATIONOptions = Apollo.BaseMutationOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;