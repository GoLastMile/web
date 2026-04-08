import Link from "next/link";

export default function IntroductionPage() {
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
          <span className="text-on-surface">Introduction</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        Introduction to <span className="text-primary">LastMile</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        LastMile is an AI-powered DevOps automation tool that bridges the gap between prototypes and production-ready deployments. We automate the tedious last 20%&mdash;not just once, but on every commit, every PR, every deploy.
      </p>

      {/* What is LastMile */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">What is LastMile?</h2>
        <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-6">
          LastMile is a CLI-first tool that scans your AI-generated codebase, identifies production gaps across 8 categories, and auto-generates fixes. It integrates with your existing workflow through:
        </p>
        <ul className="space-y-3 font-mono text-sm text-on-surface-variant ml-4">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">&gt;</span>
            <span><strong className="text-on-surface">Terminal CLI</strong> - Four commands: analyze, fix, configure, ship</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">&gt;</span>
            <span><strong className="text-on-surface">MCP Protocol</strong> - Connect with Claude, Cursor, and Windsurf for AI-assisted fixes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">&gt;</span>
            <span><strong className="text-on-surface">One-Command Deploy</strong> - Ship to Railway or Vercel with automatic environment setup</span>
          </li>
        </ul>
      </section>

      {/* Core Concepts */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Core Concepts</h2>

        <div className="space-y-6">
          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-primary mb-2">8 Gap Categories</h3>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              LastMile analyzes: Security, Testing, Observability, CI/CD, Dependencies, Git, Database, and Error Handling. Each gap is categorized by severity: Critical, Warning, or Info.
            </p>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-secondary mb-2">Readiness Score</h3>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              A 0-100 score that tells you exactly how production-ready your code is. Severity-weighted scoring with clear thresholds: 0-40 Critical, 40-70 Needs Work, 70-90 Almost Ready, 90-100 Ship It!
            </p>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-primary mb-2">Fix Generation</h3>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              Three fix strategies: Templates (Dockerfile, .gitignore, CI/CD workflows), Transformations (extract secrets to .env), and LLM-powered generation for complex code.
            </p>
          </div>
        </div>
      </section>

      {/* Why LastMile */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Why LastMile?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-6 bg-surface-container border border-outline-variant/20">
            <div className="text-3xl font-black text-primary mb-2">8</div>
            <div className="font-mono text-xs text-on-surface-variant">Gap Categories Detected</div>
          </div>
          <div className="text-center p-6 bg-surface-container border border-outline-variant/20">
            <div className="text-3xl font-black text-secondary mb-2">0-100</div>
            <div className="font-mono text-xs text-on-surface-variant">Readiness Score</div>
          </div>
          <div className="text-center p-6 bg-surface-container border border-outline-variant/20">
            <div className="text-3xl font-black text-primary mb-2">2min</div>
            <div className="font-mono text-xs text-on-surface-variant">First Scan Time</div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Getting Started
        </Link>
        <Link href="/docs/cli" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          CLI Reference
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
