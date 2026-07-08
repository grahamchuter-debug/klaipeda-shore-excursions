import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs, guides } from "@/data/guides";

export const dynamic = "force-static";

const NOINDEX_PATHS = new Set(["/privacy", "/terms"]);

const TIER1_PRIORITY = new Set([
  "/",
  "/klaipeda-cruise-port-guide",
  "/klaipeda-city-vs-curonian-spit",
  "/best-klaipeda-shore-excursions",
  "/curonian-spit-from-klaipeda",
  "/is-klaipeda-worth-visiting",
  "/klaipeda-port-day-by-duration",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/klaipeda-cruise-port-guide",
    "/best-klaipeda-shore-excursions",
    "/klaipeda-cruise-planner",
    "/faq",
    "/enquire",
    "/about",
  ];

  const guidePages = getAllGuideSlugs()
    .map((slug) => guides.find((g) => g.slug === slug)?.path)
    .filter((p): p is string => Boolean(p));

  const dynamicPages = getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`);

  const all = [...new Set([...staticPages, ...guidePages, ...dynamicPages])].filter(
    (path) => !NOINDEX_PATHS.has(path),
  );

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : TIER1_PRIORITY.has(path) ? 0.9 : 0.7,
    };
  });
}
