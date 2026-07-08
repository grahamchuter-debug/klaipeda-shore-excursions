import Link from "next/link";

export function CruiseFlexBlock() {
  return (
    <section className="section-padding bg-gradient-to-br from-coastal-800 via-coastal-900 to-coastal-800 text-white" id="cruiseflex">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-10 backdrop-blur-sm">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">CruiseFlex Flexible Cancellation</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            For just <strong className="text-white">€5 / £5 / $5 per passenger</strong> you may cancel for <strong className="text-white">any reason</strong> up to 24 hours before departure.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 font-medium">No paperwork</p>
              <p className="mt-1 text-sm text-white/70">Cancel online in seconds</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 font-medium">No medical certificates</p>
              <p className="mt-1 text-sm text-white/70">Any reason is a valid reason</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 font-medium">No complicated claims</p>
              <p className="mt-1 text-sm text-white/70">Simple. Friendly. Stress free.</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/75">
            Plans change. Ships shift schedules. Sometimes you simply want to keep your options open until the day before. CruiseFlex gives you that freedom without the friction.
          </p>
          <p className="mt-3 text-xs text-white/50">
            Available on selected excursions.
          </p>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-accent">
              Browse eligible excursions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
