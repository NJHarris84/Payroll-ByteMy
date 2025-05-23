import { gql } from '@apollo/client';
import { FEATURE_FLAG_FRAGMENT } from '../../fragments/featureFlagFragment';

export const GET_FEATURE_FLAGS = gql`
  query GetFeatureFlags {
    feature_flags {
      ...FeatureFlagFragment
    }
  }
  ${FEATURE_FLAG_FRAGMENT}
`;
