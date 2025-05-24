import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_CLIENTS_LIST_QUERYVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_CLIENTS_LIST_QUERY = { __typename?: 'query_root', clients: Array<{ __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null }> };


export const GET_CLIENTS_LIST = gql`
    query GetClientsList {
  clients(order_by: {name: asc}) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;

/**
 * __useGetClientsListQuery__
 *
 * To run a query within a React component, call `useGetClientsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientsListQuery(baseOptions?: Apollo.QueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
      }
export function useGetClientsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
        }
export function useGetClientsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
        }
export type GET_CLIENTS_LIST_QUERYHookResult = ReturnType<typeof useGetClientsListQuery>;
export type GET_CLIENTS_LIST_LAZY_QUERYHookResult = ReturnType<typeof useGetClientsListLazyQuery>;
export type GET_CLIENTS_LIST_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetClientsListSuspenseQuery>;
export type GET_CLIENTS_LIST_QUERYResult = Apollo.QueryResult<GetClientsListQuery, GetClientsListQueryVariables>;