import { gql } from '@apollo/client';
import { ADJUSTMENT_RULE_FRAGMENT } from '../..';

export const UPDATE_ADJUSTMENT_RULE = gql`
  mutation UpdateAdjustmentRule($id: uuid!, $input: adjustment_rules_set_input!) {
    update_adjustment_rules_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...AdjustmentRuleFragment
    }
  }
  ${ADJUSTMENT_RULE_FRAGMENT}
`;