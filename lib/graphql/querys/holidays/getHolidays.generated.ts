import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetHolidaysQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_HOLIDAYS_QUERY = { __typename?: 'query_root', holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> };


export const GET_HOLIDAYS = gql`
    query GetHolidays {
  holidays(order_by: {date: asc}) {
    ...HolidayFragment
  }
}
    ${HolidayFragmentFragmentDoc}`;

/**
 * __useGetHolidaysQuery__
 *
 * To run a query within a React component, call `useGetHolidaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHolidaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHolidaysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHolidaysQuery(baseOptions?: Apollo.QueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
      }
export function useGetHolidaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
        }
export function useGetHolidaysSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
        }
export type GET_HOLIDAYS_QUERYHookResult = ReturnType<typeof useGetHolidaysQuery>;
export type GET_HOLIDAYS_LAZY_QUERYHookResult = ReturnType<typeof useGetHolidaysLazyQuery>;
export type GET_HOLIDAYS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetHolidaysSuspenseQuery>;
export type GET_HOLIDAYS_QUERYResult = Apollo.QueryResult<GetHolidaysQuery, GetHolidaysQueryVariables>;