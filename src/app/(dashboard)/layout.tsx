import { redirect } from "next/navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AuthError, logError } from "@/lib/error-handler";

// TODO: Replace with actual auth check
async function getUser() {
  try {
    // This will be replaced with actual auth logic
    // Example: const response = await fetch('/api/auth/me');
    // if (!response.ok) throw new AuthError('Failed to authenticate');
    // return response.json();
    
    // For now, simulate auth failure for testing
    // throw new AuthError('Invalid token'); // Uncomment to test
    
    return null; // Simulate no user
  } catch (error) {
    // Re-throw as AuthError to preserve error type
    if (error instanceof AuthError) {
      throw error;
    }
    // Wrap unexpected errors
    throw new AuthError('Authentication check failed');
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const user = await getUser();

    // Redirect to login if not authenticated
    if (!user) {
      redirect("/login");
    }

    return (
      <ErrorBoundary context="DashboardLayout">
        <div className="min-h-screen bg-surface">
          {/* TODO: Add dashboard sidebar and header */}
          <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container border-r border-outline-variant/20">
            <div className="p-4">
              <span className="font-mono text-sm font-bold text-white">LASTMILE</span>
              <span className="text-primary font-mono font-bold text-sm">_</span>
            </div>
            <nav className="px-2">
              {/* TODO: Add navigation items */}
            </nav>
          </aside>
          <main className="ml-64 p-8">{children}</main>
        </div>
      </ErrorBoundary>
    );
  } catch (error) {
    // Log specific error details with context
    logError(error, 'DashboardLayout-auth');
    
    // Determine redirect URL based on error type
    // Use generic error codes instead of exposing detailed messages
    const redirectUrl = error instanceof AuthError
      ? '/login?error=auth_failed'
      : '/login?error=unknown';
    
    redirect(redirectUrl);
  }
}
