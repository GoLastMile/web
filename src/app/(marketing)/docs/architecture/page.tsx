import Link from "next/link";

export default function ArchitecturePage() {
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
          <span className="text-on-surface">Architecture</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        System <span className="text-primary">Architecture</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Understanding how LastMile works under the hood to scan, analyze, and remediate your codebase.
      </p>

      {/* Overview Diagram */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">System Overview</h2>

        <div className="bg-surface-container border border-outline-variant/20 p-6 font-mono text-xs overflow-x-auto">
          <pre className="text-on-surface-variant">
{`┌─────────────────────────────────────────────────────────────────┐
│                         YOUR CODEBASE                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      `}<span className="text-primary">LASTMILE CLI</span>{`                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Scanner   │──│   Analyzer  │──│  Generator  │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │  Report  │   │   PRs    │   │  Deploy  │
        └──────────┘   └──────────┘   └──────────┘`}
          </pre>
        </div>
      </section>

      {/* Components */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Core Components</h2>

        <div className="space-y-6">
          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-primary mb-3">Scanner Engine</h3>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              The scanner performs static analysis across your codebase, identifying patterns that indicate production gaps:
            </p>
            <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>AST parsing for JavaScript, TypeScript, Python, Go</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>Configuration file analysis (env, yaml, json)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>Dependency vulnerability checking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>Infrastructure-as-code validation</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-secondary mb-3">Analyzer Module</h3>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Takes scanner output and applies heuristics to prioritize and categorize issues:
            </p>
            <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-secondary">&gt;</span>
                <span>Severity scoring (Critical, Warning, Info)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">&gt;</span>
                <span>Category classification (8 gap types)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">&gt;</span>
                <span>Readiness Score calculation (0-100)</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-primary mb-3">Generator Engine</h3>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Creates actionable outputs from analysis results:
            </p>
            <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>HTML/JSON/Markdown reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>Auto-generated pull requests with fixes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&gt;</span>
                <span>Deployment manifests and configs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Data Flow</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          All processing happens locally by default. Your code never leaves your machine unless you explicitly enable remote syncing.
        </p>
        <div className="bg-secondary/10 border border-secondary/30 p-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            <p className="text-on-surface-variant font-mono text-sm">
              <strong className="text-secondary">Privacy First:</strong> Scan results and generated fixes are stored locally. Remote sync is opt-in and uses end-to-end encryption.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/api-keys" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          API Keys & Auth
        </Link>
        <Link href="/docs/examples" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          Examples
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
