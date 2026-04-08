import Link from "next/link";

export default function MCPServerPage() {
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
          <span className="text-on-surface">MCP Server Setup</span>
        </nav>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6">
        MCP Server <span className="text-primary">Setup</span>
      </h1>

      <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed mb-12">
        Connect LastMile to your AI coding assistant using the Model Context Protocol (MCP) for intelligent, context-aware remediation.
      </p>

      {/* What is MCP */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">What is MCP?</h2>
        <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-4">
          The Model Context Protocol is an open standard that allows AI assistants to securely access tools and data sources. LastMile&apos;s MCP server exposes scanning and remediation capabilities to compatible AI clients.
        </p>
        <div className="bg-secondary/10 border border-secondary/30 p-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <p className="text-on-surface-variant font-mono text-sm">
              MCP integration works with Claude, Cursor, and other compatible AI assistants.
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Installation</h2>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
              1
            </div>
            <h3 className="text-lg font-bold">Install the MCP Server</h3>
          </div>
          <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">TERMINAL</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-primary">$</span>
                <span className="text-on-surface">npm install -g @lastmile/mcp-server</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
              2
            </div>
            <h3 className="text-lg font-bold">Configure Your AI Client</h3>
          </div>
          <p className="text-on-surface-variant font-mono text-sm mb-4 ml-12">
            Add the LastMile server to your MCP configuration file:
          </p>
          <div className="ml-12 bg-surface-container border border-outline-variant/20 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
              <span className="font-mono text-[10px] text-on-surface-variant">mcp_config.json</span>
            </div>
            <div className="p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-on-surface-variant">
{`{
  `}<span className="text-secondary">&quot;mcpServers&quot;</span>{`: {
    `}<span className="text-secondary">&quot;lastmile&quot;</span>{`: {
      `}<span className="text-secondary">&quot;command&quot;</span>{`: `}<span className="text-primary">&quot;lastmile-mcp&quot;</span>{`,
      `}<span className="text-secondary">&quot;args&quot;</span>{`: [`}<span className="text-primary">&quot;--project&quot;</span>{`, `}<span className="text-primary">&quot;./&quot;</span>{`]
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-on-primary font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
              3
            </div>
            <h3 className="text-lg font-bold">Verify Connection</h3>
          </div>
          <p className="text-on-surface-variant font-mono text-sm mb-4 ml-12">
            Ask your AI assistant to analyze your codebase. It should now have access to the following tools:
          </p>
          <div className="ml-12 space-y-2">
            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="text-primary">&gt;</span>
              <code className="bg-surface-container px-2 py-1">analyze</code>
              <span className="text-on-surface-variant">- Scan codebase for production gaps</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="text-primary">&gt;</span>
              <code className="bg-surface-container px-2 py-1">fix</code>
              <span className="text-on-surface-variant">- Generate fixes for detected gaps</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="text-primary">&gt;</span>
              <code className="bg-surface-container px-2 py-1">ship</code>
              <span className="text-on-surface-variant">- Deploy to Railway or Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <div className="mb-12 bg-secondary/10 border border-secondary/30 p-6">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
          </svg>
          <div>
            <h4 className="font-bold text-secondary mb-2">Pro Tip</h4>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              Use natural language with your AI assistant: &quot;Analyze this project for production gaps and generate fixes for the critical security issues&quot; - the MCP integration handles the rest.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-outline-variant/20 my-12" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Link href="/docs/cli" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          CLI Reference
        </Link>
        <Link href="/docs/remote-syncing" className="group flex items-center gap-2 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors">
          Remote Syncing
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
