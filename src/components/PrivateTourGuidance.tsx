import Link from "next/link";

const PRIVATE_SUIT = [
  "Want flexibility over a fixed coach timetable",
  "Love photography and need time for the right light",
  "Have mobility considerations that group tours cannot accommodate",
  "Travel with family and need breaks on your schedule",
  "Prefer a quieter experience without a bus full of strangers",
];

export function PrivateTourGuidance() {
  return (
    <section className="section-padding bg-white" id="private-tour-guidance">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl">
          <p className="section-eyebrow">Honest advice</p>
          <h2 className="section-title mt-2">Should you choose a private tour?</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="card-feature">
              <h3 className="font-display text-xl font-bold text-gray-900">Private tours are perfect if you...</h3>
              <ul className="mt-5 space-y-3">
                {PRIVATE_SUIT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coastal-100 text-xs text-coastal-700" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-accent">
              <h3 className="font-display text-xl font-bold text-gray-900">However...</h3>
              <p className="mt-5 text-sm leading-relaxed text-gray-700">
                Many cruise passengers are perfectly served by the city walking tour. It covers the essential Old Town, harbour and heritage in 3–4 hours with high return confidence — without the premium of a private vehicle.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                We recommend whichever genuinely suits your day, not whichever costs more. If you are a first-time visitor with a standard port call and no special requirements, the city tour is likely your best choice.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/shore-excursions/private-klaipeda-tour" className="btn-secondary text-sm">
                  Private tour details
                </Link>
                <Link href="/shore-excursions/klaipeda-city-walking-tour" className="text-sm font-semibold text-maple-600 hover:text-maple-700">
                  City tour instead →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
