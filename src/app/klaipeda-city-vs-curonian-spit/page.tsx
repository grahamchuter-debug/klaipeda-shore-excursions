import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "klaipeda-city-vs-curonian-spit";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
