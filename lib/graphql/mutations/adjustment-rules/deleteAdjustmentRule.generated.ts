import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeleteAdjustmentRuleMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type DELETE_ADJUSTMENT_RULE_MUTATION = { __typename?: 'mutation_root', delete_adjustment_rules_by_pk?: { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } } | null };


export const DELETE_ADJUSTMENT_RULE = gql`
    mutation DeleteAdjustmentRule($id: uuid!) {
  delete_adjustment_rules_by_pk(id: $id) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;
export type DELETE_ADJUSTMENT_RULE_MUTATIONFn = Apollo.MutationFunction<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>;

/**
 * __useDeleteAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useDeleteAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdjustmentRuleMutation, { data, loading, error }] = useDeleteAdjustmentRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>(DeleteAdjustmentRuleDocument, options);
      }
export type DELETE_ADJUSTMENT_RULE_MUTATIONHookResult = ReturnType<typeof useDeleteAdjustmentRuleMutation>;
export type DELETE_ADJUSTMENT_RULE_MUTATIONResult = Apollo.MutationResult<DeleteAdjustmentRuleMutation>;
export type DELETE_ADJUSTMENT_RULE_MUTATIONOptions = Apollo.BaseMutationOptions<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>;