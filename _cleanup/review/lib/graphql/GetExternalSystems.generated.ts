import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { ExternalSystemFragmentFragmentDoc } from './fragments/ExternalSystemFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetExternalSystemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetExternalSystemsQuery = { __typename?: 'query_root', external_systems: Array<{ __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null, created_at?: any | null, updated_at?: any | null }> };


export const GetExternalSystemsDocument = gql`
    query GetExternalSystems {
  external_systems {
    ...ExternalSystemFragment
  }
}
    ${ExternalSystemFragmentFragmentDoc}`;

/**
 * __useGetExternalSystemsQuery__
 *
 * To run a query within a React component, call `useGetExternalSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExternalSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExternalSystemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExternalSystemsQuery(baseOptions?: Apollo.QueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
      }
export function useGetExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
        }
export function useGetExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
        }
export type GetExternalSystemsQueryHookResult = ReturnType<typeof useGetExternalSystemsQuery>;
export type GetExternalSystemsLazyQueryHookResult = ReturnType<typeof useGetExternalSystemsLazyQuery>;
export type GetExternalSystemsSuspenseQueryHookResult = ReturnType<typeof useGetExternalSystemsSuspenseQuery>;
export type GetExternalSystemsQueryResult = Apollo.QueryResult<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>;