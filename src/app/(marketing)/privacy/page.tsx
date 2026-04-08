export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-mono text-white/40 text-sm">
            Last updated: April 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-primary">TL;DR</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              We collect minimal data to make LastMile work. We don&apos;t sell your data. We don&apos;t read your code unless you explicitly ask us to analyze it. Your secrets are safe (unlike the ones in your codebase).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">What We Collect</h2>
            <div className="space-y-4 text-white/70 font-mono text-sm">
              <div className="p-4 bg-surface-container border-l-2 border-primary">
                <h3 className="font-bold text-white mb-2">Usage Analytics</h3>
                <p>Which commands you run, how often, general patterns. No code content.</p>
              </div>
              <div className="p-4 bg-surface-container border-l-2 border-secondary">
                <h3 className="font-bold text-white mb-2">Account Info</h3>
                <p>Email, name, payment info if you&apos;re on a paid plan. Standard stuff.</p>
              </div>
              <div className="p-4 bg-surface-container border-l-2 border-white/20">
                <h3 className="font-bold text-white mb-2">Error Reports</h3>
                <p>Crash logs and errors to help us fix bugs. Sanitized of sensitive data.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">What We DON&apos;T Do</h2>
            <ul className="space-y-2 text-white/70 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Sell your data to third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Store your source code on our servers (analysis happens locally)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Train AI models on your code without consent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-error">x</span>
                <span>Share your information with advertisers</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Your Rights</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm mb-4">
              You can request to see, export, or delete your data at any time. Just email us at privacy@lastmile.dev and we&apos;ll handle it within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              Questions? Concerns? Existential dread about data privacy?<br />
              Email us: <a href="mailto:privacy@lastmile.dev" className="text-primary hover:underline">privacy@lastmile.dev</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
