// graphql/queries/clients/getClientsList.ts
import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../../fragments/clientFragment';

export const GET_CLIENTS_LIST = gql`
  query GetClientsList {
    clients(order_by: {name: asc}) {
      ...ClientFragment
    }
  }
  ${CLIENT_FRAGMENT}
`;
