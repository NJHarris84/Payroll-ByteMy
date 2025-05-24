// lib/api/error-boundary.client.ts
/**
 * IMPORTANT: This file contains client-side error handling utilities.
 * Only use these in client components.
 */
import 'client-only';
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * A client-side error boundary component that catches render errors
 * and displays a fallback UI
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

/**
 * Utility function to handle API errors in a consistent way
 */
export function handleApiError(error: unknown): { message: string; code?: string } {
  if (error instanceof Error) {
    // Handle known error types
    if ('code' in error && typeof (error as any).code === 'string') {
      return {
        message: error.message,
        code: (error as any).code
      };
    }
    return { message: error.message };
  }
  
  // Handle unknown error types
  return { 
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR'
  };
}

/**
 * Hook to handle async errors in components
 */
export function useErrorHandler(onError?: (error: Error) => void) {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((e: Error) => {
    setError(e);
    onError?.(e);
  }, [onError]);

  return {
    error,
    handleError,
    clearError: () => setError(null)
  };
}
