import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WITH_VARIABLES_QUERYVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type WITH_VARIABLES_QUERY = { __typename?: 'query_root', clients_by_pk?: { __typename?: 'clients', id: any, name: string } | null };


export const WITH_VARIABLES = gql`
    query WithVariables($id: uuid!) {
  clients_by_pk(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useWithVariablesQuery__
 *
 * To run a query within a React component, call `useWithVariablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWithVariablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWithVariablesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWithVariablesQuery(baseOptions: Apollo.QueryHookOptions<WithVariablesQuery, WithVariablesQueryVariables> & ({ variables: WithVariablesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WithVariablesQuery, WithVariablesQueryVariables>(WithVariablesDocument, options);
      }
export function useWithVariablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WithVariablesQuery, WithVariablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WithVariablesQuery, WithVariablesQueryVariables>(WithVariablesDocument, options);
        }
export function useWithVariablesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WithVariablesQuery, WithVariablesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WithVariablesQuery, WithVariablesQueryVariables>(WithVariablesDocument, options);
        }
export type WITH_VARIABLES_QUERYHookResult = ReturnType<typeof useWithVariablesQuery>;
export type WITH_VARIABLES_LAZY_QUERYHookResult = ReturnType<typeof useWithVariablesLazyQuery>;
export type WITH_VARIABLES_SUSPENSE_QUERYHookResult = ReturnType<typeof useWithVariablesSuspenseQuery>;
export type WITH_VARIABLES_QUERYResult = Apollo.QueryResult<WithVariablesQuery, WithVariablesQueryVariables>;