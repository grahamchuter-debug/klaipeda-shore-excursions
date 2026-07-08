import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getAllFaqs } from "@/data/faqs";

const path = "/faq";

export const metadata = buildMetadata({
  title: "Klaipėda Port Day FAQ",
  description: "Real questions from cruise passengers planning a day in Klaipėda — Old Town, Curonian Spit, timing, independence and return-to-ship advice.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path },
];

export default function FaqPage() {
  const faqs = getAllFaqs();
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), webPageSchema({ title: "Klaipėda Port Day FAQ", description: "Questions from cruise passengers planning Klaipėda.", path })]} />
      <PageHero title="Questions fellow cruisers actually ask" subtitle="The things you'd ask a well-travelled friend who knows this port — answered honestly." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <FAQSection faqs={faqs} title="All questions" />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
