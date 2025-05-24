import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type ClientExternalSystemFragmentFragment = { __typename?: 'client_external_systems', id: any, client_id: any, system_id: any, system_client_id?: string | null, created_at?: any | null, updated_at?: any | null, client: { __typename?: 'clients', id: any, name: string }, external_system: { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null } };

export const ClientExternalSystemFragmentFragmentDoc = gql`
    fragment ClientExternalSystemFragment on client_external_systems {
  id
  client_id
  system_id
  system_client_id
  created_at
  updated_at
  client {
    id
    name
  }
  external_system {
    id
    name
    url
    description
    icon
  }
}
    `;