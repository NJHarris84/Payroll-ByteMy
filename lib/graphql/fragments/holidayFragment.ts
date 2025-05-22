import { gql } from '@apollo/client';

export const HOLIDAY_FRAGMENT = gql`
  fragment HolidayFragment on holidays {
    id
    name
    date
    region
    created_at
    updated_at
  }
`;