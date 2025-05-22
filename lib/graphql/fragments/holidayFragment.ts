import { gql } from '@apollo/client';

/**
 * Fragment containing holiday fields
 * Used in holiday queries and mutations
 */
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