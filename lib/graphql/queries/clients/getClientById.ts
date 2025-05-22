// graphql/queries/clients/getClientById.ts
import { gql } from '@apollo/client';
import { CLIENT_FRAGMENT } from '../../fragments/clientFragment';
import { PAYROLL_FRAGMENT } from '../../fragments/payrollFragment';

export const GET_CLIENT_BY_ID = gql`
  query GetClientById($id: uuid!) {
    clients_by_pk(id: $id) {
      ...ClientFragment
      payrolls {
        ...PayrollFragment
      }
    }
  }
  ${CLIENT_FRAGMENT}
  ${PAYROLL_FRAGMENT}
`;
