// graphql/queries/holidays/getHolidays.ts
import { gql } from "@apollo/client";
import { HOLIDAY_FRAGMENT } from "../../fragments/holidayFragment";

export const GET_HOLIDAYS = gql`
  query GetHolidays {
    holidays(order_by: { date: asc }) {
      ...HolidayFragment
    }
  }
  ${HOLIDAY_FRAGMENT}
`;