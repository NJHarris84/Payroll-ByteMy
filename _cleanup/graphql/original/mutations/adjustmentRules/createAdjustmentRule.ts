// lib/graphql/mutations/adjustmentRules/createAdjustmentRule.ts
import { gql } from '@apollo/client';
import { ADJUSTMENT_RULE_FRAGMENT } from '../..';

export const CREATE_ADJUSTMENT_RULE = gql`
  mutation CreateAdjustmentRule($input: adjustment_rules_insert_input!) {
    insert_adjustment_rules_one(object: $input) {
      ...AdjustmentRuleFragment
    }
  }
  ${ADJUSTMENT_RULE_FRAGMENT}
`;