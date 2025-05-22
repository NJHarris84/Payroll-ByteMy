import { ApolloError } from '@apollo/client';
import { toast } from 'sonner';

/**
 * Standard error classifications for the application
 */
export enum ErrorType {
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  VALIDATION = 'validation',
  NETWORK = 'network',
  SERVER = 'server',
  UNKNOWN = 'unknown'
}

/**
 * Parse GraphQL errors to determine the type of error
 */
export function classifyGraphQLError(error: ApolloError): ErrorType {
  // Check for network errors
  if (error.networkError) {
    return ErrorType.NETWORK;
  }

  // Check GraphQL errors
  if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    const firstError = error.graphQLErrors[0];
    
    // Check for auth errors
    if (
      firstError.message.includes('not authenticated') ||
      firstError.message.includes('jwt') ||
      firstError.message.includes('token') ||
      firstError.extensions?.code === 'UNAUTHENTICATED'
    ) {
      return ErrorType.AUTHENTICATION;
    }
    
    // Check for permission errors
    if (
      firstError.message.includes('permission') ||
      firstError.message.includes('not authorized') ||
      firstError.extensions?.code === 'FORBIDDEN'
    ) {
      return ErrorType.AUTHORIZATION;
    }
    
    // Check for validation errors
    if (
      firstError.message.includes('validation') ||
      firstError.message.includes('invalid input') ||
      firstError.extensions?.code === 'BAD_USER_INPUT'
    ) {
      return ErrorType.VALIDATION;
    }
    
    // Default to server error for other GraphQL errors
    return ErrorType.SERVER;
  }
  
  // Default case
  return ErrorType.UNKNOWN;
}

/**
 * Get user-friendly error message based on error type
 */
export function getUserFriendlyErrorMessage(error: ApolloError): string {
  const errorType = classifyGraphQLError(error);
  
  switch (errorType) {
    case ErrorType.AUTHENTICATION:
      return 'Your session has expired. Please sign in again.';
    case ErrorType.AUTHORIZATION:
      return 'You don\'t have permission to perform this action.';
    case ErrorType.VALIDATION:
      return 'Please check your input and try again.';
    case ErrorType.NETWORK:
      return 'Unable to connect to the server. Please check your internet connection.';
    case ErrorType.SERVER:
      return 'Something went wrong on our end. Please try again later.';
    case ErrorType.UNKNOWN:
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}

/**
 * Handle API errors consistently
 */
export function handleApiError(error: unknown, customMessage?: string): void {
  console.error('API Error:', error);
  
  if (error instanceof ApolloError) {
    const message = customMessage || getUserFriendlyErrorMessage(error);
    
    toast.error(message, {
      description: error.message,
      duration: 5000,
    });
    return;
  }
  
  // Handle other error types
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  
  toast.error(customMessage || 'Something went wrong', {
    description: errorMessage,
    duration: 5000,
  });
}

/**
 * Parse and handle error responses from REST APIs
 */
export async function handleFetchError(response: Response): Promise<never> {
  let errorText = 'An error occurred with status: ' + response.status;
  
  try {
    const errorData = await response.json();
    if (errorData.message) {
      errorText = errorData.message;
    } else if (errorData.error) {
      errorText = errorData.error;
    }
  } catch (e) {
    // If we can't parse JSON, use the status text
    errorText = response.statusText || errorText;
  }
  
  throw new Error(errorText);
}