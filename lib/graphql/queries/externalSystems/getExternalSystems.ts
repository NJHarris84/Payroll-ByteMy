import { gql } from '@apollo/client';
import { EXTERNAL_SYSTEM_FRAGMENT } from '../../fragments/externalSystemFragment';

export const GET_EXTERNAL_SYSTEMS = gql`
  query GetExternalSystems {
    external_systems(order_by: { name: asc }) {
      ...ExternalSystemFragment
      client_external_systems {
        id
        client_id
        system_client_id
      }
    }
  }
  ${EXTERNAL_SYSTEM_FRAGMENT}
`;
