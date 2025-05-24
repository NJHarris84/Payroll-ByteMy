import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePayrollStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  status: Types.Scalars['payroll_status']['input'];
}>;


export type UpdatePayrollStatusMutation = { __typename?: 'mutation_root', update_payrolls_by_pk?: { __typename?: 'payrolls', id: any, name: string, client_id: any, cycle_id: any, date_type_id: any, date_value?: number | null, primary_consultant_user_id?: any | null, backup_consultant_user_id?: any | null, manager_user_id?: any | null, processing_days_before_eft: number, payroll_system?: string | null, status: any, go_live_date?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const UpdatePayrollStatus = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePayrollStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_status"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_payrolls_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payrolls"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"client_id"}},{"kind":"Field","name":{"kind":"Name","value":"cycle_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_type_id"}},{"kind":"Field","name":{"kind":"Name","value":"date_value"}},{"kind":"Field","name":{"kind":"Name","value":"primary_consultant_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"backup_consultant_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"manager_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"processing_days_before_eft"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_system"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"go_live_date"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
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
        return Apollo.useMutation<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>(UpdatePayrollStatus, options);
      }
export type UpdatePayrollStatusMutationHookResult = ReturnType<typeof useUpdatePayrollStatusMutation>;
export type UpdatePayrollStatusMutationResult = Apollo.MutationResult<UpdatePayrollStatusMutation>;
export type UpdatePayrollStatusMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollStatusMutation, UpdatePayrollStatusMutationVariables>;