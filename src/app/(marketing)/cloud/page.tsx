"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { HoverCard } from "@/components/ui/card-3d";
import LastMileTerminalDemo from "@/components/marketing/LastMileTerminalDemo";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <BlurFade>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">LASTMILE_CLOUD</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-on-surface leading-[0.9] mb-6 md:mb-8 font-headline">
                One command to <span className="text-primary italic glow-text-primary">production</span>
              </h1>
            </div>
            <div className="lg:col-span-5 pb-4">
              <p className="text-base md:text-lg text-on-surface-variant font-mono leading-relaxed opacity-80">
                Database included. SSL automatic. CDN global. Zero DevOps required. Just <span className="text-primary">lastmile ship</span>.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Terminal Demo */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <BlurFade delay={0.1}>
          <LastMileTerminalDemo variant="ship" />
        </BlurFade>
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
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">COMPUTE</div>
                <h3 className="font-bold text-lg mb-2">Edge Runtime</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Your backend runs at the edge. Sub-50ms cold starts. 300+ locations worldwide.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.35}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">STORAGE</div>
                <h3 className="font-bold text-lg mb-2">Object Storage</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Zero egress fees. S3-compatible API. Perfect for images, files, and static assets.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.4}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">SSL_CDN</div>
                <h3 className="font-bold text-lg mb-2">Automatic HTTPS</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  SSL certificates provisioned instantly. Global CDN delivers your app from edge locations worldwide.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.45}>
            <HoverCard className="h-full">
              <div className="p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors h-full">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">OBSERVABILITY</div>
                <h3 className="font-bold text-lg mb-2">Built-In Monitoring</h3>
                <p className="text-on-surface-variant font-mono text-xs leading-relaxed">
                  Sentry error tracking, structured logging, OpenTelemetry tracing, and health checks - all auto-configured.
                </p>
              </div>
            </HoverCard>
          </BlurFade>

          <BlurFade delay={0.5}>
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

      {/* Newsletter Signup */}
      <section className="max-w-sm mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <BlurFade delay={0.6}>
          <NewsletterSignup />
        </BlurFade>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <BlurFade delay={0.65}>
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
