import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { PayrollFragmentFragmentDoc } from './fragments/PayrollFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollListQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Payrolls_Bool_Exp>;
}>;


export type GetPayrollListQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any } }> };


export const GetPayrollListDocument = gql`
    query GetPayrollList($where: payrolls_bool_exp) {
  payrolls(where: $where, order_by: {created_at: desc}) {
    ...PayrollFragment
    client {
      id
      name
    }
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
 * __useGetPayrollListQuery__
 *
 * To run a query within a React component, call `useGetPayrollListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollListQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPayrollListQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
      }
export function useGetPayrollListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
        }
export function useGetPayrollListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
        }
export type GetPayrollListQueryHookResult = ReturnType<typeof useGetPayrollListQuery>;
export type GetPayrollListLazyQueryHookResult = ReturnType<typeof useGetPayrollListLazyQuery>;
export type GetPayrollListSuspenseQueryHookResult = ReturnType<typeof useGetPayrollListSuspenseQuery>;
export type GetPayrollListQueryResult = Apollo.QueryResult<GetPayrollListQuery, GetPayrollListQueryVariables>;