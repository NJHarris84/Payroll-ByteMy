import { gql } from '@apollo/client';

/**
 * Fragment containing note fields
 * Used in note queries and mutations
 * Supports entity-based note features across the application
 */
export const NOTE_FRAGMENT = gql`
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