import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const AdjustmentRuleFragmentFragmentDoc = gql`
    fragment AdjustmentRuleFragment on adjustment_rules {
  id
  cycle_id
  date_type_id
  rule_description
  rule_code
  created_at
  updated_at
  payroll_cycle {
    id
    name
    description
  }
  payroll_date_type {
    id
    name
    description
  }
}
    `;
export const AppSettingsFragmentFragmentDoc = gql`
    fragment AppSettingsFragment on app_settings {
  id
  permissions
}
    `;
export const ClientExternalSystemFragmentFragmentDoc = gql`
    fragment ClientExternalSystemFragment on client_external_systems {
  id
  client_id
  system_id
  system_client_id
  created_at
  updated_at
  client {
    id
    name
  }
  external_system {
    id
    name
    url
    description
    icon
  }
}
    `;
export const ClientFragmentFragmentDoc = gql`
    fragment ClientFragment on clients {
  id
  name
  contact_person
  contact_email
  contact_phone
  active
  created_at
  updated_at
}
    `;
export const ExternalSystemFragmentFragmentDoc = gql`
    fragment ExternalSystemFragment on external_systems {
  id
  name
  url
  description
  icon
  created_at
  updated_at
}
    `;
export const FeatureFlagFragmentFragmentDoc = gql`
    fragment FeatureFlagFragment on feature_flags {
  id
  feature_name
  is_enabled
  allowed_roles
  updated_at
}
    `;
export const HolidayFragmentFragmentDoc = gql`
    fragment HolidayFragment on holidays {
  id
  date
  local_name
  name
  country_code
  region
  is_fixed
  is_global
  launch_year
  types
  created_at
  updated_at
}
    `;
export const LeaveFragmentFragmentDoc = gql`
    fragment LeaveFragment on leave {
  id
  user_id
  start_date
  end_date
  leave_type
  reason
  status
}
    `;
export const NoteFragmentFragmentDoc = gql`
    fragment NoteFragment on notes {
  id
  entity_type
  entity_id
  user_id
  content
  is_important
  created_at
  updated_at
}
    `;
export const PayrollCycleFragmentFragmentDoc = gql`
    fragment PayrollCycleFragment on payroll_cycles {
  id
  name
  description
  created_at
  updated_at
}
    `;
export const PayrollDateFragmentFragmentDoc = gql`
    fragment PayrollDateFragment on payroll_dates {
  id
  payroll_id
  original_eft_date
  adjusted_eft_date
  processing_date
  notes
  created_at
  updated_at
}
    `;
export const PayrollDateTypeFragmentFragmentDoc = gql`
    fragment PayrollDateTypeFragment on payroll_date_types {
  id
  name
  description
  created_at
  updated_at
}
    `;
export const PayrollFragmentFragmentDoc = gql`
    fragment PayrollFragment on payrolls {
  id
  name
  client_id
  cycle_id
  date_type_id
  date_value
  primary_consultant_user_id
  backup_consultant_user_id
  manager_user_id
  processing_days_before_eft
  payroll_system
  status
  go_live_date
  created_at
  updated_at
}
    `;
export const PayrollDetailFragmentFragmentDoc = gql`
    fragment PayrollDetailFragment on payrolls {
  ...PayrollFragment
  client {
    id
    name
  }
  payroll_cycle {
    id
    name
  }
  payroll_date_type {
    id
    name
  }
}
    ${PayrollFragmentFragmentDoc}`;
export const StaffFragmentFragmentDoc = gql`
    fragment StaffFragment on users {
  id
  name
  email
  image
  is_staff
  role
  manager_id
  created_at
  updated_at
}
    `;
export const StaffManagerFragmentFragmentDoc = gql`
    fragment StaffManagerFragment on users {
  manager {
    id
    name
    email
    role
  }
}
    `;
export const StaffLeaveFragmentFragmentDoc = gql`
    fragment StaffLeaveFragment on users {
  leaves {
    id
    start_date
    end_date
    leave_type
    status
  }
}
    `;
export const WorkScheduleFragmentFragmentDoc = gql`
    fragment WorkScheduleFragment on work_schedule {
  id
  user_id
  work_day
  work_hours
  created_at
  updated_at
}
    `;
