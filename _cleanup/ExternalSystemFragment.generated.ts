import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type ExternalSystemFragment = { __typename?: 'external_systems', id: any, name: string, url: string, description?: string | null, icon?: string | null, created_at?: any | null, updated_at?: any | null };

export const EXTERNAL_SYSTEM_FRAGMENT = gql`
    fragment ExternalSystemFragment on external_systems {
  id
  name
  url
  description
  icon
  created_at
  updated_at
}
    `;