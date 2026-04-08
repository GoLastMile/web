"use client";

import ChatInterface from "./ChatInterface";

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

export default function HeroSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-5 pt-4 lg:pt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black font-headline tracking-tighter mb-6 leading-none">
            Native <span className="text-primary">MCP</span> Integration
          </h1>
          <p className="font-mono text-sm text-on-surface-variant max-w-md leading-relaxed mb-10">
            Bridging the gap between code generation and production environments.
            Connect your context-aware agents directly to the deployment stack
            via Model Context Protocol.
          </p>

          {/* Integrations Stack */}
          <div className="flex flex-wrap gap-6 md:gap-8 items-center opacity-70">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant/30 group-hover:border-primary transition-colors">
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
          <ChatInterface />
        </div>
      </div>
    </section>
  );
}
