import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-coastal-800 to-coastal-900 text-white">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Ready to enjoy your perfect day in Klaipėda?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          Browse our recommended excursions — each with honest editorial guidance on who it suits and why.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/shore-excursions" className="btn-accent">
            Browse our recommended excursions
          </Link>
          <Link
            href="/enquire"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Ask a question
          </Link>
        </div>
      </div>
    </section>
  );
}
