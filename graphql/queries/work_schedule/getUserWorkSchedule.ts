import { gql } from "@apollo/client";

export const GET_USER_WORK_SCHEDULE = gql`
  query GetUserWorkSchedule($userId: uuid!) {
    work_schedule(where: {user_id: {_eq: $userId}}) {
      id
      work_day
      work_hours
      created_at
      updated_at
    }
  }
`;