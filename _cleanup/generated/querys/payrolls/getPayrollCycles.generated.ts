import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_PAYROLL_CYCLES_QUERYVariables = Types.Exact<{ [key: string]: never; }>;


export type GET_PAYROLL_CYCLES_QUERY = { __typename?: 'query_root', payroll_cycles: Array<{ __typename?: 'payroll_cycles', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null, adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, date_type_id: any, rule_code: string, rule_description: string }>, payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } }> };


export const GET_PAYROLL_CYCLES = gql`
    query GetPayrollCycles {
  payroll_cycles(order_by: {name: asc}) {
    ...PayrollCycleFragment
    adjustment_rules {
      id
      date_type_id
      rule_code
      rule_description
    }
    payrolls_aggregate {
      aggregate {
        count
      }
    }
  }
}
    ${PayrollCycleFragmentFragmentDoc}`;

/**
 * __useGetPayrollCyclesQuery__
 *
 * To run a query within a React component, call `useGetPayrollCyclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollCyclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollCyclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollCyclesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
      }
export function useGetPayrollCyclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
        }
export function useGetPayrollCyclesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
        }
export type GET_PAYROLL_CYCLES_QUERYHookResult = ReturnType<typeof useGetPayrollCyclesQuery>;
export type GET_PAYROLL_CYCLES_LAZY_QUERYHookResult = ReturnType<typeof useGetPayrollCyclesLazyQuery>;
export type GET_PAYROLL_CYCLES_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetPayrollCyclesSuspenseQuery>;
export type GET_PAYROLL_CYCLES_QUERYResult = Apollo.QueryResult<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>;