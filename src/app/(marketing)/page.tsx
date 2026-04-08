import Link from "next/link";
import AnimatedTerminal from "@/components/marketing/AnimatedTerminal";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
        {/* Hero Section */}
        <section className="relative px-4 md:px-8 lg:px-12 py-12 md:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Headline Content */}
            <div className="lg:col-span-7 space-y-8 md:space-y-10">
              <div className="flex flex-wrap items-center gap-3">
                <div className="py-1 px-3 bg-surface-container-high border border-outline-variant/20 text-primary font-8bit-sm">
                  [ STATUS: LOCALHOST ]
                </div>
                {/* GitHub Stars Badge */}
                <a
                  href="https://github.com/lastmile-ai/lastmile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1 px-3 bg-surface-container border border-outline-variant/20 hover:border-primary/50 transition-colors group"
                >
                  <svg className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-mono text-[10px] text-white/60 group-hover:text-primary transition-colors">Star on GitHub</span>
                  <span className="font-mono text-[10px] text-primary font-bold">★ 2.4k</span>
                </a>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-headline tracking-tighter leading-[0.9] text-white">
                Your AI wrote the code.<br/><span className="text-primary italic glow-text-primary">Now ship the damn thing.</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
                AI can write 80% of your app in a day.{" "}<span className="text-primary font-mono font-bold">LastMile</span>{" "}handles the boring 20%&mdash;on every commit, every feature, every deploy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                <Link
                  href="/pricing"
                  className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 font-mono font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 group glow-hover-primary glow-border-primary transition-all"
                >
                  GET_STARTED &gt;
                </Link>
                <Link
                  href="#how-it-works"
                  className="border border-outline/20 text-white/80 px-6 md:px-8 py-3 md:py-4 font-mono font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-surface-container hover:border-primary/30 transition-all"
                >
                  <span className="text-secondary">$</span>
                  HOW_IT_WORKS
                </Link>
              </div>
            </div>

            {/* Animated Terminal */}
            <div className="lg:col-span-5 relative">
              <AnimatedTerminal />
              {/* Background Accent */}
              <div className="absolute -z-10 -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-full h-full border border-primary/10 opacity-20" />
            </div>
          </div>
        </section>

        {/* Gap Categories Section */}
        <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">8 Ways Your Code Is Cooked</h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">TRUST_ISSUES</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-primary font-mono text-[10px] mb-2">01</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Security</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">Your API keys are literally in the code. We can see them. Everyone can.</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-secondary font-mono text-[10px] mb-2">02</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Testing</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">&quot;It works on my machine&quot; is not a test suite, sorry.</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-primary font-mono text-[10px] mb-2">03</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Observability</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">When prod breaks at 3am, console.log won&apos;t save you.</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-secondary font-mono text-[10px] mb-2">04</div>
                <h3 className="text-sm md:text-base font-bold mb-2">CI/CD</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">You&apos;re still doing git push and praying? In 2025?</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-secondary font-mono text-[10px] mb-2">05</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Dependencies</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">847 packages. 12 critical vulnerabilities. No lock file. Classic.</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-primary font-mono text-[10px] mb-2">06</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Git</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">That .env file with your passwords? Yeah, it&apos;s in git history forever.</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-secondary font-mono text-[10px] mb-2">07</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Database</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">No migrations = &quot;I&apos;ll just drop the table&quot; energy.</p>
              </div>
              <div className="p-4 md:p-6 border border-outline-variant/20 hover:bg-surface-container transition-colors group">
                <div className="text-primary font-mono text-[10px] mb-2">08</div>
                <h3 className="text-sm md:text-base font-bold mb-2">Errors</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">catch(e) {`{}`} is not error handling, it&apos;s denial.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Transformation */}
        <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">Before &amp; <span className="text-primary glow-text-primary">After</span></h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">TRANSFORM</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-outline-variant/20">
              {/* Before */}
              <div className="bg-surface border-b lg:border-b-0 lg:border-r border-outline-variant/20">
                <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-surface-container-low border-b border-outline-variant/20">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-mono text-xs font-bold text-error">BEFORE</span>
                    <span className="font-mono text-[10px] text-white/20">api/config.js</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                  <div className="flex items-start gap-2 md:gap-4">
                    <span className="text-white/10 select-none w-4 md:w-6">01</span>
                    <code className="text-white/60"><span className="text-secondary">const</span> db_url = <span className="text-primary-container">&quot;postgres://admin:pass123@db.com&quot;</span>;</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">02</span>
                    <code className="text-white/60"><span className="text-secondary">const</span> api_key = <span className="text-primary-container">&quot;sk_live_abc123...&quot;</span>; <span className="text-error bg-error/10 px-1 ml-2 text-[10px]">// HARDCODED</span></code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">03</span>
                    <code> </code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">04</span>
                    <code className="text-white/60"><span className="text-secondary">async function</span> <span className="text-primary">fetchData</span>() {`{`}</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">05</span>
                    <code className="text-white/60 pl-4">  <span className="text-secondary">return</span> fetch(api_key).json();</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">06</span>
                    <code className="text-white/60">{`}`} <span className="text-error bg-error/10 px-1 ml-2 text-[10px]">// NO_ERROR_HANDLING</span></code>
                  </div>

                  <div className="mt-6 pt-6 border-t border-outline-variant/10">
                    <div className="text-error font-mono text-[10px] mb-2">[GAPS: SECURITY, ERROR_HANDLING]</div>
                    <div className="w-full bg-surface-container-highest h-2">
                      <div className="bg-error h-full" style={{ width: "38%" }} />
                    </div>
                    <div className="flex justify-between mt-2 font-mono text-[10px] text-white/40">
                      <span>SCORE: 38/100</span>
                      <span className="text-error">NOT_READY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-surface-container">
                <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-surface-container-high border-b border-outline-variant/20">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-mono text-xs font-bold text-primary">AFTER</span>
                    <span className="font-mono text-[10px] text-white/20">api/config.ts</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                  <div className="flex items-start gap-2 md:gap-4">
                    <span className="text-white/10 select-none w-4 md:w-6">01</span>
                    <code className="text-white/60"><span className="text-secondary">import</span> {`{ z }`} <span className="text-secondary">from</span> <span className="text-primary-container">&quot;zod&quot;</span>;</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">02</span>
                    <code className="text-white/60"><span className="text-secondary">const</span> EnvSchema = z.object({`{`}</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">03</span>
                    <code className="text-white/60 pl-4">  DATABASE_URL: z.string().url(),</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">04</span>
                    <code className="text-white/60 pl-4">  API_KEY: z.string().startsWith(<span className="text-primary-container">&quot;sk_&quot;</span>)</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">05</span>
                    <code className="text-white/60">{`})`}</code>
                  </div>
                  <div className="flex items-start gap-2 md:gap-4 mt-2">
                    <span className="text-white/10 select-none w-4 md:w-6">06</span>
                    <code className="text-primary/60">// + try/catch, .env.example generated</code>
                  </div>

                  <div className="mt-6 pt-6 border-t border-outline-variant/10">
                    <div className="text-primary font-mono text-[10px] mb-2">[FIXES: SECRETS_EXTRACTED, VALIDATION_ADDED]</div>
                    <div className="w-full bg-surface-container-highest h-2">
                      <div className="bg-primary h-full" style={{ width: "92%" }} />
                    </div>
                    <div className="flex justify-between mt-2 font-mono text-[10px] text-white/40">
                      <span>SCORE: 92/100</span>
                      <span className="text-primary">SHIP_IT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 4-Step Escape Plan */}
        <section id="how-it-works" className="px-4 md:px-8 lg:px-12 py-16 md:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">The 4-Step <span className="text-primary glow-text-primary">Escape Plan</span></h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">EXECUTE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow">
                <div className="text-4xl font-black text-primary glow-text-primary mb-4">01</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Roast</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">We scan your code and tell you exactly how cooked it is. No sugarcoating. You&apos;ll get a score out of 100.</p>
                <div className="font-mono text-xs text-primary">lastmile analyze</div>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow">
                <div className="text-4xl font-black text-secondary glow-text-secondary mb-4">02</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Fix</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">We auto-generate the boring stuff. Dockerfiles, CI configs, error handling&mdash;all the things you &quot;planned to add later.&quot;</p>
                <div className="font-mono text-xs text-secondary">lastmile fix</div>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow">
                <div className="text-4xl font-black text-primary glow-text-primary mb-4">03</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Wire Up</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Environment variables, secrets, deployment configs. The stuff you always forget until 2am on launch day.</p>
                <div className="font-mono text-xs text-primary">lastmile configure</div>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/20 hover:bg-surface-container transition-colors group hover-glow">
                <div className="text-4xl font-black text-secondary glow-text-secondary mb-4">04</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Ship It</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">One command. Railway or Vercel. Your app is live. Tell your mom you&apos;re a real developer now.</p>
                <div className="font-mono text-xs text-secondary">lastmile ship</div>
              </div>
            </div>

            {/* Continuous Value Banner */}
            <div className="mt-8 p-6 border border-primary/20 bg-primary/5">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-primary uppercase tracking-widest">CONTINUOUS</span>
                </div>
                <p className="text-on-surface-variant font-mono text-sm flex-grow">
                  Add to your CI/CD pipeline. LastMile runs on every PR, catches regressions, and keeps your score from slipping as your team ships new features.
                </p>
                <Link href="/docs/ci-cd" className="font-mono text-xs text-primary hover:underline whitespace-nowrap">
                  SETUP_CI &gt;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who's This For */}
        <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">Who&apos;s This <span className="text-secondary glow-text-secondary">Actually For</span>?</h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">PLAYERS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
                <div className="text-primary font-mono text-xs mb-4">THE_PROFESSIONALS</div>
                <h3 className="font-bold text-lg mb-3">Real Developers</h3>
                <p className="text-on-surface-variant font-mono text-sm">
                  You know what you&apos;re doing. Let LastMile handle the checklist on every PR so you can focus on the interesting stuff.
                </p>
              </div>
              <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
                <div className="text-secondary font-mono text-xs mb-4">THE_HUSTLERS</div>
                <h3 className="font-bold text-lg mb-3">Founders &amp; Builders</h3>
                <p className="text-on-surface-variant font-mono text-sm">
                  Ship fast, iterate faster. LastMile keeps you production-ready as you pivot and grow.
                </p>
              </div>
              <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
                <div className="text-primary font-mono text-xs mb-4">THE_ACCELERATED</div>
                <h3 className="font-bold text-lg mb-3">AI-First Builders</h3>
                <p className="text-on-surface-variant font-mono text-sm">
                  Every AI-generated feature needs guardrails. We catch what Claude and Cursor miss, every time.
                </p>
              </div>
              <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
                <div className="text-secondary font-mono text-xs mb-4">THE_SCALERS</div>
                <h3 className="font-bold text-lg mb-3">Growing Teams</h3>
                <p className="text-on-surface-variant font-mono text-sm">
                  New devs, new code, same standards. LastMile enforces consistency as your team scales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Tech Stacks */}
        <section className="px-4 md:px-8 lg:px-12 py-16 md:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-black font-headline tracking-tight uppercase">Works With Your <span className="text-primary glow-text-primary">Stack</span></h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
              <span className="font-8bit-sm text-white/30">COMPAT</span>
            </div>

            {/* Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Languages */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">LANGUAGES</div>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "JavaScript", "Python", "Go", "Ruby", "Rust", "PHP"].map((lang) => (
                    <span key={lang} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{lang}</span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">FRONTEND</div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Vue", "Nuxt", "SvelteKit", "Astro"].map((fw) => (
                    <span key={fw} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{fw}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">BACKEND</div>
                <div className="flex flex-wrap gap-2">
                  {["Express", "Fastify", "Hono", "NestJS", "FastAPI", "Django", "Flask", "Gin"].map((fw) => (
                    <span key={fw} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{fw}</span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">DATABASES</div>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"].map((db) => (
                    <span key={db} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{db}</span>
                  ))}
                </div>
              </div>

              {/* ORMs */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">ORMS</div>
                <div className="flex flex-wrap gap-2">
                  {["Prisma", "Drizzle", "TypeORM", "Sequelize", "Mongoose", "SQLAlchemy"].map((orm) => (
                    <span key={orm} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{orm}</span>
                  ))}
                </div>
              </div>

              {/* Auth */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">AUTH</div>
                <div className="flex flex-wrap gap-2">
                  {["NextAuth", "Lucia", "Clerk", "Supabase", "Auth0", "Passport"].map((auth) => (
                    <span key={auth} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{auth}</span>
                  ))}
                </div>
              </div>

              {/* Testing */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-primary font-mono text-[10px] mb-3 tracking-widest">TESTING</div>
                <div className="flex flex-wrap gap-2">
                  {["Vitest", "Jest", "Mocha", "pytest"].map((test) => (
                    <span key={test} className="bg-surface-container px-2 py-1 text-xs font-mono text-white/70">{test}</span>
                  ))}
                </div>
              </div>

              {/* Deploy */}
              <div className="bg-surface border border-outline-variant/20 p-5">
                <div className="text-secondary font-mono text-[10px] mb-3 tracking-widest">DEPLOY</div>
                <div className="flex flex-wrap gap-2">
                  {["Vercel", "Railway"].map((deploy) => (
                    <span key={deploy} className="bg-surface-container px-2 py-1 text-xs font-mono text-primary">{deploy}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="border border-dashed border-outline-variant/30 p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-secondary font-8bit-sm">COMING_SOON</span>
                <div className="h-[1px] flex-grow bg-outline-variant/10" />
              </div>
              <div className="flex flex-wrap gap-3">
                {["AWS", "GCP", "Azure", "Render", "PlanetScale", "Neon", "Cloudflare", "Terraform", "Pulumi", "Swift", "Kotlin", "Flutter", "React Native", "Expo"].map((tech) => (
                  <span key={tech} className="bg-surface-container-high px-3 py-1.5 text-xs font-mono text-white/40 border border-outline-variant/10">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 text-center overflow-hidden bg-surface">
          <div className="font-mono text-[6px] md:text-[8px] leading-[6px] md:leading-[8px] text-white/5 select-none pointer-events-none whitespace-pre mb-8 md:mb-12">
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;{"\n"}
            SHIP_IT SHIP_IT SHIP_IT SHIP_IT SHIP_IT SHIP_IT SHIP_IT SHIP_IT{"\n"}
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-6 md:mb-8">Still on <span className="font-mono text-secondary glow-text-secondary">localhost:3000</span>?</h2>
          <p className="text-on-surface-variant font-mono text-sm mb-8 max-w-xl mx-auto">
            Ship today. Stay production-ready tomorrow. LastMile runs on every commit so you never have to think about it again.
          </p>
          <div className="flex justify-center gap-2 font-mono text-xs text-primary bg-primary/5 py-3 md:py-4 px-4 md:px-8 inline-flex border border-primary/20 glow-border-primary mb-8">
            <span className="text-secondary glow-text-secondary">$</span>
            <span className="glow-text-primary">npm install -g @lastmile/cli</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-primary text-on-primary px-8 md:px-10 py-3 md:py-4 font-mono font-bold text-sm uppercase tracking-wide glow-hover-primary glow-border-primary transition-all"
            >
              GET_STARTED &gt;
            </Link>
            <Link
              href="/docs"
              className="border border-outline/20 text-white/80 px-8 md:px-10 py-3 md:py-4 font-mono font-bold text-sm uppercase tracking-wide hover:bg-surface-container hover:border-primary/30 transition-all"
            >
              READ_DOCS
            </Link>
          </div>
        </section>
    </div>
  );
}
