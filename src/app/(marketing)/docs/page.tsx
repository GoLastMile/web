import Link from "next/link";

export default function DocsPage() {
  return (
    <>
      {/* Version badge and breadcrumb */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="bg-primary/10 text-primary font-mono text-[10px] px-3 py-1 border border-primary/20">
          v1.0.0
        </span>
        <nav className="font-mono text-xs text-on-surface-variant">
          <span className="hover:text-primary cursor-pointer">Docs</span>
          <span className="mx-2">/</span>
          <span className="hover:text-primary cursor-pointer">Fundamentals</span>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Getting Started</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        Getting Started with <span className="text-primary">LastMile</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Ship your projects to production with confidence&mdash;and keep them production-ready as you iterate. This guide walks you through installing the CLI and getting your first Readiness Score in under 2 minutes.
      </p>

      {/* Step 1 */}
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
            1
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Install the CLI</h2>
        </div>
        <p className="text-on-surface-variant font-mono text-sm mb-4 ml-12">
          Install the LastMile CLI globally using npm or your preferred package manager.
        </p>
        <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex gap-3">
              <span className="text-primary">$</span>
              <span className="text-on-surface">npm install -g @lastmile/cli</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
            2
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Authenticate (Optional)</h2>
        </div>
        <p className="text-on-surface-variant font-mono text-sm mb-4 ml-12">
          Log in to unlock AI-powered fixes and deployment features. Free tier analyze works without login.
        </p>
        <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex gap-3">
              <span className="text-primary">$</span>
              <span className="text-on-surface">lastmile login</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
            3
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Analyze Your Codebase</h2>
        </div>
        <p className="text-on-surface-variant font-mono text-sm mb-4 ml-12">
          Scan your project with 5 LLM-powered deep analyzers: Security, Testing, Error Handling, Database, and Boilerplate. Full-repo analysis for context-aware detection.
        </p>
        <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex gap-3">
              <span className="text-primary">$</span>
              <span className="text-on-surface">cd your-project</span>
            </div>
            <div className="flex gap-3 mt-2">
              <span className="text-primary">$</span>
              <span className="text-on-surface">lastmile analyze</span>
            </div>
            <div className="mt-4 text-on-surface-variant text-xs">
              <div className="text-primary">&gt; Scanning codebase...</div>
              <div className="text-secondary">&gt; [SECURITY] 2 critical gaps found</div>
              <div className="text-secondary">&gt; [TESTING] No test framework detected</div>
              <div className="text-secondary">&gt; [GIT] .env file committed to repository</div>
              <div className="text-primary">&gt; READINESS_SCORE: 42/100</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
            4
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Fix & Ship</h2>
        </div>
        <p className="text-on-surface-variant font-mono text-sm mb-4 ml-12">
          Auto-generate fixes using templates, transformations, or LLM-powered generation. Then deploy to LastMile Cloud with one command.
        </p>
        <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex gap-3">
              <span className="text-primary">$</span>
              <span className="text-on-surface">lastmile fix</span>
              <span className="text-on-surface-variant text-xs ml-4"># Generate fixes</span>
            </div>
            <div className="flex gap-3 mt-2">
              <span className="text-primary">$</span>
              <span className="text-on-surface">lastmile ship</span>
              <span className="text-on-surface-variant text-xs ml-4"># Deploy to LastMile Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="mb-12 bg-secondary/10 border border-secondary/30 p-6">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
          </svg>
          <div>
            <h4 className="font-bold text-secondary mb-2">Pro Tip</h4>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              Add LastMile to your CI/CD pipeline to run on every PR. New code means new potential gaps&mdash;continuous scanning keeps your codebase production-ready as your team ships features.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* What's Next */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">What&apos;s Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/mcp-server" className="group bg-surface-container border border-outline-variant/20 p-6 hover:border-primary/30 hover:bg-surface-container-high transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
              <h3 className="font-bold group-hover:text-primary transition-colors">MCP Server Setup</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
              Connect LastMile to your AI workflow with Model Context Protocol integration.
            </p>
          </Link>

          <Link href="/docs/remote-syncing" className="group bg-surface-container border border-outline-variant/20 p-6 hover:border-primary/30 hover:bg-surface-container-high transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
              </svg>
              <h3 className="font-bold group-hover:text-primary transition-colors">Remote Syncing</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
              Sync your configuration across teams and CI/CD pipelines seamlessly.
            </p>
          </Link>

          <Link href="/docs/api-keys" className="group bg-surface-container border border-outline-variant/20 p-6 hover:border-primary/30 hover:bg-surface-container-high transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              <h3 className="font-bold group-hover:text-primary transition-colors">API Keys & Auth</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
              Secure your deployments with proper authentication and key management.
            </p>
          </Link>

          <Link href="/docs/examples" className="group bg-surface-container border border-outline-variant/20 p-6 hover:border-primary/30 hover:bg-surface-container-high transition-all">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
              <h3 className="font-bold group-hover:text-primary transition-colors">Examples</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
              Explore real-world configurations for Next.js, Express, and more.
            </p>
          </Link>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-outline-variant/20">
        <div />
        <Link href="/docs/introduction" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          Introduction
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
