import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type FeatureFlagFragmentFragment = { __typename?: 'feature_flags', id: any, feature_name: string, is_enabled?: boolean | null, allowed_roles: any, updated_at?: any | null };

export const FeatureFlagFragmentFragmentDoc = gql`
    fragment FeatureFlagFragment on feature_flags {
  id
  feature_name
  is_enabled
  allowed_roles
  updated_at
}
    `;