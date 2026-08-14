"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft } from "react-icons/hi2";

export default function RegisterPage() {
  const [isVet, setIsVet] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      {/* Background */}
      <Image src="/img/hero-img.png" alt="" fill priority sizes="100vw" className="object-cover" />
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
      <div className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
        <Link href="/" className="mb-6 inline-block text-xl font-bold tracking-tight text-white">
          VetTrack
        </Link>

        <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Get started free — no credit card required.
        </p>

        <form className="mt-8 flex flex-col gap-4">
          {/* Row 1 — names */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="first-name" className="text-sm font-medium text-white/80">First name</label>
              <input
                id="first-name" name="first_name" type="text" required placeholder="Jean"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="last-name" className="text-sm font-medium text-white/80">Last name</label>
              <input
                id="last-name" name="last_name" type="text" required placeholder="Habimana"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
          </div>

          {/* Row 2 — email + phone */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
              <input
                id="email" name="email" type="email" required placeholder="you@example.com"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone number</label>
              <input
                id="phone" name="phone" type="tel" placeholder="+250 78 000 0000"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
          </div>

          {/* Row 3 — passwords */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
              <input
                id="password" name="password" type="password" required placeholder="Min. 8 characters"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirm-password" className="text-sm font-medium text-white/80">Confirm password</label>
              <input
                id="confirm-password" name="confirm_password" type="password" required placeholder="Repeat your password"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
          </div>

          {/* Role — hidden, driven by checkbox */}
          <input type="hidden" name="role" value={isVet ? "vet" : "farmer"} />

          {/* Vet checkbox */}
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={isVet}
              onChange={(e) => setIsVet(e.target.checked)}
              className="h-4 w-4 rounded border-white/30 accent-brand-500"
            />
            <span className="text-sm text-white/80">
              I am a <span className="font-semibold text-white">veterinarian</span>
            </span>
          </label>

          <button
            type="submit"
            className="mt-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link href="/auth" className="font-medium text-brand-300 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
