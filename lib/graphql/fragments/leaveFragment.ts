import { gql } from '@apollo/client';

export const LEAVE_FRAGMENT = gql`
  fragment LeaveFragment on leaves {
    id
    user_id
    start_date
    end_date
    leave_type
    reason
    status
    created_at
    updated_at
  }
`;