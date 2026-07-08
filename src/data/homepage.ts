import type { ExperiencePath, FAQ } from "./types";

export const experiencePaths: ExperiencePath[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's pick",
    description:
      "Our recommended all-round excursion for a first visit — the Klaipėda City Walking Tour covers Old Town charm, German heritage architecture and harbour atmosphere in a single, well-paced morning. We suggest this when you want one trusted recommendation rather than comparing every option.",
    suits: "Perfect first visit — the best introduction to Klaipėda without overcommitting your port day",
    scrollTo: "#tour-klaipeda-city-walking-tour",
  },
  {
    id: "historic-klaipeda",
    label: "Discover Historic Klaipėda",
    shortLabel: "Historic",
    description:
      "Walking lanes shaped by centuries of Hanseatic trade and German influence. Theatre Square, fachwerk merchants' houses and the Clock Museum quarter reward slow exploration — this is a city best understood on foot, at eye level with its architecture.",
    suits: "Walking · Culture · Architecture — for passengers who want depth over distance",
    scrollTo: "#tour-klaipeda-historic-highlights-tour",
  },
  {
    id: "curonian-spit",
    label: "Curonian Spit",
    shortLabel: "Curonian Spit",
    description:
      "A UNESCO sand peninsula of towering dunes, whispering pine forest and the fishing village of Nida. The landscape is extraordinary — golden sand against dark forest and blue lagoon — and unlike anything else on your Baltic itinerary.",
    suits: "Nature · UNESCO · Photography — needs a full port day (6+ hours)",
    scrollTo: "#tour-curonian-spit-nida-tour",
  },
  {
    id: "private-experience",
    label: "Private Experience",
    shortLabel: "Private",
    description:
      "Your own vehicle, your own pace, your own itinerary. Combine Old Town with the Curonian Spit, add Palanga, linger for photography, or take a gentler route for family members — private tours adapt to you, not the other way around.",
    suits: "Luxury · Families · Flexible itinerary — when control matters more than price",
    scrollTo: "#tour-private-klaipeda-tour",
  },
  {
    id: "relaxed-day",
    label: "Relaxed Day",
    shortLabel: "Relaxed",
    description:
      "Coffee in a courtyard café, a harbour promenade stroll, and time to wander the Old Town without a checklist. A short guided orientation, then the afternoon is yours — the Baltic port day as a holiday should feel.",
    suits: "Coffee · Harbour · Old Town · Independent exploration — the gentlest day ashore",
    scrollTo: "#tour-relaxed-old-town-harbour-day",
  },
];

export interface ComparisonRow {
  situation: string;
  recommendation: string;
  excursionSlug: string;
  reason: string;
}

export const excursionComparison: ComparisonRow[] = [
  {
    situation: "First visit to Klaipėda",
    recommendation: "City Walking Tour",
    excursionSlug: "klaipeda-city-walking-tour",
    reason: "Covers Old Town, harbour and essential heritage in 3–4 hours with high return confidence.",
  },
  {
    situation: "Love nature and landscapes",
    recommendation: "Curonian Spit & Nida",
    excursionSlug: "curonian-spit-nida-tour",
    reason: "UNESCO dunes and pine forest — Lithuania's most spectacular natural scenery.",
  },
  {
    situation: "Travelling with children",
    recommendation: "Private Tour",
    excursionSlug: "private-klaipeda-tour",
    reason: "Flexible pacing, private vehicle and breaks when young passengers need them.",
  },
  {
    situation: "Returning visitor",
    recommendation: "Private Tour",
    excursionSlug: "private-klaipeda-tour",
    reason: "Go beyond the standard highlights — custom stops, longer dune time, or Palanga.",
  },
  {
    situation: "Limited walking ability",
    recommendation: "City Walking Tour",
    excursionSlug: "klaipeda-city-walking-tour",
    reason: "Short distances, flat harbour routes and routes that can be shortened easily.",
  },
  {
    situation: "Photography",
    recommendation: "Curonian Spit & Nida",
    excursionSlug: "curonian-spit-nida-tour",
    reason: "Dunes, lagoon light, Nida village — the region's finest photographic subjects.",
  },
  {
    situation: "Luxury and privacy",
    recommendation: "Private Tour",
    excursionSlug: "private-klaipeda-tour",
    reason: "Exclusive vehicle, personal guide and an itinerary designed entirely for your group.",
  },
];

