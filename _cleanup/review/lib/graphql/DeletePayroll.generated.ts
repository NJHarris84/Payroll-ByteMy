import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { PayrollFragmentFragmentDoc } from './fragments/PayrollFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeletePayrollMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
}>;


export type DeletePayrollMutation = { __typename?: 'mutation_root', delete_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const DeletePayrollDocument = gql`
    mutation DeletePayroll($id: uuid!) {
  delete_payrolls_by_pk(id: $id) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type DeletePayrollMutationFn = Apollo.MutationFunction<DeletePayrollMutation, DeletePayrollMutationVariables>;

/**
 * __useDeletePayrollMutation__
 *
 * To run a mutation, you first call `useDeletePayrollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePayrollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePayrollMutation, { data, loading, error }] = useDeletePayrollMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePayrollMutation(baseOptions?: Apollo.MutationHookOptions<DeletePayrollMutation, DeletePayrollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePayrollMutation, DeletePayrollMutationVariables>(DeletePayrollDocument, options);
      }
export type DeletePayrollMutationHookResult = ReturnType<typeof useDeletePayrollMutation>;
export type DeletePayrollMutationResult = Apollo.MutationResult<DeletePayrollMutation>;
export type DeletePayrollMutationOptions = Apollo.BaseMutationOptions<DeletePayrollMutation, DeletePayrollMutationVariables>;