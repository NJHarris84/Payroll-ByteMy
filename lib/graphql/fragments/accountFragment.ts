import { gql } from '@apollo/client';

export const ACCOUNT_FRAGMENT = gql`
  fragment AccountFragment on accounts {
    id
    userId
    type
    provider
    providerAccountId
    refresh_token
    access_token
    expires_at
    id_token
    scope
    session_state
    token_type
  }
`;
