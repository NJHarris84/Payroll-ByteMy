"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ErrorDisplayProps {
  title?: string;
  error: Error | unknown;
  resetLabel?: string;
  onReset?: () => void;
}

export function ErrorDisplay({ 
  title = "An error occurred", 
  error, 
  resetLabel = "Try again",
  onReset 
}: ErrorDisplayProps) {
  // Extract error message depending on error type
  const getErrorMessage = (err: Error | unknown): string => {
    if (err instanceof Error) {
      return err.message;
    } else if (typeof err === 'string') {
      return err;
    } else if (err && typeof err === 'object' && 'message' in err && typeof err.message === 'string') {
      return err.message;
    }
    return "Unknown error occurred";
  };

  const errorMessage = getErrorMessage(error);

  return (
    <Card className="border-destructive/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{errorMessage}</p>
      </CardContent>
      {onReset && (
        <CardFooter>
          <Button variant="outline" onClick={onReset}>
            {resetLabel}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}