import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetPayrollDateTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPayrollDateTypesQuery = { __typename?: 'query_root', payroll_date_types: Array<{ __typename?: 'payroll_date_types', id: any, name: any, description?: string | null, created_at?: any | null, updated_at?: any | null, adjustment_rules: Array<{ __typename?: 'adjustment_rules', id: any, cycle_id: any, rule_code: string, rule_description: string }>, payrolls_aggregate: { __typename?: 'payrolls_aggregate', aggregate?: { __typename?: 'payrolls_aggregate_fields', count: number } | null } }> };


export const GetPayrollDateTypes = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPayrollDateTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payroll_date_types"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateTypeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"adjustment_rules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"rule_code"}},{"kind":"Field","name":{"kind":"Name","value":"rule_description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payrolls_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateTypeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_date_types"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

/**
 * __useGetPayrollDateTypesQuery__
 *
 * To run a query within a React component, call `useGetPayrollDateTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollDateTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollDateTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollDateTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypes, options);
      }
export function useGetPayrollDateTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypes, options);
        }
export function useGetPayrollDateTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypes, options);
        }
export type GetPayrollDateTypesQueryHookResult = ReturnType<typeof useGetPayrollDateTypesQuery>;
export type GetPayrollDateTypesLazyQueryHookResult = ReturnType<typeof useGetPayrollDateTypesLazyQuery>;
export type GetPayrollDateTypesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollDateTypesSuspenseQuery>;
export type GetPayrollDateTypesQueryResult = Apollo.QueryResult<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>;