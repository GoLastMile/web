"use client";

import { useState } from "react";
import { ShineBorder } from "@/components/magicui/shine-border";

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
    <div className="relative border border-outline-variant/30 shadow-xl shadow-white/5">
      <ShineBorder
        shineColor={["#5ae88a", "#ffc640"]}
        borderWidth={1}
        duration={10}
      />
      <div className="bg-surface-container p-4">
        <div className="mb-3">
          <h3 className="text-sm font-bold text-white mb-0.5">Get Early Access</h3>
          <p className="text-xs text-white/50">
            Be first to know when we launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 bg-surface-container-low border border-outline-variant/30 px-3 py-2 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="bg-primary text-on-primary px-4 py-2 font-mono font-bold text-xs uppercase tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Notify Me"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-error font-mono text-xs">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
