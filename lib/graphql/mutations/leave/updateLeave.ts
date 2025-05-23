import { gql } from "@apollo/client";
import { LEAVE_FRAGMENT } from "../../fragments/leaveFragment";

export const UPDATE_LEAVE = gql`
  mutation UpdateLeave($id: uuid!, $input: leave_set_input!) {
    update_leave_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...LeaveFragment
    }
  }
  ${LEAVE_FRAGMENT}
`;
