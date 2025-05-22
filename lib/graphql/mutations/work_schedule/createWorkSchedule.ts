import { gql } from "@apollo/client";
import { WORK_SCHEDULE_FRAGMENT } from "../../fragments/workScheduleFragment";

export const CREATE_WORK_SCHEDULE = gql`
  mutation CreateWorkSchedule($input: work_schedules_insert_input!) {
    insert_work_schedules_one(object: $input) {
      ...WorkScheduleFragment
    }
  }
  ${WORK_SCHEDULE_FRAGMENT}
`;