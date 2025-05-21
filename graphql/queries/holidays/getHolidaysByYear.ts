import { gql } from "@apollo/client";

export const GET_HOLIDAYS_BY_YEAR = gql`
  query GetHolidaysByYear($year: Int!) {
    holidays(
      where: {
        date: {
          _gte: $year-01-01,
          _lte: $year-12-31
        }
      },
      order_by: { date: asc }
    ) {
      id
      date
      name
      description
      is_national
      state
    }
  }
`;