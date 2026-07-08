import Link from "next/link";
import { getExcursionImage } from "@/lib/images";

const RECOMMENDED_SLUG = "klaipeda-city-walking-tour";

export function EditorsRecommendation() {
  const image = getExcursionImage(RECOMMENDED_SLUG);

  return (
    <section className="section-padding bg-coastal-50/40" id="editors-recommendation">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coastal-900/10 lg:bg-gradient-to-t lg:from-coastal-900/40 lg:to-transparent" aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="section-eyebrow">If we only had one day here</p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                This is exactly how we&apos;d spend it
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  Slow coffee near Theatre Square while the harbour is still quiet. A wander through the fachwerk lanes before the coaches arrive — the light on the cobblestones before 10am is worth setting an alarm for.
                </p>
                <p>
                  Then the Dane River embankment: fishing boats, Baltic air, nowhere particular to be. If we had six hours or more, we&apos;d ferry to the Curonian Spit for the afternoon dunes. If time was tight, we&apos;d stay in the Old Town rather than rush a landscape we couldn&apos;t properly enjoy.
                </p>
                <p>
                  That rhythm — unhurried city morning, optional Spit afternoon — respects both sides of Klaipėda without gambling your return time. It&apos;s the day we&apos;d want someone to talk us through on our first visit.
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-maple-200/60 bg-maple-50/50 p-5">
                <p className="text-sm font-medium text-gray-900">
                  Prefer not to piece it together yourself?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  An organised city morning covers the same ground — useful if you&apos;d rather have the logistics sorted and a guide who knows the return timing.
                </p>
                <Link
                  href={`/shore-excursions/${RECOMMENDED_SLUG}`}
                  className="btn-accent mt-4 inline-flex"
                >
                  See how this day works in practice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
