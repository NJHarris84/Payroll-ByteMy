import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CREATE_STAFF_MUTATIONVariables = Types.Exact<{
  input: Types.Users_Insert_Input;
}>;


export type CREATE_STAFF_MUTATION = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null } | null };


export const CREATE_STAFF = gql`
    mutation CreateStaff($input: users_insert_input!) {
  insert_users_one(object: $input) {
    ...StaffFragment
  }
}
    ${StaffFragmentFragmentDoc}`;
export type CREATE_STAFF_MUTATIONFn = Apollo.MutationFunction<CreateStaffMutation, CreateStaffMutationVariables>;

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
export type CREATE_STAFF_MUTATIONHookResult = ReturnType<typeof useCreateStaffMutation>;
export type CREATE_STAFF_MUTATIONResult = Apollo.MutationResult<CreateStaffMutation>;
export type CREATE_STAFF_MUTATIONOptions = Apollo.BaseMutationOptions<CreateStaffMutation, CreateStaffMutationVariables>;