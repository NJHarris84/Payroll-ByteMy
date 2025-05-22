import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary, withErrorBoundary } from '@/components/common/error-boundary';

// Mock console.error to prevent test output noise
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
});

// Component that throws an error
const ErrorThrowingComponent = ({ shouldThrow = true }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error thrown</div>;
};

describe('ErrorBoundary', () => {
  test('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  test('renders error UI when an error occurs', () => {
    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });
  
  test('calls onError prop when an error occurs', () => {
    const onError = jest.fn();
    
    render(
      <ErrorBoundary onError={onError}>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );
    
    expect(onError).toHaveBeenCalled();
  });
  
  test('renders custom fallback when provided', () => {
    const customFallback = <div>Custom error UI</div>;
    
    render(
      <ErrorBoundary fallback={customFallback}>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Custom error UI')).toBeInTheDocument();
  });
  
  test('resets error state when the "Try Again" button is clicked', () => {
    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(true);
      
      return (
        <ErrorBoundary>
          {shouldThrow ? (
            <ErrorThrowingComponent />
          ) : (
            <div>
              <span>No error thrown</span>
              <button onClick={() => setShouldThrow(true)}>Throw error</button>
            </div>
          )}
        </ErrorBoundary>
      );
    };
    
    render(<TestComponent />);
    
    // Initially shows error UI
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    
    // Click "Try Again" button
    fireEvent.click(screen.getByText('Try Again'));
    
    // Error boundary should reset and render children again
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    expect(screen.getByText('No error thrown')).toBeInTheDocument();
    
    // Trigger error again
    fireEvent.click(screen.getByText('Throw error'));
    
    // Error UI should appear again
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
  
  test('withErrorBoundary HOC wraps component with error boundary', () => {
    const TestComponent = () => <div>Test content</div>;
    const WrappedComponent = withErrorBoundary(TestComponent);
    
    render(<WrappedComponent />);
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  test('withErrorBoundary HOC handles errors', () => {
    const WrappedErrorComponent = withErrorBoundary(ErrorThrowingComponent);
    
    render(<WrappedErrorComponent />);
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
  
  test('withErrorBoundary HOC passes props to wrapped component', () => {
    const TestComponent = ({ message }: { message: string }) => <div>{message}</div>;
    const WrappedComponent = withErrorBoundary(TestComponent);
    
    render(<WrappedComponent message="Hello world" />);
    
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
