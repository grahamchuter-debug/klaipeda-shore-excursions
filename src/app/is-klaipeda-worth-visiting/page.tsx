import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "is-klaipeda-worth-visiting";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
