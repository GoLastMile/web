"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "rgba(107, 251, 154, 0.3)",
  shimmerSize = "0.1em",
  borderRadius = "0px",
  shimmerDuration = "2s",
  background = "rgba(107, 251, 154, 1)",
  className = "",
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={`group relative overflow-hidden ${className}`}
      style={{ borderRadius }}
      {...props}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            backgroundSize: "200% 100%",
            animation: `shimmer ${shimmerDuration} infinite`,
          }}
        />
      </div>

      {/* Button background */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{ background, borderRadius }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </button>
  );
}

// Animated gradient border button
interface GradientBorderButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  gradientColors?: string[];
}

export function GradientBorderButton({
  children,
  className = "",
  gradientColors = ["#6bfb9a", "#ffc664", "#6bfb9a"],
  ...props
}: GradientBorderButtonProps) {
  return (
    <button
      className={`relative group ${className}`}
      {...props}
    >
      {/* Animated gradient border */}
      <span
        className="absolute inset-0 overflow-hidden"
        style={{ padding: "2px" }}
      >
        <span
          className="absolute inset-[-100%] animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, ${gradientColors.join(", ")})`,
          }}
        />
      </span>

      {/* Inner background */}
      <span className="relative flex items-center justify-center bg-surface-container-high group-hover:bg-surface-container transition-colors">
        {children}
      </span>
    </button>
  );
}
