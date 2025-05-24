// graphql/mutations/staff/deleteStaff.ts
import { gql } from '@apollo/client';
import { STAFF_FRAGMENT } from '../..';

export const DELETE_STAFF = gql`
  mutation DeleteStaff($id: uuid!) {
    delete_users_by_pk(id: $id) {
      ...StaffFragment
    }
  }
  ${STAFF_FRAGMENT}
`;
