import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetClientStatisticsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetClientStatisticsQuery = { __typename?: 'query_root', clients_aggregate: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null }, active_clients: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null }, clients_with_payrolls: { __typename?: 'clients_aggregate', aggregate?: { __typename?: 'clients_aggregate_fields', count: number } | null } };


export const GetClientStatistics = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"active_clients"},"name":{"kind":"Name","value":"clients_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"clients_with_payrolls"},"name":{"kind":"Name","value":"clients_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payrolls"},"value":{"kind":"ObjectValue","fields":[]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatistics, options);
      }
export function useGetClientStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatistics, options);
        }
export function useGetClientStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatistics, options);
        }
export type GetClientStatisticsQueryHookResult = ReturnType<typeof useGetClientStatisticsQuery>;
export type GetClientStatisticsLazyQueryHookResult = ReturnType<typeof useGetClientStatisticsLazyQuery>;
export type GetClientStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetClientStatisticsSuspenseQuery>;
export type GetClientStatisticsQueryResult = Apollo.QueryResult<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>;