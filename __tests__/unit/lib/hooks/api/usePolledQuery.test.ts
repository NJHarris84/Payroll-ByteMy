import { renderHook, act } from '@testing-library/react-hooks';
import { usePolledQuery } from "@/lib/hooks/api/usePolledQuery";
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { toast } from 'sonner';

// Mock toast
jest.mock('sonner', () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn()
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

describe('usePolledQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('should call useQuery with the provided query and pollInterval', () => {
    const mockOptions = {
      variables: { id: '123' },
      pollInterval: 5000
    };
    
    const mockStartPolling = jest.fn();
    const mockStopPolling = jest.fn();
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null,
      startPolling: mockStartPolling,
      stopPolling: mockStopPolling
    });
    
    renderHook(() => usePolledQuery(TEST_QUERY, mockOptions));
    
    expect(useQuery).toHaveBeenCalledWith(TEST_QUERY, expect.objectContaining({
      variables: { id: '123' },
      pollInterval: 5000,
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first"
    }));
  });
  
  test('should handle errors and show toast on first error', () => {
    const mockError = new Error('Test error');
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null,
      startPolling: jest.fn(),
      stopPolling: jest.fn()
    });
    
    renderHook(() => usePolledQuery(TEST_QUERY, { showErrorToast: true }));
    
    expect(toast.error).toHaveBeenCalled();
  });
  
  test('should call custom onError handler when provided', () => {
    const mockError = new Error('Test error');
    const onError = jest.fn();
    
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null,
      startPolling: jest.fn(),
      stopPolling: jest.fn()
    });
    
    renderHook(() => usePolledQuery(TEST_QUERY, { onError }));
    
    expect(onError).toHaveBeenCalledWith(mockError);
  });
  
  test('should stop polling when max retries is reached', () => {
    const mockError = new Error('Test error');
    const mockStopPolling = jest.fn();
    const maxRetries = 3;
    
    // Setup ref access
    let retryCount = 0;
    
    // Mock useQuery to simulate multiple errors
    (useQuery as jest.Mock).mockImplementation(() => {
      retryCount += 1;
      return {
        loading: false,
        error: mockError,
        data: null,
        startPolling: jest.fn(),
        stopPolling: mockStopPolling
      };
    });
    
    const { rerender } = renderHook(() => 
      usePolledQuery(TEST_QUERY, { maxRetries, showErrorToast: true })
    );
    
    // Simulate reaching max retries
    for (let i = 0; i < maxRetries; i++) {
      rerender();
    }
    
    // After max retries, polling should be stopped
    expect(mockStopPolling).toHaveBeenCalled();
    
    // Error toast should be shown for too many failed attempts
    expect(toast.error).toHaveBeenCalledWith('Too many failed attempts', expect.anything());
  });
  
  test('should show success toast when connection is restored after error', () => {
    const mockError = new Error('Test error');
    
    // First render with error
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: null,
      startPolling: jest.fn(),
      stopPolling: jest.fn()
    });
    
    const { rerender } = renderHook(() => usePolledQuery(TEST_QUERY));
    
    // Should show error toast
    expect(toast.error).toHaveBeenCalled();
    
    // Next render with successful data
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { test: { id: '123', name: 'Test' } },
      startPolling: jest.fn(),
      stopPolling: jest.fn()
    });
    
    // Rerender with the new mock
    rerender();
    
    // Should show success toast for restored connection
    expect(toast.success).toHaveBeenCalledWith('Connection restored', expect.anything());
  });
  
  test('should return the result from useQuery', () => {
    const mockResult = {
      loading: false,
      error: null,
      data: { test: { id: '123', name: 'Test' } },
      startPolling: jest.fn(),
      stopPolling: jest.fn()
    };
    
    (useQuery as jest.Mock).mockReturnValue(mockResult);
    
    const { result } = renderHook(() => usePolledQuery(TEST_QUERY));
    
    expect(result.current).toEqual(mockResult);
  });
});
