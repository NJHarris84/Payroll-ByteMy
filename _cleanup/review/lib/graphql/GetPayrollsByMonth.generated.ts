import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { PayrollFragmentFragmentDoc } from './fragments/PayrollFragment.generated';
import { PayrollDateFragmentFragmentDoc } from './fragments/PayrollDateFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollsByMonthQueryVariables = Types.Exact<{
  startDate: Types.Scalars['date']['input'];
  endDate: Types.Scalars['date']['input'];
}>;


export type GetPayrollsByMonthQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> }> };


export const GetPayrollsByMonthDocument = gql`
    query GetPayrollsByMonth($startDate: date!, $endDate: date!) {
  payrolls(
    where: {payroll_dates: {original_eft_date: {_gte: $startDate, _lt: $endDate}}}
  ) {
    ...PayrollFragment
    payroll_dates(where: {original_eft_date: {_gte: $startDate, _lt: $endDate}}) {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollFragmentFragmentDoc}
${PayrollDateFragmentFragmentDoc}`;

/**
 * __useGetPayrollsByMonthQuery__
 *
 * To run a query within a React component, call `useGetPayrollsByMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsByMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsByMonthQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollsByMonthQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables> & ({ variables: GetPayrollsByMonthQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
      }
export function useGetPayrollsByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
        }
export function useGetPayrollsByMonthSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
        }
export type GetPayrollsByMonthQueryHookResult = ReturnType<typeof useGetPayrollsByMonthQuery>;
export type GetPayrollsByMonthLazyQueryHookResult = ReturnType<typeof useGetPayrollsByMonthLazyQuery>;
export type GetPayrollsByMonthSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsByMonthSuspenseQuery>;
export type GetPayrollsByMonthQueryResult = Apollo.QueryResult<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>;