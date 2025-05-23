import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type LeaveFragment = { __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null };

export const LEAVE_FRAGMENT = gql`
    fragment LeaveFragment on leave {
  id
  user_id
  start_date
  end_date
  leave_type
  reason
  status
}
    `;