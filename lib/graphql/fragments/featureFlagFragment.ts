import { gql } from '@apollo/client';

export const FEATURE_FLAG_FRAGMENT = gql`
  fragment FeatureFlagFragment on feature_flags {
    id
    name
    enabled
    description
    created_at
    updated_at
  }
`;
