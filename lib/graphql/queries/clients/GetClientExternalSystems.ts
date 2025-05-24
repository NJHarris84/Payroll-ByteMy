import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetClientExternalSystemsQueryVariables = Types.Exact<{
  clientId: Types.Scalars['uuid']['input'];
}>;


export type GetClientExternalSystemsQuery = { __typename?: 'query_root', client_external_systems: Array<{ __typename?: 'client_external_systems', id: any, client_id: any, system_id: any, system_client_id?: string | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, external_system: { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null } }> };


export const GetClientExternalSystems = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientExternalSystems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_external_systems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"client_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ClientExternalSystemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ClientExternalSystemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"client_external_systems"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"system_id"}},{"kind":"Field","name":{"kind":"Name","value":"system_client_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"external_system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystems, options);
      }
export function useGetClientExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystems, options);
        }
export function useGetClientExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystems, options);
        }
export type GetClientExternalSystemsQueryHookResult = ReturnType<typeof useGetClientExternalSystemsQuery>;
export type GetClientExternalSystemsLazyQueryHookResult = ReturnType<typeof useGetClientExternalSystemsLazyQuery>;
export type GetClientExternalSystemsSuspenseQueryHookResult = ReturnType<typeof useGetClientExternalSystemsSuspenseQuery>;
export type GetClientExternalSystemsQueryResult = Apollo.QueryResult<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>;