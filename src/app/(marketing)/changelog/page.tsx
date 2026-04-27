const releases = [
  {
    version: "0.4.0",
    date: "2026-04-26",
    tag: "LATEST",
    changes: [
      { type: "feature", text: "5 LLM deep analyzers replace pattern detectors for context-aware detection" },
      { type: "feature", text: "Full-repo analysis - every file analyzed, not sampled" },
      { type: "improvement", text: "Database analyzer detects N+1 queries, missing indexes, transaction issues" },
      { type: "improvement", text: "Significantly reduced false positives through LLM understanding" },
    ],
  },
  {
    version: "0.3.0",
    date: "2025-04-05",
    changes: [
      { type: "feature", text: "Added Supabase deep integration with RLS policy detection" },
      { type: "feature", text: "New `lastmile configure` command for env management" },
      { type: "improvement", text: "Faster stack detection for monorepos" },
      { type: "fix", text: "Fixed false positives in secret detection for test files" },
    ],
  },
  {
    version: "0.2.0",
    date: "2025-03-20",
    changes: [
      { type: "feature", text: "Railway deployment support" },
      { type: "feature", text: "Auto-generated Dockerfiles for Node.js and Python" },
      { type: "improvement", text: "Better error messages for CI/CD gap detection" },
      { type: "fix", text: "Fixed crash when analyzing empty directories" },
    ],
  },
  {
    version: "0.1.0",
    date: "2025-03-01",
    changes: [
      { type: "feature", text: "Initial release" },
      { type: "feature", text: "`lastmile analyze` command with pattern-based gap detection" },
      { type: "feature", text: "Production readiness scoring (0-100)" },
      { type: "feature", text: "Vercel deployment support" },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="pt-24 md:pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">VERSION_HISTORY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Changelog
          </h1>
          <p className="font-mono text-white/40 text-sm">
            All the stuff we shipped. No fluff, just facts.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {releases.map((release, index) => (
            <div key={release.version} className="relative">
              {/* Version Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-black text-primary font-mono glow-text-primary">
                    v{release.version}
                  </span>
                  {release.tag && (
                    <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 font-mono">
                      {release.tag}
                    </span>
                  )}
                </div>
                <div className="h-[1px] flex-grow bg-outline-variant/20" />
                <span className="font-mono text-xs text-white/30">{release.date}</span>
              </div>

              {/* Changes */}
              <div className="space-y-3 pl-4 border-l-2 border-outline-variant/20">
                {release.changes.map((change, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 shrink-0 ${
                        change.type === "feature"
                          ? "bg-primary/10 text-primary"
                          : change.type === "improvement"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-white/5 text-white/50"
                      }`}
                    >
                      {change.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-white/70">{change.text}</span>
                  </div>
                ))}
              </div>

              {/* Connector line */}
              {index < releases.length - 1 && (
                <div className="absolute left-[3px] top-[60px] bottom-[-48px] w-[2px] bg-outline-variant/10" />
              )}
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 p-6 bg-surface-container border border-outline-variant/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold mb-1">Stay in the loop</h3>
              <p className="font-mono text-xs text-white/40">Get notified when we ship new features.</p>
            </div>
            <a
              href="https://github.com/lastmile-ai/lastmile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-6 py-2 font-mono text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Watch on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
