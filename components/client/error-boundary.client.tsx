'use client';

// lib/api/error-boundary.client.tsx
import { Component, ReactNode } from "react";

import { tokenManagerClient } from "./..";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error', error, errorInfo);
    
    // Check if the error is related to authentication
    if (
      error.message.includes('Authentication required') || 
      error.message.includes('JWT expired') ||
      error.message.includes('Authorization header is missing') ||
      error.message.includes('Invalid token')
    ) {
      console.log('Authentication error detected, refreshing token...');
      tokenManagerClient.refreshToken().catch(err => {
        console.error('Failed to refresh token:', err);
      });
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="error-boundary-fallback">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message || 'An error occurred'}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}