import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { PayrollDateFragmentFragmentDoc } from './fragments/PayrollDateFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePayrollDateMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Payroll_Dates_Set_Input;
}>;


export type UpdatePayrollDateMutation = { __typename?: 'mutation_root', update_payroll_dates_by_pk?: { __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null } | null };


export const UpdatePayrollDateDocument = gql`
    mutation UpdatePayrollDate($id: uuid!, $input: payroll_dates_set_input!) {
  update_payroll_dates_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...PayrollDateFragment
  }
}
    ${PayrollDateFragmentFragmentDoc}`;
export type UpdatePayrollDateMutationFn = Apollo.MutationFunction<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>;

/**
 * __useUpdatePayrollDateMutation__
 *
 * To run a mutation, you first call `useUpdatePayrollDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePayrollDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePayrollDateMutation, { data, loading, error }] = useUpdatePayrollDateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePayrollDateMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>(UpdatePayrollDateDocument, options);
      }
export type UpdatePayrollDateMutationHookResult = ReturnType<typeof useUpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationResult = Apollo.MutationResult<UpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>;