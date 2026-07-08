import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-coastal-800 to-coastal-900 text-white">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Your day ashore should be a highlight — not a gamble
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          We&apos;re with you from the moment you start planning until you&apos;re back on board. Compare your options, ask us anything, and choose the day that actually fits.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/klaipeda-cruise-planner" className="btn-accent">
            Plan around my ship
          </Link>
          <Link
            href="/enquire"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Talk to a planner
          </Link>
        </div>
      </div>
    </section>
  );
}
