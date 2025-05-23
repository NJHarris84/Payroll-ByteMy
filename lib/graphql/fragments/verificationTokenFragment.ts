import { gql } from '@apollo/client';

export const VERIFICATION_TOKEN_FRAGMENT = gql`
  fragment VerificationTokenFragment on verification_token {
    identifier
    expires
    token
  }
`;
