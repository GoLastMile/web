import Link from "next/link";

export default function RemoteSyncingPage() {
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
          <span className="hover:text-primary cursor-pointer">Deployment</span>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Remote Syncing</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        Remote <span className="text-primary">Syncing</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Keep your LastMile configuration synchronized across your team and CI/CD pipelines with remote syncing.
      </p>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Overview</h2>
        <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-6">
          Remote syncing allows you to store your LastMile configuration in the cloud, ensuring consistency across all environments and team members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-primary mb-2">Team Sync</h3>
            <p className="text-on-surface-variant font-mono text-xs">
              Share configurations across your entire team without committing secrets to git.
            </p>
          </div>
          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <h3 className="font-bold text-secondary mb-2">CI/CD Integration</h3>
            <p className="text-on-surface-variant font-mono text-xs">
              Pull configurations automatically in your deployment pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Setup</h2>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
              1
            </div>
            <h3 className="text-lg font-bold">Authenticate</h3>
          </div>
          <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile auth login</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
              2
            </div>
            <h3 className="text-lg font-bold">Enable Remote Sync</h3>
          </div>
          <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile sync enable</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
              3
            </div>
            <h3 className="text-lg font-bold">Push Configuration</h3>
          </div>
          <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile sync push</span>
              </div>
              <div className="mt-4 text-on-surface-variant text-xs">
                <div className="text-primary">&gt; Pushing configuration to remote...</div>
                <div className="text-primary">&gt; Encrypted 3 secret values</div>
                <div className="text-primary">&gt; Sync complete: project-abc-123</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">CI/CD Integration</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          Pull your synced configuration in CI/CD pipelines using a service token:
        </p>
        <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
            <span className="font-mono text-[10px] text-on-surface-variant">.github/workflows/deploy.yml</span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-on-surface-variant">
{`- name: Analyze with LastMile
  run: lastmile analyze
  env:
    LASTMILE_TOKEN: `}<span className="text-primary">$&#123;&#123; secrets.LASTMILE_TOKEN &#125;&#125;</span>{`

- name: Deploy to Railway
  run: lastmile ship railway`}
            </pre>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/mcp-server" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          MCP Server Setup
        </Link>
        <Link href="/docs/api-keys" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          API Keys & Auth
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
