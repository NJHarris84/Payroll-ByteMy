import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdatePayrollDateMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.PayrollDatesSetInput;
}>;


export type UpdatePayrollDateMutation = { __typename?: 'mutation_root', update_payroll_dates_by_pk?: { __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null } | null };


export const UpdatePayrollDate = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePayrollDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_payroll_dates_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"adjusted_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"processing_date"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
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
        return Apollo.useMutation<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>(UpdatePayrollDate, options);
      }
export type UpdatePayrollDateMutationHookResult = ReturnType<typeof useUpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationResult = Apollo.MutationResult<UpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>;