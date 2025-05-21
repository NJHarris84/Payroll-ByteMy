// graphql/queries/clients/getClientsList.ts
import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../../fragments/clientFragment';

export const GET_CLIENTS = gql`
  ${CLIENT_FRAGMENT}
  
  query GetClientList {
    clients {
      ...ClientFields
      payrolls {
        id
        name
        status
        payroll_cycle {
          name
        }
        payroll_date_type {
          name
        }
        payroll_dates(order_by: {adjusted_eft_date: desc}, limit: 1) {
          adjusted_eft_date
        }
      }
    }
  }
`;
