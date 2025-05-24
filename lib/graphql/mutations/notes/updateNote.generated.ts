import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateNoteMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid']['input'];
  input: Types.Notes_Set_Input;
}>;


export type UPDATE_NOTE_MUTATION = { __typename?: 'mutation_root', update_notes_by_pk?: { __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };


export const UPDATE_NOTE = gql`
    mutation UpdateNote($id: uuid!, $input: notes_set_input!) {
  update_notes_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...NoteFragment
  }
}
    ${NoteFragmentFragmentDoc}`;
export type UPDATE_NOTE_MUTATIONFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

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
export type UPDATE_NOTE_MUTATIONHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UPDATE_NOTE_MUTATIONResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UPDATE_NOTE_MUTATIONOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;