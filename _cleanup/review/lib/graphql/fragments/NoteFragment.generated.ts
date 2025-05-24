import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type NoteFragmentFragment = { __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null };

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