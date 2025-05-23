import { renderHook } from '@testing-library/react-hooks';
import { useApolloQuery } from "@/lib/hooks/api/useApolloQuery";
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { toast } from 'sonner';

// Mock toast
jest.mock('sonner', () => ({
  toast: {
    error: jest.fn()
  }
}));

// Mock useQuery
jest.mock('@apollo/client', () => {
  const originalModule = jest.requireActual('@apollo/client');
  return {
    ...originalModule,
    useQuery: jest.fn()
  };
});

const TEST_QUERY = gql`
  query TestQuery {
    test {
      id
      name
    }
  }
`;

describe('useApolloQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('should call useQuery with the provided query and options', () => {
    const mockOptions = {
      variables: { id: '123' },
      fetchPolicy: 'cache-first' as const
    };
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null
    });
    
    renderHook(() => useApolloQuery(TEST_QUERY, mockOptions));
    
    expect(useQuery).toHaveBeenCalledWith(TEST_QUERY, expect.objectContaining({
      variables: { id: '123' },
      fetchPolicy: 'cache-first'
    }));
  });
  
  test('should handle errors and show toast when showErrorToast is true', () => {
    const mockError = new Error('Test error');
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null
    });
    
    renderHook(() => useApolloQuery(TEST_QUERY, { showErrorToast: true }));
    
    expect(toast.error).toHaveBeenCalled();
  });
  
  test('should not show toast when showErrorToast is false', () => {
    const mockError = new Error('Test error');
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null
    });
    
    renderHook(() => useApolloQuery(TEST_QUERY, { showErrorToast: false }));
    
    expect(toast.error).not.toHaveBeenCalled();
  });
  
  test('should call custom onError handler when provided', () => {
    const mockError = new Error('Test error');
    const onError = jest.fn();
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null
    });
    
    renderHook(() => useApolloQuery(TEST_QUERY, { onError }));
    
    expect(onError).toHaveBeenCalledWith(mockError);
  });
  
  test('should show custom error message when provided', () => {
    const mockError = new Error('Test error');
    const customErrorMessage = 'Custom error message';
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null
    });
    
    renderHook(() => useApolloQuery(TEST_QUERY, { 
      showErrorToast: true,
      errorMessage: customErrorMessage
    }));
    
    expect(toast.error).toHaveBeenCalledWith(customErrorMessage, expect.anything());
  });
  
  test('should return the result from useQuery', () => {
    const mockResult = {
      loading: false,
      error: null,
      data: { test: { id: '123', name: 'Test' } }
    };
    
    (useQuery as jest.Mock).mockReturnValue(mockResult);
    
    const { result } = renderHook(() => useApolloQuery(TEST_QUERY));
    
    expect(result.current).toEqual(mockResult);
  });
});
