import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type StaffFragmentFragment = { __typename?: 'users', id: any, name: string, email: string, image?: string | null, is_staff?: boolean | null, role: any, manager_id?: any | null, created_at?: any | null, updated_at?: any | null };

export const StaffFragmentFragmentDoc = gql`
    fragment StaffFragment on users {
  id
  name
  email
  image
  is_staff
  role
  manager_id
  created_at
  updated_at
}
    `;