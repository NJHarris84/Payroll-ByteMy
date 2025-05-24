import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLeaveStatisticsQueryVariables = Types.Exact<{
  startDate: Types.Scalars['date']['input'];
  endDate: Types.Scalars['date']['input'];
}>;


export type GET_LEAVE_STATISTICS_QUERY = { __typename?: 'query_root', leave_aggregate: { __typename?: 'leave_aggregate', aggregate?: { __typename?: 'leave_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'leave', leave_type: string, status?: any | null }> } };


export const GET_LEAVE_STATISTICS = gql`
    query GetLeaveStatistics($startDate: date!, $endDate: date!) {
  leave_aggregate(
    where: {start_date: {_gte: $startDate}, end_date: {_lte: $endDate}}
  ) {
    aggregate {
      count
    }
    nodes {
      leave_type
      status
    }
  }
}
    `;

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
        return Apollo.useQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
      }
export function useGetLeaveStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
        }
export function useGetLeaveStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
        }
export type GET_LEAVE_STATISTICS_QUERYHookResult = ReturnType<typeof useGetLeaveStatisticsQuery>;
export type GET_LEAVE_STATISTICS_LAZY_QUERYHookResult = ReturnType<typeof useGetLeaveStatisticsLazyQuery>;
export type GET_LEAVE_STATISTICS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetLeaveStatisticsSuspenseQuery>;
export type GET_LEAVE_STATISTICS_QUERYResult = Apollo.QueryResult<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>;