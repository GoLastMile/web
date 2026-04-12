import Link from "next/link";

export default function ExamplesPage() {
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
          <span className="text-on-surface">Examples</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        Configuration <span className="text-primary">Examples</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Real-world configuration examples for popular frameworks. Set up once, run on every deploy.
      </p>

      {/* LastMile Cloud - Primary */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">LastMile Cloud</h2>
          <span className="bg-primary text-on-primary font-mono text-[8px] px-2 py-0.5">RECOMMENDED</span>
        </div>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          Deploy any app to LastMile Cloud with zero configuration. Database, SSL, and CDN included:
        </p>
        <div className="bg-surface-container border border-primary/30 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-on-surface-variant">
{`$ `}<span className="text-primary">lastmile analyze</span>{`
> Scanning codebase...
> [SECURITY] Hardcoded API key in src/lib/api.ts
> [GIT] .env file committed to repository
> READINESS_SCORE: 52/100

$ `}<span className="text-primary">lastmile fix</span>{`
> Extracting secrets to .env
> Adding .env to .gitignore
> Generating .env.example
> READINESS_SCORE: 88/100

$ `}<span className="text-primary">lastmile ship</span>{`
> Deploying to LastMile Cloud...
> Database provisioned
> SSL certificate issued
> CDN configured
> https://my-app.lastmile.dev`}
            </pre>
          </div>
        </div>
      </section>

      {/* Next.js with Vercel - Alternative */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Alternative: Next.js + Vercel</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          Deploy to Vercel instead using the <span className="text-secondary">--vercel</span> flag:
        </p>
        <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-on-surface-variant">
{`$ `}<span className="text-primary">lastmile ship --vercel</span>{`
> Deploying to Vercel...
> Environment variables injected
> https://my-app.vercel.app`}
            </pre>
          </div>
        </div>
      </section>

      {/* Express + Railway - Alternative */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Alternative: Express.js + Railway</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          Deploy to Railway instead using the <span className="text-secondary">--railway</span> flag:
        </p>
        <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-on-surface-variant">
{`$ `}<span className="text-primary">lastmile ship --railway</span>{`
> Deploying to Railway...
> Database provisioned
> https://api.railway.app`}
            </pre>
          </div>
        </div>
      </section>

      {/* Full Workflow */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Complete Workflow</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          The full LastMile workflow from prototype to production:
        </p>
        <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-on-surface-variant">
{`$ `}<span className="text-secondary">npm install -g @lastmile/cli</span>{`
$ `}<span className="text-secondary">lastmile login</span>{`

$ `}<span className="text-primary">lastmile analyze</span>{`      # Scan for gaps
$ `}<span className="text-primary">lastmile fix</span>{`          # Auto-generate fixes
$ `}<span className="text-primary">lastmile configure</span>{`    # Set up environment
$ `}<span className="text-primary">lastmile ship</span>{`         # Deploy to LastMile Cloud`}
            </pre>
          </div>
        </div>
      </section>

      {/* More Examples CTA */}
      <div className="mb-12 bg-surface-container border border-outline-variant/20 p-6 text-center">
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          Looking for more examples?
        </p>
        <a
          href="https://github.com/lastmile/examples"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-on-primary font-mono text-xs px-6 py-3 hover:shadow-[0_0_20px_rgba(107,251,154,0.3)] transition-all"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          VIEW_GITHUB_EXAMPLES
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/architecture" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Architecture
        </Link>
        <Link href="/docs/troubleshooting" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          Troubleshooting
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
