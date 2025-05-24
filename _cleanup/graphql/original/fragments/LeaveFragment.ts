import { gql } from '@apollo/client';

/**
 * Fragment containing leave request fields
 * Used in leave queries and mutations
 */
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