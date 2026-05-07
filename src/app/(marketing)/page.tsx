"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { HoverCard } from "@/components/ui/card-3d";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import LastMileTerminalDemo from "@/components/marketing/LastMileTerminalDemo";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex flex-col">
        <InteractiveGridPattern
          className="absolute inset-0 z-10 opacity-30"
          width={40}
          height={40}
          squares={[50, 30]}
        />

        <div className="relative z-20 flex-1 flex items-start pt-8 md:pt-12 pointer-events-none">
          <section className="relative px-4 md:px-8 lg:px-12 py-8 md:py-12 max-w-7xl mx-auto w-full pointer-events-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Headline Content */}
              <div className="lg:col-span-6 space-y-6 md:space-y-8">
                <BlurFade delay={0}>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="py-1 px-3 bg-surface-container-high border border-outline-variant/20 text-primary font-8bit-sm">
                      [ REPO → LIVE ]
                    </div>
                  </div>
                </BlurFade>

                <BlurFade delay={0.1}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black font-headline tracking-tighter leading-[0.95] text-white">
                    Your AI built the app.
                    <br className="mb-2" />
                    <span className="block mt-3">
                      <AnimatedGradientText
                        className="italic text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black"
                        colorFrom="#6bfb9a"
                        colorTo="#ffc664"
                        speed={1.5}
                      >
                        We get it live.
                      </AnimatedGradientText>
                    </span>
                  </h1>
                </BlurFade>

                <BlurFade delay={0.2}>
                  <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                    Cursor, Claude, Copilot got you 80% there. The last 20%&mdash;env vars, database, deployment config&mdash;is where projects die.{" "}
                    <span className="text-primary font-mono font-bold">lastmile ship</span> handles it.
                  </p>
                </BlurFade>

                <BlurFade delay={0.3}>
                  <div className="pt-2">
                    <div className="bg-surface-container border border-outline-variant/30 p-4 font-mono text-sm mb-4">
                      <div className="flex items-center justify-between text-white/30 mb-2 text-[10px]">
                        <span>ONE_COMMAND</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-primary">$</span>
                        <span className="text-on-surface">lastmile ship</span>
                      </div>
                    </div>
                    <NewsletterSignup />
                  </div>
                </BlurFade>
              </div>

              {/* Right: Terminal Demo - ship variant only */}
              <div className="lg:col-span-6 relative">
                <BlurFade delay={0.4}>
                  <LastMileTerminalDemo variant="ship" />
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-primary/10 opacity-20" />
                </BlurFade>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* What Happens Section */}
      <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          <BlurFade>
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">
                What <span className="text-primary glow-text-primary">lastmile ship</span> does
              </h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <BlurFade delay={0.05}>
              <HoverCard className="h-full">
                <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow h-full">
                  <div className="text-4xl font-black text-primary glow-text-primary mb-4">01</div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">Scans</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Detects your stack, finds what&apos;s blocking deployment. Missing env vars, no start script, broken imports.
                  </p>
                </div>
              </HoverCard>
            </BlurFade>

            <BlurFade delay={0.1}>
              <HoverCard className="h-full">
                <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow h-full">
                  <div className="text-4xl font-black text-secondary glow-text-secondary mb-4">02</div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">Fixes</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Auto-generates the missing pieces. Dockerfile, .env.example, proper config. Only what&apos;s needed to ship.
                  </p>
                </div>
              </HoverCard>
            </BlurFade>

            <BlurFade delay={0.15}>
              <HoverCard className="h-full">
                <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow h-full">
                  <div className="text-4xl font-black text-primary glow-text-primary mb-4">03</div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">Deploys</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Provisions database, configures secrets, runs migrations. Your app goes live on lastmile.sh.
                  </p>
                </div>
              </HoverCard>
            </BlurFade>

            <BlurFade delay={0.2}>
              <HoverCard className="h-full">
                <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow h-full">
                  <div className="text-4xl font-black text-secondary glow-text-secondary mb-4">04</div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">Live</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    HTTPS, CDN, custom domain. Your AI-built app is now running in production. Done.
                  </p>
                </div>
              </HoverCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <BlurFade>
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-black font-headline tracking-tight mb-6">
                AI coding gets you <span className="text-error">80%</span> there.
                <br />
                The last <span className="text-primary">20%</span> is where projects die.
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
                You&apos;ve got a working app in Cursor. Tests pass locally. Then you try to deploy and hit a wall: environment variables aren&apos;t configured, the database isn&apos;t provisioned, the build script is wrong, secrets are hardcoded.
              </p>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                That&apos;s the gap. <span className="text-primary font-bold">LastMile</span> exists to close it.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Pricing Section - Simple */}
      <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          <BlurFade>
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">
                Simple <span className="text-primary glow-text-primary">Pricing</span>
              </h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Free Trial */}
            <BlurFade delay={0.05}>
              <div className="bg-surface-container border border-outline-variant/20 p-8 h-full">
                <div className="text-secondary font-mono text-xs mb-4">FREE_TRIAL</div>
                <h3 className="text-2xl font-black mb-2">48 Hours</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Deploy your app, test it live. No credit card required.
                </p>
                <div className="text-4xl font-black text-primary mb-6">$0</div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Full deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Live URL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> 48 hours uptime
                  </li>
                </ul>
              </div>
            </BlurFade>

            {/* Starter */}
            <BlurFade delay={0.1}>
              <div className="bg-surface-container border border-outline-variant/20 p-8 h-full">
                <div className="text-primary font-mono text-xs mb-4">STARTER</div>
                <h3 className="text-2xl font-black mb-2">Keep It Live</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Your app stays running. Custom domain included.
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-primary">$12</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Unlimited deploys
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Custom domain + SSL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Auto-deploy on push
                  </li>
                </ul>
              </div>
            </BlurFade>

            {/* Pro */}
            <BlurFade delay={0.15}>
              <div className="bg-surface-container border-2 border-primary/30 p-8 h-full relative">
                <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 font-mono">
                  RECOMMENDED
                </div>
                <div className="text-primary font-mono text-xs mb-4">PRO</div>
                <h3 className="text-2xl font-black mb-2">With Database</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  PostgreSQL included. Migrations run automatically.
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-primary">$19</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Everything in Starter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> PostgreSQL database
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Auto migrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Database backups
                  </li>
                </ul>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.2}>
            <div className="text-center text-on-surface-variant text-sm">
              You pay for uptime. Not analysis. Not fixes.
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Who's This For - Simplified */}
      <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          <BlurFade>
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">
                Built for <span className="text-primary glow-text-primary">AI-First</span> Builders
              </h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BlurFade delay={0.05}>
              <div className="bg-surface-container border border-outline-variant/20 p-6">
                <div className="text-primary font-mono text-xs mb-4">CURSOR_USERS</div>
                <h3 className="font-bold text-lg mb-3">Vibe coders</h3>
                <p className="text-on-surface-variant text-sm">
                  You build fast with AI. LastMile is the bridge from &quot;it works locally&quot; to &quot;it&apos;s live.&quot;
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.1}>
              <div className="bg-surface-container border border-outline-variant/20 p-6">
                <div className="text-secondary font-mono text-xs mb-4">FOUNDERS</div>
                <h3 className="font-bold text-lg mb-3">Ship-fast founders</h3>
                <p className="text-on-surface-variant text-sm">
                  Stop wrestling with DevOps. Get your MVP live and iterate. Infrastructure shouldn&apos;t slow you down.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <div className="bg-surface-container border border-outline-variant/20 p-6">
                <div className="text-primary font-mono text-xs mb-4">WEEKEND_PROJECTS</div>
                <h3 className="font-bold text-lg mb-3">Side project builders</h3>
                <p className="text-on-surface-variant text-sm">
                  You have 2 hours on Saturday. Don&apos;t spend them configuring nginx. Ship and share.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 text-center bg-surface-container-low">
        <BlurFade>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-6 md:mb-8">
            Your repo. <span className="text-primary glow-text-primary">One command.</span> Live.
          </h2>
          <p className="text-on-surface-variant font-mono text-sm mb-8 max-w-xl mx-auto">
            Stop debugging deployment. Start shipping.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
          <div className="mt-8 font-mono text-xs text-white/30">
            Free 48-hour trial. No credit card required.
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
