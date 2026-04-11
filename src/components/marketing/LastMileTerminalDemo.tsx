"use client"

import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal"

export default function LastMileTerminalDemo() {
  return (
    <Terminal className="max-w-full">
      {/* ANALYZE command */}
      <TypingAnimation delay={0} className="text-white">
        $ lastmile analyze
      </TypingAnimation>

      <AnimatedSpan delay={800} className="text-white/50">
        [1/5] Scanning project structure
      </AnimatedSpan>
      <AnimatedSpan delay={1000} className="text-white/50">
        [2/5] Analyzing security &amp; auth
      </AnimatedSpan>
      <AnimatedSpan delay={1200} className="text-white/50">
        [3/5] Checking code quality
      </AnimatedSpan>
      <AnimatedSpan delay={1400} className="text-white/50">
        [4/5] Reviewing infrastructure
      </AnimatedSpan>
      <AnimatedSpan delay={1600} className="text-white/50">
        [5/5] Evaluating production readiness
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
        .env [git] [fixable]
      </AnimatedSpan>

      <AnimatedSpan delay={3200} className="text-secondary font-bold">
        WARNING (3)
      </AnimatedSpan>
      <AnimatedSpan delay={3400} className="text-secondary">
        ⚠ No error boundaries
      </AnimatedSpan>
      <AnimatedSpan delay={3500} className="text-white/30 pl-2">
        src/components/* [errors] [fixable]
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
