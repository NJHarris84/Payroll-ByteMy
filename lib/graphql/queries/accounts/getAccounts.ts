import { gql } from '@apollo/client';
import { ACCOUNT_FRAGMENT } from '../../fragments/accountFragment';

export const GET_ACCOUNTS = gql`
  query GetAccounts {
    accounts {
      ...AccountFragment
    }
  }
  ${ACCOUNT_FRAGMENT}
`;

export const GET_ACCOUNT_BY_USER_ID = gql`
  query GetAccountByUserId($userId: uuid!) {
    accounts(where: { userId: { _eq: $userId } }) {
      ...AccountFragment
    }
  }
  ${ACCOUNT_FRAGMENT}
`;
