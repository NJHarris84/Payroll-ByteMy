import { gql } from '@apollo/client';
import { CLIENT_EXTERNAL_SYSTEM_FRAGMENT } from '../../fragments/clientExternalSystemFragment';

export const GET_CLIENT_EXTERNAL_SYSTEMS = gql`
  query GetClientExternalSystems($clientId: uuid!) {
    client_external_systems(where: { client_id: { _eq: $clientId } }) {
      ...ClientExternalSystemFragment
    }
  }
  ${CLIENT_EXTERNAL_SYSTEM_FRAGMENT}
`;
