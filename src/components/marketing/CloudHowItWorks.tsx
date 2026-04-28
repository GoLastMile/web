"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-20 flex size-14 items-center justify-center rounded-full border-2 border-outline-variant/30 bg-[#0d0d0d] p-3 shadow-lg shadow-black/30",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="font-mono text-[10px] font-bold text-primary tracking-wider">{label}</span>
      )}
      {sublabel && (
        <span className="font-mono text-[8px] text-white/40">{sublabel}</span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export default function CloudHowItWorks({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Row 1: Code -> Analyze -> 5 Analyzers
  const codeRef = useRef<HTMLDivElement>(null);
  const analyzeRef = useRef<HTMLDivElement>(null);
  const analyzer1Ref = useRef<HTMLDivElement>(null);
  const analyzer2Ref = useRef<HTMLDivElement>(null);
  const analyzer3Ref = useRef<HTMLDivElement>(null);
  const analyzer4Ref = useRef<HTMLDivElement>(null);
  const analyzer5Ref = useRef<HTMLDivElement>(null);

  // Row 2: Gaps -> Fix -> Build -> Deploy -> Live
  const gapsRef = useRef<HTMLDivElement>(null);
  const fixRef = useRef<HTMLDivElement>(null);
  const buildRef = useRef<HTMLDivElement>(null);
  const deployRef = useRef<HTMLDivElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden p-6 md:p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex items-center justify-between w-full max-w-6xl gap-2">
        {/* Your Code */}
        <Circle ref={codeRef} className="border-white/40" label="YOUR CODE">
          <Icons.code className="size-6 text-white/70" />
        </Circle>

        {/* Analyze */}
        <Circle ref={analyzeRef} className="border-primary" label="ANALYZE">
          <Icons.scan className="size-6 text-primary" />
        </Circle>

        {/* 5 LLM Analyzers stacked vertically */}
        <div className="flex flex-col items-center gap-1">
          <div ref={analyzer1Ref} className="z-20 flex h-6 w-12 items-center justify-center border border-secondary/50 bg-[#0d0d0d]">
            <span className="font-mono text-[7px] font-bold text-secondary">SEC</span>
          </div>
          <div ref={analyzer2Ref} className="z-20 flex h-6 w-12 items-center justify-center border border-secondary/50 bg-[#0d0d0d]">
            <span className="font-mono text-[7px] font-bold text-secondary">TEST</span>
          </div>
          <div ref={analyzer3Ref} className="z-20 flex h-6 w-12 items-center justify-center border border-secondary/50 bg-[#0d0d0d]">
            <span className="font-mono text-[7px] font-bold text-secondary">ERR</span>
          </div>
          <div ref={analyzer4Ref} className="z-20 flex h-6 w-12 items-center justify-center border border-secondary/50 bg-[#0d0d0d]">
            <span className="font-mono text-[7px] font-bold text-secondary">DB</span>
          </div>
          <div ref={analyzer5Ref} className="z-20 flex h-6 w-12 items-center justify-center border border-secondary/50 bg-[#0d0d0d]">
            <span className="font-mono text-[7px] font-bold text-secondary">BOIL</span>
          </div>
        </div>

        {/* Gaps Found */}
        <Circle ref={gapsRef} className="border-error/50" label="GAPS" sublabel="42/100">
          <Icons.alert className="size-6 text-error" />
        </Circle>

        {/* Auto-Fix */}
        <Circle ref={fixRef} className="border-primary" label="FIX">
          <Icons.wrench className="size-6 text-primary" />
        </Circle>

        {/* Build */}
        <Circle ref={buildRef} className="border-primary" label="BUILD">
          <Icons.build className="size-6 text-primary" />
        </Circle>

        {/* Deploy */}
        <Circle ref={deployRef} className="border-primary" label="DEPLOY">
          <Icons.deploy className="size-6 text-primary" />
        </Circle>

        {/* Live */}
        <Circle ref={liveRef} className="border-primary shadow-lg shadow-primary/30" label="LIVE" sublabel="94/100">
          <Icons.globe className="size-6 text-primary" />
        </Circle>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={codeRef}
        toRef={analyzeRef}
        duration={5}
        curvature={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analyzeRef}
        toRef={analyzer1Ref}
        duration={5}
        delay={1}
        curvature={-40}
        pathColor="rgba(255, 198, 100, 0.15)"
        gradientStartColor="#ffc664"
        gradientStopColor="#e6a83a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analyzeRef}
        toRef={analyzer2Ref}
        duration={5}
        delay={1}
        curvature={-20}
        pathColor="rgba(255, 198, 100, 0.15)"
        gradientStartColor="#ffc664"
        gradientStopColor="#e6a83a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analyzeRef}
        toRef={analyzer3Ref}
        duration={5}
        delay={1}
        curvature={0}
        pathColor="rgba(255, 198, 100, 0.15)"
        gradientStartColor="#ffc664"
        gradientStopColor="#e6a83a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analyzeRef}
        toRef={analyzer4Ref}
        duration={5}
        delay={1}
        curvature={20}
        pathColor="rgba(255, 198, 100, 0.15)"
        gradientStartColor="#ffc664"
        gradientStopColor="#e6a83a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analyzeRef}
        toRef={analyzer5Ref}
        duration={5}
        delay={1}
        curvature={40}
        pathColor="rgba(255, 198, 100, 0.15)"
        gradientStartColor="#ffc664"
        gradientStopColor="#e6a83a"
      />

      {/* Beam from analyzers to gaps (using middle analyzer) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analyzer3Ref}
        toRef={gapsRef}
        duration={5}
        delay={3}
        curvature={0}
        pathColor="rgba(239, 68, 68, 0.15)"
        gradientStartColor="#ffc664"
        gradientStopColor="#ef4444"
      />

      {/* Continue the flow */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gapsRef}
        toRef={fixRef}
        duration={5}
        delay={4}
        curvature={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fixRef}
        toRef={buildRef}
        duration={5}
        delay={5}
        curvature={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={buildRef}
        toRef={deployRef}
        duration={5}
        delay={6}
        curvature={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={deployRef}
        toRef={liveRef}
        duration={5}
        delay={7}
        curvature={0}
      />
    </div>
  );
}

const Icons = {
  code: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  scan: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
    </svg>
  ),
  alert: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  wrench: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  build: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  deploy: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  globe: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};
