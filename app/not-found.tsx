import Link from "next/link";
import Image from "next/image";
import { HiArrowLeft, HiOutlineHome, HiOutlineEnvelope } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <Image
        src="/img/hero-img.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Back */}
      <Link
        href="/"
        className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <HiArrowLeft className="h-4 w-4" />
        Home
      </Link>

      {/* Card */}
      <div className="relative flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-md">
        <span className="font-display text-8xl font-semibold text-white/20">404</span>

        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <HiOutlineHome className="h-4 w-4" />
            Go home
          </Link>
          <Link
            href="/contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <HiOutlineEnvelope className="h-4 w-4" />
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
