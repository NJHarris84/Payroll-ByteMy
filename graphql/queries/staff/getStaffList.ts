// graphql/queries/staff/getStaffList.ts
import { gql } from "@apollo/client";
import { STAFF_FRAGMENT } from "../../fragments/staffFragment";

export const GET_STAFF_LIST = gql`
  ${STAFF_FRAGMENT.StaffFields}
  ${STAFF_FRAGMENT.StaffManagerFields}
  ${STAFF_FRAGMENT.StaffLeaveFields}
  
  query GetStaffList {
    users(where: {is_staff: {_eq: true}}) {
      ...StaffFields
      ...StaffManagerFields
      staffByManager {
        ...StaffFields
      }
      ...StaffLeaveFields
    }
  }
`;
