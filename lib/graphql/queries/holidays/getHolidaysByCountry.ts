// lib/graphql/queries/holidays/getHolidaysByCountry.ts
import { gql } from '@apollo/client';
import { HOLIDAY_FRAGMENT } from '../../fragments/holidayFragment';

export const GET_HOLIDAYS_BY_COUNTRY = gql`
  query GetHolidaysByCountry($countryCode: String!, $year: Int!) {
    holidays(
      where: {
        country_code: { _eq: $countryCode },
        date: { _gte: concat(cast($year as String), "-01-01"), _lte: concat(cast($year as String), "-12-31") }
      }
      order_by: { date: asc }
    ) {
      ...HolidayFragment
    }
  }
  ${HOLIDAY_FRAGMENT}
`;