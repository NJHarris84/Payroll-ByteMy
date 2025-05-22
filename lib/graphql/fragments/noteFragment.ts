import { gql } from '@apollo/client';

export const NOTE_FRAGMENT = gql`
  fragment NoteFragment on notes {
    id
    entity_id
    entity_type
    content
    created_by
    created_at
    updated_at
  }
`;