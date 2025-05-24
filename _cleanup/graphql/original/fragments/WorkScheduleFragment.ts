import { gql } from '@apollo/client';

/**
 * Fragment containing work schedule fields
 * Used in work schedule queries and mutations
 */
export const WORK_SCHEDULE_FRAGMENT = gql`
  fragment WorkScheduleFragment on work_schedule {
    id
    user_id
    work_day
    work_hours
    created_at
    updated_at
  }
`;