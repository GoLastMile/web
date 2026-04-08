"use client";

import { useState } from "react";

export default function ChatInterface() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="glass-panel border border-outline-variant/20 shadow-2xl relative overflow-hidden scanlines crt-glow">
      {/* Terminal Header */}
      <div className="bg-surface-container-highest/50 px-4 md:px-6 py-3 flex justify-between items-center border-b border-outline-variant/20 terminal-flicker">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zm-8-4 1.5 2-2.5 3H5l4-5z" />
          </svg>
          <span className="font-mono text-[10px] tracking-widest text-on-surface-variant hidden sm:inline">
            CLAUDE-CODE-ENGINE_V4
          </span>
        </div>
        <div className="w-10" />
      </div>

      {/* Chat Area */}
      <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-h-[500px] md:max-h-[600px] overflow-y-auto font-mono text-sm">
        {/* User Message */}
        <div className="flex flex-col items-end space-y-2">
          <div className="bg-surface-container-high px-4 md:px-5 py-3 border-r-2 border-secondary text-on-surface max-w-[90%] md:max-w-[80%]">
            <span className="text-secondary mr-2">&gt;&gt;&gt;</span> Is this project ready?
          </div>
          <span className="text-[10px] opacity-30">14:02:11_UTC</span>
        </div>

        {/* AI Response */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-on-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3 4c1.1 0 2.1-.4 2.8-1H8.2c.7.6 1.7 1 2.8 1z" />
              </svg>
            </div>
            <span className="text-primary font-bold">AI Assistant</span>
          </div>

          <div className="space-y-4 w-full">
            <div className="bg-primary/5 p-4 md:p-6 border-l-2 border-primary">
              <p className="mb-4 text-xs md:text-sm">
                Analysis complete for{" "}
                <span className="text-secondary">main_branch/dist-prod</span>.
              </p>

              {/* Score Gauge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-6">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-surface-container-highest"
                      cx="40"
                      cy="40"
                      fill="transparent"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <circle
                      className="text-primary"
                      cx="40"
                      cy="40"
                      fill="transparent"
                      r="36"
                      stroke="currentColor"
                      strokeDasharray="226.2"
                      strokeDashoffset="95"
                      strokeWidth="4"
                    />
                  </svg>
                  <span className="absolute text-xl font-black">58</span>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest">
                    Production Readiness Score
                  </h4>
                  <p className="text-white/40 text-[10px]">
                    Status:{" "}
                    <span className="text-secondary">NOT_READY_FOR_DEPLOY</span>
                  </p>
                </div>
              </div>

              {/* Identified Gaps */}
              <div className="space-y-3">
                <h5 className="text-[10px] font-bold text-white/60">
                  DETECTED_GAPS:
                </h5>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-error font-bold">[-]</span>
                    <span>
                      Missing environment variables:{" "}
                      <code className="bg-surface px-1 text-primary">
                        STRIPE_SECRET_KEY
                      </code>{" "}
                      in prod.yaml
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-error font-bold">[-]</span>
                    <span>
                      Docker image vulnerability:{" "}
                      <code className="bg-surface px-1 text-primary">
                        node:18-alpine
                      </code>{" "}
                      (CVE-2024-XXXX)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">[!]</span>
                    <span>Missing health-check endpoint on port 8080.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Code Diff */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 overflow-hidden">
              <div className="bg-surface-container px-4 py-2 text-[10px] flex justify-between border-b border-outline-variant/20">
                <span>mcp_patch_0x42.diff</span>
                <span className="text-primary">AUTO-FIX AVAILABLE</span>
              </div>
              <div className="p-4 text-[10px] md:text-[11px] leading-relaxed overflow-x-auto whitespace-pre font-mono">
                <span className="text-white/30">12 </span>  expose:
                {"\n"}
                <span className="text-white/30">13 </span>    - 80
                {"\n"}
                <span className="text-error bg-error/10 block">
                  -14    - 3000
                </span>
                <span className="text-primary bg-primary/10 block">
                  +14    - 8080
                </span>
                <span className="text-white/30">15 </span>  healthcheck:
                {"\n"}
                <span className="text-primary bg-primary/10 block">
                  +16    test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;,
                  &quot;http://localhost:8080/health&quot;]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prompt Bar */}
      <div className="p-4 md:p-6 border-t border-outline-variant/10 bg-surface-container-low/50">
        <div className="flex items-center gap-2 md:gap-4 group">
          <span className="text-primary font-bold">_</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-transparent border-none focus:ring-0 focus:outline-none w-full font-mono text-sm text-primary placeholder:text-white/20"
            placeholder="Apply fixes and re-run check..."
          />
          <span className="terminal-cursor hidden sm:inline-block" />
          <button className="bg-primary px-3 md:px-4 py-1 text-on-primary font-black text-xs hover:shadow-[0_0_15px_#5ae88a] transition-all whitespace-nowrap">
            EXEC
          </button>
        </div>
      </div>
    </div>
  );
}
