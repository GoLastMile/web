import Link from "next/link";

export default function APIKeysPage() {
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
          <span className="text-on-surface">API Keys & Auth</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        API Keys & <span className="text-primary">Authentication</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Secure your LastMile deployments with proper authentication and API key management.
      </p>

      {/* Types of Keys */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Types of Keys</h2>

        <div className="space-y-4">
          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary/20 text-primary font-mono text-xs px-2 py-1">USER</span>
              <h3 className="font-bold">Personal Access Tokens</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Used for local development and CLI authentication. Tied to your user account.
            </p>
            <div className="font-mono text-xs text-on-surface-variant">
              <span className="text-secondary">Scope:</span> Full access to your projects
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-secondary/20 text-secondary font-mono text-xs px-2 py-1">SERVICE</span>
              <h3 className="font-bold">Service Tokens</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Used for CI/CD pipelines and automated systems. Can be scoped to specific projects.
            </p>
            <div className="font-mono text-xs text-on-surface-variant">
              <span className="text-secondary">Scope:</span> Configurable per-project access
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-error/20 text-error font-mono text-xs px-2 py-1">DEPLOY</span>
              <h3 className="font-bold">Deploy Keys</h3>
            </div>
            <p className="text-on-surface-variant font-mono text-sm mb-4">
              Read-only keys for pulling configurations in production environments.
            </p>
            <div className="font-mono text-xs text-on-surface-variant">
              <span className="text-secondary">Scope:</span> Read-only configuration access
            </div>
          </div>
        </div>
      </section>

      {/* Creating Keys */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Creating API Keys</h2>

        <div className="mb-6">
          <h3 className="font-bold mb-3">Via CLI</h3>
          <div className="bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">lastmile auth create-token --type service --name &quot;CI Pipeline&quot;</span>
              </div>
              <div className="mt-4 text-on-surface-variant text-xs">
                <div className="text-primary">&gt; Token created successfully</div>
                <div className="text-secondary">&gt; lm_svc_a1b2c3d4e5f6...</div>
                <div className="text-error">&gt; Store this token securely - it won&apos;t be shown again</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Variables */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Environment Variables</h2>
        <p className="text-on-surface-variant font-mono text-sm mb-4">
          LastMile reads authentication from these environment variables:
        </p>
        <div className="bg-surface-container border border-outline-variant/20 p-6">
          <div className="font-mono text-xs space-y-3">
            <div className="grid grid-cols-[180px_1fr] gap-4">
              <code className="text-primary">LASTMILE_TOKEN</code>
              <span className="text-on-surface-variant">Primary authentication token</span>
              <code className="text-primary">LASTMILE_PROJECT_ID</code>
              <span className="text-on-surface-variant">Override project ID</span>
              <code className="text-primary">LASTMILE_API_URL</code>
              <span className="text-on-surface-variant">Custom API endpoint (enterprise)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Warning */}
      <div className="mb-12 bg-error/10 border border-error/30 p-6">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-error flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <div>
            <h4 className="font-bold text-error mb-2">Security Warning</h4>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              Never commit API keys to version control. Use environment variables or secret management tools like Vault, AWS Secrets Manager, or GitHub Secrets.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/remote-syncing" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Remote Syncing
        </Link>
        <Link href="/docs/architecture" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          Architecture
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
