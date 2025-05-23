import { gql } from "@apollo/client";
import { LEAVE_FRAGMENT } from "../../fragments/leaveFragment";

export const CREATE_LEAVE = gql`
  mutation CreateLeave($input: leave_insert_input!) {
    insert_leave_one(object: $input) {
      ...LeaveFragment
    }
  }
  ${LEAVE_FRAGMENT}
`;
