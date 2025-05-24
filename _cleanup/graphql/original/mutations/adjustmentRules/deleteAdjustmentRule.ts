import { gql } from '@apollo/client';
import { ADJUSTMENT_RULE_FRAGMENT } from '../..';

export const DELETE_ADJUSTMENT_RULE = gql`
  mutation DeleteAdjustmentRule($id: uuid!) {
    delete_adjustment_rules_by_pk(id: $id) {
      ...AdjustmentRuleFragment
    }
  }
  ${ADJUSTMENT_RULE_FRAGMENT}
`;