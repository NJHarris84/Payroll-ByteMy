import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type StaffLeaveFragment = { __typename?: 'users', leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> };

export const STAFF_LEAVE_FRAGMENT = gql`
    fragment StaffLeaveFragment on users {
  leaves {
    id
    start_date
    end_date
    leave_type
    status
  }
}
    `;