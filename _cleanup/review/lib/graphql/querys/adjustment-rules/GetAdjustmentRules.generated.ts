import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { AdjustmentRuleFragmentFragmentDoc } from './fragments/AdjustmentRuleFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAdjustmentRulesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAdjustmentRulesQuery = { __typename?: 'query_root', adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } }> };


export const GetAdjustmentRulesDocument = gql`
    query GetAdjustmentRules {
  adjustment_rules(order_by: {created_at: desc}) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;

/**
 * __useGetAdjustmentRulesQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentRulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentRulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdjustmentRulesQuery(baseOptions?: Apollo.QueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
      }
export function useGetAdjustmentRulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
        }
export function useGetAdjustmentRulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
        }
export type GetAdjustmentRulesQueryHookResult = ReturnType<typeof useGetAdjustmentRulesQuery>;
export type GetAdjustmentRulesLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRulesLazyQuery>;
export type GetAdjustmentRulesSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRulesSuspenseQuery>;
export type GetAdjustmentRulesQueryResult = Apollo.QueryResult<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>;