import { gql } from '@apollo/client';
import { EXTERNAL_SYSTEM_FRAGMENT } from '../../fragments/externalSystemFragment';

export const GET_EXTERNAL_SYSTEMS = gql`
  query GetExternalSystems {
    external_systems {
      ...ExternalSystemFragment
    }
  }
  ${EXTERNAL_SYSTEM_FRAGMENT}
`;
