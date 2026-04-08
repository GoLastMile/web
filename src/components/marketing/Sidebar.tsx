"use client";

import React from "react";

const navItems = [
  { icon: "dashboard", label: "SYSTEM_OVERVIEW", active: false },
  { icon: "view_quilt", label: "CORE_BENTO", active: false },
  { icon: "extension", label: "INTEGRATIONS", active: true },
  { icon: "rocket_launch", label: "DEPLOY_LOGS", active: false },
];

// Simple icon component using SVG
function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    dashboard: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    view_quilt: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" />
      </svg>
    ),
    extension: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
      </svg>
    ),
    rocket_launch: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.29-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 hidden lg:block bg-surface-container-low border-r border-outline-variant/20 pt-24">
      <div className="px-6 mb-8">
        <span className="font-mono uppercase text-xs text-white/40 tracking-widest font-black">
          ROOT_DIR
        </span>
      </div>
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`px-6 py-4 flex items-center gap-4 cursor-pointer transition-all duration-150 active:translate-x-1 ${
              item.active
                ? "bg-surface text-primary border-l-2 border-secondary"
                : "text-white/40 hover:bg-surface-container hover:text-white"
            }`}
          >
            <Icon name={item.icon} className="w-4 h-4" />
            <span className="font-mono uppercase text-sm">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
