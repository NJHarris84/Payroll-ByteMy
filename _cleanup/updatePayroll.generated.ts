import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePayrollMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Payrolls_Set_Input;
}>;


export type UPDATE_PAYROLL_MUTATION = { __typename?: 'mutation_root', update_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const UPDATE_PAYROLL = gql`
    mutation UpdatePayroll($id: uuid!, $input: payrolls_set_input!) {
  update_payrolls_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type UPDATE_PAYROLL_MUTATIONFn = Apollo.MutationFunction<UpdatePayrollMutation, UpdatePayrollMutationVariables>;

/**
 * __useUpdatePayrollMutation__
 *
 * To run a mutation, you first call `useUpdatePayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePayrollMutation, { data, loading, error }] = useUpdatePayrollMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePayrollMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePayrollMutation, UpdatePayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePayrollMutation, UpdatePayrollMutationVariables>(UpdatePayrollDocument, options);
      }
export type UPDATE_PAYROLL_MUTATIONHookResult = ReturnType<typeof useUpdatePayrollMutation>;
export type UPDATE_PAYROLL_MUTATIONResult = Apollo.MutationResult<UpdatePayrollMutation>;
export type UPDATE_PAYROLL_MUTATIONOptions = Apollo.BaseMutationOptions<UpdatePayrollMutation, UpdatePayrollMutationVariables>;