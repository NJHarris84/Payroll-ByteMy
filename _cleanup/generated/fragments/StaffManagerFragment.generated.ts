import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type StaffManagerFragmentFragment = { __typename?: 'users', manager?: { __typename?: 'users', id: any, name: string, email: string, role: any } | null };

export const STAFF_MANAGER_FRAGMENT = gql`
    fragment StaffManagerFragment on users {
  manager {
    id
    name
    email
    role
  }
}
    `;