import Link from "next/link";

const integrations = [
  {
    name: "CLAUDE",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdfNj32SEVYqHtmxqjS5eiJdXu0vyclw_TmtcgT_EEO69P0SOiXQ1l4RFNGVbWIVkEF__MGUsJowHBj-aHqYILrQUui7j3pkBd-J-WWbiYiTPZsZq07ShPMOwUsE2_RVyIn18O5nTxljh2YvqWE9FApL6i1IWYTOpOucNVHc-480qW4B2g-yO3_rjdNLU39aa99aU9S8CdNh0XPyRVAfsWXPwKzuYC8tlsv4DuXGaQ3U7LoIcFogk3DkejHnUUnAYn-kU7Uhr0WA",
  },
  {
    name: "CURSOR",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8PU-O2Vu69cN2_xnnYhWus6TFfgf5U1RmmczUTZL9MIC4uP9rEjc708eb3nsHUwkl3y5hiRXja0B27zb_E-JfypBB87ZsgmnGmxNkkyFJ9ZjhoQumM34A1EJu3xmXX_BvLqy8jZD77HcddLlt7jAA-61_gNUJqkIqvOALwdioGwsDPo2eoryLdF5rJJSCgoBvYMjIUQNT7M-ewHh0lbE4YaKTlsiKugiX_sfOY5OR131r0YA1-zk3OLIQRuvu3hZpUxTdtcjXUA",
  },
  {
    name: "WINDSURF",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuQ_6eJI6utkT0KSYtkgGBU0xhlGPiA-0pB-xPSQwHaM4CSzNakBPk5sYxWS8L6BG472j8InMcZZn1jSx6n3VyJEk0MTfCNWXN23VFcCg_qMFOCSw7CuP0hPZ1EbhBAnr6OntevqanIrKkzIZlJYyk-wffNl2AF8w4dMC8oIg7fRtIc3EwyrOJ8Of2kvq3vSLvL5nZ_-w_6q34HshhLRh7yXmjHN9pmRyCxBeS6qT3dcCN5HE9FrqIwKxubHxr5wPDM9y57zAlEg",
  },
];

const features = [
  {
    icon: "search",
    title: "ANALYZE_TOOL",
    description: "Ask your AI assistant to scan for production gaps. LastMile exposes analyze capabilities via MCP for seamless integration.",
  },
  {
    icon: "build",
    title: "FIX_TOOL",
    description: "Generate fixes directly from your AI workflow. Your LLM suggests and applies production-ready code patches.",
  },
  {
    icon: "rocket",
    title: "SHIP_TOOL",
    description: "Deploy to Railway or Vercel without leaving your AI coding environment. One natural language command to production.",
  },
];

