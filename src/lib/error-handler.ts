/**
 * Error handling utilities for authentication and general errors
 */

/**
 * Custom error class for authentication-related errors
 */
export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

/**
 * Log an error with context for debugging
 * In production, this would send to a logging service
 */
export function logError(error: unknown, context: string): void {
  const timestamp = new Date().toISOString();
  const errorMessage = error instanceof Error ? error.message : 'Unknown error';
  const errorName = error instanceof Error ? error.name : 'Unknown';
  const errorStack = error instanceof Error ? error.stack : undefined;

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${timestamp}] [${context}] ${errorName}: ${errorMessage}`);
    if (errorStack) {
      console.error(errorStack);
    }
  }

  // In production, you would send to a logging service like:
  // - Sentry
  // - LogRocket
  // - Datadog
  // - etc.
}
