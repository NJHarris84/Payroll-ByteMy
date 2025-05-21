import { gql } from "@apollo/client";

export const STAFF_FRAGMENT = gql`
  fragment StaffFields on users {
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

  fragment StaffManagerFields on users {
    manager {
      id
      name
      email
      is_staff
    }
  }

  fragment StaffLeaveFields on users {
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
