// app/error.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-md border-red-200 shadow-lg">
        <CardHeader className="bg-red-50 text-red-900">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            <span>Application Error</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">Something went wrong!</p>
            <p className="text-gray-600 text-sm mb-4">
              We're sorry, but we encountered an unexpected problem. Our team has
              been notified.
            </p>
            {error.message && (
              <div className="bg-gray-100 p-3 rounded border text-sm font-mono overflow-auto max-h-40">
                {error.message}
                {error.digest && (
                  <div className="mt-2 text-xs text-gray-500">
                    Error ID: {error.digest}
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-end bg-gray-50">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reload Page
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="default"
            className="w-full sm:w-auto"
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}