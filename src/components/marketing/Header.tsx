"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/mcp", label: "MCP" },
  { href: "/pricing", label: "PRICING" },
  { href: "/docs", label: "DOCS" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-surface text-primary border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="font-mono tracking-tight text-sm font-bold text-white">LASTMILE</span>
          <span className="text-primary glow-text-primary font-mono font-bold text-sm">_</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-xs transition-colors duration-200 ${
                (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                  ? "text-primary font-bold underline underline-offset-4"
                  : "text-white/60 font-medium hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glow-dot" />
          <span className="font-8bit-sm opacity-50">
            ONLINE
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-surface-container-low border-t border-outline-variant/20 px-4 py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-xs py-3 px-2 transition-colors duration-200 ${
                  (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                    ? "text-primary font-bold bg-surface-container"
                    : "text-white/60 font-medium hover:text-primary hover:bg-surface-container/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 mt-2 border-t border-outline-variant/20">
              <div className="glow-dot" />
              <span className="font-8bit-sm opacity-50">
                ONLINE
              </span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
