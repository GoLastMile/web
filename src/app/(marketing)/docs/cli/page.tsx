import Link from "next/link";

export default function CLIReferencePage() {
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
          <span className="hover:text-primary cursor-pointer">Fundamentals</span>
          <span className="mx-2">/</span>
          <span className="text-on-surface">CLI Reference</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        CLI <span className="text-primary">Reference</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Complete reference for all LastMile CLI commands. Use locally during development, or integrate into your CI/CD pipeline for continuous production-readiness checks.
      </p>

      {/* Commands */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Core Commands</h2>

        {/* analyze */}
        <div className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3">lastmile analyze</h3>
          <p className="text-on-surface-variant font-mono text-sm mb-4">
            Scan your codebase for production-readiness gaps across 8 categories. Generates a Readiness Score (0-100).
          </p>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile analyze [options]</span>
              </div>
              <div className="mt-4 text-on-surface-variant text-xs">
                <div className="text-primary">&gt; Scanning codebase...</div>
                <div className="text-secondary">&gt; [SECURITY] 2 critical gaps found</div>
                <div className="text-secondary">&gt; [TESTING] No test framework detected</div>
                <div className="text-primary">&gt; READINESS_SCORE: 42/100</div>
              </div>
            </div>
          </div>
          <div className="font-mono text-xs text-on-surface-variant bg-surface-container p-4 border border-outline-variant/20">
            <div className="font-bold text-on-surface mb-2">Gap Categories:</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <span className="text-primary">Security</span>
              <span className="text-primary">Testing</span>
              <span className="text-primary">Observability</span>
              <span className="text-primary">CI/CD</span>
              <span className="text-secondary">Dependencies</span>
              <span className="text-secondary">Git</span>
              <span className="text-secondary">Database</span>
              <span className="text-secondary">Error Handling</span>
            </div>
          </div>
        </div>

        {/* fix */}
        <div className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3">lastmile fix</h3>
          <p className="text-on-surface-variant font-mono text-sm mb-4">
            Auto-generate fixes for detected gaps using templates, transformations, or LLM-powered generation.
          </p>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile fix [options]</span>
              </div>
            </div>
          </div>
          <div className="font-mono text-xs text-on-surface-variant">
            <div className="font-bold text-on-surface mb-2">Fix Strategies:</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span><strong className="text-primary">Template</strong> - Dockerfile, .gitignore, CI/CD workflows</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary">&gt;</span>
                <span><strong className="text-secondary">Transform</strong> - Extract secrets to .env files</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span><strong className="text-primary">AI-Powered</strong> - LLM generates complex code fixes</span>
              </div>
            </div>
          </div>
        </div>

        {/* configure */}
        <div className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3">lastmile configure</h3>
          <p className="text-on-surface-variant font-mono text-sm mb-4">
            Set up your deployment infrastructure - create git repos, manage environment variables, configure secrets, and prepare deployment manifests.
          </p>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile configure</span>
              </div>
            </div>
          </div>
        </div>

        {/* ship */}
        <div className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3">lastmile ship</h3>
          <p className="text-on-surface-variant font-mono text-sm mb-4">
            Deploy your application to Railway (full-stack apps, backends) or Vercel (Next.js, frontends) with automatic environment variable injection.
          </p>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile ship [target]</span>
              </div>
            </div>
          </div>
          <div className="font-mono text-xs text-on-surface-variant">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-secondary">railway</span>
              <span>Full-stack apps, backends, databases</span>
              <span className="text-secondary">vercel</span>
              <span>Next.js apps, frontends, edge functions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Commands */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Authentication</h2>

        <div className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3">lastmile login</h3>
          <p className="text-on-surface-variant font-mono text-sm mb-4">
            Authenticate with LastMile to unlock AI-powered fixes and deployment features.
          </p>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile login</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3">lastmile logout</h3>
          <p className="text-on-surface-variant font-mono text-sm mb-4">
            Log out and clear stored credentials.
          </p>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile logout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Options */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Global Options</h2>
        <div className="bg-surface-container border border-outline-variant/20 p-6">
          <div className="font-mono text-xs text-on-surface-variant space-y-3">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-primary">--help, -h</span>
              <span>Show help for any command</span>
              <span className="text-primary">--version, -v</span>
              <span>Show CLI version</span>
              <span className="text-primary">--verbose</span>
              <span>Enable verbose output</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/introduction" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Introduction
        </Link>
        <Link href="/docs/mcp-server" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          MCP Server Setup
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
