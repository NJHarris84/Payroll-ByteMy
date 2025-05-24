import type * as Types from '../generated/types';

import { gql } from '@apollo/client';



import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_DASHBOARD_DATA_QUERYVariables = Types.Exact<{
  userId: Types.Scalars['uuid']['input'];
  startDate: Types.Scalars['date']['input'];
  endDate: Types.Scalars['date']['input'];
}>;


export type GET_DASHBOARD_DATA_QUERY = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, processing_date: any, adjusted_eft_date: any }> }>, holidays: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }>, leave: Array<{ __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null }> };


export const GET_DASHBOARD_DATA = gql`
    query GetDashboardData($userId: uuid!, $startDate: date!, $endDate: date!) {
  payrolls(
    where: {_or: [{primary_consultant_user_id: {_eq: $userId}}, {backup_consultant_user_id: {_eq: $userId}}, {manager_user_id: {_eq: $userId}}]}
  ) {
    ...PayrollFragment
    payroll_dates(
      where: {processing_date: {_gte: $startDate, _lte: $endDate}}
      order_by: {processing_date: asc}
      limit: 5
    ) {
      id
      processing_date
      adjusted_eft_date
    }
  }
  holidays(
    where: {date: {_gte: $startDate, _lte: $endDate}, country_code: {_eq: "AU"}}
    order_by: {date: asc}
    limit: 5
  ) {
    ...HolidayFragment
  }
  leave(
    where: {user_id: {_eq: $userId}, start_date: {_gte: $startDate}, end_date: {_lte: $endDate}}
    order_by: {start_date: asc}
    limit: 5
  ) {
    ...LeaveFragment
  }
}
    ${PayrollFragmentFragmentDoc}
${HolidayFragmentFragmentDoc}
${LeaveFragmentFragmentDoc}`;

/**
 * __useGetDashboardDataQuery__
 *
 * To run a query within a React component, call `useGetDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetDashboardDataQuery(baseOptions: Apollo.QueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables> & ({ variables: GetDashboardDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
      }
export function useGetDashboardDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
        }
export function useGetDashboardDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
        }
export type GET_DASHBOARD_DATA_QUERYHookResult = ReturnType<typeof useGetDashboardDataQuery>;
export type GET_DASHBOARD_DATA_LAZY_QUERYHookResult = ReturnType<typeof useGetDashboardDataLazyQuery>;
export type GET_DASHBOARD_DATA_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetDashboardDataSuspenseQuery>;
export type GET_DASHBOARD_DATA_QUERYResult = Apollo.QueryResult<GetDashboardDataQuery, GetDashboardDataQueryVariables>;