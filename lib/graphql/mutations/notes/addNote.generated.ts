import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddNoteMutationVariables = Types.Exact<{
  input: Types.Notes_Insert_Input;
}>;


export type ADD_NOTE_MUTATION = { __typename?: 'mutation_root', insert_notes_one?: { __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null } | null };


export const ADD_NOTE = gql`
    mutation AddNote($input: notes_insert_input!) {
  insert_notes_one(object: $input) {
    ...NoteFragment
  }
}
    ${NoteFragmentFragmentDoc}`;
export type ADD_NOTE_MUTATIONFn = Apollo.MutationFunction<AddNoteMutation, AddNoteMutationVariables>;

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
export type ADD_NOTE_MUTATIONHookResult = ReturnType<typeof useAddNoteMutation>;
export type ADD_NOTE_MUTATIONResult = Apollo.MutationResult<AddNoteMutation>;
export type ADD_NOTE_MUTATIONOptions = Apollo.BaseMutationOptions<AddNoteMutation, AddNoteMutationVariables>;