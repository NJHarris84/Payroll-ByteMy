import { gql } from "@apollo/client";

export const CLIENT_FRAGMENT = gql`
  fragment ClientFragment on clients {
    id
    name
    contact_person
    contact_email
    contact_phone
    active
    created_at
    updated_at
  }
`;
