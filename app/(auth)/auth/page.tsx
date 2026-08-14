import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft } from "react-icons/hi2";

export const metadata: Metadata = { title: "Log in — VetTrack" };

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      {/* Background */}
      <Image
        src="/img/hero-img.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/65" />

      {/* Back to home */}
      <Link
        href="/"
        className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <HiArrowLeft className="h-4 w-4" />
        Home
      </Link>

      {/* Glass card */}
      <div className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
        <Link href="/" className="mb-6 inline-block text-xl font-bold tracking-tight text-white">
          VetTrack
        </Link>

        <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Log in to manage your animals and consultations.
        </p>

        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-white/80">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs font-medium text-brand-300 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-brand-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
