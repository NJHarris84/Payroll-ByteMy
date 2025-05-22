import { gql } from '@apollo/client';

/**
 * Fragment containing note fields
 * Used in note queries and mutations
 * Supports entity-based note features across the application
 */
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