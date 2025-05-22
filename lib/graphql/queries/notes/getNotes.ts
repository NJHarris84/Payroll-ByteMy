import { gql } from '@apollo/client';
import { NOTE_FRAGMENT } from '../../fragments/noteFragment';

export const GET_NOTES = gql`
  query GetNotes($entityId: uuid!, $entityType: String!) {
    notes(
      where: {
        entity_id: { _eq: $entityId },
        entity_type: { _eq: $entityType }
      },
      order_by: { created_at: desc }
    ) {
      ...NoteFragment
    }
  }
  ${NOTE_FRAGMENT}
`;