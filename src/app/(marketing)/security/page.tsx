import Link from "next/link";

export default function SecurityPage() {
  return (
    <main className="pt-24 md:pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">SECURITY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Security
          </h1>
          <p className="font-mono text-white/40 text-sm">
            How we keep your stuff safe (better than you keep your API keys).
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-primary">Our Security Posture</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm">
              We take security seriously. Ironic, given that we roast people for their security gaps&mdash;but that means we know exactly what NOT to do.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How Analysis Works</h2>
            <div className="p-6 bg-surface-container border border-outline-variant/20">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">01</span>
                  <div>
                    <span className="text-white font-bold">Local-First Analysis</span>
                    <p className="text-white/50 mt-1">Your code never leaves your machine during analysis. We scan locally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">02</span>
                  <div>
                    <span className="text-white font-bold">Metadata Only</span>
                    <p className="text-white/50 mt-1">We only send anonymized metadata (file types, gap categories) for analytics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">03</span>
                  <div>
                    <span className="text-white font-bold">Opt-In AI Features</span>
                    <p className="text-white/50 mt-1">LLM-powered fixes require explicit opt-in. You control what gets sent.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Infrastructure Security</h2>
            <ul className="space-y-3 text-white/70 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>All traffic encrypted with TLS 1.3</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>SOC 2 Type II compliant infrastructure (via Railway/Vercel)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>Regular security audits and penetration testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>No plain-text storage of sensitive credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">+</span>
                <span>Automated vulnerability scanning on all dependencies</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Vulnerability Disclosure</h2>
            <div className="p-6 bg-surface-container-high border border-primary/20">
              <p className="text-white/70 leading-relaxed font-mono text-sm mb-4">
                Found a security issue? We appreciate responsible disclosure. Please report vulnerabilities to:
              </p>
              <a href="mailto:security@lastmile.dev" className="text-primary font-bold font-mono hover:underline">
                security@lastmile.dev
              </a>
              <p className="text-white/50 font-mono text-xs mt-4">
                We aim to respond within 48 hours and will keep you updated on remediation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Security Best Practices</h2>
            <p className="text-white/70 leading-relaxed font-mono text-sm mb-4">
              While you&apos;re here, some tips for YOUR security (since we know you need them):
            </p>
            <ul className="space-y-2 text-white/70 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-secondary">1.</span>
                <span>Never commit .env files to git</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">2.</span>
                <span>Use environment variables for all secrets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">3.</span>
                <span>Enable 2FA everywhere (GitHub, deployment platforms)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">4.</span>
                <span>Run `lastmile analyze` before every deploy (shameless plug)</span>
              </li>
            </ul>
          </section>

          <div className="pt-8 border-t border-outline-variant/20">
            <Link href="/docs" className="text-primary font-mono text-sm hover:underline">
              &larr; Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
