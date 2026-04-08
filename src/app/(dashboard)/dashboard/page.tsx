export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-surface-container rounded-lg p-6 border border-outline-variant/20">
          <p className="text-white/60 text-sm font-mono">PROJECTS</p>
          <p className="text-3xl font-bold text-white mt-2">0</p>
        </div>

        <div className="bg-surface-container rounded-lg p-6 border border-outline-variant/20">
          <p className="text-white/60 text-sm font-mono">ANALYSES</p>
          <p className="text-3xl font-bold text-white mt-2">0</p>
        </div>

        <div className="bg-surface-container rounded-lg p-6 border border-outline-variant/20">
          <p className="text-white/60 text-sm font-mono">FIXES APPLIED</p>
          <p className="text-3xl font-bold text-white mt-2">0</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant/20 p-8 text-center">
          <p className="text-white/40 font-mono text-sm">No recent activity</p>
          <p className="text-white/60 mt-2">Run your first analysis to get started</p>
        </div>
      </div>
    </div>
  );
}
