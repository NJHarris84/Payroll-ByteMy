import { gql } from "@apollo/client";

export const CREATE_WORK_SCHEDULE = gql`
  mutation CreateWorkSchedule(
    $userId: uuid!, 
    $workDay: String!, 
    $workHours: numeric!
  ) {
    insert_work_schedule_one(
      object: {
        user_id: $userId,
        work_day: $workDay,
        work_hours: $workHours
      }
    ) {
      id
      work_day
      work_hours
    }
  }
`;