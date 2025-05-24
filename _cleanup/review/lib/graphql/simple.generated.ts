import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SimpleTestQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SimpleTestQuery = { __typename?: 'query_root', clients: Array<{ __typename?: 'clients', id: any, name: string }> };


export const SimpleTestDocument = gql`
    query SimpleTest {
  clients {
    id
    name
  }
}
    `;

/**
 * __useSimpleTestQuery__
 *
 * To run a query within a React component, call `useSimpleTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimpleTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimpleTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useSimpleTestQuery(baseOptions?: Apollo.QueryHookOptions<SimpleTestQuery, SimpleTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SimpleTestQuery, SimpleTestQueryVariables>(SimpleTestDocument, options);
      }
export function useSimpleTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SimpleTestQuery, SimpleTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SimpleTestQuery, SimpleTestQueryVariables>(SimpleTestDocument, options);
        }
export function useSimpleTestSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SimpleTestQuery, SimpleTestQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SimpleTestQuery, SimpleTestQueryVariables>(SimpleTestDocument, options);
        }
export type SimpleTestQueryHookResult = ReturnType<typeof useSimpleTestQuery>;
export type SimpleTestLazyQueryHookResult = ReturnType<typeof useSimpleTestLazyQuery>;
export type SimpleTestSuspenseQueryHookResult = ReturnType<typeof useSimpleTestSuspenseQuery>;
export type SimpleTestQueryResult = Apollo.QueryResult<SimpleTestQuery, SimpleTestQueryVariables>;