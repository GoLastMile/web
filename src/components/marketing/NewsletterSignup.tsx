"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 px-4 py-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="font-mono text-sm text-primary">{message}</span>
        </div>
        <p className="text-white/30 font-mono text-xs">
          We&apos;ll notify you when LastMile is ready to ship your code.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-mono text-sm">
            &gt;
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-surface-container border border-outline-variant/30 px-4 py-3 pl-8 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
            disabled={status === "loading"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="relative bg-primary text-on-primary px-6 py-3 font-mono font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 glow-hover-primary glow-border-primary transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          <span className="relative">
            {status === "loading" ? "JOINING..." : "NOTIFY_ME >"}
          </span>
        </button>
      </div>
      {status === "error" && (
        <p className="text-error font-mono text-xs">{message}</p>
      )}
      <p className="text-white/30 font-mono text-xs">
        Get notified when LastMile launches. No spam, just one email.
      </p>
    </form>
  );
}
