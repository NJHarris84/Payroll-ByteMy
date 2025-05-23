import { gql } from '@apollo/client';

export const SESSION_FRAGMENT = gql`
  fragment SessionFragment on sessions {
    id
    userId
    expires
    sessionToken
  }
`;
