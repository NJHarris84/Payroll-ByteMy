// app/error.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <div className="mx-auto max-w-[500px] rounded-lg border border-destructive/30 bg-destructive/10 p-6">
            <h2 className="mb-2 text-2xl font-bold text-destructive">
              Something went wrong!
            </h2>
            <p className="mb-6 text-muted-foreground">
              An unexpected error occurred. Our team has been notified.
            </p>
            <Button
              variant="default"
              onClick={() => reset()}
              className="mr-2"
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
            >
              Go Home
            </Button>

            {process.env.NODE_ENV === "development" && (
              <div className="mt-4 rounded border border-gray-200 bg-gray-50 p-4 text-left">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Error details:
                </p>
                <pre className="max-h-[200px] overflow-auto text-xs text-red-600">
                  {error.message}
                  {"\n"}
                  {error.stack}
                </pre>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}