import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { PayrollDetailFragmentFragmentDoc } from './fragments/PayrollDetailFragment.generated';
import { PayrollDateFragmentFragmentDoc } from './fragments/PayrollDateFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type GetPayrollByIdQuery = { __typename?: 'query_root', payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }>, client: { __typename?: 'clients', id: any, name: string }, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } } | null };


export const GetPayrollByIdDocument = gql`
    query GetPayrollById($id: uuid!) {
  payrolls_by_pk(id: $id) {
    ...PayrollDetailFragment
    payroll_dates {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollDetailFragmentFragmentDoc}
${PayrollDateFragmentFragmentDoc}`;

/**
 * __useGetPayrollByIdQuery__
 *
 * To run a query within a React component, call `useGetPayrollByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPayrollByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables> & ({ variables: GetPayrollByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
      }
export function useGetPayrollByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
        }
export function useGetPayrollByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
        }
export type GetPayrollByIdQueryHookResult = ReturnType<typeof useGetPayrollByIdQuery>;
export type GetPayrollByIdLazyQueryHookResult = ReturnType<typeof useGetPayrollByIdLazyQuery>;
export type GetPayrollByIdSuspenseQueryHookResult = ReturnType<typeof useGetPayrollByIdSuspenseQuery>;
export type GetPayrollByIdQueryResult = Apollo.QueryResult<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>;