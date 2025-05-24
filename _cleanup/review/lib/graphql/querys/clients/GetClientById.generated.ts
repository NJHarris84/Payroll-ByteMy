import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { ClientFragmentFragmentDoc } from './fragments/ClientFragment.generated';
import { PayrollFragmentFragmentDoc } from './fragments/PayrollFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetClientByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type GetClientByIdQuery = { __typename?: 'query_root', clients_by_pk?: { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null, payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null }> } | null };


export const GetClientByIdDocument = gql`
    query GetClientById($id: uuid!) {
  clients_by_pk(id: $id) {
    ...ClientFragment
    payrolls {
      ...PayrollFragment
    }
  }
}
    ${ClientFragmentFragmentDoc}
${PayrollFragmentFragmentDoc}`;

/**
 * __useGetClientByIdQuery__
 *
 * To run a query within a React component, call `useGetClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClientByIdQuery(baseOptions: Apollo.QueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables> & ({ variables: GetClientByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
      }
export function useGetClientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
        }
export function useGetClientByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
        }
export type GetClientByIdQueryHookResult = ReturnType<typeof useGetClientByIdQuery>;
export type GetClientByIdLazyQueryHookResult = ReturnType<typeof useGetClientByIdLazyQuery>;
export type GetClientByIdSuspenseQueryHookResult = ReturnType<typeof useGetClientByIdSuspenseQuery>;
export type GetClientByIdQueryResult = Apollo.QueryResult<GetClientByIdQuery, GetClientByIdQueryVariables>;