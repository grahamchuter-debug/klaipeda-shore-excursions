export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Cruise ship Costa Pacifica at Klaipėda cruise terminal on the Baltic Sea",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Theatre Square in Klaipėda Old Town with the Annchen von Tharau statue",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Klaipėda Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Cruise ship at Klaipėda cruise terminal, Lithuania",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  klaipeda: {
    src: `${B}/klaipeda.jpg`,
    alt: "Theatre Square in Klaipėda Old Town, Lithuania",
  },
  "old-town": {
    src: `${B}/old-town.jpg`,
    alt: "Friedrich Passage fachwerk architecture in Klaipėda Old Town",
  },
  "curonian-spit": {
    src: `${B}/curonian-spit.jpg`,
    alt: "Sand dunes and pine forest on the Curonian Spit UNESCO site, Lithuania",
  },
  nida: {
    src: `${B}/nida.jpg`,
    alt: "Nida fishing village on the Curonian Spit, Lithuania",
  },
  harbour: {
    src: `${B}/harbour.jpg`,
    alt: "Port of Klaipėda harbour on the Baltic Sea",
  },
  private: {
    src: `${B}/private.jpg`,
    alt: "Ferry from Klaipėda to the Curonian Spit at Smiltynė",
  },
  relaxed: {
    src: `${B}/relaxed.jpg`,
    alt: "Theatre Square in Klaipėda — relaxed Old Town atmosphere",
  },
  historic: {
    src: `${B}/historic.jpg`,
    alt: "Klaipėda Drama Theatre and historic architecture in the Old Town",
  },
  planner: {
    src: `${B}/planner.jpg`,
    alt: "Cruise ship at Klaipėda terminal — planning your port day",
  },
  highlights: {
    src: `${B}/highlights.jpg`,
    alt: "Sand dunes at Nida on the Curonian Spit, Lithuania",
  },
  "port-day": {
    src: `${B}/cruise-port.jpg`,
    alt: "Klaipėda cruise terminal — planning your port day by ship schedule",
  },
  comparison: {
    src: `${B}/comparison.jpg`,
    alt: "Ferry crossing from Klaipėda to the Curonian Spit — comparing city and nature days",
  },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "klaipeda-city-walking-tour": "klaipeda",
  "curonian-spit-nida-tour": "curonian-spit",
  "private-klaipeda-tour": "private",
  "relaxed-old-town-harbour-day": "relaxed",
  "klaipeda-historic-highlights-tour": "historic",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "klaipeda");
}

export const excursionsHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  "klaipeda-city-vs-curonian-spit": "comparison",
  "curonian-spit-from-klaipeda": "curonian-spit",
  "is-klaipeda-worth-visiting": "klaipeda",
  "klaipeda-port-day-by-duration": "port-day",
  "klaipeda-cruise-port-guide": "port",
  "best-klaipeda-shore-excursions": "highlights",
  "independent-klaipeda-exploration": "relaxed",
};

export function getGuideImage(key: string): SiteImage {
  return pick(guideImageKeys[key] ?? key);
}

const experiencePathImages: Record<string, string> = {
  "editors-choice": "klaipeda",
  "historic-klaipeda": "historic",
  "curonian-spit": "curonian-spit",
  "private-experience": "private",
  "relaxed-day": "relaxed",
};

export function getExperiencePathImage(pathId: string): SiteImage {
  return pick(experiencePathImages[pathId] ?? "klaipeda");
}
