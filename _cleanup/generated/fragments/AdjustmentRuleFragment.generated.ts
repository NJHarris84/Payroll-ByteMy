import type * as Types from '../../generated/types';

import { gql } from '@apollo/client';
export type AdjustmentRuleFragmentFragment = { __typename?: 'adjustment_rules', id: any, cycle_id: any, date_type_id: any, rule_description: string, rule_code: string, created_at?: any | null, updated_at?: any | null, payroll_cycle: { __typename?: 'payroll_cycles', id: any, name: any, description?: string | null }, payroll_date_type: { __typename?: 'payroll_date_types', id: any, name: any, description?: string | null } };

export const ADJUSTMENT_RULE_FRAGMENT = gql`
    fragment AdjustmentRuleFragment on adjustment_rules {
  id
  cycle_id
  date_type_id
  rule_description
  rule_code
  created_at
  updated_at
  payroll_cycle {
    id
    name
    description
  }
  payroll_date_type {
    id
    name
    description
  }
}
    `;