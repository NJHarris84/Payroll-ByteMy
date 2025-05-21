import { gql } from "@apollo/client";

export const SYNC_HOLIDAYS = gql`
  mutation SyncHolidays($holidays: [holidays_insert_input!]!) {
    insert_holidays(
      objects: $holidays,
      on_conflict: {
        constraint: holidays_date_holiday_type_key,
        update_columns: [name, description, is_national, updated_at]
      }
    ) {
      affected_rows
      returning {
        id
        date
        name
        description
      }
    }
  }
`;
