import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollStatisticsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPayrollStatisticsQuery = { __typename?: 'query_root', payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'payrolls', status: any }> }, active_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null }, implementation_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null }, inactive_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } };


export const GetPayrollStatistics = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"active_payrolls"},"name":{"kind":"Name","value":"payrolls_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Active","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"implementation_payrolls"},"name":{"kind":"Name","value":"payrolls_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Implementation","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive_payrolls"},"name":{"kind":"Name","value":"payrolls_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Inactive","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetPayrollStatisticsQuery__
 *
 * To run a query within a React component, call `useGetPayrollStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatistics, options);
      }
export function useGetPayrollStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatistics, options);
        }
export function useGetPayrollStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatistics, options);
        }
export type GetPayrollStatisticsQueryHookResult = ReturnType<typeof useGetPayrollStatisticsQuery>;
export type GetPayrollStatisticsLazyQueryHookResult = ReturnType<typeof useGetPayrollStatisticsLazyQuery>;
export type GetPayrollStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetPayrollStatisticsSuspenseQuery>;
export type GetPayrollStatisticsQueryResult = Apollo.QueryResult<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>;