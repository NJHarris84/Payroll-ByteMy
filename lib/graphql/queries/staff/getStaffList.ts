// graphql/queries/staff/getStaffList.ts
import { gql } from "@apollo/client";
import {
  STAFF_FRAGMENT,
  STAFF_MANAGER_FRAGMENT,
  STAFF_LEAVE_FRAGMENT,
} from "../../fragments/staffFragment";

export const GET_STAFF_LIST = gql`
  query GetStaffList {
    users(where: { is_staff: { _eq: true } }) {
      ...StaffFragment
      ...StaffManagerFragment
      ...StaffLeaveFragment
    }
  }
  ${STAFF_FRAGMENT}
  ${STAFF_MANAGER_FRAGMENT}
  ${STAFF_LEAVE_FRAGMENT}
`;
