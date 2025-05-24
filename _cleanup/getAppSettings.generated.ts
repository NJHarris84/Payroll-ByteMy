import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAppSettingsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_APP_SETTINGS_QUERY = { __typename?: 'query_root', app_settings: Array<{ __typename?: 'app_settings', id: string, permissions?: any | null }> };


export const GET_APP_SETTINGS = gql`
    query GetAppSettings {
  app_settings {
    ...AppSettingsFragment
  }
}
    ${AppSettingsFragmentFragmentDoc}`;

/**
 * __useGetAppSettingsQuery__
 *
 * To run a query within a React component, call `useGetAppSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
      }
export function useGetAppSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
        }
export function useGetAppSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
        }
export type GET_APP_SETTINGS_QUERYHookResult = ReturnType<typeof useGetAppSettingsQuery>;
export type GET_APP_SETTINGS_LAZY_QUERYHookResult = ReturnType<typeof useGetAppSettingsLazyQuery>;
export type GET_APP_SETTINGS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetAppSettingsSuspenseQuery>;
export type GET_APP_SETTINGS_QUERYResult = Apollo.QueryResult<GetAppSettingsQuery, GetAppSettingsQueryVariables>;