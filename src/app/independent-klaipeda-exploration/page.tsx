import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "independent-klaipeda-exploration";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
