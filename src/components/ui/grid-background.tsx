"use client";

import { useEffect, useRef } from "react";

interface GridBackgroundProps {
  className?: string;
  gridColor?: string;
  dotColor?: string;
  size?: number;
  children?: React.ReactNode;
}

// Dot pattern background
export function DotBackground({
  className = "",
  dotColor = "rgba(107, 251, 154, 0.15)",
  size = 24,
  children,
}: GridBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
      {children}
    </div>
  );
}

// Grid lines background
export function GridLinesBackground({
  className = "",
  gridColor = "rgba(107, 251, 154, 0.05)",
  size = 40,
  children,
}: GridBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
      {children}
    </div>
  );
}

// Animated gradient mesh background
export function GradientMeshBackground({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Primary glow */}
      <div
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-30 blur-3xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(107, 251, 154, 0.4) 0%, transparent 70%)",
        }}
      />
      {/* Secondary glow */}
      <div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-20 blur-3xl animate-pulse-slower"
        style={{
          background: "radial-gradient(circle, rgba(255, 198, 100, 0.3) 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}

// Beam effect (like Linear)
interface BeamProps {
  className?: string;
  width?: number;
  delay?: number;
}

export function Beam({ className = "", width = 200, delay = 0 }: BeamProps) {
  return (
    <div
      className={`absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 ${className}`}
      style={{
        width: `${width}px`,
        animation: `beam 8s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

// Hero background with beams
export function HeroBackground({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(107, 251, 154, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(107, 251, 154, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -z-10">
        <div
          className="absolute inset-0 opacity-30 blur-[100px]"
          style={{
            background: "radial-gradient(circle at center, rgba(107, 251, 154, 0.5) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] -z-10">
        <div
          className="absolute inset-0 opacity-20 blur-[80px]"
          style={{
            background: "radial-gradient(circle at center, rgba(255, 198, 100, 0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      {children}
    </div>
  );
}
