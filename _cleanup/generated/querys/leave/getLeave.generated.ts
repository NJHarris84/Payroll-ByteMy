import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GET_LEAVE_QUERYVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['uuid']['input']>;
  startDate?: Types.InputMaybe<Types.Scalars['date']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['date']['input']>;
}>;


export type GET_LEAVE_QUERY = { __typename?: 'query_root', leave: Array<{ __typename?: 'leave', id: any, user_id: any, start_date: any, end_date: any, leave_type: string, reason?: string | null, status?: any | null }> };


export const GET_LEAVE = gql`
    query GetLeave($userId: uuid, $startDate: date, $endDate: date) {
  leave(
    where: {user_id: {_eq: $userId}, start_date: {_gte: $startDate}, end_date: {_lte: $endDate}}
  ) {
    ...LeaveFragment
  }
}
    ${LeaveFragmentFragmentDoc}`;

/**
 * __useGetLeaveQuery__
 *
 * To run a query within a React component, call `useGetLeaveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaveQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetLeaveQuery(baseOptions?: Apollo.QueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
      }
export function useGetLeaveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
        }
export function useGetLeaveSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLeaveQuery, GetLeaveQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLeaveQuery, GetLeaveQueryVariables>(GetLeaveDocument, options);
        }
export type GET_LEAVE_QUERYHookResult = ReturnType<typeof useGetLeaveQuery>;
export type GET_LEAVE_LAZY_QUERYHookResult = ReturnType<typeof useGetLeaveLazyQuery>;
export type GET_LEAVE_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetLeaveSuspenseQuery>;
export type GET_LEAVE_QUERYResult = Apollo.QueryResult<GetLeaveQuery, GetLeaveQueryVariables>;