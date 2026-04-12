"use client";

import { Component, ErrorInfo, ReactNode } from 'react';
import { logError } from '@/lib/error-handler';

interface Props { 
  children: ReactNode; 
  fallback?: ReactNode;
  context?: string;
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
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error with context
    logError(error, this.props.context || 'ErrorBoundary');
    
    // Log component stack
    console.error('Component stack:', errorInfo.componentStack);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 text-red-600 rounded border border-red-200">
          <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
          <p className="text-sm mb-3">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-xs bg-red-100 p-2 rounded">
              <summary className="cursor-pointer font-medium">Error details (development only)</summary>
              <pre className="mt-2 whitespace-pre-wrap break-words">
                {this.state.error?.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }
    
    return this.props.children;
  }
}
