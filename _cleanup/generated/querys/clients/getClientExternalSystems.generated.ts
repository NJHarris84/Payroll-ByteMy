import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_CLIENT_EXTERNAL_SYSTEMS_QUERYVariables = Types.Exact<{
  clientId: Types.Scalars['uuid']['input'];
}>;


export type GET_CLIENT_EXTERNAL_SYSTEMS_QUERY = { __typename?: 'query_root', client_external_systems: Array<{ __typename?: 'client_external_systems', id: any, client_id: any, system_id: any, system_client_id?: string | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, external_system: { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null } }> };


export const GET_CLIENT_EXTERNAL_SYSTEMS = gql`
    query GetClientExternalSystems($clientId: uuid!) {
  client_external_systems(where: {client_id: {_eq: $clientId}}) {
    ...ClientExternalSystemFragment
  }
}
    ${ClientExternalSystemFragmentFragmentDoc}`;

/**
 * __useGetClientExternalSystemsQuery__
 *
 * To run a query within a React component, call `useGetClientExternalSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientExternalSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientExternalSystemsQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetClientExternalSystemsQuery(baseOptions: Apollo.QueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables> & ({ variables: GetClientExternalSystemsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
      }
export function useGetClientExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
        }
export function useGetClientExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
        }
export type GET_CLIENT_EXTERNAL_SYSTEMS_QUERYHookResult = ReturnType<typeof useGetClientExternalSystemsQuery>;
export type GET_CLIENT_EXTERNAL_SYSTEMS_LAZY_QUERYHookResult = ReturnType<typeof useGetClientExternalSystemsLazyQuery>;
export type GET_CLIENT_EXTERNAL_SYSTEMS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetClientExternalSystemsSuspenseQuery>;
export type GET_CLIENT_EXTERNAL_SYSTEMS_QUERYResult = Apollo.QueryResult<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>;