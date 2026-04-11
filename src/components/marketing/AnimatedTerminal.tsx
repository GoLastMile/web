"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const TYPING_SPEED = 50;
const LINE_DELAY = 400;
const SCORE_ANIMATION_DURATION = 1500;

const terminalLines = [
  // ANALYZE
  { type: "command", text: "$ lastmile analyze", delay: 0 },
  { type: "blank", text: "", delay: 400 },
  { type: "phase", text: "[1/5] Scanning project structure", delay: 250 },
  { type: "phase", text: "[2/5] Analyzing security & auth", delay: 250 },
  { type: "phase", text: "[3/5] Checking code quality", delay: 250 },
  { type: "phase", text: "[4/5] Reviewing infrastructure", delay: 250 },
  { type: "phase", text: "[5/5] Evaluating production readiness", delay: 300 },
  { type: "blank", text: "", delay: 150 },
  { type: "stats", text: "42 files analyzed in 2.3s | 8 issues found, 6 auto-fixable", delay: 250 },
  { type: "blank", text: "", delay: 150 },
  { type: "severity-header", text: "CRITICAL (2)", delay: 0 },
  { type: "critical", text: "✗ Hardcoded secrets in source code", delay: 0 },
  { type: "critical-detail", text: "  src/lib/config.ts:12 [security] [fixable]", delay: 150 },
  { type: "critical", text: "✗ .env committed to git history", delay: 0 },
  { type: "critical-detail", text: "  .env [git] [fixable]", delay: 200 },
  { type: "blank", text: "", delay: 100 },
  { type: "severity-header-warning", text: "WARNING (3)", delay: 0 },
  { type: "warning", text: "⚠ No error boundaries", delay: 0 },
  { type: "warning-detail", text: "  src/components/* [errors] [fixable]", delay: 150 },
  { type: "warning", text: "⚠ Missing rate limiting", delay: 0 },
  { type: "warning-detail", text: "  src/api/* [security] [fixable]", delay: 250 },
  { type: "blank", text: "", delay: 200 },
  { type: "score", text: "SCORE_ANIMATION", delay: 0 },
  { type: "blank", text: "", delay: 600 },

  // FIX
  { type: "command", text: "$ lastmile fix", delay: 0 },
  { type: "blank", text: "", delay: 300 },
  { type: "fix-info", text: "Applying 6 safe fixes...", delay: 200 },
  { type: "fix-success", text: "✓ Extracted secrets to .env.example", delay: 150 },
  { type: "fix-success", text: "✓ Added .env to .gitignore", delay: 150 },
  { type: "fix-success", text: "✓ Generated ErrorBoundary component", delay: 150 },
  { type: "fix-success", text: "✓ Added rate limiting middleware", delay: 150 },
  { type: "fix-success", text: "✓ Added structured logging", delay: 150 },
  { type: "fix-success", text: "✓ Created health check endpoint", delay: 200 },
  { type: "blank", text: "", delay: 150 },
  { type: "fix-complete", text: "6 fixes applied. Score: 34 → 89", delay: 400 },
  { type: "blank", text: "", delay: 400 },

  // SHIP
  { type: "command", text: "$ lastmile ship", delay: 0 },
  { type: "blank", text: "", delay: 300 },
  { type: "ship-phase", text: "Deploying to LastMile Cloud...", delay: 200 },
  { type: "ship-info", text: "Detected: Next.js 14 + Postgres", delay: 200 },
  { type: "ship-success", text: "✓ Database provisioned", delay: 150 },
  { type: "ship-success", text: "✓ Environment configured", delay: 150 },
  { type: "ship-success", text: "✓ Build successful", delay: 150 },
  { type: "ship-success", text: "✓ SSL certificate active", delay: 200 },
  { type: "ship-phase", text: "Deploying to edge (300+ locations)...", delay: 400 },
  { type: "blank", text: "", delay: 200 },
  { type: "ship-complete", text: "Live at https://myapp.lastmile.run", delay: 0 },
  { type: "ship-final", text: "Production ready. Score: 94/100", delay: 0 },
];

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const targetScore = 34;

  const resetAnimation = useCallback(() => {
    setVisibleLines(0);
    setTypingIndex(0);
    setCurrentScore(0);
    setIsAnimating(true);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto-scroll to bottom when new lines appear
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [visibleLines, currentScore]);

  // Main animation sequence
  useEffect(() => {
    if (!isAnimating) return;

    const currentLine = terminalLines[visibleLines];
    if (!currentLine) {
      setIsAnimating(false);
      return;
    }

    // Handle command typing animation for any command line
    if (currentLine.type === "command") {
      if (typingIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setTypingIndex((prev) => prev + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      }
    }

    // Handle score animation
    if (currentLine.type === "score" && currentScore < targetScore) {
      const increment = Math.ceil(targetScore / (SCORE_ANIMATION_DURATION / 50));
      const timeout = setTimeout(() => {
        setCurrentScore((prev) => Math.min(prev + increment, targetScore));
      }, 50);
      return () => clearTimeout(timeout);
    }

    // Move to next line
    const delay = currentLine.delay || LINE_DELAY;
    const timeout = setTimeout(() => {
      const nextLine = terminalLines[visibleLines + 1];
      if (nextLine?.type === "command") {
        setTypingIndex(0);
      }
      setVisibleLines((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isAnimating, visibleLines, typingIndex, currentScore]);

  const getLineClass = (type: string) => {
    switch (type) {
      case "command":
        return "text-white";
      case "phase":
        return "text-white/50";
      case "stats":
        return "text-white/40";
      case "classification":
        return "text-cyan-400";
      case "features":
        return "text-white/40";
      case "summary-header":
        return "text-white/60";
      case "summary-item":
        return "text-white/40";
      case "severity-header":
        return "text-error font-bold";
      case "severity-header-warning":
        return "text-secondary font-bold";
      case "critical":
        return "text-error";
      case "critical-detail":
        return "text-white/30";
      case "critical-hint":
        return "text-white/40";
      case "warning":
        return "text-secondary";
      case "warning-detail":
        return "text-white/30";
      case "footer":
        return "text-cyan-400";
      case "footer-dim":
        return "text-white/30";
      case "fix-info":
        return "text-white/60";
      case "fix-success":
        return "text-primary";
      case "fix-complete":
        return "text-primary font-bold";
      case "ship-phase":
        return "text-white/50";
      case "ship-info":
        return "text-cyan-400";
      case "ship-success":
        return "text-primary";
      case "ship-complete":
        return "text-primary font-bold";
      case "ship-final":
        return "text-primary";
      default:
        return "text-white/40";
    }
  };

  const renderLine = (line: typeof terminalLines[0], index: number) => {
    if (line.type === "blank") {
      return <div key={index} className="h-3" />;
    }

    if (line.type === "command") {
      const isCurrentlyTyping = visibleLines === index && typingIndex < line.text.length;
      const displayText = isCurrentlyTyping
        ? line.text.slice(0, typingIndex)
        : line.text;
      return (
        <div key={index} className="flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-white">{displayText.replace("$ ", "")}</span>
          {isCurrentlyTyping && showCursor && (
            <span className="bg-primary w-2 h-4 inline-block animate-pulse" />
          )}
        </div>
      );
    }

    if (line.type === "score") {
      const emoji = currentScore < 50 ? "🚨" : currentScore < 80 ? "🔧" : "🎉";
      const status = currentScore < 50 ? "Not Ready" : currentScore < 80 ? "Needs Work" : "Production Ready!";
      const progressBar = "█".repeat(Math.floor(currentScore / 3.33)) + "░".repeat(30 - Math.floor(currentScore / 3.33));

      return (
        <div key={index} className="space-y-2 border border-outline-variant/30 p-4 bg-surface-container/30">
          <div className="flex justify-between items-center">
            <span className="text-white/80 font-bold">Readiness Score</span>
            <span className={`text-xl font-bold ${currentScore < 50 ? "text-error" : currentScore < 80 ? "text-secondary" : "text-primary"}`}>
              {emoji} {currentScore}/100
            </span>
          </div>
          <div className={`font-mono text-sm ${currentScore < 50 ? "text-error" : currentScore < 80 ? "text-secondary" : "text-primary"}`}>
            {progressBar}
          </div>
          <div className="text-right text-xs">
            <span className={currentScore < 50 ? "text-error" : currentScore < 80 ? "text-secondary" : "text-primary"}>
              {status}
            </span>
          </div>
        </div>
      );
    }

    // Default rendering for other types
    return (
      <div key={index} className={getLineClass(line.type)}>
        {line.text}
      </div>
    );
  };

  return (
    <div
      className="relative bg-surface-container-low border border-outline-variant/30 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Terminal Header */}
      <div className="bg-surface-container-highest flex items-center justify-between px-4 py-2 border-b border-outline-variant/30">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-error/60 rounded-full" />
          <div className="w-2.5 h-2.5 bg-secondary/60 rounded-full" />
          <div className="w-2.5 h-2.5 bg-primary/60 rounded-full" />
        </div>
        <span className="text-[10px] font-mono text-white/40">lastmile-cli v0.3.0</span>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-6 md:p-8 font-mono text-xs md:text-sm space-y-1 h-[320px] md:h-[380px] bg-black/60 backdrop-blur-sm overflow-y-auto scrollbar-thin"
      >
        {terminalLines.slice(0, visibleLines + 1).map((line, index) => (
          <div
            key={index}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {renderLine(line, index)}
          </div>
        ))}

        {/* Blinking cursor at end when typing complete */}
        {!isAnimating && visibleLines >= terminalLines.length - 1 && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-primary">$</span>
            {showCursor && <span className="bg-primary w-2 h-4 inline-block" />}
          </div>
        )}
      </div>

      {/* Replay button */}
      {!isAnimating && (
        <button
          onClick={resetAnimation}
          className={`absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-mono text-xs hover:bg-primary/20 transition-all ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          REPLAY
        </button>
      )}

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent bg-[length:100%_4px] animate-scan opacity-30" />
    </div>
  );
}
