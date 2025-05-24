import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { PayrollFragmentFragmentDoc } from './fragments/PayrollFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePayrollStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  status: Types.Scalars['payroll_status']['input'];
}>;


export type UpdatePayrollStatusMutation = { __typename?: 'mutation_root', update_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const UpdatePayrollStatusDocument = gql`
    mutation UpdatePayrollStatus($id: uuid!, $status: payroll_status!) {
  update_payrolls_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type UpdatePayrollStatusMutationFn = Apollo.MutationFunction<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>;

/**
 * __useUpdatePayrollStatusMutation__
 *
 * To run a mutation, you first call `useUpdatePayrollStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePayrollStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePayrollStatusMutation, { data, loading, error }] = useUpdatePayrollStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdatePayrollStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>(UpdatePayrollStatusDocument, options);
      }
export type UpdatePayrollStatusMutationHookResult = ReturnType<typeof useUpdatePayrollStatusMutation>;
export type UpdatePayrollStatusMutationResult = Apollo.MutationResult<UpdatePayrollStatusMutation>;
export type UpdatePayrollStatusMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>;