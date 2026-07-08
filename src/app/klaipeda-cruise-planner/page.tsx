import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { PlanningLinks } from "@/components/PlanningLinks";
import { KlaipedaCruisePlannerSection } from "@/components/KlaipedaCruisePlannerSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { subjectImages } from "@/lib/images";

const path = "/klaipeda-cruise-planner";
const image = subjectImages.planner;

const description =
  "Tell us your ship, arrival and departure times — get a tailored Klaipėda shore excursion recommendation for your Baltic port day.";

export const metadata = buildMetadata({
  title: "Klaipėda Cruise Planner",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Klaipėda cruise planner", "plan Klaipėda port day", "Klaipėda shore excursion planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Klaipėda Cruise Planner", path },
];

export default function KlaipedaCruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Klaipėda Cruise Planner", description, path })]} />
      <PhotoHeroBand
        image={image}
        eyebrow="Ship-aware planning"
        title="Klaipėda Cruise Planner"
        subtitle="Tell us your ship, arrival time and departure time — we'll recommend the best Klaipėda shore excursion for your day in port."
        compact
      />
      <KlaipedaCruisePlannerSection />
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <PlanningLinks />
        </div>
      </section>
    </>
  );
}
