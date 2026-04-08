import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-surface-container rounded-lg border border-outline-variant/20 p-8">
      <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
      <p className="text-white/60 mb-8">Sign in to your account</p>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-mono text-white/60 mb-2">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-surface border border-outline-variant/20 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-mono text-white/60 mb-2">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-surface border border-outline-variant/20 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-surface font-mono font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-white/40 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
