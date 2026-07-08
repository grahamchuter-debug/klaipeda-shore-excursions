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
  "Tell us your ship, arrival and departure times — get honest advice on how to spend your Klaipėda port day, matched to your hours ashore.";

export const metadata = buildMetadata({
  title: "Klaipėda Cruise Planner",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Klaipėda cruise planner", "plan Klaipėda port day", "Klaipėda shore day planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Cruise Planner", path },
];

export default function KlaipedaCruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Klaipėda Cruise Planner", description, path })]} />
      <PhotoHeroBand
        image={image}
        eyebrow="Plan around your ship"
        title="Let's figure out your Klaipėda day together"
        subtitle="Your ship, your hours ashore, your pace — tell us what you're working with and we'll point you in the right direction."
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
