import { gql } from '@apollo/client';
import { ADJUSTMENT_RULE_FRAGMENT } from '../../fragments/adjustmentRuleFragment';

export const GET_ADJUSTMENT_RULES = gql`
  query GetAdjustmentRules {
    adjustment_rules(order_by: { created_at: desc }) {
      ...AdjustmentRuleFragment
    }
  }
  ${ADJUSTMENT_RULE_FRAGMENT}
`;

export const GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE = gql`
  query GetAdjustmentRuleByCycleAndType($cycleId: uuid!, $dateTypeId: uuid!) {
    adjustment_rules(
      where: {
        cycle_id: { _eq: $cycleId }
        date_type_id: { _eq: $dateTypeId }
      }
    ) {
      ...AdjustmentRuleFragment
    }
  }
  ${ADJUSTMENT_RULE_FRAGMENT}
`;
