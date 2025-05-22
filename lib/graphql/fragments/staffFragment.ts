import { gql } from "@apollo/client";

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

export const STAFF_MANAGER_FRAGMENT = gql`
  fragment StaffManagerFragment on users {
    manager {
      id
      name
      email
      is_staff
    }
  }
`;

export const STAFF_LEAVE_FRAGMENT = gql`
  fragment StaffLeaveFragment on users {
    leaves {
      id
      start_date
      end_date
      leave_type
      reason
      status
    }
  }
`;
