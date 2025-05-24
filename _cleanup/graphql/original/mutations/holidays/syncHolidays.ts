import { gql } from "@apollo/client";
import { HOLIDAY_FRAGMENT } from "../..";

export const SYNC_HOLIDAYS = gql`
  mutation SyncHolidays($objects: [holidays_insert_input!]!, $onConflict: holidays_on_conflict) {
    insert_holidays(objects: $objects, on_conflict: $onConflict) {
      returning {
        ...HolidayFragment
      }
      affected_rows
    }
  }
  ${HOLIDAY_FRAGMENT}
`;
