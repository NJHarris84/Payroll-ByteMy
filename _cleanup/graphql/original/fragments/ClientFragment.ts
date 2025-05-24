import { gql } from "@apollo/client";

/**
 * Fragment containing core client fields
 * Used in client queries and mutations
 */
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
