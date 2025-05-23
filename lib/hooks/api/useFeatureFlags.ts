import { useQuery } from '@apollo/client';
import { 
  GET_FEATURE_FLAGS,
  GET_FEATURE_FLAG_BY_NAME
} from '@/lib/graphql/queries/featureFlags/getFeatureFlags';

export function useFeatureFlags(options = {}) {
  return useQuery(GET_FEATURE_FLAGS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useFeatureFlag(name: string, options = {}) {
  const { data, loading, error } = useQuery(GET_FEATURE_FLAG_BY_NAME, {
    variables: { name },
    skip: !name,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ...options
  });
  
  return {
    enabled: data?.feature_flags?.[0]?.enabled ?? false,
    loading,
    error
  };
}

// Helper hook for feature flag checking
export function useIsFeatureEnabled(flagName: string): boolean {
  const { enabled } = useFeatureFlag(flagName);
  return enabled;
}
