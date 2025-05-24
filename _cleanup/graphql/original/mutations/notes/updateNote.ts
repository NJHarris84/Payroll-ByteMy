import { gql } from "@apollo/client";
import { NOTE_FRAGMENT } from "../..";

export const UPDATE_NOTE = gql`
  mutation UpdateNote($id: uuid!, $input: notes_set_input!) {
    update_notes_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...NoteFragment
    }
  }
  ${NOTE_FRAGMENT}
`;