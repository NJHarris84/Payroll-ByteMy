import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetHolidaysByCountryQueryVariables = Types.Exact<{
  country_code: Types.Scalars['bpchar']['input'];
}>;


export type GetHolidaysByCountryQuery = { __typename?: 'query_root', holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> };


export const GetHolidaysByCountry = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidaysByCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bpchar"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"country_code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HolidayFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"holidays"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"local_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"is_fixed"}},{"kind":"Field","name":{"kind":"Name","value":"is_global"}},{"kind":"Field","name":{"kind":"Name","value":"launch_year"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountry, options);
      }
export function useGetHolidaysByCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountry, options);
        }
export function useGetHolidaysByCountrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountry, options);
        }
export type GetHolidaysByCountryQueryHookResult = ReturnType<typeof useGetHolidaysByCountryQuery>;
export type GetHolidaysByCountryLazyQueryHookResult = ReturnType<typeof useGetHolidaysByCountryLazyQuery>;
export type GetHolidaysByCountrySuspenseQueryHookResult = ReturnType<typeof useGetHolidaysByCountrySuspenseQuery>;
export type GetHolidaysByCountryQueryResult = Apollo.QueryResult<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>;