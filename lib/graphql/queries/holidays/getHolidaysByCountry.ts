// lib/graphql/queries/holidays/getHolidaysByCountry.ts
import { gql } from '@apollo/client';
import { HOLIDAY_FRAGMENT } from '../../fragments/holidayFragment';

export const GET_HOLIDAYS_BY_COUNTRY = gql`
  query GetHolidaysByCountry($country_code: bpchar!) {
    holidays(where: { country_code: { _eq: $country_code } }, order_by: { date: asc }) {
      ...HolidayFragment
    }
  }
  ${HOLIDAY_FRAGMENT}
`;