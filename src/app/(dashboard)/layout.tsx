import { redirect } from "next/navigation";

// TODO: Replace with actual auth check
async function getUser() {
  // This will be replaced with actual auth logic
  return null;
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  // Redirect to login if not authenticated
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* TODO: Add dashboard sidebar and header */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container border-r border-outline-variant/20">
        <div className="p-4">
          <span className="font-mono text-sm font-bold text-white">LASTMILE</span>
          <span className="text-primary font-mono font-bold text-sm">_</span>
        </div>
        <nav className="px-2">
          {/* TODO: Add navigation items */}
        </nav>
      </aside>
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
