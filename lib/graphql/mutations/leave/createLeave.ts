import { gql } from "@apollo/client";
import { LEAVE_FRAGMENT } from "../../fragments/leaveFragment";

export const CREATE_LEAVE = gql`
  mutation CreateLeave($input: leaves_insert_input!) {
    insert_leaves_one(object: $input) {
      ...LeaveFragment
    }
  }
  ${LEAVE_FRAGMENT}
`;
