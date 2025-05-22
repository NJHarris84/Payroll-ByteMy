import { gql } from "@apollo/client";
import { HOLIDAY_FRAGMENT } from "../../fragments/holidayFragment";

export const GET_HOLIDAYS_BY_YEAR = gql`
  query GetHolidaysByYear($year: Int!) {
    holidays(
      where: {
        date: { _gte: $year + "-01-01" }
        _and: { date: { _lte: $year + "-12-31" } }
      }
      order_by: { date: asc }
    ) {
      ...HolidayFragment
    }
  }
  ${HOLIDAY_FRAGMENT}
`;