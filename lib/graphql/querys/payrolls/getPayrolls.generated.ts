import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_PAYROLLS_QUERY = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } }> };


export const GET_PAYROLLS = gql`
    query GetPayrolls {
  payrolls {
    ...PayrollFragment
    payroll_cycle {
      id
      name
    }
    payroll_date_type {
      id
      name
    }
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetPayrollsQuery__
 *
 * To run a query within a React component, call `useGetPayrollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollsQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
      }
export function useGetPayrollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
        }
export function useGetPayrollsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
        }
export type GET_PAYROLLS_QUERYHookResult = ReturnType<typeof useGetPayrollsQuery>;
export type GET_PAYROLLS_LAZY_QUERYHookResult = ReturnType<typeof useGetPayrollsLazyQuery>;
export type GET_PAYROLLS_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetPayrollsSuspenseQuery>;
export type GET_PAYROLLS_QUERYResult = Apollo.QueryResult<GetPayrollsQuery, GetPayrollsQueryVariables>;