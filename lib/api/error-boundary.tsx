// lib/api/error-boundary.tsx
import { Component, ReactNode } from 'react';
import { TokenManager } from '../auth/token-manager';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ApolloErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error): void {
    // Handle GraphQL errors
    if (error.message.includes('invalid-jwt')) {
      TokenManager.getInstance().clearCache();
      window.location.href = '/sign-in';
    }
    
    console.error('Apollo error:', error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}