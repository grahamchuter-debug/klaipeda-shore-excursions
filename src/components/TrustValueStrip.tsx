const TRUST_POINTS = [
  "Honest advice, not sales copy",
  "Built around your ship schedule",
  "Local knowledge, cruiser perspective",
  "Independent or organised — your call",
  "Here before, during and after port day",
];

export function TrustValueStrip() {
  return (
    <section className="border-b border-coastal-100 bg-white py-6" aria-label="Why cruisers trust this planner">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="inline-flex items-center gap-2.5 text-sm font-medium text-coastal-800">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-coastal-100 text-xs text-coastal-700" aria-hidden="true">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
