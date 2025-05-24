import { gql } from '@apollo/client';

export const FEATURE_FLAG_FRAGMENT = gql`
  fragment FeatureFlagFragment on feature_flags {
    id
    feature_name
    is_enabled
    allowed_roles
    updated_at
  }
`;
