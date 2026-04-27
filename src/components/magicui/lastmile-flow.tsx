"use client"

import { forwardRef, useRef, useEffect, useState } from "react"
import { AnimatedBeam } from "./animated-beam"
import { OrbitingCircles } from "./orbiting-circles"
import { cn } from "@/lib/utils"

// Icons
const CodeIcon = () => (
  <svg className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)

const AnalyzeIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
)

const FixIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const DeployIcon = () => (
  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

// The 5 LLM deep analyzers
const GAP_CATEGORIES = [
  "SEC",
  "TEST",
  "ERR",
  "DB",
  "BOIL",
]

// Flow Node that properly forwards ref to the visible element
const FlowNode = forwardRef<
  HTMLDivElement,
  {
    className?: string
    children: React.ReactNode
    label?: string
    variant?: "input" | "process" | "output"
  }
>(({ className, children, label, variant = "process" }, ref) => {
  const variants = {
    input: "border-white/30 bg-surface-container-high",
    process: "border-primary/50 bg-surface-container glow-border-primary",
    output: "border-secondary/50 bg-surface-container glow-border-secondary",
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "flex h-14 w-14 md:h-16 md:w-16 items-center justify-center border-2 transition-all hover:scale-105",
          variants[variant],
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className={cn(
          "font-mono text-[10px] font-bold tracking-wider",
          variant === "input" && "text-white/60",
          variant === "process" && "text-primary",
          variant === "output" && "text-secondary"
        )}>
          {label}
        </span>
      )}
    </div>
  )
})
FlowNode.displayName = "FlowNode"

// Main hero flow visualization with working animated beams
export function LastMileFlowHero({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)
  const analyzeRef = useRef<HTMLDivElement>(null)
  const fixRef = useRef<HTMLDivElement>(null)
  const deployRef = useRef<HTMLDivElement>(null)

  // Track when component is mounted to ensure refs are ready
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center py-12 md:py-16",
        className
      )}
    >
      {/* Main Flow Nodes */}
      <div className="flex items-center gap-12 md:gap-20 lg:gap-24">
        {/* AI Code Input */}
        <FlowNode ref={inputRef} variant="input" label="AI CODE">
          <CodeIcon />
        </FlowNode>

        {/* Analyze - with orbiting gap categories */}
        <div className="relative">
          <FlowNode ref={analyzeRef} variant="process" label="ANALYZE">
            <AnalyzeIcon />
          </FlowNode>

          {/* Orbiting gap categories around ANALYZE node */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <OrbitingCircles
                radius={60}
                duration={25}
                speed={0.5}
                path={false}
                iconSize={24}
              >
                {GAP_CATEGORIES.map((gap) => (
                  <div
                    key={gap}
                    className="flex h-6 w-6 items-center justify-center bg-surface-container-high border border-primary/40 text-[6px] font-mono font-bold text-primary/80"
                  >
                    {gap}
                  </div>
                ))}
              </OrbitingCircles>
            </div>
          </div>
        </div>

        {/* Fix */}
        <FlowNode ref={fixRef} variant="process" label="FIX">
          <FixIcon />
        </FlowNode>

        {/* Deploy */}
        <FlowNode ref={deployRef} variant="output" label="DEPLOY">
          <DeployIcon />
        </FlowNode>
      </div>

      {/* Animated Beams - only render when mounted and refs are ready */}
      {mounted && (
        <>
          {/* Input -> Analyze */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={inputRef}
            toRef={analyzeRef}
            pathColor="rgba(107, 251, 154, 0.15)"
            pathWidth={2}
            gradientStartColor="#6bfb9a"
            gradientStopColor="#48d67a"
            duration={2}
            curvature={0}
          />

          {/* Analyze -> Fix */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={analyzeRef}
            toRef={fixRef}
            pathColor="rgba(107, 251, 154, 0.15)"
            pathWidth={2}
            gradientStartColor="#48d67a"
            gradientStopColor="#6bfb9a"
            duration={2}
            delay={0.7}
            curvature={0}
          />

          {/* Fix -> Deploy */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={fixRef}
            toRef={deployRef}
            pathColor="rgba(255, 198, 100, 0.15)"
            pathWidth={2}
            gradientStartColor="#6bfb9a"
            gradientStopColor="#ffc664"
            duration={2}
            delay={1.4}
            curvature={0}
          />
        </>
      )}
    </div>
  )
}

// Detailed flow with all gap categories visible
export function LastMileFlow({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)
  const analyzeRef = useRef<HTMLDivElement>(null)
  const fixRef = useRef<HTMLDivElement>(null)
  const deployRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full items-center justify-center overflow-visible p-8",
        className
      )}
    >
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        {/* Main flow row */}
        <div className="flex items-center justify-between gap-4">
          <FlowNode ref={inputRef} variant="input" label="AI CODE">
            <CodeIcon />
          </FlowNode>

          <FlowNode ref={analyzeRef} variant="process" label="ANALYZE">
            <AnalyzeIcon />
          </FlowNode>

          <FlowNode ref={fixRef} variant="process" label="FIX">
            <FixIcon />
          </FlowNode>

          <FlowNode ref={deployRef} variant="output" label="DEPLOY">
            <DeployIcon />
          </FlowNode>
        </div>

        {/* Gap categories row */}
        <div className="flex justify-center gap-2 -mt-2">
          {GAP_CATEGORIES.map((gap, i) => (
            <div
              key={gap}
              className={cn(
                "flex h-8 w-8 items-center justify-center border border-primary/20 bg-surface-container-low text-[7px] font-mono font-bold transition-all hover:border-primary/50 hover:bg-primary/10",
                i === 0 && "border-primary/50 bg-primary/10 text-primary"
              )}
            >
              {gap}
            </div>
          ))}
        </div>
      </div>

      {/* Animated Beams */}
      {mounted && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={inputRef}
            toRef={analyzeRef}
            pathColor="rgba(107, 251, 154, 0.2)"
            gradientStartColor="#6bfb9a"
            gradientStopColor="#48d67a"
            duration={3}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={analyzeRef}
            toRef={fixRef}
            pathColor="rgba(107, 251, 154, 0.2)"
            gradientStartColor="#48d67a"
            gradientStopColor="#6bfb9a"
            duration={3}
            delay={1}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={fixRef}
            toRef={deployRef}
            pathColor="rgba(255, 198, 100, 0.2)"
            gradientStartColor="#6bfb9a"
            gradientStopColor="#ffc664"
            duration={3}
            delay={2}
            curvature={0}
          />
        </>
      )}
    </div>
  )
}
