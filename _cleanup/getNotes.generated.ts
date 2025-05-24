import type * as Types from '../../../generated/types';

import { gql } from '@apollo/client';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetNotesQueryVariables = Types.Exact<{
  entityId: Types.Scalars['uuid']['input'];
  entityType: Types.Scalars['String']['input'];
}>;


export type GET_NOTES_QUERY = { __typename?: 'query_root', notes: Array<{ __typename?: 'notes', id: any, entity_type: string, entity_id: any, user_id?: any | null, content: string, is_important?: boolean | null, created_at?: any | null, updated_at?: any | null }> };


export const GET_NOTES = gql`
    query GetNotes($entityId: uuid!, $entityType: String!) {
  notes(
    where: {entity_id: {_eq: $entityId}, entity_type: {_eq: $entityType}}
    order_by: {created_at: desc}
  ) {
    ...NoteFragment
  }
}
    ${NoteFragmentFragmentDoc}`;

/**
 * __useGetNotesQuery__
 *
 * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *      entityType: // value for 'entityType'
 *   },
 * });
 */
export function useGetNotesQuery(baseOptions: Apollo.QueryHookOptions<GetNotesQuery, GetNotesQueryVariables> & ({ variables: GetNotesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
      }
export function useGetNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export function useGetNotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export type GET_NOTES_QUERYHookResult = ReturnType<typeof useGetNotesQuery>;
export type GET_NOTES_LAZY_QUERYHookResult = ReturnType<typeof useGetNotesLazyQuery>;
export type GET_NOTES_SUSPENSE_QUERYHookResult = ReturnType<typeof useGetNotesSuspenseQuery>;
export type GET_NOTES_QUERYResult = Apollo.QueryResult<GetNotesQuery, GetNotesQueryVariables>;