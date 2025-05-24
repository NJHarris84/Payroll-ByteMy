import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type HolidayFragment = { __typename?: 'holidays', id: any, date: any, local_name: string, name: string, country_code: any, region?: Array<string> | null, is_fixed?: boolean | null, is_global?: boolean | null, launch_year?: number | null, types: Array<string>, created_at?: any | null, updated_at?: any | null };

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