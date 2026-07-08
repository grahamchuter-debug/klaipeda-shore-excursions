import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Klaipėda Shore Excursions",
  description: "About Klaipėda Shore Excursions — an independent planning resource helping Baltic cruise passengers choose the best day ashore in Klaipėda and the Curonian Spit.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Klaipėda Shore Excursions", description: "About Klaipėda Shore Excursions.", path })]} />
      <PageHero title="About Klaipėda Shore Excursions" subtitle="Find the best version of your day ashore — an independent planning resource for Baltic cruise passengers." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Klaipėda on the Baltic Sea. Many passengers arrive unsure whether to explore the Old Town, cross to the Curonian Spit, or simply wander the harbour at their own pace. Our goal is to help you make that decision confidently.
            </p>
            <p>
              We focus on practical port-day decisions: which excursions fit your hours ashore, whether the Curonian Spit is realistic for your schedule, when a city tour beats a dune expedition, and how to build a comfortable return buffer before all-aboard. Every guide is written for real cruise timings, not generic Lithuania tourism.
            </p>
            <p>
              We are not affiliated with any cruise line, tour operator or the Port of Klaipėda. Use our enquiry form or cruise planner for personalised advice on your ship and interests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
