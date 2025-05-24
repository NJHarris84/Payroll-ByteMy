import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollStatisticsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_PAYROLL_STATISTICS_QUERY = { __typename?: 'query_root', payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null, nodes: Array<{ __typename?: 'payrolls', status: any }> }, active_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null }, implementation_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null }, inactive_payrolls: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } };


export const GET_PAYROLL_STATISTICS = gql`
    query GetPayrollStatistics {
  payrolls_aggregate {
    aggregate {
      count
    }
    nodes {
      status
    }
  }
  active_payrolls: payrolls_aggregate(where: {status: {_eq: "Active"}}) {
    aggregate {
      count
    }
  }
  implementation_payrolls: payrolls_aggregate(
    where: {status: {_eq: "Implementation"}}
  ) {
    aggregate {
      count
    }
  }
  inactive_payrolls: payrolls_aggregate(where: {status: {_eq: "Inactive"}}) {
    aggregate {
      count
    }
  }
}
    `;

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
        return Apollo.useQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
      }
export function useGetPayrollStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
        }
export function useGetPayrollStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
        }
export type GET_PAYROLL_STATISTICS_QUERYHookResult = ReturnType<typeof useGetPayrollStatisticsQuery>;
export type GET_PAYROLL_STATISTICS_LAZY_QUERYHookResult = ReturnType<typeof useGetPayrollStatisticsLazyQuery>;
export type GET_PAYROLL_STATISTICS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetPayrollStatisticsSuspenseQuery>;
export type GET_PAYROLL_STATISTICS_QUERYResult = Apollo.QueryResult<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>;