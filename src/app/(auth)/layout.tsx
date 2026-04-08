import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Simple header */}
      <header className="p-4 md:p-6">
        <Link href="/" className="flex items-center">
          <span className="font-mono text-sm font-bold text-white">LASTMILE</span>
          <span className="text-primary font-mono font-bold text-sm">_</span>
        </Link>
      </header>

      {/* Centered content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Simple footer */}
      <footer className="p-4 text-center">
        <p className="text-white/30 text-xs font-mono">
          © {new Date().getFullYear()} LastMile
        </p>
      </footer>
    </div>
  );
}
