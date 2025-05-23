import { gql } from "@apollo/client";
import { WORK_SCHEDULE_FRAGMENT } from "../../fragments/workScheduleFragment";

export const GET_USER_WORK_SCHEDULE = gql`
  query GetUserWorkSchedule($userId: uuid!) {
    work_schedule(where: { user_id: { _eq: $userId } }) {
      ...WorkScheduleFragment
    }
  }
  ${WORK_SCHEDULE_FRAGMENT}
`;