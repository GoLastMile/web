"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedGridProps {
  className?: string;
  children?: React.ReactNode;
}

// Animated dashed boxes scattered across the background
// Inspired by baz.co's flowing border aesthetic
export function AnimatedGrid({ className = "", children }: AnimatedGridProps) {
  return (
    <div className={`relative ${className}`}>
      {/* SVG layer with animated boxes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <defs>
          {/* Gradient for the animated stroke */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(107, 251, 154, 0.6)" />
            <stop offset="50%" stopColor="rgba(107, 251, 154, 0.2)" />
            <stop offset="100%" stopColor="rgba(107, 251, 154, 0.6)" />
          </linearGradient>
        </defs>

        {/* Large box - top left area */}
        <rect
          x="3%"
          y="8%"
          width="18%"
          height="30%"
          fill="none"
          stroke="rgba(107, 251, 154, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          className="animate-dash-flow"
          style={{ animationDuration: "20s" }}
        />

        {/* Medium box - top center-left */}
        <rect
          x="8%"
          y="50%"
          width="10%"
          height="16%"
          fill="none"
          stroke="rgba(107, 251, 154, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="animate-dash-flow-reverse"
          style={{ animationDuration: "25s" }}
        />

        {/* Small box - far right */}
        <rect
          x="82%"
          y="5%"
          width="12%"
          height="18%"
          fill="none"
          stroke="rgba(107, 251, 154, 0.45)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="animate-dash-flow"
          style={{ animationDuration: "15s" }}
        />

        {/* Medium box - right side middle */}
        <rect
          x="75%"
          y="40%"
          width="15%"
          height="25%"
          fill="none"
          stroke="rgba(107, 251, 154, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="8 4"
          className="animate-dash-flow-reverse"
          style={{ animationDuration: "22s" }}
        />

        {/* Large box - bottom right */}
        <rect
          x="60%"
          y="72%"
          width="22%"
          height="20%"
          fill="none"
          stroke="rgba(107, 251, 154, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="10 6"
          className="animate-dash-flow"
          style={{ animationDuration: "28s" }}
        />

        {/* Small box - bottom left */}
        <rect
          x="5%"
          y="75%"
          width="14%"
          height="18%"
          fill="none"
          stroke="rgba(107, 251, 154, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          className="animate-dash-flow-reverse"
          style={{ animationDuration: "18s" }}
        />

        {/* Connection lines */}
        <line
          x1="21%"
          y1="25%"
          x2="82%"
          y2="12%"
          stroke="rgba(107, 251, 154, 0.25)"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="animate-dash-flow"
          style={{ animationDuration: "12s" }}
        />

        <line
          x1="94%"
          y1="23%"
          x2="90%"
          y2="40%"
          stroke="rgba(107, 251, 154, 0.3)"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="animate-dash-flow-reverse"
          style={{ animationDuration: "8s" }}
        />

        <line
          x1="18%"
          y1="66%"
          x2="60%"
          y2="80%"
          stroke="rgba(107, 251, 154, 0.2)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="animate-dash-flow"
          style={{ animationDuration: "15s" }}
        />

        <line
          x1="90%"
          y1="65%"
          x2="82%"
          y2="72%"
          stroke="rgba(107, 251, 154, 0.25)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="animate-dash-flow-reverse"
          style={{ animationDuration: "10s" }}
        />
      </svg>

      {children}
    </div>
  );
}

// Scanning beam that sweeps across - like code being analyzed
export function ScanBeam({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-scan-horizontal"
      />
    </div>
  );
}

// Glowing orb that pulses at intersection points
interface GlowNodeProps {
  x: string;
  y: string;
  size?: number;
  delay?: number;
}

export function GlowNode({ x, y, size = 4, delay = 0 }: GlowNodeProps) {
  return (
    <div
      className="absolute rounded-full bg-primary/60 animate-pulse-glow"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        boxShadow: "0 0 10px rgba(107, 251, 154, 0.5), 0 0 20px rgba(107, 251, 154, 0.3)",
      }}
    />
  );
}

// Circuit-style connection paths with animated flow
export function CircuitPaths({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(107, 251, 154, 0.8)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Horizontal beam path */}
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke="rgba(107, 251, 154, 0.05)"
        strokeWidth="1"
      />

      {/* Animated beam traveling along the path */}
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke="url(#beamGradient)"
        strokeWidth="2"
        strokeDasharray="100 900"
        className="animate-beam-travel"
      />
    </svg>
  );
}

// Full hero background combining all effects
export function AnimatedHeroBackground({
  className = "",
  children,
}: AnimatedGridProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base grid pattern */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(107, 251, 154, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(107, 251, 154, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated dashed boxes layer */}
      <AnimatedGrid className="absolute inset-0 -z-10" />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle at center, rgba(107, 251, 154, 0.6) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-15 blur-[100px]"
          style={{
            background: "radial-gradient(circle at center, rgba(255, 198, 100, 0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Glow nodes at key intersections */}
      <GlowNode x="20%" y="35%" delay={0} />
      <GlowNode x="78%" y="20%" size={3} delay={0.5} />
      <GlowNode x="85%" y="55%" size={5} delay={1} />
      <GlowNode x="14%" y="73%" size={3} delay={1.5} />

      {children}
    </div>
  );
}
