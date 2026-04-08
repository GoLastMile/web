"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarSections = [
  {
    title: "FUNDAMENTALS",
    items: [
      { label: "Getting Started", href: "/docs" },
      { label: "Introduction", href: "/docs/introduction" },
      { label: "CLI Reference", href: "/docs/cli" },
    ],
  },
  {
    title: "DEPLOYMENT",
    items: [
      { label: "MCP Server Setup", href: "/docs/mcp-server" },
      { label: "Remote Syncing", href: "/docs/remote-syncing" },
      { label: "API Keys & Auth", href: "/docs/api-keys" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Architecture", href: "/docs/architecture" },
      { label: "Examples", href: "/docs/examples" },
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-on-primary p-4 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-surface-container border-r border-outline-variant/20 overflow-y-auto z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full bg-surface-container-low border border-outline-variant/30 px-4 py-3 pl-10 font-mono text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50"
              />
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Navigation sections */}
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="font-mono text-[10px] text-primary tracking-[0.2em] mb-4">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 font-mono text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-primary/10 text-primary border-l-2 border-primary"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0 px-4 md:px-8 lg:px-16 py-8 lg:py-12">
        <div className="max-w-3xl">
          {children}
        </div>
      </main>
    </div>
  );
}
