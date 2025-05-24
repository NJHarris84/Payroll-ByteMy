import type * as Types from '../../../generated';

import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUserWorkScheduleQueryVariables = Types.Exact<{
  userId: Types.Scalars['uuid']['input'];
}>;


export type GetUserWorkScheduleQuery = { __typename?: 'query_root', work_schedule: Array<{ __typename?: 'work_schedule', id: any, user_id: any, work_day: string, work_hours: any, created_at?: any | null, updated_at?: any | null }> };


export const GetUserWorkSchedule = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserWorkSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"work_schedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkScheduleFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkScheduleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"work_schedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"work_day"}},{"kind":"Field","name":{"kind":"Name","value":"work_hours"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode;

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
        return Apollo.useQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkSchedule, options);
      }
export function useGetUserWorkScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkSchedule, options);
        }
export function useGetUserWorkScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>(GetUserWorkSchedule, options);
        }
export type GetUserWorkScheduleQueryHookResult = ReturnType<typeof useGetUserWorkScheduleQuery>;
export type GetUserWorkScheduleLazyQueryHookResult = ReturnType<typeof useGetUserWorkScheduleLazyQuery>;
export type GetUserWorkScheduleSuspenseQueryHookResult = ReturnType<typeof useGetUserWorkScheduleSuspenseQuery>;
export type GetUserWorkScheduleQueryResult = Apollo.QueryResult<GetUserWorkScheduleQuery, GetUserWorkScheduleQueryVariables>;