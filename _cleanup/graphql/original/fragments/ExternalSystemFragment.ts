import { gql } from '@apollo/client';

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
