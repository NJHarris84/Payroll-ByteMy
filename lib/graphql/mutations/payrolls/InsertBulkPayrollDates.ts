import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type InsertBulkPayrollDatesMutationVariables = Types.Exact<{
  objects: Array<Types.PayrollDatesInsertInput> | Types.PayrollDatesInsertInput;
}>;


export type InsertBulkPayrollDatesMutation = { __typename?: 'mutation_root', insert_payroll_dates?: { __typename?: 'payroll_dates_mutation_response', returning: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> } | null };


export const InsertBulkPayrollDates = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertBulkPayrollDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"adjusted_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"processing_date"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export type InsertBulkPayrollDatesMutationFn = Apollo.MutationFunction<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;

/**
 * __useInsertBulkPayrollDatesMutation__
 *
 * To run a mutation, you first call `useInsertBulkPayrollDatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBulkPayrollDatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBulkPayrollDatesMutation, { data, loading, error }] = useInsertBulkPayrollDatesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertBulkPayrollDatesMutation(baseOptions?: Apollo.MutationHookOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>(InsertBulkPayrollDates, options);
      }
export type InsertBulkPayrollDatesMutationHookResult = ReturnType<typeof useInsertBulkPayrollDatesMutation>;
export type InsertBulkPayrollDatesMutationResult = Apollo.MutationResult<InsertBulkPayrollDatesMutation>;
export type InsertBulkPayrollDatesMutationOptions = Apollo.BaseMutationOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;