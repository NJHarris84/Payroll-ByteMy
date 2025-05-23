import { useQuery } from '@apollo/client';
import { GET_USER_SESSIONS } from '@/lib/graphql/queries/sessions/getSessions';

export function useUserSessions(userId: number, options = {}) {
  return useQuery(GET_USER_SESSIONS, {
    variables: { userId },
    skip: !userId,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only', // Always get fresh session data
    ...options
  });
}
