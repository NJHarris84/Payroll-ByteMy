import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAppSettingsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAppSettingsQuery = { __typename?: 'query_root', app_settings: Array<{ __typename?: 'app_settings', id: string, permissions?: any | null }> };


export const GetAppSettings = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAppSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app_settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppSettingsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppSettingsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"app_settings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettings, options);
      }
export function useGetAppSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettings, options);
        }
export function useGetAppSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettings, options);
        }
export type GetAppSettingsQueryHookResult = ReturnType<typeof useGetAppSettingsQuery>;
export type GetAppSettingsLazyQueryHookResult = ReturnType<typeof useGetAppSettingsLazyQuery>;
export type GetAppSettingsSuspenseQueryHookResult = ReturnType<typeof useGetAppSettingsSuspenseQuery>;
export type GetAppSettingsQueryResult = Apollo.QueryResult<GetAppSettingsQuery, GetAppSettingsQueryVariables>;