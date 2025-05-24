import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollCyclesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPayrollCyclesQuery = { __typename?: 'query_root', payroll_cycles: Array<{ __typename?: 'payroll_cycles', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null, adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, date_type_id: any, rule_code: string, rule_description: string }>, payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } }> };


export const GetPayrollCycles = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollCycles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payroll_cycles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollCycleFragment"}},{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payrolls_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollCycleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_cycles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

/**
 * __useGetPayrollCyclesQuery__
 *
 * To run a query within a React component, call `useGetPayrollCyclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollCyclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollCyclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollCyclesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCycles, options);
      }
export function useGetPayrollCyclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCycles, options);
        }
export function useGetPayrollCyclesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCycles, options);
        }
export type GetPayrollCyclesQueryHookResult = ReturnType<typeof useGetPayrollCyclesQuery>;
export type GetPayrollCyclesLazyQueryHookResult = ReturnType<typeof useGetPayrollCyclesLazyQuery>;
export type GetPayrollCyclesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollCyclesSuspenseQuery>;
export type GetPayrollCyclesQueryResult = Apollo.QueryResult<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>;