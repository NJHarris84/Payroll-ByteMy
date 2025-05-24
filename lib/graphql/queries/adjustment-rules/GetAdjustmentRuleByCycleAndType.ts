import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAdjustmentRuleByCycleAndTypeQueryVariables = Types.Exact<{
  cycleId: Types.Scalars['uuid']['input'];
  dateTypeId: Types.Scalars['uuid']['input'];
}>;


export type GetAdjustmentRuleByCycleAndTypeQuery = { __typename?: 'query_root', adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } }> };


export const GetAdjustmentRuleByCycleAndType = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdjustmentRuleByCycleAndType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cycleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTypeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cycle_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cycleId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"date_type_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTypeId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdjustmentRuleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdjustmentRuleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"adjustment_rules"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_cycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payroll_date_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndType, options);
      }
export function useGetAdjustmentRuleByCycleAndTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndType, options);
        }
export function useGetAdjustmentRuleByCycleAndTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndType, options);
        }
export type GetAdjustmentRuleByCycleAndTypeQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeQuery>;
export type GetAdjustmentRuleByCycleAndTypeLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeLazyQuery>;
export type GetAdjustmentRuleByCycleAndTypeSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeSuspenseQuery>;
export type GetAdjustmentRuleByCycleAndTypeQueryResult = Apollo.QueryResult<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>;