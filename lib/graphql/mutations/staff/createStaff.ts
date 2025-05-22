// graphql/mutations/staff/createStaff.ts
import { gql } from "@apollo/client";
import { STAFF_FRAGMENT } from "../../fragments/staffFragment";

export const CREATE_STAFF = gql`
  mutation CreateStaff($input: users_insert_input!) {
    insert_users_one(object: $input) {
      ...StaffFragment
    }
  }
  ${STAFF_FRAGMENT}
`;
