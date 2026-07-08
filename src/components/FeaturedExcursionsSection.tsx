import Link from "next/link";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import type { ExcursionPage } from "@/data/types";

export function FeaturedExcursionsSection({ excursions }: { excursions: ExcursionPage[] }) {
  return (
    <section className="section-padding bg-white" id="recommendations">
      <div className="container-wide">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Curated for cruise passengers</p>
            <h2 className="section-title mt-2">Featured excursions</h2>
            <p className="section-subtitle">
              Every tour below includes our editorial verdict — not marketing copy, but honest guidance on who each excursion genuinely suits.
            </p>
          </div>
          <Link href="/shore-excursions" className="btn-secondary shrink-0">
            View all excursions
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
