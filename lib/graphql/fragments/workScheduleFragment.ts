import { gql } from '@apollo/client';

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