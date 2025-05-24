import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type InsertBulkPayrollDatesMutationVariables = Types.Exact<{
  objects: Array<Types.Payroll_Dates_Insert_Input> | Types.Payroll_Dates_Insert_Input;
}>;


export type INSERT_BULK_PAYROLL_DATES_MUTATION = { __typename?: 'mutation_root', insert_payroll_dates?: { __typename?: 'payroll_dates_mutation_response', returning: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> } | null };


export const INSERT_BULK_PAYROLL_DATES = gql`
    mutation InsertBulkPayrollDates($objects: [payroll_dates_insert_input!]!) {
  insert_payroll_dates(objects: $objects) {
    returning {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollDateFragmentFragmentDoc}`;
export type INSERT_BULK_PAYROLL_DATES_MUTATIONFn = Apollo.MutationFunction<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;

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
        return Apollo.useMutation<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>(InsertBulkPayrollDatesDocument, options);
      }
export type INSERT_BULK_PAYROLL_DATES_MUTATIONHookResult = ReturnType<typeof useInsertBulkPayrollDatesMutation>;
export type INSERT_BULK_PAYROLL_DATES_MUTATIONResult = Apollo.MutationResult<InsertBulkPayrollDatesMutation>;
export type INSERT_BULK_PAYROLL_DATES_MUTATIONOptions = Apollo.BaseMutationOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;