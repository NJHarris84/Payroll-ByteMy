// graphql/queries/staff/getStaffById.ts
import { gql } from '@apollo/client';
import { 
  STAFF_FRAGMENT, 
  STAFF_MANAGER_FRAGMENT, 
  STAFF_LEAVE_FRAGMENT 
} from '../../fragments/staffFragment';

export const GET_STAFF_BY_ID = gql`
  query GetStaffById($id: uuid!) {
    users_by_pk(id: $id) {
      ...StaffFragment
      ...StaffManagerFragment
      ...StaffLeaveFragment
    }
  }
  ${STAFF_FRAGMENT}
  ${STAFF_MANAGER_FRAGMENT}
  ${STAFF_LEAVE_FRAGMENT}
`;
