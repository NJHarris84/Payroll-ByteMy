import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { StaffFragmentFragmentDoc } from './fragments/StaffFragment.generated';
import { StaffManagerFragmentFragmentDoc } from './fragments/StaffManagerFragment.generated';
import { StaffLeaveFragmentFragmentDoc } from './fragments/StaffLeaveFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetStaffByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type GetStaffByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null, manager?: { __typename?: 'users', id: any, name: string, email: string, role: any } | null, leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> } | null };


export const GetStaffByIdDocument = gql`
    query GetStaffById($id: uuid!) {
  users_by_pk(id: $id) {
    ...StaffFragment
    ...StaffManagerFragment
    ...StaffLeaveFragment
  }
}
    ${StaffFragmentFragmentDoc}
${StaffManagerFragmentFragmentDoc}
${StaffLeaveFragmentFragmentDoc}`;

/**
 * __useGetStaffByIdQuery__
 *
 * To run a query within a React component, call `useGetStaffByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStaffByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables> & ({ variables: GetStaffByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
      }
export function useGetStaffByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
        }
export function useGetStaffByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
        }
export type GetStaffByIdQueryHookResult = ReturnType<typeof useGetStaffByIdQuery>;
export type GetStaffByIdLazyQueryHookResult = ReturnType<typeof useGetStaffByIdLazyQuery>;
export type GetStaffByIdSuspenseQueryHookResult = ReturnType<typeof useGetStaffByIdSuspenseQuery>;
export type GetStaffByIdQueryResult = Apollo.QueryResult<GetStaffByIdQuery, GetStaffByIdQueryVariables>;