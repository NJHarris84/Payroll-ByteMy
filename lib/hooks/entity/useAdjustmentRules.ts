import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_ADJUSTMENT_RULES,
  GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE
} from '@/lib/graphql/queries/adjustmentRules/getAdjustmentRules';
import {
  CREATE_ADJUSTMENT_RULE,
  UPDATE_ADJUSTMENT_RULE,
  DELETE_ADJUSTMENT_RULE
} from '@/lib/graphql';

export function useAdjustmentRules(options = {}) {
  return useQuery(GET_ADJUSTMENT_RULES, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useAdjustmentRuleByCycleAndType(cycleId: string, dateTypeId: string, options = {}) {
  return useQuery(GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE, {
    variables: { cycleId, dateTypeId },
    skip: !cycleId || !dateTypeId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useCreateAdjustmentRule() {
  return useMutation(CREATE_ADJUSTMENT_RULE, {
    refetchQueries: [{ query: GET_ADJUSTMENT_RULES }]
  });
}

export function useUpdateAdjustmentRule() {
  return useMutation(UPDATE_ADJUSTMENT_RULE);
}

export function useDeleteAdjustmentRule() {
  return useMutation(DELETE_ADJUSTMENT_RULE, {
    refetchQueries: [{ query: GET_ADJUSTMENT_RULES }]
  });
}
