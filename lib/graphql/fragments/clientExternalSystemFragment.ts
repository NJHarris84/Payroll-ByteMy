import { gql } from '@apollo/client';

export const CLIENT_EXTERNAL_SYSTEM_FRAGMENT = gql`
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
