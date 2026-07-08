import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "curonian-spit-from-klaipeda";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
