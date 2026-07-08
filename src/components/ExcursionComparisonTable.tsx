import Link from "next/link";
import { excursionComparison } from "@/data/homepage";

export function ExcursionComparisonTable() {
  return (
    <section className="section-padding bg-white" id="which-excursion">
      <div className="container-wide">
        <p className="section-eyebrow">The honest matchmaker</p>
        <h2 className="section-title mt-2">What kind of day suits you?</h2>
        <p className="section-subtitle">
          Not everyone needs the Curonian Spit. Not everyone needs a private vehicle. Tell us who you are and we&apos;ll tell you what tends to work — no brochure nonsense.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <div className="overflow-x-auto">
            <table className="comparison-table w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-coastal-50">
                  <th className="px-6 py-4 text-sm font-semibold text-coastal-900">If this sounds like you…</th>
                  <th className="px-6 py-4 text-sm font-semibold text-coastal-900">This day tends to work</th>
                  <th className="hidden px-6 py-4 text-sm font-semibold text-coastal-900 md:table-cell">Why</th>
                </tr>
              </thead>
              <tbody>
                {excursionComparison.map((row, i) => (
                  <tr
                    key={row.situation}
                    className={`border-b border-gray-100 transition-colors hover:bg-coastal-50/50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.situation}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/shore-excursions/${row.excursionSlug}`}
                        className="text-sm font-semibold text-coastal-700 hover:text-maple-600 hover:underline"
                      >
                        {row.recommendation}
                      </Link>
                    </td>
                    <td className="hidden px-6 py-4 text-sm leading-relaxed text-gray-600 md:table-cell">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Still weighing it up?{" "}
          <Link href="#cruise-planner" className="font-medium text-coastal-700 hover:text-maple-600">
            Tell us your ship and schedule
          </Link>{" "}
          — we&apos;ll point you in the right direction.
        </p>
      </div>
    </section>
  );
}
