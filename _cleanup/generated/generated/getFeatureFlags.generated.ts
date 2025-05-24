import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_FEATURE_FLAGS_QUERYVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_FEATURE_FLAGS_QUERY = { __typename?: 'query_root', feature_flags: Array<{ __typename?: 'feature_flags', id: any, feature_name: string, is_enabled?: boolean | null, allowed_roles: any, updated_at?: any | null }> };


export const GET_FEATURE_FLAGS = gql`
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
export type GET_FEATURE_FLAGS_QUERYHookResult = ReturnType<typeof useGetFeatureFlagsQuery>;
export type GET_FEATURE_FLAGS_LAZY_QUERYHookResult = ReturnType<typeof useGetFeatureFlagsLazyQuery>;
export type GET_FEATURE_FLAGS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetFeatureFlagsSuspenseQuery>;
export type GET_FEATURE_FLAGS_QUERYResult = Apollo.QueryResult<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>;