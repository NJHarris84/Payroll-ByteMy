// graphql/mutations/clients/updateClient.ts
import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../../fragments/clientFragment';

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: uuid!, $input: clients_set_input!) {
    update_clients_by_pk(pk_columns: {id: $id}, _set: $input) {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;