import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CREATE_PAYROLL_MUTATIONVariables = Types.Exact<{
  input: Types.Payrolls_Insert_Input;
}>;


export type CREATE_PAYROLL_MUTATION = { __typename?: 'mutation_root', insert_payrolls_one?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const CREATE_PAYROLL = gql`
    mutation CreatePayroll($input: payrolls_insert_input!) {
  insert_payrolls_one(object: $input) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type CREATE_PAYROLL_MUTATIONFn = Apollo.MutationFunction<CreatePayrollMutation, CreatePayrollMutationVariables>;

/**
 * __useCreatePayrollMutation__
 *
 * To run a mutation, you first call `useCreatePayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPayrollMutation, { data, loading, error }] = useCreatePayrollMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePayrollMutation(baseOptions?: Apollo.MutationHookOptions<CreatePayrollMutation, CreatePayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePayrollMutation, CreatePayrollMutationVariables>(CreatePayrollDocument, options);
      }
export type CREATE_PAYROLL_MUTATIONHookResult = ReturnType<typeof useCreatePayrollMutation>;
export type CREATE_PAYROLL_MUTATIONResult = Apollo.MutationResult<CreatePayrollMutation>;
export type CREATE_PAYROLL_MUTATIONOptions = Apollo.BaseMutationOptions<CreatePayrollMutation, CreatePayrollMutationVariables>;