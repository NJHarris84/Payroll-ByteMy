// graphql/mutations/clients/createClient.ts

import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../../fragments/clientFragment';

export const CREATE_CLIENT = gql`
  mutation CreateClient($input: clients_insert_input!) {
    insert_clients_one(object: $input) {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;
