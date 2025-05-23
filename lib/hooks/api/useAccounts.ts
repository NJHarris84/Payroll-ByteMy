import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_ACCOUNTS,
  GET_ACCOUNT_BY_USER_ID
} from '@/lib/graphql/queries/accounts/getAccounts';

export function useAccounts(options = {}) {
  return useQuery(GET_ACCOUNTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useAccountByUserId(userId: string, options = {}) {
  return useQuery(GET_ACCOUNT_BY_USER_ID, {
    variables: { userId },
    skip: !userId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}
