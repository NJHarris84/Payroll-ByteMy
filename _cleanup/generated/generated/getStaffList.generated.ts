import * as Types from '../../generated/types';

import { gql } from '@apollo/client';



import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_STAFF_LIST_QUERYVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_STAFF_LIST_QUERY = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null, manager?: { __typename?: 'users', id: any, name: string, email: string, role: any } | null, leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> }> };


export const GET_STAFF_LIST = gql`
    query GetStaffList {
  users(where: {is_staff: {_eq: true}}) {
    ...StaffFragment
    ...StaffManagerFragment
    ...StaffLeaveFragment
  }
}
    ${StaffFragmentFragmentDoc}
${StaffManagerFragmentFragmentDoc}
${StaffLeaveFragmentFragmentDoc}`;

/**
 * __useGetStaffListQuery__
 *
 * To run a query within a React component, call `useGetStaffListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStaffListQuery(baseOptions?: Apollo.QueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
      }
export function useGetStaffListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
        }
export function useGetStaffListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
        }
export type GET_STAFF_LIST_QUERYHookResult = ReturnType<typeof useGetStaffListQuery>;
export type GET_STAFF_LIST_LAZY_QUERYHookResult = ReturnType<typeof useGetStaffListLazyQuery>;
export type GET_STAFF_LIST_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetStaffListSuspenseQuery>;
export type GET_STAFF_LIST_QUERYResult = Apollo.QueryResult<GetStaffListQuery, GetStaffListQueryVariables>;