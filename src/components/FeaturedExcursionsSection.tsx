import Link from "next/link";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import type { ExcursionPage } from "@/data/types";

export function FeaturedExcursionsSection({ excursions }: { excursions: ExcursionPage[] }) {
  return (
    <section className="section-padding bg-white" id="recommendations">
      <div className="container-wide">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">When you&apos;re ready for specifics</p>
            <h2 className="section-title mt-2">Ways to spend your day ashore</h2>
            <p className="section-subtitle">
              These aren&apos;t tours we&apos;re trying to flog. They&apos;re practical templates — each with our honest take on who it suits, how long it needs, and whether it fits your ship.
            </p>
          </div>
          <Link href="/shore-excursions" className="btn-secondary shrink-0">
            Compare all options
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((excursion) => (
            <FeaturedExcursionCard key={excursion.slug} excursion={excursion} showEditorialNote />
          ))}
        </div>
      </div>
    </section>
  );
}
