import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAdjustmentRuleByCycleAndTypeQueryVariables = Types.Exact<{
  cycleId: Types.Scalars['uuid']['input'];
  dateTypeId: Types.Scalars['uuid']['input'];
}>;


export type GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE_QUERY = { __typename?: 'query_root', adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } }> };


export const GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE = gql`
    query GetAdjustmentRuleByCycleAndType($cycleId: uuid!, $dateTypeId: uuid!) {
  adjustment_rules(
    where: {cycle_id: {_eq: $cycleId}, date_type_id: {_eq: $dateTypeId}}
  ) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;

/**
 * __useGetAdjustmentRuleByCycleAndTypeQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentRuleByCycleAndTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentRuleByCycleAndTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentRuleByCycleAndTypeQuery({
 *   variables: {
 *      cycleId: // value for 'cycleId'
 *      dateTypeId: // value for 'dateTypeId'
 *   },
 * });
 */
export function useGetAdjustmentRuleByCycleAndTypeQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables> & ({ variables: GetAdjustmentRuleByCycleAndTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
      }
export function useGetAdjustmentRuleByCycleAndTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
        }
export function useGetAdjustmentRuleByCycleAndTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
        }
export type GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE_QUERYHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeQuery>;
export type GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE_LAZY_QUERYHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeLazyQuery>;
export type GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeSuspenseQuery>;
export type GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE_QUERYResult = Apollo.QueryResult<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>;