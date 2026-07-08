import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About — Klaipėda Port Planner",
  description: "We're building the trusted cruise port planning companion for Klaipėda — honest guidance for your day ashore, not another tour brochure.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Klaipėda Port Planner", description: SITE.description, path })]} />
      <PageHero title="We're not building excursion websites anymore" subtitle="We're building the companion every cruiser wishes they had before the gangway opens." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} exists for one reason: to help you make a better decision about your day ashore in Klaipėda. Not to sell you the first tour that pays the highest commission. Not to fill a page with SEO fluff. To answer the questions you&apos;re actually asking at breakfast on sea days.
            </p>
            <p>
              Old Town or Curonian Spit? Organised or independent? Enough time, or fooling yourself? We write for experienced cruisers — the ones who&apos;ve been burned by a brochure that promised Hamburg in four hours. Every recommendation passes a simple test: does this help you choose a brilliant day, or does it merely advertise a tour? If it&apos;s the latter, we rewrite it.
            </p>
            <p>
              Think of us as the well-travelled friend who happens to know this port inside out — before you sail, while you&apos;re ashore, and when you&apos;re comparing notes back on board. We&apos;re not affiliated with any cruise line, tour operator or the Port of Klaipėda. Just honest planning, from people who care about your day as much as you do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
