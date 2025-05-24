import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_USER_PAYROLLS_QUERYVariables = Types.Exact<{
  userId: Types.Scalars['uuid']['input'];
}>;


export type GET_USER_PAYROLLS_QUERY = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string } }> };


export const GET_USER_PAYROLLS = gql`
    query GetUserPayrolls($userId: uuid!) {
  payrolls(
    where: {_or: [{primary_consultant_user_id: {_eq: $userId}}, {backup_consultant_user_id: {_eq: $userId}}, {manager_user_id: {_eq: $userId}}]}
  ) {
    ...PayrollFragment
    client {
      id
      name
    }
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetUserPayrollsQuery__
 *
 * To run a query within a React component, call `useGetUserPayrollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPayrollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPayrollsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserPayrollsQuery(baseOptions: Apollo.QueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables> & ({ variables: GetUserPayrollsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
      }
export function useGetUserPayrollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
        }
export function useGetUserPayrollsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
        }
export type GET_USER_PAYROLLS_QUERYHookResult = ReturnType<typeof useGetUserPayrollsQuery>;
export type GET_USER_PAYROLLS_LAZY_QUERYHookResult = ReturnType<typeof useGetUserPayrollsLazyQuery>;
export type GET_USER_PAYROLLS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetUserPayrollsSuspenseQuery>;
export type GET_USER_PAYROLLS_QUERYResult = Apollo.QueryResult<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>;