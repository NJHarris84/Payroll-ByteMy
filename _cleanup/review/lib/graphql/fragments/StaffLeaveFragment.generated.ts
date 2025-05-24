import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type StaffLeaveFragmentFragment = { __typename?: 'users', leaves: Array<{ __typename?: 'leave', id: any, start_date: any, end_date: any, leave_type: string, status?: any | null }> };

export const StaffLeaveFragmentFragmentDoc = gql`
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