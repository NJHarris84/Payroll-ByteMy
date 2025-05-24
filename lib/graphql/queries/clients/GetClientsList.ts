import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetClientsListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetClientsListQuery = { __typename?: 'query_root', clients: Array<{ __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null }> };


export const GetClientsList = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClientFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"clients"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_person"}},{"kind":"Field","name":{"kind":"Name","value":"contact_email"}},{"kind":"Field","name":{"kind":"Name","value":"contact_phone"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsList, options);
      }
export function useGetClientsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsList, options);
        }
export function useGetClientsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsList, options);
        }
export type GetClientsListQueryHookResult = ReturnType<typeof useGetClientsListQuery>;
export type GetClientsListLazyQueryHookResult = ReturnType<typeof useGetClientsListLazyQuery>;
export type GetClientsListSuspenseQueryHookResult = ReturnType<typeof useGetClientsListSuspenseQuery>;
export type GetClientsListQueryResult = Apollo.QueryResult<GetClientsListQuery, GetClientsListQueryVariables>;