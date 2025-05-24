import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_PAYROLL_DATES_QUERYVariables = Types.Exact<{
  payrollId: Types.Scalars['uuid']['input'];
  startDate?: Types.InputMaybe<Types.Scalars['date']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['date']['input']>;
}>;


export type GET_PAYROLL_DATES_QUERY = { __typename?: 'query_root', payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> };


export const GET_PAYROLL_DATES = gql`
    query GetPayrollDates($payrollId: uuid!, $startDate: date, $endDate: date) {
  payroll_dates(
    where: {payroll_id: {_eq: $payrollId}, _and: [{original_eft_date: {_gte: $startDate}}, {original_eft_date: {_lte: $endDate}}]}
    order_by: {original_eft_date: asc}
  ) {
    ...PayrollDateFragment
  }
}
    ${PayrollDateFragmentFragmentDoc}`;

/**
 * __useGetPayrollDatesQuery__
 *
 * To run a query within a React component, call `useGetPayrollDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollDatesQuery({
 *   variables: {
 *      payrollId: // value for 'payrollId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollDatesQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables> & ({ variables: GetPayrollDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
      }
export function useGetPayrollDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
        }
export function useGetPayrollDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
        }
export type GET_PAYROLL_DATES_QUERYHookResult = ReturnType<typeof useGetPayrollDatesQuery>;
export type GET_PAYROLL_DATES_LAZY_QUERYHookResult = ReturnType<typeof useGetPayrollDatesLazyQuery>;
export type GET_PAYROLL_DATES_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetPayrollDatesSuspenseQuery>;
export type GET_PAYROLL_DATES_QUERYResult = Apollo.QueryResult<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>;