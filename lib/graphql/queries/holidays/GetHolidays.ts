import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetHolidaysQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHolidaysQuery = { __typename?: 'query_root', holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> };


export const GetHolidays = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HolidayFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"holidays"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"local_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"is_fixed"}},{"kind":"Field","name":{"kind":"Name","value":"is_global"}},{"kind":"Field","name":{"kind":"Name","value":"launch_year"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidays, options);
      }
export function useGetHolidaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidays, options);
        }
export function useGetHolidaysSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidays, options);
        }
export type GetHolidaysQueryHookResult = ReturnType<typeof useGetHolidaysQuery>;
export type GetHolidaysLazyQueryHookResult = ReturnType<typeof useGetHolidaysLazyQuery>;
export type GetHolidaysSuspenseQueryHookResult = ReturnType<typeof useGetHolidaysSuspenseQuery>;
export type GetHolidaysQueryResult = Apollo.QueryResult<GetHolidaysQuery, GetHolidaysQueryVariables>;