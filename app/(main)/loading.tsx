export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6">
      {/* Brand spinner */}
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-400/20" />
        <span
          className="absolute inset-0 rounded-full border-4 border-ink-100"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-brand-600"
          style={{ animationDuration: "0.8s" }}
          aria-hidden="true"
        />
        <span className="absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-brand-700">
          VT
        </span>
      </div>

      {/* Skeleton content */}
      <div className="flex w-full max-w-xs flex-col items-center gap-2.5">
        <div className="h-2.5 w-48 animate-pulse rounded-full bg-ink-100" />
        <div className="h-2.5 w-36 animate-pulse rounded-full bg-ink-100" style={{ animationDelay: "0.1s" }} />
        <div className="h-2.5 w-44 animate-pulse rounded-full bg-ink-100" style={{ animationDelay: "0.2s" }} />
      </div>
    </div>
  );
}
