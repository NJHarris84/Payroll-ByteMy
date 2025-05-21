import { toast } from "sonner"
import { ApolloError } from "@apollo/client"
import React from "react"

/**
 * Error types for better error categorization
 */
export enum ErrorType {
  NETWORK = "network",
  AUTHENTICATION = "authentication", 
  AUTHORIZATION = "authorization",
  VALIDATION = "validation",
  NOT_FOUND = "not_found",
  SERVER = "server",
  UNKNOWN = "unknown"
}

/**
 * Maps GraphQL error codes to error types
 */
const errorCodeToType: Record<string, ErrorType> = {
  "UNAUTHENTICATED": ErrorType.AUTHENTICATION,
  "FORBIDDEN": ErrorType.AUTHORIZATION,
  "BAD_USER_INPUT": ErrorType.VALIDATION,
  "NOT_FOUND": ErrorType.NOT_FOUND,
  "INTERNAL_SERVER_ERROR": ErrorType.SERVER,
};

/**
 * Get the error type from an Apollo error
 */
export function getErrorType(error: ApolloError): ErrorType {
  // Check for network errors
  if (error.networkError) {
    return ErrorType.NETWORK;
  }
  
  // Check for GraphQL errors
  if (error.graphQLErrors?.length) {
    const gqlError = error.graphQLErrors[0];
    const code = gqlError.extensions?.code as string;
    
    return errorCodeToType[code] || ErrorType.UNKNOWN;
  }
  
  return ErrorType.UNKNOWN;
}

/**
 * Get a user-friendly error message from an Apollo error
 */
export function getErrorMessage(error: ApolloError | Error): string {
  // Handle Apollo errors
  if ('graphQLErrors' in error && error.graphQLErrors?.length) {
    const gqlError = error.graphQLErrors[0];
    const errorType = getErrorType(error as ApolloError);
    
    // Return appropriate message based on error type
    switch (errorType) {
      case ErrorType.NETWORK:
        return "Network error. Please check your connection and try again.";
      case ErrorType.AUTHENTICATION:
        return "You need to sign in to perform this action.";
      case ErrorType.AUTHORIZATION:
        return "You don't have permission to perform this action.";
      case ErrorType.VALIDATION:
        // Return validation error message from the server if available
        return gqlError.message || "The provided data is invalid. Please check your input.";
      case ErrorType.NOT_FOUND:
        return "The requested resource was not found.";
      case ErrorType.SERVER:
        return "A server error occurred. Please try again later.";
      default:
        // Return the error message or a generic fallback
        return gqlError.message || "An unknown error occurred. Please try again.";
    }
  }

  // Handle network errors
  if ('networkError' in error && error.networkError) {
    return "Network error. Please check your connection and try again.";
  }
  
  // Fallback to generic error message
  return error.message || "An unknown error occurred. Please try again.";
}

/**
 * Standardized error handler for Apollo mutations
 */
export function handleMutationError(error: ApolloError, customMessage?: string): void {
  console.error("Mutation error:", error);
  
  // Get user-friendly error message
  const errorMessage = customMessage || getErrorMessage(error);
  
  // Show toast notification
  toast.error(errorMessage);
}

/**
 * Standardized error handler for Apollo queries
 */
export function handleQueryError(error: ApolloError, customMessage?: string): void {
  console.error("Query error:", error);
  
  // Get user-friendly error message
  const errorMessage = customMessage || getErrorMessage(error);
  
  // Show toast notification
  toast.error(errorMessage);
}

/**
 * Standard error component for use in query results
 */
export function ErrorDisplay({ 
  error, 
  onRetry,
  className = ""
}: { 
  error: ApolloError | Error;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div className={`p-4 border border-red-200 bg-red-50 rounded-md text-red-700 ${className}`}>
      <h3 className="font-medium mb-2">Error</h3>
      <p>{getErrorMessage(error)}</p>
      
      {onRetry && (
        <button 
          onClick={onRetry}
          className="mt-2 text-sm px-3 py-1 bg-red-100 hover:bg-red-200 transition-colors rounded-md"
        >
          Try Again
        </button>
      )}
      
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-2">
          <summary className="text-xs cursor-pointer">Error Details</summary>
          <pre className="mt-2 text-xs overflow-auto p-2 bg-red-100 rounded-md">
            {JSON.stringify(error, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}

/**
 * Error boundary component to catch rendering errors
 */
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="p-4 border border-red-200 bg-red-50 rounded-md text-red-700">
          <h3 className="font-medium mb-2">Component Error</h3>
          <p>Something went wrong. Please try refreshing the page.</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-2 text-sm px-3 py-1 bg-red-100 hover:bg-red-200 transition-colors rounded-md"
          >
            Try Again
          </button>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-2">
              <summary className="text-xs cursor-pointer">Error Details</summary>
              <pre className="mt-2 text-xs overflow-auto p-2 bg-red-100 rounded-md">
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Hook to handle errors in custom hooks
 */
export function useErrorHandler() {
  return {
    handleError: (error: unknown, customMessage?: string) => {
      console.error("Error in hook:", error);
      
      let errorMessage = customMessage || "An unexpected error occurred";
      
      if (error instanceof Error) {
        errorMessage = customMessage || error.message;
      }
      
      toast.error(errorMessage);
    }
  };
}