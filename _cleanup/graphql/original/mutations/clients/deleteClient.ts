// graphql/mutations/clients/deleteClient.ts
import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../..';

export const DELETE_CLIENT = gql`
  mutation DeleteClient($id: uuid!) {
    delete_clients_by_pk(id: $id) {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;
