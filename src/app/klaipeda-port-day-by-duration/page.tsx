import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "klaipeda-port-day-by-duration";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
