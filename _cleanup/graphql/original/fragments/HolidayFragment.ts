import { gql } from '@apollo/client';

/**
 * Fragment containing holiday fields
 * Used in holiday queries and mutations
 */
export const HOLIDAY_FRAGMENT = gql`
  fragment HolidayFragment on holidays {
    id
    date
    local_name
    name
    country_code
    region
    is_fixed
    is_global
    launch_year
    types
    created_at
    updated_at
  }
`;