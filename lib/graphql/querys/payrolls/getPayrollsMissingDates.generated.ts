import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollsMissingDatesQueryVariables = Types.Exact<{
  startDate: Types.Scalars['date']['input'];
  endDate: Types.Scalars['date']['input'];
}>;


export type GET_PAYROLLS_MISSING_DATES_QUERY = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null }> };


export const GET_PAYROLLS_MISSING_DATES = gql`
    query GetPayrollsMissingDates($startDate: date!, $endDate: date!) {
  payrolls(
    where: {_not: {payroll_dates: {original_eft_date: {_gte: $startDate, _lte: $endDate}}}, status: {_eq: "Active"}}
  ) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetPayrollsMissingDatesQuery__
 *
 * To run a query within a React component, call `useGetPayrollsMissingDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsMissingDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsMissingDatesQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollsMissingDatesQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables> & ({ variables: GetPayrollsMissingDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
      }
export function useGetPayrollsMissingDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
        }
export function useGetPayrollsMissingDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
        }
export type GET_PAYROLLS_MISSING_DATES_QUERYHookResult = ReturnType<typeof useGetPayrollsMissingDatesQuery>;
export type GET_PAYROLLS_MISSING_DATES_LAZY_QUERYHookResult = ReturnType<typeof useGetPayrollsMissingDatesLazyQuery>;
export type GET_PAYROLLS_MISSING_DATES_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetPayrollsMissingDatesSuspenseQuery>;
export type GET_PAYROLLS_MISSING_DATES_QUERYResult = Apollo.QueryResult<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>;