import { gql } from "@apollo/client";
import { NOTE_FRAGMENT } from "../../fragments/noteFragment";

export const ADD_NOTE = gql`
  mutation AddNote($input: notes_insert_input!) {
    insert_notes_one(object: $input) {
      ...NoteFragment
    }
  }
  ${NOTE_FRAGMENT}
`;

