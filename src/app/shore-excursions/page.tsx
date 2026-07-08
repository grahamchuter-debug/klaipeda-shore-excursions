import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { excursionsHubImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Ways to Spend Your Day in Klaipėda",
  description:
    "Compare your Klaipėda port day options — Old Town, Curonian Spit, private days and relaxed harbour wanders. Honest guidance on who each suits and how long it needs.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: ["Klaipėda port day options", "Curonian Spit planning", "Klaipėda Old Town guide"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Your Options", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Ways to Spend Your Day in Klaipėda", description: "Compare your Klaipėda port day options.", path: "/shore-excursions" })]} />
      <PhotoHeroBand
        image={excursionsHubImage}
        eyebrow="When you know the kind of day you want"
        title="How could you spend your day in Klaipėda?"
        subtitle="Practical templates for different port days — each with our honest take on timing, walking, return confidence, and who it genuinely suits."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mb-8 max-w-3xl text-gray-700 leading-relaxed">
            These pages exist to help you decide — not to rush you into booking. Read the editorial note on each, check the return-to-ship snapshot, and use our{" "}
            <Link href="/klaipeda-city-vs-curonian-spit" className="font-medium text-coastal-700 hover:underline">Old Town vs Curonian Spit guide</Link>{" "}
            if you&apos;re still weighing the big question.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => (
              <FeaturedExcursionCard key={e.slug} excursion={e} showEditorialNote />
            ))}
          </div>
          <EnquiryCTA />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
