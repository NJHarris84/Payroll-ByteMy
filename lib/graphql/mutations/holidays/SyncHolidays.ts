import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SyncHolidaysMutationVariables = Types.Exact<{
  objects: Array<Types.HolidaysInsertInput> | Types.HolidaysInsertInput;
  onConflict?: Types.InputMaybe<Types.HolidaysOnConflict>;
}>;


export type SyncHolidaysMutation = { __typename?: 'mutation_root', insert_holidays?: { __typename?: 'holidays_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> } | null };


export const SyncHolidays = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SyncHolidays"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"holidays_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"holidays_on_conflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onConflict"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HolidayFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HolidayFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"holidays"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"local_name"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"is_fixed"}},{"kind":"Field","name":{"kind":"Name","value":"is_global"}},{"kind":"Field","name":{"kind":"Name","value":"launch_year"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;
export type SyncHolidaysMutationFn = Apollo.MutationFunction<SyncHolidaysMutation, SyncHolidaysMutationVariables>;

/**
 * __useSyncHolidaysMutation__
 *
 * To run a mutation, you first call `useSyncHolidaysMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncHolidaysMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncHolidaysMutation, { data, loading, error }] = useSyncHolidaysMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      onConflict: // value for 'onConflict'
 *   },
 * });
 */
export function useSyncHolidaysMutation(baseOptions?: Apollo.MutationHookOptions<SyncHolidaysMutation, SyncHolidaysMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncHolidaysMutation, SyncHolidaysMutationVariables>(SyncHolidays, options);
      }
export type SyncHolidaysMutationHookResult = ReturnType<typeof useSyncHolidaysMutation>;
export type SyncHolidaysMutationResult = Apollo.MutationResult<SyncHolidaysMutation>;
export type SyncHolidaysMutationOptions = Apollo.BaseMutationOptions<SyncHolidaysMutation, SyncHolidaysMutationVariables>;