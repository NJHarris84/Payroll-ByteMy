import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { AdjustmentRuleFragmentFragmentDoc } from './fragments/AdjustmentRuleFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateAdjustmentRuleMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Adjustment_Rules_Set_Input;
}>;


export type UpdateAdjustmentRuleMutation = { __typename?: 'mutation_root', update_adjustment_rules_by_pk?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };


export const UpdateAdjustmentRuleDocument = gql`
    mutation UpdateAdjustmentRule($id: uuid!, $input: adjustment_rules_set_input!) {
  update_adjustment_rules_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;
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
        return Apollo.useMutation<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>(UpdateAdjustmentRuleDocument, options);
      }
export type UpdateAdjustmentRuleMutationHookResult = ReturnType<typeof useUpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationResult = Apollo.MutationResult<UpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;