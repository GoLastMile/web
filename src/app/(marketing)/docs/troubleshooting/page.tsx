import Link from "next/link";

export default function TroubleshootingPage() {
  return (
    <>
      {/* Version badge and breadcrumb */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="bg-primary/10 text-primary font-mono text-[10px] px-3 py-1 border border-primary/20">
          v1.0.0
        </span>
        <nav className="font-mono text-xs text-on-surface-variant">
          <Link href="/docs" className="hover:text-primary">Docs</Link>
          <span className="mx-2">/</span>
          <span className="hover:text-primary cursor-pointer">Resources</span>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Troubleshooting</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        <span className="text-primary">Troubleshooting</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Common issues and their solutions when working with LastMile.
      </p>

      {/* Common Issues */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Common Issues</h2>

        {/* Issue 1 */}
        <div className="mb-8 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="px-6 py-4 bg-error/10 border-b border-outline-variant/20">
            <h3 className="font-bold text-error">Command not found: lastmile</h3>
          </div>
          <div className="p-6">
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              The CLI is not in your PATH or not installed globally.
            </p>
            <h4 className="font-bold text-primary text-sm mb-2">Solution:</h4>
            <div className="bg-surface-container-low border border-outline-variant/20 p-4 font-mono text-sm">
              <div className="flex gap-3 mb-2">
                <span className="text-primary">$</span>
                <span className="text-on-surface"># Reinstall globally</span>
              </div>
              <div className="flex gap-3 mb-2">
                <span className="text-primary">$</span>
                <span className="text-on-surface">npm install -g @lastmile/cli</span>
              </div>
              <div className="flex gap-3 mt-4 mb-2">
                <span className="text-primary">$</span>
                <span className="text-on-surface"># Or use npx</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">npx @lastmile/cli scan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 2 */}
        <div className="mb-8 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="px-6 py-4 bg-error/10 border-b border-outline-variant/20">
            <h3 className="font-bold text-error">Authentication failed</h3>
          </div>
          <div className="p-6">
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Your token has expired or is invalid.
            </p>
            <h4 className="font-bold text-primary text-sm mb-2">Solution:</h4>
            <div className="bg-surface-container-low border border-outline-variant/20 p-4 font-mono text-sm">
              <div className="flex gap-3 mb-2">
                <span className="text-primary">$</span>
                <span className="text-on-surface"># Re-authenticate</span>
              </div>
              <div className="flex gap-3 mb-2">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile logout</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile login</span>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 3 */}
        <div className="mb-8 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="px-6 py-4 bg-secondary/10 border-b border-outline-variant/20">
            <h3 className="font-bold text-secondary">Analyze takes too long</h3>
          </div>
          <div className="p-6">
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Large codebases can take longer to analyze. LastMile automatically excludes common directories like node_modules and .git.
            </p>
            <h4 className="font-bold text-primary text-sm mb-2">Solution:</h4>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Run analyze with verbose output to see progress:
            </p>
            <div className="bg-surface-container-low border border-outline-variant/20 p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile analyze --verbose</span>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 4 */}
        <div className="mb-8 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="px-6 py-4 bg-error/10 border-b border-outline-variant/20">
            <h3 className="font-bold text-error">Fix command requires authentication</h3>
          </div>
          <div className="p-6">
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              The <code className="bg-surface-container-high px-2 py-0.5 text-primary">lastmile fix</code> command requires authentication to access AI-powered fixes and templates.
            </p>
            <h4 className="font-bold text-primary text-sm mb-2">Solution:</h4>
            <div className="bg-surface-container-low border border-outline-variant/20 p-4 font-mono text-sm">
              <div className="flex gap-3 mb-2">
                <span className="text-primary">$</span>
                <span className="text-on-surface"># Login to LastMile</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile login</span>
              </div>
            </div>
            <p className="text-on-surface-variant font-mono text-xs mt-4">
              Note: The <code className="bg-surface-container-high px-1 py-0.5 text-primary">lastmile analyze</code> command works without authentication on the free tier.
            </p>
          </div>
        </div>
      </section>

      {/* Debug Mode */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Debug Mode</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          Enable verbose logging to diagnose issues:
        </p>
        <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex gap-3">
              <span className="text-primary">$</span>
              <span className="text-on-surface">lastmile analyze --verbose</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get Help */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Still Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://github.com/lastmile/cli/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface-container border border-outline-variant/20 p-6 hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="font-bold group-hover:text-primary transition-colors">GitHub Issues</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-xs">
              Report bugs or request features on our GitHub repository.
            </p>
          </a>

          <a
            href="https://discord.gg/lastmile"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface-container border border-outline-variant/20 p-6 hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <h3 className="font-bold group-hover:text-primary transition-colors">Discord Community</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-xs">
              Join our Discord for real-time support from the community.
            </p>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/examples" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Examples
        </Link>
        <Link href="/docs" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          Back to Docs
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
