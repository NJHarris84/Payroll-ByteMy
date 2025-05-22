import { gql } from "@apollo/client";

/**
 * Fragment containing core staff/user fields
 * Used in staff queries and mutations
 */
export const STAFF_FRAGMENT = gql`
  fragment StaffFragment on users {
    id
    name
    email
    image
    is_staff
    role
    manager_id
    created_at
    updated_at
  }
`;

/**
 * Fragment containing staff manager relationship fields
 * Used in staff queries that need manager information
 */
export const STAFF_MANAGER_FRAGMENT = gql`
  fragment StaffManagerFragment on users {
    manager {
      id
      name
      email
      role
    }
  }
`;

/**
 * Fragment containing staff leave information
 * Used in staff queries that need leave details
 */
export const STAFF_LEAVE_FRAGMENT = gql`
  fragment StaffLeaveFragment on users {
    leaves {
      id
      start_date
      end_date
      leave_type
      status
    }
  }
`;