export default function IntegrationsPage() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 pt-4 lg:pt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black font-headline tracking-tighter mb-6 leading-none">
              Native <span className="text-primary glow-text-primary">MCP</span> Integration
            </h1>
            <p className="font-mono text-sm text-on-surface-variant max-w-md leading-relaxed mb-10">
              Connect LastMile to your AI coding assistant via Model Context Protocol.
              Scan for gaps on every feature, generate fixes, and deploy&mdash;all through natural language
              commands in Claude, Cursor, or Windsurf.
            </p>

            {/* Integrations Stack */}
            <div className="flex flex-wrap gap-6 md:gap-8 items-center opacity-70">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(107,251,154,0.2)] transition-all">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="font-mono text-[10px]">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />

            <div className="glass-panel border border-outline-variant/20 shadow-2xl relative overflow-hidden crt-glow">
              {/* Terminal Header */}
              <div className="bg-surface-container-highest/50 px-4 md:px-6 py-3 flex justify-between items-center border-b border-outline-variant/20">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zm-8-4 1.5 2-2.5 3H5l4-5z" />
                  </svg>
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant hidden sm:inline">
                    LASTMILE_MCP_SERVER
                  </span>
                </div>
                <div className="w-10" />
              </div>

              {/* Chat Area */}
              <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-h-[500px] md:max-h-[600px] overflow-y-auto font-mono text-sm">
                {/* User Message */}
                <div className="flex flex-col items-end space-y-2">
                  <div className="bg-surface-container-high px-4 md:px-5 py-3 border-r-2 border-secondary text-on-surface max-w-[90%] md:max-w-[80%]">
                    <span className="text-secondary mr-2">&gt;&gt;&gt;</span> Is this project ready for production?
                  </div>
                  <span className="text-[10px] opacity-30">14:02:11_UTC</span>
                </div>

                {/* AI Response */}
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center">
                      <svg className="w-4 h-4 text-on-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3 4c1.1 0 2.1-.4 2.8-1H8.2c.7.6 1.7 1 2.8 1z" />
                      </svg>
                    </div>
                    <span className="text-primary font-bold glow-text-primary">AI Assistant via LastMile MCP</span>
                  </div>

                  <div className="space-y-4 w-full">
                    <div className="bg-primary/5 p-4 md:p-6 border-l-2 border-primary">
                      <p className="mb-4 text-xs md:text-sm">
                        Running <code className="text-primary">lastmile analyze</code> on your project...
                      </p>

                      {/* Score Gauge */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-6">
                        <div className="relative w-20 h-20 flex items-center justify-center" style={{ filter: "drop-shadow(0 0 10px rgba(255, 198, 64, 0.3))" }}>
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                            <circle className="text-surface-container-highest" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="4" />
                            <circle className="text-secondary" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset="95" strokeWidth="4" />
                          </svg>
                          <span className="absolute text-xl font-black glow-text-secondary">58</span>
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest">Readiness Score</h4>
                          <p className="text-white/40 text-[10px]">Status: <span className="text-secondary">NEEDS_WORK</span></p>
                        </div>
                      </div>

                      {/* Identified Gaps */}
                      <div className="space-y-3">
                        <h5 className="text-[10px] font-bold text-white/60">GAPS_DETECTED:</h5>
                        <ul className="space-y-2 text-xs">
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">[SECURITY]</span>
                            <span>Hardcoded API key in <code className="bg-surface px-1 text-primary">src/config.ts</code></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-error font-bold">[GIT]</span>
                            <span><code className="bg-surface px-1 text-primary">.env</code> file committed to repository</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary font-bold">[ERROR]</span>
                            <span>Missing error boundaries in React components</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Code Diff */}
                    <div className="bg-surface-container-lowest border border-outline-variant/20 overflow-hidden">
                      <div className="bg-surface-container px-4 py-2 text-[10px] flex justify-between border-b border-outline-variant/20">
                        <span>src/config.ts</span>
                        <span className="text-primary">FIX AVAILABLE</span>
                      </div>
                      <div className="p-4 text-[10px] md:text-[11px] leading-relaxed overflow-x-auto whitespace-pre font-mono">
                        <span className="text-error bg-error/10 block">- const API_KEY = &quot;sk_live_abc123&quot;;</span>
                        <span className="text-primary bg-primary/10 block">+ const API_KEY = process.env.API_KEY;</span>
                        <span className="text-white/30">{"\n"}// + .env.example generated</span>
                        <span className="text-white/30">{"\n"}// + .gitignore updated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prompt Bar */}
              <div className="p-4 md:p-6 border-t border-outline-variant/10 bg-surface-container-low/50">
                <div className="flex items-center gap-2 md:gap-4 group">
                  <span className="text-primary font-bold">_</span>
                  <input
                    type="text"
                    className="bg-transparent border-none focus:ring-0 focus:outline-none w-full font-mono text-sm text-primary placeholder:text-white/20"
                    placeholder="Apply all fixes and deploy to Railway..."
                  />
                  <span className="terminal-cursor hidden sm:inline-block" />
                  <button className="bg-primary px-3 md:px-4 py-1 text-on-primary font-black text-xs glow-hover-primary glow-border-primary transition-all whitespace-nowrap">
                    EXEC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Tools */}
      <section className="px-4 md:px-8 py-12 md:py-20 border-t border-outline-variant/10 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 md:mb-12 font-headline uppercase">
            MCP Tools <span className="text-primary glow-text-primary">Exposed</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-container p-6 md:p-8 border border-outline-variant/10 flex flex-col gap-4 hover:border-primary/30 transition-all hover-glow"
              >
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  {feature.icon === "search" && (
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  )}
                  {feature.icon === "build" && (
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  )}
                  {feature.icon === "rocket" && (
                    <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.29-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
                  )}
                </svg>
                <h3 className="font-headline font-black text-lg md:text-xl tracking-tight">{feature.title}</h3>
                <p className="font-mono text-xs text-on-surface-variant leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6 font-headline">
            Set up MCP in <span className="text-primary glow-text-primary">2 minutes</span>
          </h2>
          <p className="text-on-surface-variant font-mono text-sm mb-8 max-w-lg mx-auto">
            Add LastMile to your AI assistant&apos;s MCP config and start analyzing, fixing, and deploying from your natural language prompts.
          </p>
          <Link href="/docs/mcp-server" className="inline-block bg-primary text-on-primary font-bold px-8 py-4 font-mono text-sm glow-hover-primary glow-border-primary transition-all">
            READ_MCP_DOCS &gt;
          </Link>
        </div>
      </section>
    </main>
  );
}
