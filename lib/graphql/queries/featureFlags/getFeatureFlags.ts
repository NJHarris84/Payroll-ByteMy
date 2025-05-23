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

export const GET_FEATURE_FLAG_BY_NAME = gql`
  query GetFeatureFlagByName($name: String!) {
    feature_flags(where: { name: { _eq: $name } }) {
      ...FeatureFlagFragment
    }
  }
  ${FEATURE_FLAG_FRAGMENT}
`;
