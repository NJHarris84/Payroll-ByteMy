import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type ClientFragmentFragment = { __typename?: 'clients', id: any, name: string, contact_person?: string | null, contact_email?: string | null, contact_phone?: string | null, active?: boolean | null, created_at?: any | null, updated_at?: any | null };

export const ClientFragmentFragmentDoc = gql`
    fragment ClientFragment on clients {
  id
  name
  contact_person
  contact_email
  contact_phone
  active
  created_at
  updated_at
}
    `;