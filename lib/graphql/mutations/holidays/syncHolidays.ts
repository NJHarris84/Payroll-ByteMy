import { gql } from "@apollo/client";
import { HOLIDAY_FRAGMENT } from "../../fragments/holidayFragment";

export const SYNC_HOLIDAYS = gql`
  mutation SyncHolidays($objects: [holidays_insert_input!]!) {
    insert_holidays(
      objects: $objects,
      on_conflict: {
        constraint: holidays_date_region_key,
        update_columns: [name]
      }
    ) {
      returning {
        ...HolidayFragment
      }
    }
  }
  ${HOLIDAY_FRAGMENT}
`;
