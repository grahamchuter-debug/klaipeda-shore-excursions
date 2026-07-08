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
              <p className="section-eyebrow">Editor&apos;s recommendation</p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                If we only had one day in Klaipėda...
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  We would start with a slow morning in the Old Town — coffee in a courtyard near Theatre Square, then a walking tour through the fachwerk lanes while the harbour is still quiet. The German heritage architecture is best appreciated before the day-trip coaches arrive; the light on the cobblestones before 10am is worth setting an alarm for.
                </p>
                <p>
                  By late morning we would follow the Dane River to the harbour embankment — watching fishing boats and the Baltic beyond. If our port call allowed six hours or more, we would take the ferry to the Curonian Spit for an afternoon among the dunes. If time was tighter, we would linger in the Old Town instead of rushing a landscape we could not properly enjoy.
                </p>
                <p>
                  This rhythm — unhurried city morning, optional Spit afternoon — creates the best cruise experience because it respects both Klaipėda&apos;s urban character and its natural wonder, without gambling your return time on a coach you cannot control. The atmosphere shifts from intimate lanes to vast dunes; the timing leaves margin before all-aboard.
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-maple-200/60 bg-maple-50/50 p-5">
                <p className="text-sm font-medium text-gray-900">
                  Prefer someone else to organise everything?
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Our City Walking Tour delivers the essential Old Town and harbour experience — the foundation of the perfect Klaipėda day.
                </p>
                <Link
                  href={`/shore-excursions/${RECOMMENDED_SLUG}`}
                  className="btn-accent mt-4 inline-flex"
                >
                  Book this recommended excursion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
