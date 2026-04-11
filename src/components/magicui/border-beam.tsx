"use client"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  className?: string
  borderWidth?: number
}

export function BorderBeam({
  className,
  duration = 12,
  delay = 0,
  colorFrom = "#6bfb9a",
  colorTo = "#ffc664",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 animate-border-beam",
        className
      )}
      style={{
        "--beam-duration": `${duration}s`,
        "--beam-delay": `${delay}s`,
        background: `linear-gradient(var(--color-surface-container), var(--color-surface-container)) padding-box,
                     conic-gradient(from var(--border-angle, 0deg), transparent 60%, ${colorFrom} 80%, ${colorTo} 95%, transparent) border-box`,
        border: `${borderWidth}px solid transparent`,
      } as React.CSSProperties}
    />
  )
}
