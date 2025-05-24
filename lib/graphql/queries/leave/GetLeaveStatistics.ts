import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLeaveStatisticsQueryVariables = Types.Exact<{
  startDate: Types.Scalars['date']['input'];
  endDate: Types.Scalars['date']['input'];
}>;


export type GetLeaveStatisticsQuery = { __typename?: 'query_root', leave_aggregate: { __typename?: 'leave_aggregate', aggregate?: { __typename?: 'leave_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'leave', leave_type: string, status?: any | null }> } };


export const GetLeaveStatistics = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave_type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetLeaveStatisticsQuery__
 *
 * To run a query within a React component, call `useGetLeaveStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaveStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaveStatisticsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetLeaveStatisticsQuery(baseOptions: Apollo.QueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables> & ({ variables: GetLeaveStatisticsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatistics, options);
      }
export function useGetLeaveStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatistics, options);
        }
export function useGetLeaveStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatistics, options);
        }
export type GetLeaveStatisticsQueryHookResult = ReturnType<typeof useGetLeaveStatisticsQuery>;
export type GetLeaveStatisticsLazyQueryHookResult = ReturnType<typeof useGetLeaveStatisticsLazyQuery>;
export type GetLeaveStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetLeaveStatisticsSuspenseQuery>;
export type GetLeaveStatisticsQueryResult = Apollo.QueryResult<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>;