import * as Types from '../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_USER_WORK_SCHEDULE_QUERYVariables = Types.Exact<{
  userId: Types.Scalars['uuid']['input'];
}>;


export type GET_USER_WORK_SCHEDULE_QUERY = { __typename?: 'query_root', work_schedule: Array<{ __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null }> };


export const GET_USER_WORK_SCHEDULE = gql`
    query GetUserWorkSchedule($userId: uuid!) {
  work_schedule(where: {user_id: {_eq: $userId}}) {
    ...WorkScheduleFragment
  }
}
    ${WorkScheduleFragmentFragmentDoc}`;

/**
 * __useGetUserWorkScheduleQuery__
 *
 * To run a query within a React component, call `useGetUserWorkScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWorkScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWorkScheduleQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserWorkScheduleQuery(baseOptions: Apollo.QueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables> & ({ variables: GetUserWorkScheduleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
      }
export function useGetUserWorkScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
        }
export function useGetUserWorkScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkScheduleDocument, options);
        }
export type GET_USER_WORK_SCHEDULE_QUERYHookResult = ReturnType<typeof useGetUserWorkScheduleQuery>;
export type GET_USER_WORK_SCHEDULE_LAZY_QUERYHookResult = ReturnType<typeof useGetUserWorkScheduleLazyQuery>;
export type GET_USER_WORK_SCHEDULE_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetUserWorkScheduleSuspenseQuery>;
export type GET_USER_WORK_SCHEDULE_QUERYResult = Apollo.QueryResult<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>;