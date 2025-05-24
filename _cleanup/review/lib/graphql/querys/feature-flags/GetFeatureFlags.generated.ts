import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { FeatureFlagFragmentFragmentDoc } from './fragments/FeatureFlagFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFeatureFlagsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFeatureFlagsQuery = { __typename?: 'query_root', feature_flags: Array<{ __typename?: 'feature_flags', id: any, feature_name: string, is_enabled?: boolean | null, allowed_roles: any, updated_at?: any | null }> };


export const GetFeatureFlagsDocument = gql`
    query GetFeatureFlags {
  feature_flags {
    ...FeatureFlagFragment
  }
}
    ${FeatureFlagFragmentFragmentDoc}`;

/**
 * __useGetFeatureFlagsQuery__
 *
 * To run a query within a React component, call `useGetFeatureFlagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureFlagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureFlagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeatureFlagsQuery(baseOptions?: Apollo.QueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
      }
export function useGetFeatureFlagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
        }
export function useGetFeatureFlagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
        }
export type GetFeatureFlagsQueryHookResult = ReturnType<typeof useGetFeatureFlagsQuery>;
export type GetFeatureFlagsLazyQueryHookResult = ReturnType<typeof useGetFeatureFlagsLazyQuery>;
export type GetFeatureFlagsSuspenseQueryHookResult = ReturnType<typeof useGetFeatureFlagsSuspenseQuery>;
export type GetFeatureFlagsQueryResult = Apollo.QueryResult<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>;