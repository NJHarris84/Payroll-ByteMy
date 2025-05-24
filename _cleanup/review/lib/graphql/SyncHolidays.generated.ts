import type * as Types from '../generated/types';

import { gql } from '@apollo/client';
import { HolidayFragmentFragmentDoc } from './fragments/HolidayFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SyncHolidaysMutationVariables = Types.Exact<{
  objects: Array<Types.Holidays_Insert_Input> | Types.Holidays_Insert_Input;
  onConflict?: Types.InputMaybe<Types.Holidays_On_Conflict>;
}>;


export type SyncHolidaysMutation = { __typename?: 'mutation_root', insert_holidays?: { __typename?: 'holidays_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null }> } | null };


export const SyncHolidaysDocument = gql`
    mutation SyncHolidays($objects: [holidays_insert_input!]!, $onConflict: holidays_on_conflict) {
  insert_holidays(objects: $objects, on_conflict: $onConflict) {
    returning {
      ...HolidayFragment
    }
    affected_rows
  }
}
    ${HolidayFragmentFragmentDoc}`;
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
        return Apollo.useMutation<SyncHolidaysMutation, SyncHolidaysMutationVariables>(SyncHolidaysDocument, options);
      }
export type SyncHolidaysMutationHookResult = ReturnType<typeof useSyncHolidaysMutation>;
export type SyncHolidaysMutationResult = Apollo.MutationResult<SyncHolidaysMutation>;
export type SyncHolidaysMutationOptions = Apollo.BaseMutationOptions<SyncHolidaysMutation, SyncHolidaysMutationVariables>;