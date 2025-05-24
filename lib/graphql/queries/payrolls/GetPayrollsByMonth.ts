import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollsByMonthQueryVariables = Types.Exact<{
  startDate: Types.Scalars['date']['input'];
  endDate: Types.Scalars['date']['input'];
}>;


export type GetPayrollsByMonthQuery = { __typename?: 'query_root', payrolls: Array<{ __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null, payroll_dates: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> }> };


export const GetPayrollsByMonth = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollsByMonth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payrolls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payroll_dates"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_value"}},{"kind":"Field","name":{"kind":"Name","value":"primary_consultant_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"backup_consultant_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"manager_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"processing_days_before_eft"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_system"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"go_live_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"adjusted_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"processing_date"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonth, options);
      }
export function useGetPayrollsByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonth, options);
        }
export function useGetPayrollsByMonthSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonth, options);
        }
export type GetPayrollsByMonthQueryHookResult = ReturnType<typeof useGetPayrollsByMonthQuery>;
export type GetPayrollsByMonthLazyQueryHookResult = ReturnType<typeof useGetPayrollsByMonthLazyQuery>;
export type GetPayrollsByMonthSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsByMonthSuspenseQuery>;
export type GetPayrollsByMonthQueryResult = Apollo.QueryResult<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>;