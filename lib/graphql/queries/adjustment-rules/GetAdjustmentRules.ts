import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAdjustmentRulesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAdjustmentRulesQuery = { __typename?: 'query_root', adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } }> };


export const GetAdjustmentRules = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentRules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdjustmentRuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRules, options);
      }
export function useGetAdjustmentRulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRules, options);
        }
export function useGetAdjustmentRulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRules, options);
        }
export type GetAdjustmentRulesQueryHookResult = ReturnType<typeof useGetAdjustmentRulesQuery>;
export type GetAdjustmentRulesLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRulesLazyQuery>;
export type GetAdjustmentRulesSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRulesSuspenseQuery>;
export type GetAdjustmentRulesQueryResult = Apollo.QueryResult<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>;