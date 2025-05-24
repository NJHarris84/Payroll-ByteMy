import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetClientStatisticsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetClientStatisticsQuery = { __typename?: 'query_root', clients_aggregate: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null }, active_clients: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null }, clients_with_payrolls: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null } };


export const GetClientStatisticsDocument = gql`
    query GetClientStatistics {
  clients_aggregate {
    aggregate {
      count
    }
  }
  active_clients: clients_aggregate(where: {active: {_eq: true}}) {
    aggregate {
      count
    }
  }
  clients_with_payrolls: clients_aggregate(where: {payrolls: {}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetClientStatisticsQuery__
 *
 * To run a query within a React component, call `useGetClientStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
      }
export function useGetClientStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
        }
export function useGetClientStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
        }
export type GetClientStatisticsQueryHookResult = ReturnType<typeof useGetClientStatisticsQuery>;
export type GetClientStatisticsLazyQueryHookResult = ReturnType<typeof useGetClientStatisticsLazyQuery>;
export type GetClientStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetClientStatisticsSuspenseQuery>;
export type GetClientStatisticsQueryResult = Apollo.QueryResult<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>;