import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type WorkScheduleFragmentFragment = { __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null };

export const WorkScheduleFragmentFragmentDoc = gql`
    fragment WorkScheduleFragment on work_schedule {
  id
  user_id
  work_day
  work_hours
  created_at
  updated_at
}
    `;