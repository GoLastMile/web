"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const cliPort = searchParams.get("cli_port");

      try {
        const { data, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          throw sessionError;
        }

        if (!data.session) {
          throw new Error("No session found");
        }

        const tokens = {
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
          expires_in: data.session.expires_in,
          token_type: "bearer",
        };

        if (cliPort) {
          const cliCallbackUrl = `http://localhost:${cliPort}/auth?tokens=${encodeURIComponent(JSON.stringify(tokens))}`;

          setStatus("success");

          setTimeout(() => {
            window.location.href = cliCallbackUrl;
          }, 1000);
        } else {
          window.location.href = "/dashboard";
        }
      } catch (err) {
        console.error("Auth callback error:", err);
        setError(err instanceof Error ? err.message : "Authentication failed");
        setStatus("error");
      }
    };

    handleCallback();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {status === "loading" && (
          <>
            <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <h1 className="text-xl font-bold text-on-surface mb-2">
              Completing sign in...
            </h1>
            <p className="text-sm font-mono text-on-surface-variant">
              Please wait while we authenticate you
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-on-surface mb-2">
              Authentication successful!
            </h1>
            <p className="text-sm font-mono text-on-surface-variant">
              Redirecting back to CLI...
            </p>
            <p className="text-xs font-mono text-on-surface-variant/50 mt-4">
              You can close this window after returning to your terminal
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-error"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-on-surface mb-2">
              Authentication failed
            </h1>
            <p className="text-sm font-mono text-error mb-4">{error}</p>
            <a
              href="/auth/cli"
              className="inline-block px-6 py-2 bg-primary text-on-primary font-mono text-sm"
            >
              Try again
            </a>
          </>
        )}
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4" />
        <h1 className="text-xl font-bold text-on-surface mb-2">Loading...</h1>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AuthCallbackContent />
    </Suspense>
  );
}
