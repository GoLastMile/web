"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { HoverCard } from "@/components/ui/card-3d";
import LastMileTerminalDemo from "@/components/marketing/LastMileTerminalDemo";
import CloudHowItWorks from "@/components/marketing/CloudHowItWorks";
import {
  SiNextdotjs,
  SiRemix,
  SiNuxt,
  SiSvelte,
  SiAstro,
  SiReact,
  SiVuedotjs,
  SiNestjs,
  SiExpress,
  SiFastify,
  SiHono,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiGo,
  SiPostgresql,
  SiRedis,
} from "@icons-pack/react-simple-icons";

export default function CloudPage() {
  return (
    <div className="relative pb-24 overflow-hidden min-h-screen">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #3d4a3e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Section - The Differentiator */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <BlurFade>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">LASTMILE_CLOUD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-on-surface leading-[1] mb-6 font-headline">
              Other platforms deploy your <span className="text-white/40 line-through">broken</span> code.
              <br />
              <span className="text-primary glow-text-primary">We fix it first.</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-mono leading-relaxed opacity-80 max-w-2xl mx-auto">
              Analyze. Fix. Deploy. Database included. SSL automatic. Zero DevOps.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Flow Diagram - Visual Differentiator */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <BlurFade delay={0.1}>
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg">
            <CloudHowItWorks />
          </div>
        </BlurFade>
      </section>

      {/* Three Steps */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlurFade delay={0.15}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-3">
                <span className="text-primary font-mono font-bold">1</span>
              </div>
              <h3 className="font-bold text-sm mb-2">Analyze</h3>
              <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                Scans for production issues: missing env files, console.logs, hardcoded secrets, no error boundaries.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 mb-3">
                <span className="text-secondary font-mono font-bold">2</span>
              </div>
              <h3 className="font-bold text-sm mb-2">Fix</h3>
              <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                Auto-generates fixes: .env.example, health checks, structured logging. You approve, we apply.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.25}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-3">
                <span className="text-primary font-mono font-bold">3</span>
              </div>
              <h3 className="font-bold text-sm mb-2">Deploy</h3>
              <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                Provisions database, runs migrations, deploys to edge. Live URL in minutes.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <BlurFade delay={0.3}>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">See It In <span className="text-primary glow-text-primary">Action</span></h2>
            <div className="h-[1px] flex-grow bg-outline-variant/20" />
            <span className="font-8bit-sm text-white/30">DEMO</span>
          </div>
        </BlurFade>
        <BlurFade delay={0.35}>
          <div className="max-w-4xl mx-auto">
            <LastMileTerminalDemo variant="ship" />
          </div>
        </BlurFade>
      </section>

      {/* Why Not Just Deploy Directly? */}
      <section className="w-full bg-surface-container py-12 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BlurFade delay={0.4}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">Why <span className="text-secondary glow-text-secondary">LastMile</span>?</h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">VS</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-mono text-sm">
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="text-left py-4 px-4 text-white/50 font-normal">Feature</th>
                    <th className="text-center py-4 px-4 text-primary font-bold">LastMile Cloud</th>
                    <th className="text-center py-4 px-4 text-white/50 font-normal">Vercel / Netlify</th>
                    <th className="text-center py-4 px-4 text-white/50 font-normal">Lovable / Bolt</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b border-outline-variant/20">
                    <td className="py-3 px-4 text-white/70">Code Analysis</td>
                    <td className="py-3 px-4 text-center text-primary">13 categories</td>
                    <td className="py-3 px-4 text-center text-white/30">-</td>
                    <td className="py-3 px-4 text-center text-white/30">-</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20">
                    <td className="py-3 px-4 text-white/70">Auto-Fix Issues</td>
                    <td className="py-3 px-4 text-center text-primary">Yes</td>
                    <td className="py-3 px-4 text-center text-white/30">-</td>
                    <td className="py-3 px-4 text-center text-white/30">-</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20">
                    <td className="py-3 px-4 text-white/70">Native Postgres</td>
                    <td className="py-3 px-4 text-center text-primary">Included</td>
                    <td className="py-3 px-4 text-center text-white/50">Add-on</td>
                    <td className="py-3 px-4 text-center text-white/50">Limited</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20">
                    <td className="py-3 px-4 text-white/70">Domain Registration</td>
                    <td className="py-3 px-4 text-center text-primary">Built-in</td>
                    <td className="py-3 px-4 text-center text-white/30">-</td>
                    <td className="py-3 px-4 text-center text-white/30">-</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20">
                    <td className="py-3 px-4 text-white/70">Full-Stack Support</td>
                    <td className="py-3 px-4 text-center text-primary">Yes</td>
                    <td className="py-3 px-4 text-center text-white/50">Frontend-focused</td>
                    <td className="py-3 px-4 text-center text-white/50">Limited</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white/70">Export / No Lock-in</td>
                    <td className="py-3 px-4 text-center text-primary">Yes</td>
                    <td className="py-3 px-4 text-center text-white/50">Manual</td>
                    <td className="py-3 px-4 text-center text-white/50">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-white/40 font-mono text-xs mt-6">
              We&apos;re not just hosting. We&apos;re the <span className="text-primary">production-readiness layer</span>.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <BlurFade delay={0.2}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">What&apos;s <span className="text-primary glow-text-primary">Included</span></h2>
            <div className="h-[1px] flex-grow bg-outline-variant/20" />
            <span className="font-8bit-sm text-white/30">FEATURES</span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BlurFade delay={0.25}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">DATABASE</div>
                <h3 className="font-bold text-lg mb-2">Auto-Provisioned</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Database created automatically on deploy. Migrations run for you. No connection strings to manage.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.3}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">BUILDS</div>
                <h3 className="font-bold text-lg mb-2">Auto-Detected</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  We detect your stack and build automatically. Next.js, Vite, Express, FastAPI - no config files needed.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.35}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">SSL_CDN</div>
                <h3 className="font-bold text-lg mb-2">Automatic HTTPS</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  SSL certificates provisioned instantly. Global CDN delivers your app fast.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.4}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">DOMAINS</div>
                <h3 className="font-bold text-lg mb-2">Custom Domains</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Buy domains from $15/year. Auto-configured DNS. Live on your custom domain in minutes.
                </p>
              </div>
            </HoverCard>
          </BlurFade>
        </div>
      </section>

      {/* Supported Stacks */}
      <section className="w-full bg-surface-container-low py-12 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BlurFade delay={0.55}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">Supported <span className="text-secondary glow-text-secondary">Stacks</span></h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">COMPAT</span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-4">
            {[
              { name: "Next.js", Icon: SiNextdotjs },
              { name: "Remix", Icon: SiRemix },
              { name: "Nuxt", Icon: SiNuxt },
              { name: "SvelteKit", Icon: SiSvelte },
              { name: "Astro", Icon: SiAstro },
              { name: "React", Icon: SiReact },
              { name: "Vue", Icon: SiVuedotjs },
              { name: "NestJS", Icon: SiNestjs },
              { name: "Express", Icon: SiExpress },
              { name: "Fastify", Icon: SiFastify },
              { name: "Hono", Icon: SiHono },
              { name: "FastAPI", Icon: SiFastapi },
              { name: "Django", Icon: SiDjango },
              { name: "Flask", Icon: SiFlask },
              { name: "Go", Icon: SiGo },
              { name: "Postgres", Icon: SiPostgresql },
            ].map((stack) => (
              <div
                key={stack.name}
                className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-surface-container transition-colors"
                title={stack.name}
              >
                <stack.Icon
                  size={32}
                  className="text-on-surface-variant group-hover:text-primary transition-colors"
                />
                <span className="font-mono text-[10px] text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Registration */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <BlurFade delay={0.6}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">Need a <span className="text-primary glow-text-primary">Domain</span>?</h2>
            <div className="h-[1px] flex-grow bg-outline-variant/20" />
            <span className="font-8bit-sm text-white/30">DOMAINS</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-6">
                Buy domains directly from LastMile. No separate registrar needed. DNS auto-configured. SSL included. Live in minutes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container border border-outline-variant/20 p-4">
                  <div className="font-mono text-lg font-bold text-white">.com</div>
                  <div className="font-mono text-xs text-primary">$15/year</div>
                </div>
                <div className="bg-surface-container border border-outline-variant/20 p-4">
                  <div className="font-mono text-lg font-bold text-white">.dev</div>
                  <div className="font-mono text-xs text-primary">$18/year</div>
                </div>
                <div className="bg-surface-container border border-outline-variant/20 p-4">
                  <div className="font-mono text-lg font-bold text-white">.app</div>
                  <div className="font-mono text-xs text-primary">$20/year</div>
                </div>
                <div className="bg-surface-container border border-outline-variant/20 p-4">
                  <div className="font-mono text-lg font-bold text-white">.io</div>
                  <div className="font-mono text-xs text-primary">$50/year</div>
                </div>
              </div>
              <p className="text-white/30 font-mono text-[10px] mt-4">
                At-cost pricing. No hidden fees. No upsells.
              </p>
            </div>

            {/* Domain Search Mock */}
            <div className="bg-surface-container-high border border-outline-variant/30 p-6">
              <div className="font-mono text-[10px] text-white/30 mb-3 tracking-widest">SEARCH</div>
              <div className="flex gap-2 mb-4">
                <div className="flex-1 bg-surface-container-low border border-outline-variant/30 px-3 py-2 font-mono text-sm text-white/50">
                  myawesomeapp
                </div>
                <div className="bg-surface-container border border-outline-variant/30 px-3 py-2 font-mono text-sm text-white/50">
                  .com
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-primary/10 border border-primary/30 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-mono text-sm text-white">myawesomeapp.com</span>
                  </div>
                  <span className="font-mono text-xs text-primary">$15/yr</span>
                </div>
                <div className="flex items-center justify-between bg-surface-container px-3 py-2 opacity-50">
                  <div className="flex items-center gap-2">
                    <span className="text-white/30">✗</span>
                    <span className="font-mono text-sm text-white/50">myawesomeapp.io</span>
                  </div>
                  <span className="font-mono text-xs text-white/30">Taken</span>
                </div>
                <div className="flex items-center justify-between bg-surface-container border border-outline-variant/20 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-mono text-sm text-white">myawesomeapp.dev</span>
                  </div>
                  <span className="font-mono text-xs text-primary">$18/yr</span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* No Lock-in */}
      <section className="w-full bg-surface-container-low py-12 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BlurFade delay={0.7}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">No <span className="text-secondary glow-text-secondary">Lock-in</span></h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">EXIT</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.75}>
            <p className="text-on-surface-variant font-mono text-sm mb-8 max-w-2xl">
              Your code is yours. No proprietary formats. No vendor lock-in. Standard Git repos you can take anywhere.
            </p>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlurFade delay={0.8}>
              <div className="bg-surface-container border border-outline-variant/20 p-6">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">GIT</div>
                <h3 className="font-bold text-sm mb-2">Standard Repos</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Your code lives in your GitHub repo. Clone it, fork it, move it anytime.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.85}>
              <div className="bg-surface-container border border-outline-variant/20 p-6">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">CONFIG</div>
                <h3 className="font-bold text-sm mb-2">No Proprietary Files</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Standard package.json, Dockerfile, .env files. Nothing LastMile-specific required.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.9}>
              <div className="bg-surface-container border border-outline-variant/20 p-6">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">DATABASE</div>
                <h3 className="font-bold text-sm mb-2">Standard Postgres</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Regular PostgreSQL. Export your data with pg_dump. Connect from anywhere.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <BlurFade delay={0.95}>
          <div className="bg-surface-container-high p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6 font-headline">
              Stop configuring. <span className="text-primary glow-text-primary">Start shipping.</span>
            </h2>
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-4 font-mono text-sm max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between text-white/30 mb-2 text-[10px]">
                <span>INSTALL</span>
              </div>
              <div className="flex gap-3 text-left">
                <span className="text-primary">$</span>
                <span className="text-on-surface">npm install -g @lastmile/cli</span>
              </div>
            </div>
            <div className="font-mono text-xs text-white/40">
              Then run <span className="text-primary">lastmile ship</span> in any project
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
