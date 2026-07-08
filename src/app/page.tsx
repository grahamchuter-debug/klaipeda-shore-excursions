import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/HomeHero";
import { TrustValueStrip } from "@/components/TrustValueStrip";
import { ExperiencePathSelector } from "@/components/ExperiencePathSelector";
import { ExcursionComparisonTable } from "@/components/ExcursionComparisonTable";
import { EditorsRecommendation } from "@/components/EditorsRecommendation";
import { FeaturedExcursionsSection } from "@/components/FeaturedExcursionsSection";
import { CruiseFlexBlock } from "@/components/CruiseFlexBlock";
import { PrivateTourGuidance } from "@/components/PrivateTourGuidance";
import { PlanningGuideEditorial } from "@/components/PlanningGuideEditorial";
import { KlaipedaCruisePlannerSection } from "@/components/KlaipedaCruisePlannerSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Find the Best Version of Your Day Ashore in Klaipėda",
  description: SITE.description,
  path: "/",
  keywords: [
    "Klaipėda cruise port planner",
    "Klaipėda port day guide",
    "Curonian Spit cruise planning",
    "Klaipėda Old Town",
    "Baltic cruise port planning",
  ],
});

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Find the Best Version of Your Day Ashore in Klaipėda",
            description: SITE.tagline,
            path: "/",
          }),
        ]}
      />

      <HomeHero />
      <TrustValueStrip />
      <ExperiencePathSelector />
      <ExcursionComparisonTable />
      <EditorsRecommendation />
      <FeaturedExcursionsSection excursions={featured} />
      <CruiseFlexBlock />
      <PrivateTourGuidance />
      <PlanningGuideEditorial />
      <KlaipedaCruisePlannerSection />
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Questions fellow cruisers actually ask" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
