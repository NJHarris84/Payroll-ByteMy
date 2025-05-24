import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { HolidayFragmentFragmentDoc } from './fragments/HolidayFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetHolidaysByCountryQueryVariables = Types.Exact<{
  country_code: Types.Scalars['bpchar']['input'];
}>;


export type GetHolidaysByCountryQuery = { __typename?: 'query_root', holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> };


export const GetHolidaysByCountryDocument = gql`
    query GetHolidaysByCountry($country_code: bpchar!) {
  holidays(where: {country_code: {_eq: $country_code}}, order_by: {date: asc}) {
    ...HolidayFragment
  }
}
    ${HolidayFragmentFragmentDoc}`;

/**
 * __useGetHolidaysByCountryQuery__
 *
 * To run a query within a React component, call `useGetHolidaysByCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHolidaysByCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHolidaysByCountryQuery({
 *   variables: {
 *      country_code: // value for 'country_code'
 *   },
 * });
 */
export function useGetHolidaysByCountryQuery(baseOptions: Apollo.QueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables> & ({ variables: GetHolidaysByCountryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
      }
export function useGetHolidaysByCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
        }
export function useGetHolidaysByCountrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
        }
export type GetHolidaysByCountryQueryHookResult = ReturnType<typeof useGetHolidaysByCountryQuery>;
export type GetHolidaysByCountryLazyQueryHookResult = ReturnType<typeof useGetHolidaysByCountryLazyQuery>;
export type GetHolidaysByCountrySuspenseQueryHookResult = ReturnType<typeof useGetHolidaysByCountrySuspenseQuery>;
export type GetHolidaysByCountryQueryResult = Apollo.QueryResult<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>;