export const CreateAdjustmentRuleDocument = gql`
    mutation CreateAdjustmentRule($input: adjustment_rules_insert_input!) {
  insert_adjustment_rules_one(object: $input) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;
export type CreateAdjustmentRuleMutationFn = Apollo.MutationFunction<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;

/**
 * __useCreateAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useCreateAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdjustmentRuleMutation, { data, loading, error }] = useCreateAdjustmentRuleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>(CreateAdjustmentRuleDocument, options);
      }
export type CreateAdjustmentRuleMutationHookResult = ReturnType<typeof useCreateAdjustmentRuleMutation>;
export type CreateAdjustmentRuleMutationResult = Apollo.MutationResult<CreateAdjustmentRuleMutation>;
export type CreateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<CreateAdjustmentRuleMutation, CreateAdjustmentRuleMutationVariables>;
export const DeleteAdjustmentRuleDocument = gql`
    mutation DeleteAdjustmentRule($id: uuid!) {
  delete_adjustment_rules_by_pk(id: $id) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;
export type DeleteAdjustmentRuleMutationFn = Apollo.MutationFunction<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>;

/**
 * __useDeleteAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useDeleteAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdjustmentRuleMutation, { data, loading, error }] = useDeleteAdjustmentRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>(DeleteAdjustmentRuleDocument, options);
      }
export type DeleteAdjustmentRuleMutationHookResult = ReturnType<typeof useDeleteAdjustmentRuleMutation>;
export type DeleteAdjustmentRuleMutationResult = Apollo.MutationResult<DeleteAdjustmentRuleMutation>;
export type DeleteAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<DeleteAdjustmentRuleMutation, DeleteAdjustmentRuleMutationVariables>;
export const UpdateAdjustmentRuleDocument = gql`
    mutation UpdateAdjustmentRule($id: uuid!, $input: adjustment_rules_set_input!) {
  update_adjustment_rules_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;
export type UpdateAdjustmentRuleMutationFn = Apollo.MutationFunction<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;

/**
 * __useUpdateAdjustmentRuleMutation__
 *
 * To run a mutation, you first call `useUpdateAdjustmentRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdjustmentRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdjustmentRuleMutation, { data, loading, error }] = useUpdateAdjustmentRuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdjustmentRuleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>(UpdateAdjustmentRuleDocument, options);
      }
export type UpdateAdjustmentRuleMutationHookResult = ReturnType<typeof useUpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationResult = Apollo.MutationResult<UpdateAdjustmentRuleMutation>;
export type UpdateAdjustmentRuleMutationOptions = Apollo.BaseMutationOptions<UpdateAdjustmentRuleMutation, UpdateAdjustmentRuleMutationVariables>;
export const CreateClientDocument = gql`
    mutation CreateClient($input: clients_insert_input!) {
  insert_clients_one(object: $input) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const DeleteClientDocument = gql`
    mutation DeleteClient($id: uuid!) {
  delete_clients_by_pk(id: $id) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type DeleteClientMutationFn = Apollo.MutationFunction<DeleteClientMutation, DeleteClientMutationVariables>;

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClientMutation, DeleteClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteClientMutation, DeleteClientMutationVariables>(DeleteClientDocument, options);
      }
export type DeleteClientMutationHookResult = ReturnType<typeof useDeleteClientMutation>;
export type DeleteClientMutationResult = Apollo.MutationResult<DeleteClientMutation>;
export type DeleteClientMutationOptions = Apollo.BaseMutationOptions<DeleteClientMutation, DeleteClientMutationVariables>;
export const UpdateClientDocument = gql`
    mutation UpdateClient($id: uuid!, $input: clients_set_input!) {
  update_clients_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;
export type UpdateClientMutationFn = Apollo.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, options);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = Apollo.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = Apollo.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
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
export const CreateLeaveDocument = gql`
    mutation CreateLeave($input: leave_insert_input!) {
  insert_leave_one(object: $input) {
    ...LeaveFragment
  }
}
    ${LeaveFragmentFragmentDoc}`;
export type CreateLeaveMutationFn = Apollo.MutationFunction<CreateLeaveMutation, CreateLeaveMutationVariables>;

/**
 * __useCreateLeaveMutation__
 *
 * To run a mutation, you first call `useCreateLeaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeaveMutation, { data, loading, error }] = useCreateLeaveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLeaveMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeaveMutation, CreateLeaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeaveMutation, CreateLeaveMutationVariables>(CreateLeaveDocument, options);
      }
export type CreateLeaveMutationHookResult = ReturnType<typeof useCreateLeaveMutation>;
export type CreateLeaveMutationResult = Apollo.MutationResult<CreateLeaveMutation>;
export type CreateLeaveMutationOptions = Apollo.BaseMutationOptions<CreateLeaveMutation, CreateLeaveMutationVariables>;
export const UpdateLeaveDocument = gql`
    mutation UpdateLeave($id: uuid!, $input: leave_set_input!) {
  update_leave_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...LeaveFragment
  }
}
    ${LeaveFragmentFragmentDoc}`;
export type UpdateLeaveMutationFn = Apollo.MutationFunction<UpdateLeaveMutation, UpdateLeaveMutationVariables>;

/**
 * __useUpdateLeaveMutation__
 *
 * To run a mutation, you first call `useUpdateLeaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLeaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLeaveMutation, { data, loading, error }] = useUpdateLeaveMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLeaveMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLeaveMutation, UpdateLeaveMutationVariables>(UpdateLeaveDocument, options);
      }
export type UpdateLeaveMutationHookResult = ReturnType<typeof useUpdateLeaveMutation>;
export type UpdateLeaveMutationResult = Apollo.MutationResult<UpdateLeaveMutation>;
export type UpdateLeaveMutationOptions = Apollo.BaseMutationOptions<UpdateLeaveMutation, UpdateLeaveMutationVariables>;
export const AddNoteDocument = gql`
    mutation AddNote($input: notes_insert_input!) {
  insert_notes_one(object: $input) {
    ...NoteFragment
  }
}
    ${NoteFragmentFragmentDoc}`;
export type AddNoteMutationFn = Apollo.MutationFunction<AddNoteMutation, AddNoteMutationVariables>;

/**
 * __useAddNoteMutation__
 *
 * To run a mutation, you first call `useAddNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNoteMutation, { data, loading, error }] = useAddNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddNoteMutation(baseOptions?: Apollo.MutationHookOptions<AddNoteMutation, AddNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNoteMutation, AddNoteMutationVariables>(AddNoteDocument, options);
      }
export type AddNoteMutationHookResult = ReturnType<typeof useAddNoteMutation>;
export type AddNoteMutationResult = Apollo.MutationResult<AddNoteMutation>;
export type AddNoteMutationOptions = Apollo.BaseMutationOptions<AddNoteMutation, AddNoteMutationVariables>;
export const UpdateNoteDocument = gql`
    mutation UpdateNote($id: uuid!, $input: notes_set_input!) {
  update_notes_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...NoteFragment
  }
}
    ${NoteFragmentFragmentDoc}`;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const InsertBulkPayrollDatesDocument = gql`
    mutation InsertBulkPayrollDates($objects: [payroll_dates_insert_input!]!) {
  insert_payroll_dates(objects: $objects) {
    returning {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollDateFragmentFragmentDoc}`;
export type InsertBulkPayrollDatesMutationFn = Apollo.MutationFunction<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;

/**
 * __useInsertBulkPayrollDatesMutation__
 *
 * To run a mutation, you first call `useInsertBulkPayrollDatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBulkPayrollDatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBulkPayrollDatesMutation, { data, loading, error }] = useInsertBulkPayrollDatesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertBulkPayrollDatesMutation(baseOptions?: Apollo.MutationHookOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>(InsertBulkPayrollDatesDocument, options);
      }
export type InsertBulkPayrollDatesMutationHookResult = ReturnType<typeof useInsertBulkPayrollDatesMutation>;
export type InsertBulkPayrollDatesMutationResult = Apollo.MutationResult<InsertBulkPayrollDatesMutation>;
export type InsertBulkPayrollDatesMutationOptions = Apollo.BaseMutationOptions<InsertBulkPayrollDatesMutation, InsertBulkPayrollDatesMutationVariables>;
export const UpdatePayrollDateDocument = gql`
    mutation UpdatePayrollDate($id: uuid!, $input: payroll_dates_set_input!) {
  update_payroll_dates_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...PayrollDateFragment
  }
}
    ${PayrollDateFragmentFragmentDoc}`;
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
        return Apollo.useMutation<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>(UpdatePayrollDateDocument, options);
      }
export type UpdatePayrollDateMutationHookResult = ReturnType<typeof useUpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationResult = Apollo.MutationResult<UpdatePayrollDateMutation>;
export type UpdatePayrollDateMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollDateMutation, UpdatePayrollDateMutationVariables>;
export const CreatePayrollDocument = gql`
    mutation CreatePayroll($input: payrolls_insert_input!) {
  insert_payrolls_one(object: $input) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type CreatePayrollMutationFn = Apollo.MutationFunction<CreatePayrollMutation, CreatePayrollMutationVariables>;

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
export type CreatePayrollMutationHookResult = ReturnType<typeof useCreatePayrollMutation>;
export type CreatePayrollMutationResult = Apollo.MutationResult<CreatePayrollMutation>;
export type CreatePayrollMutationOptions = Apollo.BaseMutationOptions<CreatePayrollMutation, CreatePayrollMutationVariables>;
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
export const GeneratePayrollDatesDocument = gql`
    mutation GeneratePayrollDates($payroll_id: uuid!, $original_eft_date: date!, $adjusted_eft_date: date!, $processing_date: date, $notes: String) {
  insert_payroll_dates(
    objects: [{payroll_id: $payroll_id, original_eft_date: $original_eft_date, adjusted_eft_date: $adjusted_eft_date, processing_date: $processing_date, notes: $notes}]
  ) {
    returning {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollDateFragmentFragmentDoc}`;
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
        return Apollo.useMutation<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>(GeneratePayrollDatesDocument, options);
      }
export type GeneratePayrollDatesMutationHookResult = ReturnType<typeof useGeneratePayrollDatesMutation>;
export type GeneratePayrollDatesMutationResult = Apollo.MutationResult<GeneratePayrollDatesMutation>;
export type GeneratePayrollDatesMutationOptions = Apollo.BaseMutationOptions<GeneratePayrollDatesMutation, GeneratePayrollDatesMutationVariables>;
export const InsertPayrollDocument = gql`
    mutation InsertPayroll($input: payrolls_insert_input!) {
  insert_payrolls_one(object: $input) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type InsertPayrollMutationFn = Apollo.MutationFunction<InsertPayrollMutation, InsertPayrollMutationVariables>;

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
export type InsertPayrollMutationHookResult = ReturnType<typeof useInsertPayrollMutation>;
export type InsertPayrollMutationResult = Apollo.MutationResult<InsertPayrollMutation>;
export type InsertPayrollMutationOptions = Apollo.BaseMutationOptions<InsertPayrollMutation, InsertPayrollMutationVariables>;
export const UpdatePayrollDocument = gql`
    mutation UpdatePayroll($id: uuid!, $input: payrolls_set_input!) {
  update_payrolls_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;
export type UpdatePayrollMutationFn = Apollo.MutationFunction<UpdatePayrollMutation, UpdatePayrollMutationVariables>;

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
export type UpdatePayrollMutationHookResult = ReturnType<typeof useUpdatePayrollMutation>;
export type UpdatePayrollMutationResult = Apollo.MutationResult<UpdatePayrollMutation>;
export type UpdatePayrollMutationOptions = Apollo.BaseMutationOptions<UpdatePayrollMutation, UpdatePayrollMutationVariables>;
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
export const CreateStaffDocument = gql`
    mutation CreateStaff($input: users_insert_input!) {
  insert_users_one(object: $input) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type CreateStaffMutationFn = Apollo.MutationFunction<CreateStaffMutation, CreateStaffMutationVariables>;

/**
 * __useCreateStaffMutation__
 *
 * To run a mutation, you first call `useCreateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStaffMutation, { data, loading, error }] = useCreateStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateStaffMutation, CreateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, options);
      }
export type CreateStaffMutationHookResult = ReturnType<typeof useCreateStaffMutation>;
export type CreateStaffMutationResult = Apollo.MutationResult<CreateStaffMutation>;
export type CreateStaffMutationOptions = Apollo.BaseMutationOptions<CreateStaffMutation, CreateStaffMutationVariables>;
export const DeleteStaffDocument = gql`
    mutation DeleteStaff($id: uuid!) {
  delete_users_by_pk(id: $id) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type DeleteStaffMutationFn = Apollo.MutationFunction<DeleteStaffMutation, DeleteStaffMutationVariables>;

/**
 * __useDeleteStaffMutation__
 *
 * To run a mutation, you first call `useDeleteStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStaffMutation, { data, loading, error }] = useDeleteStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStaffMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStaffMutation, DeleteStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStaffMutation, DeleteStaffMutationVariables>(DeleteStaffDocument, options);
      }
export type DeleteStaffMutationHookResult = ReturnType<typeof useDeleteStaffMutation>;
export type DeleteStaffMutationResult = Apollo.MutationResult<DeleteStaffMutation>;
export type DeleteStaffMutationOptions = Apollo.BaseMutationOptions<DeleteStaffMutation, DeleteStaffMutationVariables>;
export const UpdateStaffDocument = gql`
    mutation UpdateStaff($id: uuid!, $input: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type UpdateStaffMutationFn = Apollo.MutationFunction<UpdateStaffMutation, UpdateStaffMutationVariables>;

/**
 * __useUpdateStaffMutation__
 *
 * To run a mutation, you first call `useUpdateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffMutation, { data, loading, error }] = useUpdateStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStaffMutation, UpdateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, options);
      }
export type UpdateStaffMutationHookResult = ReturnType<typeof useUpdateStaffMutation>;
export type UpdateStaffMutationResult = Apollo.MutationResult<UpdateStaffMutation>;
export type UpdateStaffMutationOptions = Apollo.BaseMutationOptions<UpdateStaffMutation, UpdateStaffMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: uuid!, $input: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateWorkScheduleDocument = gql`
    mutation CreateWorkSchedule($input: work_schedule_insert_input!) {
  insert_work_schedule_one(object: $input) {
    ...WorkScheduleFragment
  }
}
    ${WorkScheduleFragmentFragmentDoc}`;
export type CreateWorkScheduleMutationFn = Apollo.MutationFunction<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;

/**
 * __useCreateWorkScheduleMutation__
 *
 * To run a mutation, you first call `useCreateWorkScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkScheduleMutation, { data, loading, error }] = useCreateWorkScheduleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>(CreateWorkScheduleDocument, options);
      }
export type CreateWorkScheduleMutationHookResult = ReturnType<typeof useCreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationResult = Apollo.MutationResult<CreateWorkScheduleMutation>;
export type CreateWorkScheduleMutationOptions = Apollo.BaseMutationOptions<CreateWorkScheduleMutation, CreateWorkScheduleMutationVariables>;
export const GetAdjustmentRulesDocument = gql`
    query GetAdjustmentRules {
  adjustment_rules(order_by: {created_at: desc}) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;

/**
 * __useGetAdjustmentRulesQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentRulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentRulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdjustmentRulesQuery(baseOptions?: Apollo.QueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
      }
export function useGetAdjustmentRulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
        }
export function useGetAdjustmentRulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>(GetAdjustmentRulesDocument, options);
        }
export type GetAdjustmentRulesQueryHookResult = ReturnType<typeof useGetAdjustmentRulesQuery>;
export type GetAdjustmentRulesLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRulesLazyQuery>;
export type GetAdjustmentRulesSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRulesSuspenseQuery>;
export type GetAdjustmentRulesQueryResult = Apollo.QueryResult<GetAdjustmentRulesQuery, GetAdjustmentRulesQueryVariables>;
export const GetAdjustmentRuleByCycleAndTypeDocument = gql`
    query GetAdjustmentRuleByCycleAndType($cycleId: uuid!, $dateTypeId: uuid!) {
  adjustment_rules(
    where: {cycle_id: {_eq: $cycleId}, date_type_id: {_eq: $dateTypeId}}
  ) {
    ...AdjustmentRuleFragment
  }
}
    ${AdjustmentRuleFragmentFragmentDoc}`;

/**
 * __useGetAdjustmentRuleByCycleAndTypeQuery__
 *
 * To run a query within a React component, call `useGetAdjustmentRuleByCycleAndTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdjustmentRuleByCycleAndTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdjustmentRuleByCycleAndTypeQuery({
 *   variables: {
 *      cycleId: // value for 'cycleId'
 *      dateTypeId: // value for 'dateTypeId'
 *   },
 * });
 */
export function useGetAdjustmentRuleByCycleAndTypeQuery(baseOptions: Apollo.QueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables> & ({ variables: GetAdjustmentRuleByCycleAndTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
      }
export function useGetAdjustmentRuleByCycleAndTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
        }
export function useGetAdjustmentRuleByCycleAndTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>(GetAdjustmentRuleByCycleAndTypeDocument, options);
        }
export type GetAdjustmentRuleByCycleAndTypeQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeQuery>;
export type GetAdjustmentRuleByCycleAndTypeLazyQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeLazyQuery>;
export type GetAdjustmentRuleByCycleAndTypeSuspenseQueryHookResult = ReturnType<typeof useGetAdjustmentRuleByCycleAndTypeSuspenseQuery>;
export type GetAdjustmentRuleByCycleAndTypeQueryResult = Apollo.QueryResult<GetAdjustmentRuleByCycleAndTypeQuery, GetAdjustmentRuleByCycleAndTypeQueryVariables>;
export const GetAppSettingsDocument = gql`
    query GetAppSettings {
  app_settings {
    ...AppSettingsFragment
  }
}
    ${AppSettingsFragmentFragmentDoc}`;

/**
 * __useGetAppSettingsQuery__
 *
 * To run a query within a React component, call `useGetAppSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
      }
export function useGetAppSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
        }
export function useGetAppSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAppSettingsQuery, GetAppSettingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAppSettingsQuery, GetAppSettingsQueryVariables>(GetAppSettingsDocument, options);
        }
export type GetAppSettingsQueryHookResult = ReturnType<typeof useGetAppSettingsQuery>;
export type GetAppSettingsLazyQueryHookResult = ReturnType<typeof useGetAppSettingsLazyQuery>;
export type GetAppSettingsSuspenseQueryHookResult = ReturnType<typeof useGetAppSettingsSuspenseQuery>;
export type GetAppSettingsQueryResult = Apollo.QueryResult<GetAppSettingsQuery, GetAppSettingsQueryVariables>;
export const GetClientExternalSystemsDocument = gql`
    query GetClientExternalSystems($clientId: uuid!) {
  client_external_systems(where: {client_id: {_eq: $clientId}}) {
    ...ClientExternalSystemFragment
  }
}
    ${ClientExternalSystemFragmentFragmentDoc}`;

/**
 * __useGetClientExternalSystemsQuery__
 *
 * To run a query within a React component, call `useGetClientExternalSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientExternalSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientExternalSystemsQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetClientExternalSystemsQuery(baseOptions: Apollo.QueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables> & ({ variables: GetClientExternalSystemsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
      }
export function useGetClientExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
        }
export function useGetClientExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>(GetClientExternalSystemsDocument, options);
        }
export type GetClientExternalSystemsQueryHookResult = ReturnType<typeof useGetClientExternalSystemsQuery>;
export type GetClientExternalSystemsLazyQueryHookResult = ReturnType<typeof useGetClientExternalSystemsLazyQuery>;
export type GetClientExternalSystemsSuspenseQueryHookResult = ReturnType<typeof useGetClientExternalSystemsSuspenseQuery>;
export type GetClientExternalSystemsQueryResult = Apollo.QueryResult<GetClientExternalSystemsQuery, GetClientExternalSystemsQueryVariables>;
export const GetClientByIdDocument = gql`
    query GetClientById($id: uuid!) {
  clients_by_pk(id: $id) {
    ...ClientFragment
    payrolls {
      ...PayrollFragment
    }
  }
}
    ${ClientFragmentFragmentDoc}
${PayrollFragmentFragmentDoc}`;

/**
 * __useGetClientByIdQuery__
 *
 * To run a query within a React component, call `useGetClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClientByIdQuery(baseOptions: Apollo.QueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables> & ({ variables: GetClientByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
      }
export function useGetClientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
        }
export function useGetClientByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientByIdQuery, GetClientByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientByIdQuery, GetClientByIdQueryVariables>(GetClientByIdDocument, options);
        }
export type GetClientByIdQueryHookResult = ReturnType<typeof useGetClientByIdQuery>;
export type GetClientByIdLazyQueryHookResult = ReturnType<typeof useGetClientByIdLazyQuery>;
export type GetClientByIdSuspenseQueryHookResult = ReturnType<typeof useGetClientByIdSuspenseQuery>;
export type GetClientByIdQueryResult = Apollo.QueryResult<GetClientByIdQuery, GetClientByIdQueryVariables>;
export const GetClientsListDocument = gql`
    query GetClientsList {
  clients(order_by: {name: asc}) {
    ...ClientFragment
  }
}
    ${ClientFragmentFragmentDoc}`;

/**
 * __useGetClientsListQuery__
 *
 * To run a query within a React component, call `useGetClientsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientsListQuery(baseOptions?: Apollo.QueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
      }
export function useGetClientsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
        }
export function useGetClientsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientsListQuery, GetClientsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientsListQuery, GetClientsListQueryVariables>(GetClientsListDocument, options);
        }
export type GetClientsListQueryHookResult = ReturnType<typeof useGetClientsListQuery>;
export type GetClientsListLazyQueryHookResult = ReturnType<typeof useGetClientsListLazyQuery>;
export type GetClientsListSuspenseQueryHookResult = ReturnType<typeof useGetClientsListSuspenseQuery>;
export type GetClientsListQueryResult = Apollo.QueryResult<GetClientsListQuery, GetClientsListQueryVariables>;
export const GetDashboardDataDocument = gql`
    query GetDashboardData($userId: uuid!, $startDate: date!, $endDate: date!) {
  payrolls(
    where: {_or: [{primary_consultant_user_id: {_eq: $userId}}, {backup_consultant_user_id: {_eq: $userId}}, {manager_user_id: {_eq: $userId}}]}
  ) {
    ...PayrollFragment
    payroll_dates(
      where: {processing_date: {_gte: $startDate, _lte: $endDate}}
      order_by: {processing_date: asc}
      limit: 5
    ) {
      id
      processing_date
      adjusted_eft_date
    }
  }
  holidays(
    where: {date: {_gte: $startDate, _lte: $endDate}, country_code: {_eq: "AU"}}
    order_by: {date: asc}
    limit: 5
  ) {
    ...HolidayFragment
  }
  leave(
    where: {user_id: {_eq: $userId}, start_date: {_gte: $startDate}, end_date: {_lte: $endDate}}
    order_by: {start_date: asc}
    limit: 5
  ) {
    ...LeaveFragment
  }
}
    ${PayrollFragmentFragmentDoc}
${HolidayFragmentFragmentDoc}
${LeaveFragmentFragmentDoc}`;

/**
 * __useGetDashboardDataQuery__
 *
 * To run a query within a React component, call `useGetDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetDashboardDataQuery(baseOptions: Apollo.QueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables> & ({ variables: GetDashboardDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
      }
export function useGetDashboardDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
        }
export function useGetDashboardDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDashboardDataQuery, GetDashboardDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDashboardDataQuery, GetDashboardDataQueryVariables>(GetDashboardDataDocument, options);
        }
export type GetDashboardDataQueryHookResult = ReturnType<typeof useGetDashboardDataQuery>;
export type GetDashboardDataLazyQueryHookResult = ReturnType<typeof useGetDashboardDataLazyQuery>;
export type GetDashboardDataSuspenseQueryHookResult = ReturnType<typeof useGetDashboardDataSuspenseQuery>;
export type GetDashboardDataQueryResult = Apollo.QueryResult<GetDashboardDataQuery, GetDashboardDataQueryVariables>;
export const GetExternalSystemsDocument = gql`
    query GetExternalSystems {
  external_systems {
    ...ExternalSystemFragment
  }
}
    ${ExternalSystemFragmentFragmentDoc}`;

/**
 * __useGetExternalSystemsQuery__
 *
 * To run a query within a React component, call `useGetExternalSystemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExternalSystemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExternalSystemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExternalSystemsQuery(baseOptions?: Apollo.QueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
      }
export function useGetExternalSystemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
        }
export function useGetExternalSystemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>(GetExternalSystemsDocument, options);
        }
export type GetExternalSystemsQueryHookResult = ReturnType<typeof useGetExternalSystemsQuery>;
export type GetExternalSystemsLazyQueryHookResult = ReturnType<typeof useGetExternalSystemsLazyQuery>;
export type GetExternalSystemsSuspenseQueryHookResult = ReturnType<typeof useGetExternalSystemsSuspenseQuery>;
export type GetExternalSystemsQueryResult = Apollo.QueryResult<GetExternalSystemsQuery, GetExternalSystemsQueryVariables>;
export const GetFeatureFlagsDocument = gql`
    query GetFeatureFlags {
  feature_flags {
    ...FeatureFlagFragment
  }
}
    ${FeatureFlagFragmentFragmentDoc}`;

/**
 * __useGetFeatureFlagsQuery__
 *
 * To run a query within a React component, call `useGetFeatureFlagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeatureFlagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeatureFlagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeatureFlagsQuery(baseOptions?: Apollo.QueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
      }
export function useGetFeatureFlagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
        }
export function useGetFeatureFlagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>(GetFeatureFlagsDocument, options);
        }
export type GetFeatureFlagsQueryHookResult = ReturnType<typeof useGetFeatureFlagsQuery>;
export type GetFeatureFlagsLazyQueryHookResult = ReturnType<typeof useGetFeatureFlagsLazyQuery>;
export type GetFeatureFlagsSuspenseQueryHookResult = ReturnType<typeof useGetFeatureFlagsSuspenseQuery>;
export type GetFeatureFlagsQueryResult = Apollo.QueryResult<GetFeatureFlagsQuery, GetFeatureFlagsQueryVariables>;
export const GetHolidaysDocument = gql`
    query GetHolidays {
  holidays(order_by: {date: asc}) {
    ...HolidayFragment
  }
}
    ${HolidayFragmentFragmentDoc}`;

/**
 * __useGetHolidaysQuery__
 *
 * To run a query within a React component, call `useGetHolidaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHolidaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHolidaysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHolidaysQuery(baseOptions?: Apollo.QueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
      }
export function useGetHolidaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
        }
export function useGetHolidaysSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysQuery, GetHolidaysQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysQuery, GetHolidaysQueryVariables>(GetHolidaysDocument, options);
        }
export type GetHolidaysQueryHookResult = ReturnType<typeof useGetHolidaysQuery>;
export type GetHolidaysLazyQueryHookResult = ReturnType<typeof useGetHolidaysLazyQuery>;
export type GetHolidaysSuspenseQueryHookResult = ReturnType<typeof useGetHolidaysSuspenseQuery>;
export type GetHolidaysQueryResult = Apollo.QueryResult<GetHolidaysQuery, GetHolidaysQueryVariables>;
export const GetHolidaysByCountryDocument = gql`
    query GetHolidaysByCountry($country_code: bpchar!) {
  holidays(where: {country_code: {_eq: $country_code}}, order_by: {date: asc}) {
    ...HolidayFragment
  }
}
    ${HolidayFragmentFragmentDoc}`;

/**
 * __useGetHolidaysByCountryQuery__
 *
 * To run a query within a React component, call `useGetHolidaysByCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHolidaysByCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHolidaysByCountryQuery({
 *   variables: {
 *      country_code: // value for 'country_code'
 *   },
 * });
 */
export function useGetHolidaysByCountryQuery(baseOptions: Apollo.QueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables> & ({ variables: GetHolidaysByCountryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
      }
export function useGetHolidaysByCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
        }
export function useGetHolidaysByCountrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>(GetHolidaysByCountryDocument, options);
        }
export type GetHolidaysByCountryQueryHookResult = ReturnType<typeof useGetHolidaysByCountryQuery>;
export type GetHolidaysByCountryLazyQueryHookResult = ReturnType<typeof useGetHolidaysByCountryLazyQuery>;
export type GetHolidaysByCountrySuspenseQueryHookResult = ReturnType<typeof useGetHolidaysByCountrySuspenseQuery>;
export type GetHolidaysByCountryQueryResult = Apollo.QueryResult<GetHolidaysByCountryQuery, GetHolidaysByCountryQueryVariables>;
export const GetLeaveDocument = gql`
    query GetLeave($userId: uuid, $startDate: date, $endDate: date) {
  leave(
    where: {user_id: {_eq: $userId}, start_date: {_gte: $startDate}, end_date: {_lte: $endDate}}
  ) {
    ...LeaveFragment
  }
}
    ${LeaveFragmentFragmentDoc}`;

/**
 * __useGetLeaveQuery__
 *
 * To run a query within a React component, call `useGetLeaveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaveQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetLeaveQuery(baseOptions?: Apollo.QueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
      }
export function useGetLeaveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
        }
export function useGetLeaveSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
        }
export type GetLeaveQueryHookResult = ReturnType<typeof useGetLeaveQuery>;
export type GetLeaveLazyQueryHookResult = ReturnType<typeof useGetLeaveLazyQuery>;
export type GetLeaveSuspenseQueryHookResult = ReturnType<typeof useGetLeaveSuspenseQuery>;
export type GetLeaveQueryResult = Apollo.QueryResult<GetLeaveQuery, GetLeaveQueryVariables>;
export const GetNotesDocument = gql`
    query GetNotes($entityId: uuid!, $entityType: String!) {
  notes(
    where: {entity_id: {_eq: $entityId}, entity_type: {_eq: $entityType}}
    order_by: {created_at: desc}
  ) {
    ...NoteFragment
  }
}
    ${NoteFragmentFragmentDoc}`;

/**
 * __useGetNotesQuery__
 *
 * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *      entityType: // value for 'entityType'
 *   },
 * });
 */
export function useGetNotesQuery(baseOptions: Apollo.QueryHookOptions<GetNotesQuery, GetNotesQueryVariables> & ({ variables: GetNotesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
      }
export function useGetNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export function useGetNotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export type GetNotesQueryHookResult = ReturnType<typeof useGetNotesQuery>;
export type GetNotesLazyQueryHookResult = ReturnType<typeof useGetNotesLazyQuery>;
export type GetNotesSuspenseQueryHookResult = ReturnType<typeof useGetNotesSuspenseQuery>;
export type GetNotesQueryResult = Apollo.QueryResult<GetNotesQuery, GetNotesQueryVariables>;
export const GetPayrollCyclesDocument = gql`
    query GetPayrollCycles {
  payroll_cycles(order_by: {name: asc}) {
    ...PayrollCycleFragment
    adjustment_rules {
      id
      date_type_id
      rule_code
      rule_description
    }
    payrolls_aggregate {
      aggregate {
        count
      }
    }
  }
}
    ${PayrollCycleFragmentFragmentDoc}`;

/**
 * __useGetPayrollCyclesQuery__
 *
 * To run a query within a React component, call `useGetPayrollCyclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollCyclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollCyclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollCyclesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
      }
export function useGetPayrollCyclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
        }
export function useGetPayrollCyclesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>(GetPayrollCyclesDocument, options);
        }
export type GetPayrollCyclesQueryHookResult = ReturnType<typeof useGetPayrollCyclesQuery>;
export type GetPayrollCyclesLazyQueryHookResult = ReturnType<typeof useGetPayrollCyclesLazyQuery>;
export type GetPayrollCyclesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollCyclesSuspenseQuery>;
export type GetPayrollCyclesQueryResult = Apollo.QueryResult<GetPayrollCyclesQuery, GetPayrollCyclesQueryVariables>;
export const GetPayrollDateTypesDocument = gql`
    query GetPayrollDateTypes {
  payroll_date_types(order_by: {name: asc}) {
    ...PayrollDateTypeFragment
    adjustment_rules {
      id
      cycle_id
      rule_code
      rule_description
    }
    payrolls_aggregate {
      aggregate {
        count
      }
    }
  }
}
    ${PayrollDateTypeFragmentFragmentDoc}`;

/**
 * __useGetPayrollDateTypesQuery__
 *
 * To run a query within a React component, call `useGetPayrollDateTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollDateTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollDateTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollDateTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypesDocument, options);
      }
export function useGetPayrollDateTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypesDocument, options);
        }
export function useGetPayrollDateTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>(GetPayrollDateTypesDocument, options);
        }
export type GetPayrollDateTypesQueryHookResult = ReturnType<typeof useGetPayrollDateTypesQuery>;
export type GetPayrollDateTypesLazyQueryHookResult = ReturnType<typeof useGetPayrollDateTypesLazyQuery>;
export type GetPayrollDateTypesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollDateTypesSuspenseQuery>;
export type GetPayrollDateTypesQueryResult = Apollo.QueryResult<GetPayrollDateTypesQuery, GetPayrollDateTypesQueryVariables>;
export const GetPayrollByIdDocument = gql`
    query GetPayrollById($id: uuid!) {
  payrolls_by_pk(id: $id) {
    ...PayrollDetailFragment
    payroll_dates {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollDetailFragmentFragmentDoc}
${PayrollDateFragmentFragmentDoc}`;

/**
 * __useGetPayrollByIdQuery__
 *
 * To run a query within a React component, call `useGetPayrollByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPayrollByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables> & ({ variables: GetPayrollByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
      }
export function useGetPayrollByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
        }
export function useGetPayrollByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>(GetPayrollByIdDocument, options);
        }
export type GetPayrollByIdQueryHookResult = ReturnType<typeof useGetPayrollByIdQuery>;
export type GetPayrollByIdLazyQueryHookResult = ReturnType<typeof useGetPayrollByIdLazyQuery>;
export type GetPayrollByIdSuspenseQueryHookResult = ReturnType<typeof useGetPayrollByIdSuspenseQuery>;
export type GetPayrollByIdQueryResult = Apollo.QueryResult<GetPayrollByIdQuery, GetPayrollByIdQueryVariables>;
export const GetPayrollDatesDocument = gql`
    query GetPayrollDates($payrollId: uuid!, $startDate: date, $endDate: date) {
  payroll_dates(
    where: {payroll_id: {_eq: $payrollId}, _and: [{original_eft_date: {_gte: $startDate}}, {original_eft_date: {_lte: $endDate}}]}
    order_by: {original_eft_date: asc}
  ) {
    ...PayrollDateFragment
  }
}
    ${PayrollDateFragmentFragmentDoc}`;

/**
 * __useGetPayrollDatesQuery__
 *
 * To run a query within a React component, call `useGetPayrollDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollDatesQuery({
 *   variables: {
 *      payrollId: // value for 'payrollId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollDatesQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables> & ({ variables: GetPayrollDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
      }
export function useGetPayrollDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
        }
export function useGetPayrollDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>(GetPayrollDatesDocument, options);
        }
export type GetPayrollDatesQueryHookResult = ReturnType<typeof useGetPayrollDatesQuery>;
export type GetPayrollDatesLazyQueryHookResult = ReturnType<typeof useGetPayrollDatesLazyQuery>;
export type GetPayrollDatesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollDatesSuspenseQuery>;
export type GetPayrollDatesQueryResult = Apollo.QueryResult<GetPayrollDatesQuery, GetPayrollDatesQueryVariables>;
export const GetPayrollListDocument = gql`
    query GetPayrollList($where: payrolls_bool_exp) {
  payrolls(where: $where, order_by: {created_at: desc}) {
    ...PayrollFragment
    client {
      id
      name
    }
    payroll_cycle {
      id
      name
    }
    payroll_date_type {
      id
      name
    }
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetPayrollListQuery__
 *
 * To run a query within a React component, call `useGetPayrollListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollListQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPayrollListQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
      }
export function useGetPayrollListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
        }
export function useGetPayrollListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollListQuery, GetPayrollListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollListQuery, GetPayrollListQueryVariables>(GetPayrollListDocument, options);
        }
export type GetPayrollListQueryHookResult = ReturnType<typeof useGetPayrollListQuery>;
export type GetPayrollListLazyQueryHookResult = ReturnType<typeof useGetPayrollListLazyQuery>;
export type GetPayrollListSuspenseQueryHookResult = ReturnType<typeof useGetPayrollListSuspenseQuery>;
export type GetPayrollListQueryResult = Apollo.QueryResult<GetPayrollListQuery, GetPayrollListQueryVariables>;
export const GetPayrollsDocument = gql`
    query GetPayrolls {
  payrolls {
    ...PayrollFragment
    payroll_cycle {
      id
      name
    }
    payroll_date_type {
      id
      name
    }
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetPayrollsQuery__
 *
 * To run a query within a React component, call `useGetPayrollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollsQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
      }
export function useGetPayrollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
        }
export function useGetPayrollsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsQuery, GetPayrollsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsQuery, GetPayrollsQueryVariables>(GetPayrollsDocument, options);
        }
export type GetPayrollsQueryHookResult = ReturnType<typeof useGetPayrollsQuery>;
export type GetPayrollsLazyQueryHookResult = ReturnType<typeof useGetPayrollsLazyQuery>;
export type GetPayrollsSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsSuspenseQuery>;
export type GetPayrollsQueryResult = Apollo.QueryResult<GetPayrollsQuery, GetPayrollsQueryVariables>;
export const GetPayrollsByMonthDocument = gql`
    query GetPayrollsByMonth($startDate: date!, $endDate: date!) {
  payrolls(
    where: {payroll_dates: {original_eft_date: {_gte: $startDate, _lt: $endDate}}}
  ) {
    ...PayrollFragment
    payroll_dates(where: {original_eft_date: {_gte: $startDate, _lt: $endDate}}) {
      ...PayrollDateFragment
    }
  }
}
    ${PayrollFragmentFragmentDoc}
${PayrollDateFragmentFragmentDoc}`;

/**
 * __useGetPayrollsByMonthQuery__
 *
 * To run a query within a React component, call `useGetPayrollsByMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsByMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsByMonthQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollsByMonthQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables> & ({ variables: GetPayrollsByMonthQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
      }
export function useGetPayrollsByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
        }
export function useGetPayrollsByMonthSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>(GetPayrollsByMonthDocument, options);
        }
export type GetPayrollsByMonthQueryHookResult = ReturnType<typeof useGetPayrollsByMonthQuery>;
export type GetPayrollsByMonthLazyQueryHookResult = ReturnType<typeof useGetPayrollsByMonthLazyQuery>;
export type GetPayrollsByMonthSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsByMonthSuspenseQuery>;
export type GetPayrollsByMonthQueryResult = Apollo.QueryResult<GetPayrollsByMonthQuery, GetPayrollsByMonthQueryVariables>;
export const GetPayrollsMissingDatesDocument = gql`
    query GetPayrollsMissingDates($startDate: date!, $endDate: date!) {
  payrolls(
    where: {_not: {payroll_dates: {original_eft_date: {_gte: $startDate, _lte: $endDate}}}, status: {_eq: "Active"}}
  ) {
    ...PayrollFragment
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetPayrollsMissingDatesQuery__
 *
 * To run a query within a React component, call `useGetPayrollsMissingDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollsMissingDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollsMissingDatesQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetPayrollsMissingDatesQuery(baseOptions: Apollo.QueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables> & ({ variables: GetPayrollsMissingDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
      }
export function useGetPayrollsMissingDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
        }
export function useGetPayrollsMissingDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>(GetPayrollsMissingDatesDocument, options);
        }
export type GetPayrollsMissingDatesQueryHookResult = ReturnType<typeof useGetPayrollsMissingDatesQuery>;
export type GetPayrollsMissingDatesLazyQueryHookResult = ReturnType<typeof useGetPayrollsMissingDatesLazyQuery>;
export type GetPayrollsMissingDatesSuspenseQueryHookResult = ReturnType<typeof useGetPayrollsMissingDatesSuspenseQuery>;
export type GetPayrollsMissingDatesQueryResult = Apollo.QueryResult<GetPayrollsMissingDatesQuery, GetPayrollsMissingDatesQueryVariables>;
export const GetUserPayrollsDocument = gql`
    query GetUserPayrolls($userId: uuid!) {
  payrolls(
    where: {_or: [{primary_consultant_user_id: {_eq: $userId}}, {backup_consultant_user_id: {_eq: $userId}}, {manager_user_id: {_eq: $userId}}]}
  ) {
    ...PayrollFragment
    client {
      id
      name
    }
  }
}
    ${PayrollFragmentFragmentDoc}`;

/**
 * __useGetUserPayrollsQuery__
 *
 * To run a query within a React component, call `useGetUserPayrollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPayrollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPayrollsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserPayrollsQuery(baseOptions: Apollo.QueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables> & ({ variables: GetUserPayrollsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
      }
export function useGetUserPayrollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
        }
export function useGetUserPayrollsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>(GetUserPayrollsDocument, options);
        }
export type GetUserPayrollsQueryHookResult = ReturnType<typeof useGetUserPayrollsQuery>;
export type GetUserPayrollsLazyQueryHookResult = ReturnType<typeof useGetUserPayrollsLazyQuery>;
export type GetUserPayrollsSuspenseQueryHookResult = ReturnType<typeof useGetUserPayrollsSuspenseQuery>;
export type GetUserPayrollsQueryResult = Apollo.QueryResult<GetUserPayrollsQuery, GetUserPayrollsQueryVariables>;
export const GetStaffByIdDocument = gql`
    query GetStaffById($id: uuid!) {
  users_by_pk(id: $id) {
    ...StaffFragment
    ...StaffManagerFragment
    ...StaffLeaveFragment
  }
}
    ${StaffFragmentFragmentDoc}
${StaffManagerFragmentFragmentDoc}
${StaffLeaveFragmentFragmentDoc}`;

/**
 * __useGetStaffByIdQuery__
 *
 * To run a query within a React component, call `useGetStaffByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStaffByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables> & ({ variables: GetStaffByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
      }
export function useGetStaffByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
        }
export function useGetStaffByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStaffByIdQuery, GetStaffByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, options);
        }
export type GetStaffByIdQueryHookResult = ReturnType<typeof useGetStaffByIdQuery>;
export type GetStaffByIdLazyQueryHookResult = ReturnType<typeof useGetStaffByIdLazyQuery>;
export type GetStaffByIdSuspenseQueryHookResult = ReturnType<typeof useGetStaffByIdSuspenseQuery>;
export type GetStaffByIdQueryResult = Apollo.QueryResult<GetStaffByIdQuery, GetStaffByIdQueryVariables>;
export const GetStaffListDocument = gql`
    query GetStaffList {
  users(where: {is_staff: {_eq: true}}) {
    ...StaffFragment
    ...StaffManagerFragment
    ...StaffLeaveFragment
  }
}
    ${StaffFragmentFragmentDoc}
${StaffManagerFragmentFragmentDoc}
${StaffLeaveFragmentFragmentDoc}`;

/**
 * __useGetStaffListQuery__
 *
 * To run a query within a React component, call `useGetStaffListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStaffListQuery(baseOptions?: Apollo.QueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
      }
export function useGetStaffListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
        }
export function useGetStaffListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStaffListQuery, GetStaffListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStaffListQuery, GetStaffListQueryVariables>(GetStaffListDocument, options);
        }
export type GetStaffListQueryHookResult = ReturnType<typeof useGetStaffListQuery>;
export type GetStaffListLazyQueryHookResult = ReturnType<typeof useGetStaffListLazyQuery>;
export type GetStaffListSuspenseQueryHookResult = ReturnType<typeof useGetStaffListSuspenseQuery>;
export type GetStaffListQueryResult = Apollo.QueryResult<GetStaffListQuery, GetStaffListQueryVariables>;
export const GetPayrollStatisticsDocument = gql`
    query GetPayrollStatistics {
  payrolls_aggregate {
    aggregate {
      count
    }
    nodes {
      status
    }
  }
  active_payrolls: payrolls_aggregate(where: {status: {_eq: "Active"}}) {
    aggregate {
      count
    }
  }
  implementation_payrolls: payrolls_aggregate(
    where: {status: {_eq: "Implementation"}}
  ) {
    aggregate {
      count
    }
  }
  inactive_payrolls: payrolls_aggregate(where: {status: {_eq: "Inactive"}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetPayrollStatisticsQuery__
 *
 * To run a query within a React component, call `useGetPayrollStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayrollStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPayrollStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPayrollStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
      }
export function useGetPayrollStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
        }
export function useGetPayrollStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>(GetPayrollStatisticsDocument, options);
        }
export type GetPayrollStatisticsQueryHookResult = ReturnType<typeof useGetPayrollStatisticsQuery>;
export type GetPayrollStatisticsLazyQueryHookResult = ReturnType<typeof useGetPayrollStatisticsLazyQuery>;
export type GetPayrollStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetPayrollStatisticsSuspenseQuery>;
export type GetPayrollStatisticsQueryResult = Apollo.QueryResult<GetPayrollStatisticsQuery, GetPayrollStatisticsQueryVariables>;
export const GetClientStatisticsDocument = gql`
    query GetClientStatistics {
  clients_aggregate {
    aggregate {
      count
    }
  }
  active_clients: clients_aggregate(where: {active: {_eq: true}}) {
    aggregate {
      count
    }
  }
  clients_with_payrolls: clients_aggregate(where: {payrolls: {}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetClientStatisticsQuery__
 *
 * To run a query within a React component, call `useGetClientStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClientStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
      }
export function useGetClientStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
        }
export function useGetClientStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>(GetClientStatisticsDocument, options);
        }
export type GetClientStatisticsQueryHookResult = ReturnType<typeof useGetClientStatisticsQuery>;
export type GetClientStatisticsLazyQueryHookResult = ReturnType<typeof useGetClientStatisticsLazyQuery>;
export type GetClientStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetClientStatisticsSuspenseQuery>;
export type GetClientStatisticsQueryResult = Apollo.QueryResult<GetClientStatisticsQuery, GetClientStatisticsQueryVariables>;
export const GetLeaveStatisticsDocument = gql`
    query GetLeaveStatistics($startDate: date!, $endDate: date!) {
  leave_aggregate(
    where: {start_date: {_gte: $startDate}, end_date: {_lte: $endDate}}
  ) {
    aggregate {
      count
    }
    nodes {
      leave_type
      status
    }
  }
}
    `;

/**
 * __useGetLeaveStatisticsQuery__
 *
 * To run a query within a React component, call `useGetLeaveStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaveStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaveStatisticsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetLeaveStatisticsQuery(baseOptions: Apollo.QueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables> & ({ variables: GetLeaveStatisticsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
      }
export function useGetLeaveStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
        }
export function useGetLeaveStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>(GetLeaveStatisticsDocument, options);
        }
export type GetLeaveStatisticsQueryHookResult = ReturnType<typeof useGetLeaveStatisticsQuery>;
export type GetLeaveStatisticsLazyQueryHookResult = ReturnType<typeof useGetLeaveStatisticsLazyQuery>;
export type GetLeaveStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetLeaveStatisticsSuspenseQuery>;
export type GetLeaveStatisticsQueryResult = Apollo.QueryResult<GetLeaveStatisticsQuery, GetLeaveStatisticsQueryVariables>;
export const GetUserWorkScheduleDocument = gql`
    query GetUserWorkSchedule($userId: uuid!) {
  work_schedule(where: {user_id: {_eq: $userId}}) {
    ...WorkScheduleFragment
  }
}
    ${WorkScheduleFragmentFragmentDoc}`;

/**
 * __useGetUserWorkScheduleQuery__
 *
 * To run a query within a React component, call `useGetUserWorkScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWorkScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWorkScheduleQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserWorkScheduleQuery(baseOptions: Apollo.QueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables> & ({ variables: GetUserWorkScheduleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
      }
export function useGetUserWorkScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
        }
export function useGetUserWorkScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
        }
export type GetUserWorkScheduleQueryHookResult = ReturnType<typeof useGetUserWorkScheduleQuery>;
export type GetUserWorkScheduleLazyQueryHookResult = ReturnType<typeof useGetUserWorkScheduleLazyQuery>;
export type GetUserWorkScheduleSuspenseQueryHookResult = ReturnType<typeof useGetUserWorkScheduleSuspenseQuery>;
export type GetUserWorkScheduleQueryResult = Apollo.QueryResult<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>;