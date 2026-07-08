import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "best-klaipeda-shore-excursions";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
