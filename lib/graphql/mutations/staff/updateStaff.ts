// graphql/mutations/staff/updateStaff.ts
import { gql } from '@apollo/client';
import { STAFF_FRAGMENT } from '../../fragments/staffFragment';

export const UPDATE_STAFF = gql`
  mutation UpdateStaff($id: uuid!, $input: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...StaffFragment
    }
  }
  ${STAFF_FRAGMENT}
`;