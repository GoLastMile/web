import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from './ErrorBoundary';
import { logError } from '@/lib/error-handler';

// Mock the error handler
jest.mock('@/lib/error-handler', () => ({
  logError: jest.fn(),
}));

// Component that throws an error
const ThrowError = () => {
  throw new Error('Test error');
};

// Component that does not throw
const SafeComponent = () => <div>Safe content</div>;

// Custom fallback component
const CustomFallback = () => <div>Custom fallback</div>;

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>
    );
    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });

  it('renders default fallback when an error occurs', () => {
    // Suppress console error for expected error
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('An unexpected error occurred. Please try refreshing the page.')).toBeInTheDocument();
    consoleError.mockRestore();
  });

  it('renders custom fallback when provided', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary fallback={<CustomFallback />}>
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Custom fallback')).toBeInTheDocument();
    consoleError.mockRestore();
  });

  it('calls logError with error and context', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary context="TestComponent">
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(logError).toHaveBeenCalledWith(expect.any(Error), 'TestComponent');
    consoleError.mockRestore();
  });

  it('logs component stack in development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(consoleError).toHaveBeenCalledWith('Component stack:', expect.any(String));
    consoleError.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  it('shows error details in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    const details = screen.getByText('Error details (development only)');
    expect(details).toBeInTheDocument();
    userEvent.click(details);
    expect(screen.getByText(/Test error/)).toBeInTheDocument();
    consoleError.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  it('does not show error details in production mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(screen.queryByText('Error details (development only)')).not.toBeInTheDocument();
    consoleError.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });
});
