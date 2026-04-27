"use client"

import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal"

interface LastMileTerminalDemoProps {
  variant?: "full" | "ship"
}

export default function LastMileTerminalDemo({ variant = "full" }: LastMileTerminalDemoProps) {
  if (variant === "ship") {
    return (
      <Terminal className="max-w-full">
        {/* SHIP command only */}
        <TypingAnimation delay={0} className="text-white">
          $ lastmile ship
        </TypingAnimation>

        <AnimatedSpan delay={400} className="text-white/50">
          Initializing deployment...
        </AnimatedSpan>

        <AnimatedSpan delay={800} className="text-cyan-400">
          Detected stack: Next.js 15 + Prisma + PostgreSQL
        </AnimatedSpan>

        <AnimatedSpan delay={1200} className="text-white/50">
          [1/6] Building application...
        </AnimatedSpan>
        <AnimatedSpan delay={1600} className="text-white/40 pl-2">
          Compiling TypeScript...
        </AnimatedSpan>
        <AnimatedSpan delay={1900} className="text-white/40 pl-2">
          Bundling 847 modules...
        </AnimatedSpan>
        <AnimatedSpan delay={2200} className="text-primary pl-2">
          Build complete (12.4s)
        </AnimatedSpan>

        <AnimatedSpan delay={2600} className="text-white/50">
          [2/6] Provisioning database...
        </AnimatedSpan>
        <AnimatedSpan delay={2900} className="text-white/40 pl-2">
          Creating PostgreSQL instance (1GB)...
        </AnimatedSpan>
        <AnimatedSpan delay={3300} className="text-white/40 pl-2">
          Running migrations (3 tables)...
        </AnimatedSpan>
        <AnimatedSpan delay={3600} className="text-primary pl-2">
          Database ready
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-white/50">
          [3/6] Configuring environment...
        </AnimatedSpan>
        <AnimatedSpan delay={4300} className="text-white/40 pl-2">
          Injecting DATABASE_URL, API_KEY...
        </AnimatedSpan>
        <AnimatedSpan delay={4600} className="text-primary pl-2">
          12 secrets configured
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-white/50">
          [4/6] Generating SSL certificate...
        </AnimatedSpan>
        <AnimatedSpan delay={5400} className="text-primary pl-2">
          SSL active for myapp.lastmile.run
        </AnimatedSpan>

        <AnimatedSpan delay={5800} className="text-white/50">
          [5/6] Deploying to edge network...
        </AnimatedSpan>
        <AnimatedSpan delay={6100} className="text-white/40 pl-2">
          Distributing to 300+ locations...
        </AnimatedSpan>
        <AnimatedSpan delay={6500} className="text-primary pl-2">
          Edge deployment complete
        </AnimatedSpan>

        <AnimatedSpan delay={6900} className="text-white/50">
          [6/6] Running health checks...
        </AnimatedSpan>
        <AnimatedSpan delay={7200} className="text-primary pl-2">
          All endpoints responding (avg 23ms)
        </AnimatedSpan>

        <AnimatedSpan delay={7800} className="text-primary font-bold mt-2">
          Deployment complete in 47s
        </AnimatedSpan>
        <AnimatedSpan delay={8200} className="text-secondary underline">
          https://myapp.lastmile.run
        </AnimatedSpan>
        <AnimatedSpan delay={8600} className="text-white/40">
          Database: myapp-db.lastmile.run:5432
        </AnimatedSpan>
      </Terminal>
    )
  }

  // Default: full demo with analyze, fix, ship
  return (
    <Terminal className="max-w-full">
      {/* ANALYZE command */}
      <TypingAnimation delay={0} className="text-white">
        $ lastmile analyze
      </TypingAnimation>

      <AnimatedSpan delay={800} className="text-white/50">
        Running 5 LLM deep analyzers...
      </AnimatedSpan>
      <AnimatedSpan delay={1000} className="text-white/50">
        [1/5] Security analyzer (full repo)
      </AnimatedSpan>
      <AnimatedSpan delay={1200} className="text-white/50">
        [2/5] Testing analyzer (full repo)
      </AnimatedSpan>
      <AnimatedSpan delay={1400} className="text-white/50">
        [3/5] Error handling analyzer
      </AnimatedSpan>
      <AnimatedSpan delay={1600} className="text-white/50">
        [4/5] Database analyzer
      </AnimatedSpan>
      <AnimatedSpan delay={1800} className="text-white/50">
        [5/5] Boilerplate analyzer
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-white/40">
        42 files analyzed in 2.3s | 8 issues found, 6 auto-fixable
      </AnimatedSpan>

      <AnimatedSpan delay={2400} className="text-error font-bold">
        CRITICAL (2)
      </AnimatedSpan>
      <AnimatedSpan delay={2600} className="text-error">
        ✗ Hardcoded secrets in source code
      </AnimatedSpan>
      <AnimatedSpan delay={2700} className="text-white/30 pl-2">
        src/lib/config.ts:12 [security] [fixable]
      </AnimatedSpan>
      <AnimatedSpan delay={2900} className="text-error">
        ✗ .env committed to git history
      </AnimatedSpan>
      <AnimatedSpan delay={3000} className="text-white/30 pl-2">
        .env [boilerplate] [fixable]
      </AnimatedSpan>

      <AnimatedSpan delay={3200} className="text-secondary font-bold">
        WARNING (3)
      </AnimatedSpan>
      <AnimatedSpan delay={3400} className="text-secondary">
        ⚠ No error boundaries
      </AnimatedSpan>
      <AnimatedSpan delay={3500} className="text-white/30 pl-2">
        src/components/* [error-handling] [fixable]
      </AnimatedSpan>

      <AnimatedSpan delay={3800} className="text-error font-bold">
        SCORE: 34/100 — Not Production Ready
      </AnimatedSpan>

      {/* FIX command */}
      <TypingAnimation delay={4500} className="text-white mt-4">
        $ lastmile fix
      </TypingAnimation>

      <AnimatedSpan delay={4800} className="text-white/60">
        Applying 6 safe fixes...
      </AnimatedSpan>
      <AnimatedSpan delay={5000} className="text-primary">
        ✓ Extracted secrets to .env.example
      </AnimatedSpan>
      <AnimatedSpan delay={5200} className="text-primary">
        ✓ Added .env to .gitignore
      </AnimatedSpan>
      <AnimatedSpan delay={5400} className="text-primary">
        ✓ Generated ErrorBoundary component
      </AnimatedSpan>
      <AnimatedSpan delay={5600} className="text-primary">
        ✓ Added rate limiting middleware
      </AnimatedSpan>
      <AnimatedSpan delay={5800} className="text-primary">
        ✓ Added structured logging
      </AnimatedSpan>
      <AnimatedSpan delay={6000} className="text-primary">
        ✓ Created health check endpoint
      </AnimatedSpan>

      <AnimatedSpan delay={6400} className="text-primary font-bold">
        6 fixes applied. Score: 34 → 89
      </AnimatedSpan>

      {/* SHIP command */}
      <TypingAnimation delay={7000} className="text-white mt-4">
        $ lastmile ship
      </TypingAnimation>

      <AnimatedSpan delay={7300} className="text-white/50">
        Deploying to LastMile Cloud...
      </AnimatedSpan>
      <AnimatedSpan delay={7500} className="text-cyan-400">
        Detected: Next.js 14 + Postgres
      </AnimatedSpan>
      <AnimatedSpan delay={7700} className="text-primary">
        ✓ Database provisioned
      </AnimatedSpan>
      <AnimatedSpan delay={7900} className="text-primary">
        ✓ Environment configured
      </AnimatedSpan>
      <AnimatedSpan delay={8100} className="text-primary">
        ✓ Build successful
      </AnimatedSpan>
      <AnimatedSpan delay={8300} className="text-primary">
        ✓ SSL certificate active
      </AnimatedSpan>
      <AnimatedSpan delay={8600} className="text-white/50">
        Deploying to edge (300+ locations)...
      </AnimatedSpan>

      <AnimatedSpan delay={9200} className="text-primary font-bold">
        Live at https://myapp.lastmile.run
      </AnimatedSpan>
      <AnimatedSpan delay={9500} className="text-primary">
        Production ready. Score: 94/100
      </AnimatedSpan>
    </Terminal>
  )
}
