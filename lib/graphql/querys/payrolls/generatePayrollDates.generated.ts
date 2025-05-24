import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GeneratePayrollDatesMutationVariables = Types.Exact<{
  payroll_id: Types.Scalars['uuid']['input'];
  original_eft_date: Types.Scalars['date']['input'];
  adjusted_eft_date: Types.Scalars['date']['input'];
  processing_date?: Types.InputMaybe<Types.Scalars['date']['input']>;
  notes?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GENERATE_PAYROLL_DATES_MUTATION = { __typename?: 'mutation_root', insert_payroll_dates?: { __typename?: 'payroll_dates_mutation_response', returning: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> } | null };


export const GENERATE_PAYROLL_DATES = gql`
    mutation GeneratePayrollDates($payroll_id: uuid!, $original_eft_date: date!, $adjusted_eft_date: date!, $processing_date: date, $notes: String) {
  insert_payroll_dates(
    objects: [{payroll_id: $payroll_id, original_eft_date: $original_eft_date, adjusted_eft_date: $adjusted_eft_date, processing_date: $processing_date, notes: $notes}]
  ) {
    returning {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollDateFragmentFragmentDoc}`;
export type GENERATE_PAYROLL_DATES_MUTATIONFn = Apollo.MutationFunction<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;

/**
 * __useGeneratePayrollDatesMutation__
 *
 * To run a mutation, you first call `useGeneratePayrollDatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGeneratePayrollDatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generatePayrollDatesMutation, { data, loading, error }] = useGeneratePayrollDatesMutation({
 *   variables: {
 *      payroll_id: // value for 'payroll_id'
 *      original_eft_date: // value for 'original_eft_date'
 *      adjusted_eft_date: // value for 'adjusted_eft_date'
 *      processing_date: // value for 'processing_date'
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useGeneratePayrollDatesMutation(baseOptions?: Apollo.MutationHookOptions<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>(GeneratePayrollDatesDocument, options);
      }
export type GENERATE_PAYROLL_DATES_MUTATIONHookResult = ReturnType<typeof useGeneratePayrollDatesMutation>;
export type GENERATE_PAYROLL_DATES_MUTATIONResult = Apollo.MutationResult<GeneratePayrollDatesMutation>;
export type GENERATE_PAYROLL_DATES_MUTATIONOptions = Apollo.BaseMutationOptions<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;