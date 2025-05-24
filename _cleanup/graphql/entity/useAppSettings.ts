import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_APP_SETTINGS,
  GET_APP_SETTING_BY_KEY
} from '@/lib/graphql';

export function useAppSettings(options = {}) {
  return useQuery(GET_APP_SETTINGS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useAppSettingByKey(key: string, options = {}) {
  return useQuery(GET_APP_SETTING_BY_KEY, {
    variables: { key },
    skip: !key,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ...options
  });
}

// Helper hook to get a specific setting value
export function useAppSettingValue(key: string, defaultValue?: any) {
  const { data, loading, error } = useAppSettingByKey(key);
  
  const value = data?.app_settings?.[0]?.value;
  
  return {
    value: value ? JSON.parse(value) : defaultValue,
    loading,
    error
  };
}
