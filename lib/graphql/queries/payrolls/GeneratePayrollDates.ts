import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GeneratePayrollDatesMutationVariables = Types.Exact<{
  payroll_id: Types.Scalars['uuid']['input'];
  original_eft_date: Types.Scalars['date']['input'];
  adjusted_eft_date: Types.Scalars['date']['input'];
  processing_date?: Types.InputMaybe<Types.Scalars['date']['input']>;
  notes?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GeneratePayrollDatesMutation = { __typename?: 'mutation_root', insert_payroll_dates?: { __typename?: 'payroll_dates_mutation_response', returning: Array<{ __typename?: 'payroll_dates', id: any, payroll_id: any, original_eft_date: any, adjusted_eft_date: any, processing_date: any, notes?: string | null, created_at?: any | null, updated_at?: any | null }> } | null };


export const GeneratePayrollDates = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GeneratePayrollDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payroll_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"original_eft_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adjusted_eft_date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processing_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payroll_dates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"payroll_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payroll_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"original_eft_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"original_eft_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"adjusted_eft_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adjusted_eft_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"processing_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processing_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"notes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notes"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PayrollDateFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PayrollDateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"payroll_dates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payroll_id"}},{"kind":"Field","name":{"kind":"Name","value":"original_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"adjusted_eft_date"}},{"kind":"Field","name":{"kind":"Name","value":"processing_date"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export type GeneratePayrollDatesMutationFn = Apollo.MutationFunction<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;

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
        return Apollo.useMutation<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>(GeneratePayrollDates, options);
      }
export type GeneratePayrollDatesMutationHookResult = ReturnType<typeof useGeneratePayrollDatesMutation>;
export type GeneratePayrollDatesMutationResult = Apollo.MutationResult<GeneratePayrollDatesMutation>;
export type GeneratePayrollDatesMutationOptions = Apollo.BaseMutationOptions<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;