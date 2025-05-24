import { gql } from "@apollo/client";
import { WORK_SCHEDULE_FRAGMENT } from "../..";

export const CREATE_WORK_SCHEDULE = gql`
  mutation CreateWorkSchedule($input: work_schedule_insert_input!) {
    insert_work_schedule_one(object: $input) {
      ...WorkScheduleFragment
    }
  }
  ${WORK_SCHEDULE_FRAGMENT}
`;