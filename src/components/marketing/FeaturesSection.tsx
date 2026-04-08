"use client";

import React from "react";

const features = [
  {
    icon: "cable",
    title: "DIRECT_PROTOCOL",
    description:
      "Low-latency binary connection between LLM reasoning engines and system-level API contexts.",
  },
  {
    icon: "security",
    title: "SANDBOX_CONTROL",
    description:
      "Strict IAM-based permissions for AI-driven system modifications and log access.",
  },
  {
    icon: "history",
    title: "DIFF_HISTORY",
    description:
      "Full audit trail for every AI suggested change, integrated with your existing Git workflow.",
  },
];

function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    cable: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5h-1z" />
      </svg>
    ),
    security: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    history: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

export default function FeaturesSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 border-t border-outline-variant/10 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-surface-container p-6 md:p-8 border border-outline-variant/10 flex flex-col gap-4 hover:border-primary/30 transition-colors"
          >
            <FeatureIcon name={feature.icon} className="w-8 h-8 text-primary" />
            <h3 className="font-headline font-black text-lg md:text-xl tracking-tight">
              {feature.title}
            </h3>
            <p className="font-mono text-xs text-on-surface-variant leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
