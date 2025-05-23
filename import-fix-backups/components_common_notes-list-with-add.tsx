// components/notes-list-with-add.tsx
'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { AddNote } from '@/components/common/add-note';
import { Note } from '@/types/interface';
import { GET_NOTES } from '@/lib/graphql/queries/notes/getNotes';
import { Button } from '@/components/ui/button';
import { ErrorDisplay } from '@/lib/utils/error-handling';

interface NotesListWithAddProps {
  entityType: 'payroll' | 'client';
  entityId: string;
  title?: string;
  description?: string;
}

export function NotesListWithAdd({ 
  entityType, 
  entityId, 
  title = 'Notes',
  description = 'Notes and comments'
}: NotesListWithAddProps) {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { loading, error, data, refetch } = useQuery(GET_NOTES, {
    variables: { 
      // Pass the entityType as is - make sure your GraphQL query accepts this type
      entityType, 
      entityId,
      limit,
      offset: (page - 1) * limit
    },
    fetchPolicy: 'cache-and-network'
  });

  const totalPages = data?.notes_aggregate?.aggregate?.count 
    ? Math.ceil(data.notes_aggregate.aggregate.count / limit) 
    : 1;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Format the date to a more readable format
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM d, yyyy h:mm a');
    } catch (e) {
      return dateString;
    }
  };

  if (error) {
    return <ErrorDisplay error={error} onRetry={() => refetch()} />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <AddNote 
          entityType={entityType} 
          entityId={entityId} 
          onSuccess={() => refetch()} 
        />
        
        {loading ? (
          <div className="py-4 text-center text-gray-500">Loading notes...</div>
        ) : data?.notes?.length ? (
          <div className="space-y-4 mt-4">
            {data.notes.map((note: Note) => (
              <div key={note.id} className="border-b pb-2">
                <div className="text-sm">{note.content}</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">
                    {note.user?.name || "Unknown user"}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(note.createdAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-4 text-center text-gray-500">No notes yet</div>
        )}
      </CardContent>
      {data?.notes?.length > 0 && (
        <CardFooter className="justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={page >= totalPages}
          >
            Next
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}