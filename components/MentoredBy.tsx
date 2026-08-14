import Image from "next/image";

export default function MentoredBy() {
  return (
    <section className="bg-ink-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-sm bg-brand-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Mentored by
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center lg:gap-16">
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl bg-ink-800">
            <Image
              src="/img/team/mentor.png"
              alt="Dr. Richard Gashururu"
              fill
              sizes="(min-width: 1024px) 280px, 60vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-display text-2xl leading-snug text-ink-900 sm:text-3xl">
              &ldquo;Good animal health starts with sound science and mentorship that never
              stops.&rdquo;
            </p>
            <h3 className="mt-6 text-lg font-semibold text-ink-900">Dr. Richard Gashururu</h3>
            <p className="text-sm font-medium text-brand-400">PhD, Mentor</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-ink-500">
              Dr. Gashururu brings his academic and veterinary expertise to guide our team&apos;s
              approach to animal health innovation, helping ensure our work stays grounded in
              sound science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
