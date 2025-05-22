import { ApolloError } from '@apollo/client';
import { 
  classifyGraphQLError, 
  ErrorType, 
  getUserFriendlyErrorMessage, 
  handleApiError 
} from '@/lib/utils/error-handling';
import { toast } from 'sonner';

// Mock toast
jest.mock('sonner', () => ({
  toast: {
    error: jest.fn()
  }
}));

describe('Error Handling Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('classifyGraphQLError', () => {
    test('should classify network errors correctly', () => {
      const error = new ApolloError({
        networkError: new Error('Network error'),
        graphQLErrors: []
      });
      
      expect(classifyGraphQLError(error)).toBe(ErrorType.NETWORK);
    });
    
    test('should classify authentication errors correctly', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'User is not authenticated',
          extensions: { code: 'UNAUTHENTICATED' }
        }]
      });
      
      expect(classifyGraphQLError(error)).toBe(ErrorType.AUTHENTICATION);
    });
    
    test('should classify authorization errors correctly', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'User is not authorized',
          extensions: { code: 'FORBIDDEN' }
        }]
      });
      
      expect(classifyGraphQLError(error)).toBe(ErrorType.AUTHORIZATION);
    });
    
    test('should classify validation errors correctly', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'Invalid input',
          extensions: { code: 'BAD_USER_INPUT' }
        }]
      });
      
      expect(classifyGraphQLError(error)).toBe(ErrorType.VALIDATION);
    });
    
    test('should classify server errors correctly', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'Internal server error',
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        }]
      });
      
      expect(classifyGraphQLError(error)).toBe(ErrorType.SERVER);
    });
    
    test('should default to unknown for unclassified errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'Some unknown error',
          extensions: { code: 'UNKNOWN_CODE' }
        }]
      });
      
      expect(classifyGraphQLError(error)).toBe(ErrorType.UNKNOWN);
    });
  });
  
  describe('getUserFriendlyErrorMessage', () => {
    test('should return appropriate message for authentication errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'User is not authenticated',
          extensions: { code: 'UNAUTHENTICATED' }
        }]
      });
      
      expect(getUserFriendlyErrorMessage(error)).toBe('Your session has expired. Please sign in again.');
    });
    
    test('should return appropriate message for authorization errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'User is not authorized',
          extensions: { code: 'FORBIDDEN' }
        }]
      });
      
      expect(getUserFriendlyErrorMessage(error)).toBe('You don\'t have permission to perform this action.');
    });
    
    test('should return appropriate message for validation errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'Invalid input',
          extensions: { code: 'BAD_USER_INPUT' }
        }]
      });
      
      expect(getUserFriendlyErrorMessage(error)).toBe('Please check your input and try again.');
    });
    
    test('should return appropriate message for network errors', () => {
      const error = new ApolloError({
        networkError: new Error('Network error'),
        graphQLErrors: []
      });
      
      expect(getUserFriendlyErrorMessage(error)).toBe('Unable to connect to the server. Please check your internet connection.');
    });
    
    test('should return appropriate message for server errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'Internal server error',
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        }]
      });
      
      expect(getUserFriendlyErrorMessage(error)).toBe('Something went wrong on our end. Please try again later.');
    });
    
    test('should return default message for unknown errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'Some unknown error',
          extensions: { code: 'UNKNOWN_CODE' }
        }]
      });
      
      expect(getUserFriendlyErrorMessage(error)).toBe('An unexpected error occurred. Please try again.');
    });
  });
  
  describe('handleApiError', () => {
    test('should handle Apollo errors', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'GraphQL error',
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        }]
      });
      
      // Spy on console.error
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      handleApiError(error);
      
      // Check that error is logged
      expect(consoleSpy).toHaveBeenCalledWith('API Error:', error);
      
      // Check that toast error is shown
      expect(toast.error).toHaveBeenCalled();
      
      // Restore console.error
      consoleSpy.mockRestore();
    });
    
    test('should handle custom error message', () => {
      const error = new ApolloError({
        graphQLErrors: [{
          message: 'GraphQL error',
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        }]
      });
      
      const customMessage = 'Custom error message';
      
      handleApiError(error, customMessage);
      
      // Check that toast error is shown with custom message
      expect(toast.error).toHaveBeenCalledWith(customMessage, expect.anything());
    });
    
    test('should handle non-Apollo errors', () => {
      const error = new Error('Standard error');
      
      handleApiError(error);
      
      // Check that toast error is shown
      expect(toast.error).toHaveBeenCalled();
    });
    
    test('should handle unknown error types', () => {
      const error = 'String error';
      
      handleApiError(error);
      
      // Check that toast error is shown
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
