"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  rotateIntensity?: number;
  glareOpacity?: number;
  borderGlow?: boolean;
  glowColor?: string;
}

export function Card3D({
  children,
  className = "",
  containerClassName = "",
  rotateIntensity = 10,
  glareOpacity = 0.1,
  borderGlow = true,
  glowColor = "rgba(107, 251, 154, 0.5)",
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotateIntensity, -rotateIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotateIntensity, rotateIntensity]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-1000 ${containerClassName}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative ${className}`}
      >
        {/* Glare effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,${glareOpacity}), transparent 50%)`
            ),
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Border glow */}
        {borderGlow && (
          <motion.div
            className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
            style={{
              boxShadow: `0 0 20px ${glowColor}`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}

        {children}
      </motion.div>
    </div>
  );
}

// Simple hover scale card
interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}

export function HoverCard({
  children,
  className = "",
  scale = 1.02,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ scale, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
