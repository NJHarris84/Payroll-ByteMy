import { useQuery, useMutation } from '@apollo/client';
import { GET_NOTES } from '@/lib/graphql/queries/notes/getNotes';
import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from '@/lib/graphql/mutations';

export function useNotes(entityId: string, entityType: string, options = {}) {
  return useQuery(GET_NOTES, {
    variables: { entityId, entityType },
    skip: !entityId || !entityType,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

export function useAddNote() {
  return useMutation(ADD_NOTE, {
    update(cache, { data }) {
      if (data?.insert_notes_one) {
        const note = data.insert_notes_one;
        const existing = cache.readQuery({
          query: GET_NOTES,
          variables: { 
            entityId: note.entity_id, 
            entityType: note.entity_type 
          }
        });
        
        if (existing) {
          cache.writeQuery({
            query: GET_NOTES,
            variables: { 
              entityId: note.entity_id, 
              entityType: note.entity_type 
            },
            data: {
              notes: [note, ...existing.notes]
            }
          });
        }
      }
    }
  });
}

export function useUpdateNote() {
  return useMutation(UPDATE_NOTE);
}

export function useDeleteNote() {
  return useMutation(DELETE_NOTE, {
    update(cache, { data }) {
      if (data?.delete_notes_by_pk) {
        cache.evict({ 
          id: cache.identify(data.delete_notes_by_pk)
        });
      }
    }
  });
}