export interface PlanningTopic {
  id: string;
  title: string;
  content: string;
}

export const planningTopics: PlanningTopic[] = [
  {
    id: "worth-visiting",
    title: "Is Klaipėda worth visiting?",
    content:
      "Absolutely — and more than many cruise passengers realise. Klaipėda is Lithuania's only major seaport, with an Old Town of genuine character: German fachwerk architecture, Theatre Square, harbour life and a café culture that rewards slow wandering. It is not a generic Baltic stop — it has a distinct identity shaped by centuries at the edge of the sea. Even passengers who have seen Tallinn or Riga will find something different here, particularly if they venture to the Curonian Spit.",
  },
  {
    id: "stay-in-klaipeda",
    title: "Should I stay in Klaipėda?",
    content:
      "For a cruise port day, staying in Klaipėda is almost always the right call. Unlike some Baltic ports where the headline attraction lies hours away, Klaipėda's best experiences — Old Town, harbour, Curonian Spit — are all reachable within a comfortable day. There is no need to rush to another city. Passengers who try to combine Klaipėda with Palanga or farther destinations on a single port call often regret the pace. Enjoy Klaipėda properly.",
  },
  {
    id: "curonian-spit",
    title: "Should I visit the Curonian Spit?",
    content:
      "If you have six or more usable hours ashore and any interest in nature or photography, yes — it is the experience that defines this region. The UNESCO sand dunes, pine forests and Nida fishing village are extraordinary. However, on shorter port calls (under 6 hours), the ferry crossing and coach time make it tight. In that case, the city walking tour delivers more value per hour. Be honest about your port window before committing.",
  },
  {
    id: "independent",
    title: "Can I explore independently?",
    content:
      "Yes. The Old Town is compact and walkable from the cruise terminal — a 10–15 minute walk or short taxi ride. Theatre Square, the main lanes and harbour embankment are easy to navigate without a guide. English is widely spoken in tourist areas. The main advantage of an organised excursion is cruise-timed return coordination, local context from a guide, and stress-free Curonian Spit logistics (ferry, coach, timing). Independent exploration works well for relaxed city days; the Spit is harder without transport.",
  },
  {
    id: "short-calls",
    title: "Best excursion for short port calls",
    content:
      "On calls under 5 usable hours, choose the Klaipėda City Walking Tour or Relaxed Old Town & Harbour Day. Both keep you close to the ship, minimise transfer risk and deliver the essential Klaipėda experience. Do not attempt the Curonian Spit — you will spend more time in transit than enjoying the landscape. Late arrivals should default to the city tour every time.",
  },
  {
    id: "long-calls",
    title: "Best excursion for long port calls",
    content:
      "With 7–8+ usable hours, the Curonian Spit & Nida Tour is the headline experience — dunes, forest, Nida village and lagoon views. Alternatively, a private tour combining Old Town morning with Spit afternoon offers the most complete day. Long calls are also when the Historic Highlights Tour makes sense for culture enthusiasts who want museum depth as well as scenery.",
  },
  {
    id: "weather",
    title: "What is the weather normally like?",
    content:
      "Klaipėda is a Baltic port — expect changeable weather year-round. Summer (June–August) brings the warmest temperatures (18–24°C) but also the busiest crowds on the Curonian Spit. Spring and autumn are cooler (8–15°C) but often clearer for photography. Rain is possible in any season; always bring a light waterproof layer. Harbour breezes can feel cool even on sunny days. Winter calls are quiet and atmospheric but cold — focus on Old Town museums and cafés.",
  },
  {
    id: "walking",
    title: "How much walking is involved?",
    content:
      "City tours involve 3–4 km at a relaxed pace on mostly flat terrain, though Old Town cobblestones can be uneven. The Curonian Spit tour includes moderate dune walking — expect 2–3 km on sand paths with some inclines. The Relaxed Day involves the least walking. Private tours adapt to your mobility. If walking is a concern, specify this when booking and choose the city tour or a private format with minimal dune time.",
  },
];

