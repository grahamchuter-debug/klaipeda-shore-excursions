import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "klaipeda-cruise-port-guide";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
