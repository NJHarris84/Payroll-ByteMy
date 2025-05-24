import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type INSERT_PAYROLL_MUTATIONVariables = Types.Exact<{
  input: Types.Payrolls_Insert_Input;
}>;


export type INSERT_PAYROLL_MUTATION = { __typename?: 'mutation_root', insert_payrolls_one?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const INSERT_PAYROLL = gql`
    mutation InsertPayroll($input: payrolls_insert_input!) {
  insert_payrolls_one(object: $input) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type INSERT_PAYROLL_MUTATIONFn = Apollo.MutationFunction<InsertPayrollMutation, InsertPayrollMutationVariables>;

/**
 * __useInsertPayrollMutation__
 *
 * To run a mutation, you first call `useInsertPayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPayrollMutation, { data, loading, error }] = useInsertPayrollMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertPayrollMutation(baseOptions?: Apollo.MutationHookOptions<InsertPayrollMutation, InsertPayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPayrollMutation, InsertPayrollMutationVariables>(InsertPayrollDocument, options);
      }
export type INSERT_PAYROLL_MUTATIONHookResult = ReturnType<typeof useInsertPayrollMutation>;
export type INSERT_PAYROLL_MUTATIONResult = Apollo.MutationResult<InsertPayrollMutation>;
export type INSERT_PAYROLL_MUTATIONOptions = Apollo.BaseMutationOptions<InsertPayrollMutation, InsertPayrollMutationVariables>;