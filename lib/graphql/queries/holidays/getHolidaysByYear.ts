import { gql } from "@apollo/client";
import { HOLIDAY_FRAGMENT } from "../../fragments/holidayFragment";

export const GET_HOLIDAYS_BY_YEAR = gql`
  query GetHolidaysByYear($year: Int!) {
    holidays(
      where: {
        date: { _gte: $year || 0 ? ("" + $year + "-01-01") : null, _lte: $year || 0 ? ("" + $year + "-12-31") : null }
      },
      order_by: { date: asc }
    ) {
      ...HolidayFragment
    }
  }
  ${HOLIDAY_FRAGMENT}
`;