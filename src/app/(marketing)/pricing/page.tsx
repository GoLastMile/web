import Link from "next/link";

const pricingPlans = [
  {
    tier: "01",
    name: "Free",
    price: "$0",
    features: [
      { text: "2 projects", included: true },
      { text: "Full gap detection (13 categories)", included: true },
      { text: "Production readiness score", included: true },
      { text: "Fix suggestions (view only)", included: true },
      { text: "LastMile Cloud hosting", included: false },
    ],
    cta: "START_ANALYZING",
    featured: false,
  },
  {
    tier: "02",
    name: "Launch",
    price: "$39",
    features: [
      { text: "5 projects on LastMile Cloud", included: true },
      { text: "Auto-fix all issues", included: true },
      { text: "Zero-config deployment", included: true },
      { text: "Database included (1GB)", included: true },
      { text: "Custom domains + SSL", included: true },
    ],
    cta: "START_SHIPPING",
    featured: true,
  },
  {
    tier: "03",
    name: "Pro",
    price: "$79",
    features: [
      { text: "15 projects on LastMile Cloud", included: true },
      { text: "5 databases (5GB each)", included: true },
      { text: "Priority builds", included: true },
      { text: "Preview deployments", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "GO_PRO",
    featured: false,
  },
  {
    tier: "04",
    name: "Team",
    price: "$149",
    features: [
      { text: "Unlimited projects on Cloud", included: true },
      { text: "5 team members included", included: true },
      { text: "Shared configs & standards", included: true },
      { text: "Unlimited databases (50GB)", included: true },
      { text: "Slack support", included: true },
    ],
    cta: "TEAM_UP",
    featured: false,
  },
];

export default function PricingPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">NO_HIDDEN_FEES</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-6 md:mb-8 font-headline">
                Pick your level of <span className="text-primary italic glow-text-primary">serious</span>
              </h1>
            </div>
            <div className="lg:col-span-5 pb-4">
              <p className="text-base md:text-lg text-on-surface-variant font-mono leading-relaxed opacity-80">
                Start at zero. Scale when you&apos;re ready to ship.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
          {pricingPlans.map((plan) => (
            <div
              key={plan.tier}
              className={`group relative flex flex-col p-6 md:p-10 transition-all duration-300 ${
                plan.featured
                  ? "bg-surface-container border-2 border-primary/30 z-10 md:scale-105 shadow-2xl shadow-black glow-border-primary"
                  : "bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container hover-glow"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 p-2">
                  <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 font-mono uppercase">most popular</span>
                </div>
              )}
              <div className="mb-8 md:mb-12">
                <span className={`font-mono text-xs mb-2 block uppercase tracking-tighter ${plan.featured ? "text-primary" : "text-secondary"}`}>
                  // Tier_{plan.tier}
                </span>
                <h3 className="text-2xl md:text-3xl font-black font-headline mb-4 uppercase tracking-tighter text-on-surface">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-primary font-mono glow-text-primary">{plan.price}</span>
                  <span className="text-sm font-mono text-white/40">/MO</span>
                </div>
              </div>
              <div className="flex-grow">
                <ul className="space-y-3 md:space-y-4 font-mono text-sm mb-8 md:mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className={`flex items-start gap-3 ${!feature.included ? "opacity-50" : ""}`}>
                      <span className={`mt-1 ${feature.included ? "text-primary" : "text-outline"}`}>&gt;</span>
                      <span className={feature.included ? "text-on-surface" : "text-on-surface-variant line-through"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-3 md:py-4 font-mono text-sm uppercase tracking-wide transition-all active:scale-95 ${
                  plan.featured
                    ? "bg-gradient-to-br from-primary to-primary-container text-on-primary font-black glow-border-primary glow-hover-primary"
                    : "bg-transparent border border-outline-variant/50 text-white hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta} &gt;
              </button>
            </div>
          ))}
        </section>

        {/* What's Included */}
        <section className="mt-24 md:mt-40 max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 font-headline uppercase">
            What&apos;s <span className="text-primary glow-text-primary">actually</span> included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
              <div className="text-primary font-mono text-xs mb-3">ANALYZE</div>
              <h3 className="font-bold mb-2">13 Gap Categories</h3>
              <p className="text-on-surface-variant font-mono text-sm">Security, Testing, Logging, CI/CD, Dependencies, Git, Database, Error Handling, Auth, API, and more. Full production audit.</p>
            </div>
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
              <div className="text-secondary font-mono text-xs mb-3">FIX</div>
              <h3 className="font-bold mb-2">Auto-Generated Fixes</h3>
              <p className="text-on-surface-variant font-mono text-sm">Templates, transformations, AI-generated patches. One click to apply all fixes. No manual work.</p>
            </div>
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
              <div className="text-primary font-mono text-xs mb-3">LASTMILE_CLOUD</div>
              <h3 className="font-bold mb-2">Zero-Config Hosting</h3>
              <p className="text-on-surface-variant font-mono text-sm">One command to production. Database included. SSL automatic. Custom domains. No DevOps required.</p>
            </div>
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
              <div className="text-secondary font-mono text-xs mb-3">DOMAINS</div>
              <h3 className="font-bold mb-2">Buy Domains Instantly</h3>
              <p className="text-on-surface-variant font-mono text-sm">.com from $15/year. Auto-configured DNS, SSL, CDN. No GoDaddy upsells. Ship with a real domain in minutes.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mt-24 md:mt-40 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-surface-container-high p-8 md:p-16 relative overflow-hidden">
            {/* ASCII Decoration */}
            <pre className="absolute -top-4 -left-4 text-[6px] md:text-[8px] text-primary/10 select-none hidden md:block">
{`+------------------------------------------+
|                                          |
|   STOP_READING_START_SHIPPING            |
|                                          |
+------------------------------------------+`}
            </pre>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 font-headline text-on-surface">
              Look, just <span className="text-primary glow-text-primary">try it</span>.
            </h2>

            <div className="max-w-md mx-auto mb-8 md:mb-10">
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-3 md:p-4 font-mono text-sm relative group">
                <div className="flex items-center justify-between text-white/30 mb-2 text-[10px]">
                  <span>JUST_DO_IT</span>
                  <svg className="w-4 h-4 cursor-pointer hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-primary">$</span>
                  <span className="text-on-surface">npm install -g @lastmile/cli</span>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-block px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-black text-lg md:text-xl tracking-tight uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 glow-border-primary glow-hover-primary"
            >
              FINE_I&apos;LL_DO_IT_&gt;
            </Link>

            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-12 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
              <span>Free_To_Analyze</span>
              <span>Pay_To_Ship</span>
              <span>No_Strings</span>
            </div>
          </div>
        </section>
    </div>
  );
}
