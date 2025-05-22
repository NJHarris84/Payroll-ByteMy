import { gql } from '@apollo/client';

/**
 * Fragment containing work schedule fields
 * Used in work schedule queries and mutations
 */
export const WORK_SCHEDULE_FRAGMENT = gql`
  fragment WorkScheduleFragment on work_schedules {
    id
    user_id
    day_of_week
    start_time
    end_time
    is_working_day
    created_at
    updated_at
  }
`;