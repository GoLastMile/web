"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className = "",
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useSpring(direction === "down" ? value : 0, {
    damping: 60,
    stiffness: 100,
  });

  const displayValue = useTransform(motionValue, (latest) =>
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(latest.toFixed(decimalPlaces)))
  );

  const [displayText, setDisplayText] = useState(
    direction === "down" ? value.toString() : "0"
  );

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setDisplayText(latest);
    });
    return unsubscribe;
  }, [displayValue]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, motionValue, value, direction, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayText}
      {suffix}
    </span>
  );
}

// Animated stat card with number ticker
interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  delay = 0,
  className = "",
  valueClassName = "",
  labelClassName = "",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={className}
    >
      <div className={`text-3xl font-black ${valueClassName}`}>
        <NumberTicker value={value} prefix={prefix} suffix={suffix} delay={delay + 0.2} />
      </div>
      <div className={`font-mono text-xs ${labelClassName}`}>{label}</div>
    </motion.div>
  );
}