export interface PlanningArticle {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const planningArticles: PlanningArticle[] = [
  {
    slug: "is-klaipeda-worth-visiting",
    title: "Is Klaipėda worth visiting on a cruise day?",
    description:
      "When the Old Town, harbour and Curonian Spit justify your attention — and when to keep expectations realistic.",
    href: "/is-klaipeda-worth-visiting",
  },
  {
    slug: "curonian-spit-from-klaipeda",
    title: "Should I visit the Curonian Spit?",
    description:
      "UNESCO dunes, ferry logistics and whether your port window is long enough for Lithuania's finest landscape.",
    href: "/curonian-spit-from-klaipeda",
  },
  {
    slug: "klaipeda-city-vs-curonian-spit",
    title: "Klaipėda Old Town vs Curonian Spit",
    description:
      "An honest comparison for cruise passengers — city charm versus natural spectacle, and which suits your day.",
    href: "/klaipeda-city-vs-curonian-spit",
  },
  {
    slug: "independent-klaipeda-exploration",
    title: "Can I explore Klaipėda independently?",
    description:
      "Walking routes, terminal distances and when a guide genuinely adds value to your port day.",
    href: "/independent-klaipeda-exploration",
  },
  {
    slug: "klaipeda-port-day-by-duration",
    title: "Best excursions for short and long port calls",
    description:
      "Realistic choices for 4-hour, 6-hour and 8+ hour windows — what fits, what to skip, and return margin.",
    href: "/klaipeda-port-day-by-duration",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "What is the best shore excursion from Klaipėda?",
      answer:
        "For most first-time visitors, the Klaipėda City Walking Tour is our top recommendation — it covers Old Town, harbour and heritage in 3–4 hours with high return confidence. If you have a full port day (6+ hours) and love nature, the Curonian Spit & Nida Tour is the standout experience. See our comparison table on the homepage to match your situation to the right excursion.",
    },
    {
      question: "How far is the Curonian Spit from Klaipėda cruise port?",
      answer:
        "The ferry crossing from Klaipėda to Smiltynė takes 10–15 minutes. Nida village on the Spit is roughly 45 minutes by coach from the ferry terminal. Allow 6–7 hours total for a worthwhile Curonian Spit day including dune time.",
    },
    {
      question: "Can I walk from the cruise terminal to Klaipėda Old Town?",
      answer:
        "Yes — the Old Town is roughly 10–15 minutes on foot from the cruise terminal, or a few minutes by taxi. Theatre Square and the main historic lanes are easy to reach independently.",
    },
    {
      question: "How much time do I need for a Klaipėda shore excursion?",
      answer:
        "City walking tours need 3–4 hours. The Relaxed Old Town day needs 4–5 hours. Curonian Spit tours need 6–7 hours. Private tours range from half-day city visits to full-day Spit combinations. Always build 30 minutes before your all-aboard time.",
    },
    {
      question: "What happens if my ship arrives late?",
      answer:
        "Late arrivals favour local options — city walking tours and relaxed harbour days tolerate compressed schedules far better than Curonian Spit transfers. Contact your excursion provider immediately; reputable operators adjust or offer alternatives.",
    },
    {
      question: "Should I book through the cruise line or independently?",
      answer:
        "Independent excursions are often better value, may offer smaller groups, and include optional CruiseFlex flexible cancellation. The cruise line guarantees return if their tour runs late — reputable independent operators also monitor ship departures. We help you weigh both honestly.",
    },
    {
      question: "What is CruiseFlex?",
      answer:
        "CruiseFlex is an optional booking upgrade that lets you cancel your excursion for any reason up to 24 hours before departure. No medical certificates, no paperwork, no complicated claims. It costs €5 / £5 / $5 per person and is available on selected excursions.",
    },
    {
      question: "Is a private tour worth it in Klaipėda?",
      answer:
        "For families, photographers, returning visitors or passengers with mobility considerations — often yes. For a straightforward first visit with no special requirements, the city walking tour serves most passengers perfectly well. We recommend whichever genuinely suits your day.",
    },
  ];
}
