"use client";

import Link from "next/link";

interface PricingPlan {
  tier: string;
  name: string;
  price: number | string;
  subtitle: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured: boolean;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    tier: "01",
    name: "Free Trial",
    price: 0,
    subtitle: "48 hours to ship",
    features: [
      "Full platform access",
      "1 deployment",
      "No credit card required",
      "See if it actually works",
    ],
    cta: "START_NOW",
    ctaHref: "/login",
    featured: false,
    badge: "48 HOURS",
  },
  {
    tier: "02",
    name: "Starter",
    price: 12,
    subtitle: "For side projects",
    features: [
      "3 live deployments",
      "Automatic SSL",
      "yourapp.lastmile.sh subdomain",
      "CI/CD via GitHub Actions",
      "Community support",
    ],
    cta: "GET_STARTED",
    ctaHref: "/login?plan=starter",
    featured: false,
  },
  {
    tier: "03",
    name: "Pro",
    price: 19,
    subtitle: "For shipping real apps",
    features: [
      "10 live deployments",
      "PostgreSQL database included",
      "Custom domains",
      "Auto-migrations on deploy",
      "Priority support",
      "API keys for CI/CD",
    ],
    cta: "GO_PRO",
    ctaHref: "/login?plan=pro",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    tier: "04",
    name: "Team",
    price: "Custom",
    subtitle: "For teams shipping together",
    features: [
      "Everything in Pro",
      "Unlimited deployments",
      "Team members + roles",
      "Larger databases",
      "SSO / OAuth",
      "Dedicated support",
    ],
    cta: "CONTACT_US",
    ctaHref: "mailto:team@lastmile.sh",
    featured: false,
    badge: "COMING SOON",
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isComingSoon = plan.cta === "CONTACT_US";

  return (
    <div
      className={`group relative flex flex-col p-6 md:p-10 transition-all duration-300 ${
        plan.featured
          ? "bg-surface-container border-2 border-primary/30 z-10 md:scale-105 shadow-2xl shadow-black glow-border-primary"
          : "bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container hover-glow"
      }`}
    >
      {plan.badge && (
        <div className="absolute top-0 right-0 p-2">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 font-mono uppercase ${
              plan.featured
                ? "bg-primary text-on-primary"
                : "bg-secondary/20 text-secondary"
            }`}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <span
          className={`font-mono text-xs mb-2 block uppercase tracking-tighter ${
            plan.featured ? "text-primary" : "text-secondary"
          }`}
        >
          // Tier_{plan.tier}
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-headline mb-2 uppercase tracking-tighter text-on-surface">
          {plan.name}
        </h3>
        <p className="text-xs font-mono text-on-surface-variant">{plan.subtitle}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black text-primary font-mono glow-text-primary">
            {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
          </span>
          {typeof plan.price === "number" && plan.price > 0 && (
            <span className="text-sm font-mono text-white/40">/MO</span>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 md:space-y-4 font-mono text-sm mb-8 md:mb-12">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 text-primary">&gt;</span>
              <span className="text-on-surface">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {isComingSoon ? (
        <button
          disabled
          className="w-full py-3 md:py-4 font-mono text-sm uppercase tracking-wide bg-transparent border border-outline-variant/30 text-white/40 cursor-not-allowed"
        >
          {plan.cta}
        </button>
      ) : (
        <Link
          href={plan.ctaHref}
          className={`w-full py-3 md:py-4 font-mono text-sm uppercase tracking-wide transition-all text-center block ${
            plan.featured
              ? "bg-gradient-to-br from-primary to-primary-container text-on-primary font-black glow-border-primary glow-hover-primary active:scale-95"
              : "bg-transparent border border-outline-variant/50 text-white hover:border-primary hover:text-primary active:scale-95"
          }`}
        >
          {plan.cta} &gt;
        </Link>
      )}
    </div>
  );
}

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
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                SIMPLE_PRICING
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-6 md:mb-8 font-headline">
              Ship first. <span className="text-primary italic glow-text-primary">Pay later.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 pb-4">
            <p className="text-base md:text-lg text-on-surface-variant font-mono leading-relaxed opacity-80">
              48-hour free trial. No credit card. See your app live before you decide.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.tier} plan={plan} />
        ))}
      </section>

      {/* What You Get */}
      <section className="mt-24 md:mt-40 max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 font-headline uppercase">
          What <span className="text-primary glow-text-primary">actually</span> happens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
            <div className="text-primary font-mono text-xs mb-3">01_SCAN</div>
            <h3 className="font-bold mb-2">We analyze your repo</h3>
            <p className="text-on-surface-variant font-mono text-sm">
              Detects framework, database, dependencies. Finds deployment blockers.
            </p>
          </div>
          <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
            <div className="text-secondary font-mono text-xs mb-3">02_FIX</div>
            <h3 className="font-bold mb-2">Auto-fix issues</h3>
            <p className="text-on-surface-variant font-mono text-sm">
              Missing Dockerfile? No build config? We generate what&apos;s needed.
            </p>
          </div>
          <div className="bg-surface-container border border-outline-variant/20 p-6 hover-glow transition-all">
            <div className="text-primary font-mono text-xs mb-3">03_SHIP</div>
            <h3 className="font-bold mb-2">Deploy to production</h3>
            <p className="text-on-surface-variant font-mono text-sm">
              SSL, database, domain. Live URL in under 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 md:mt-40 max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 font-headline uppercase">
          Quick <span className="text-primary glow-text-primary">answers</span>
        </h2>
        <div className="space-y-6 font-mono text-sm">
          <div className="border-b border-outline-variant/20 pb-6">
            <h3 className="text-on-surface font-bold mb-2">What happens after the 48-hour trial?</h3>
            <p className="text-on-surface-variant">
              Your app stays live if you upgrade. Otherwise it goes offline. No surprise charges.
            </p>
          </div>
          <div className="border-b border-outline-variant/20 pb-6">
            <h3 className="text-on-surface font-bold mb-2">What frameworks do you support?</h3>
            <p className="text-on-surface-variant">
              Next.js, React, Node.js, Express, Hono, and more. If it runs on Node, we can probably ship it.
            </p>
          </div>
          <div className="border-b border-outline-variant/20 pb-6">
            <h3 className="text-on-surface font-bold mb-2">Do I need to know DevOps?</h3>
            <p className="text-on-surface-variant">
              No. That&apos;s the point. We handle infrastructure, SSL, domains, databases.
            </p>
          </div>
          <div className="border-b border-outline-variant/20 pb-6">
            <h3 className="text-on-surface font-bold mb-2">Can I use my own database?</h3>
            <p className="text-on-surface-variant">
              Yes. We auto-provision Postgres on Pro, but you can point to any external database via env vars.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-24 md:mt-40 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="bg-surface-container-high p-8 md:p-16 relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 font-headline text-on-surface">
            Stop reading. <span className="text-primary glow-text-primary">Start shipping.</span>
          </h2>

          <div className="max-w-md mx-auto mb-8 md:mb-10">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-3 md:p-4 font-mono text-sm relative group">
              <div className="flex items-center justify-between text-white/30 mb-2 text-[10px]">
                <span>TERMINAL</span>
              </div>
              <div className="flex gap-3 text-left">
                <span className="text-primary">$</span>
                <span className="text-on-surface">npx lastmile ship</span>
              </div>
            </div>
          </div>

          <Link
            href="/login"
            className="inline-block px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-black text-lg md:text-xl tracking-tight uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 glow-border-primary glow-hover-primary"
          >
            TRY_FREE_FOR_48H_&gt;
          </Link>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-12 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
            <span>No_Credit_Card</span>
            <span>No_DevOps</span>
            <span>No_BS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
