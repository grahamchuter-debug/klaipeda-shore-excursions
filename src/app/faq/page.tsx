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
  title: "Klaipėda Cruise Excursion FAQ",
  description: "Frequently asked questions about Klaipėda shore excursions — Curonian Spit, Old Town tours, port timing, CruiseFlex and booking independently.",
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
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), webPageSchema({ title: "Klaipėda Cruise Excursion FAQ", description: "Frequently asked questions about Klaipėda shore excursions.", path })]} />
      <PageHero title="Klaipėda Cruise Excursion FAQ" subtitle="Answers to the most common questions from Klaipėda cruise passengers." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <FAQSection faqs={faqs} title="All FAQs" />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
