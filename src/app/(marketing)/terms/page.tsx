export default function TermsPage() {
  return (
    <main className="pt-24 md:pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">LEGAL_STUFF</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Terms of Service
          </h1>
          <p className="font-mono text-white/40 text-sm">
            Last updated: April 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-primary">TL;DR</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              Don&apos;t be evil. Don&apos;t abuse our service. Pay for what you use. We&apos;ll do our best to keep things running. Standard startup terms, nothing scary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">1. Acceptance</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              By using LastMile, you agree to these terms. If you don&apos;t agree, that&apos;s cool, but you can&apos;t use the service. Simple.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. What You Can Do</h2>
            <ul className="space-y-2 text-white/70 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>Use the CLI to analyze your own projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>Generate fixes and deploy your applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>Use generated code in your projects (you own it)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>Share your roast scores on social media (we encourage it)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. What You Can&apos;t Do</h2>
            <ul className="space-y-2 text-white/70 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Reverse engineer or resell the service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Use it for illegal activities (duh)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Abuse rate limits or try to break things</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Pretend to be us or use our brand without permission</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Payments</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              Free tier is free forever. Paid plans are billed monthly. You can cancel anytime. No refunds for partial months, but we&apos;re reasonable humans&mdash;reach out if something&apos;s wrong.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Our Liability</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              We do our best, but software breaks sometimes. We&apos;re not liable if a deployment goes sideways or if our analysis misses something. Always review generated code before shipping to production. You know, like a responsible developer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Changes</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              We might update these terms. If we do, we&apos;ll let you know via email or a banner in the CLI. Continued use = acceptance. Standard stuff.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              Questions about these terms?<br />
              Email us: <a href="mailto:legal@lastmile.dev" className="text-primary hover:underline">legal@lastmile.dev</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
