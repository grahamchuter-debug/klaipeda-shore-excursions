import { excursions } from "./excursions";

export type VisitorTypeId = "port-day" | "embarking" | "disembarking" | "staying";

export interface PlannerInput {
  visitorType: VisitorTypeId;
  timeframe: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "ephesus", label: "Ephesus & ancient ruins" },
  { id: "virgin-mary", label: "House of the Virgin Mary" },
  { id: "sirince", label: "Şirince village & wine" },
  { id: "city", label: "Izmir city & Kemeralti" },
  { id: "food", label: "Turkish food & meze" },
  { id: "coast", label: "Aegean coast scenery" },
  { id: "history", label: "Ancient history depth" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  ephesus: ["ephesus-tour-from-izmir", "ancient-ephesus-highlights-tour", "izmir-and-ephesus-full-day-tour"],
  "virgin-mary": ["ephesus-and-house-of-virgin-mary-tour", "ephesus-tour-from-izmir", "izmir-and-ephesus-full-day-tour"],
  sirince: ["sirince-village-tour", "izmir-and-ephesus-full-day-tour", "private-izmir-shore-excursion"],
  city: ["izmir-city-highlights-tour", "kemeralti-bazaar-tour", "turkish-food-experience"],
  food: ["turkish-food-experience", "kemeralti-bazaar-tour", "izmir-city-highlights-tour"],
  coast: ["aegean-coast-scenic-tour", "sirince-village-tour", "private-izmir-shore-excursion"],
  history: ["ancient-ephesus-highlights-tour", "ephesus-tour-from-izmir", "ephesus-and-house-of-virgin-mary-tour"],
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

export function generateIzmirPlan(input: PlannerInput): PlannerResult {
  const { visitorType, timeframe, adults, children, interests, mobility, style } = input;
  const party = adults + children;
  const hasKids = children > 0;

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  const activeInterests = interests.length ? interests : ["ephesus", "history"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("izmir-city-highlights-tour");
  if (mobility === "limited") pushSlug("private-izmir-shore-excursion");
  if (style === "diy") pushSlug("izmir-city-highlights-tour");

  const shortDay = visitorType === "port-day" && timeframe === "short";
  if (visitorType === "port-day") {
    if (shortDay) pushSlug("kemeralti-bazaar-tour");
    else if (timeframe === "long") pushSlug("ephesus-and-house-of-virgin-mary-tour");
    else pushSlug("ephesus-tour-from-izmir");
  }

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => {
      const e = excursions.find((x) => x.slug === s);
      return excursionLink(s, e?.tagline ?? "A strong match for your interests.");
    })
    .filter((x): x is PlannerLink => x !== null);

  const transfers: PlannerLink[] = [
    {
      label: "Izmir Cruise Port Guide",
      href: "/izmir-cruise-port-guide",
      why: "Distances to Ephesus and the city, taxis and return-to-ship timing.",
    },
    {
      label: "Ephesus from Izmir Cruise Port",
      href: "/ephesus-from-izmir-cruise-port",
      why: "The flagship guide for the ancient city — travel times and what to see.",
    },
  ];

  const stay: PlannerLink[] = [];
  if (visitorType === "embarking" || visitorType === "staying") {
    stay.push({
      label: "Best Time to Visit Izmir",
      href: "/best-time-to-visit-izmir",
      why: "Seasons, heat and crowd patterns for your cruise dates.",
    });
  }

  const logistics: PlannerLink[] = [];
  if (visitorType === "port-day") {
    logistics.push({
      label: "Izmir Cruise Ship Schedule",
      href: "/izmir-cruise-ship-schedule",
      why: "Check how many ships share your port day before booking.",
    });
    logistics.push({
      label: "One Day in Izmir from a Cruise Ship",
      href: "/one-day-in-izmir-from-a-cruise-ship",
      why: "A realistic plan built around your hours ashore.",
    });
    logistics.push({
      label: "Best Izmir Shore Excursions",
      href: "/best-izmir-shore-excursions",
      why: "Compare guided options with honest return-to-ship notes.",
    });
  }

  const dayPlan: { time: string; text: string }[] = [];
  if (visitorType === "port-day") {
    const topExc = excursionLinks[0]?.label ?? "Ephesus";
    dayPlan.push({
      time: "On arrival",
      text: "Disembark at Alsancak and meet your coach or head to Kemeralti — allow 15 minutes to clear the terminal.",
    });
    dayPlan.push({
      time: "Morning",
      text: shortDay
        ? "Explore Kemeralti Bazaar and Konak — boyoz breakfast and the Clock Tower."
        : `Depart early for ${topExc}. Beat midday heat and coach convoys at Ephesus.`,
    });
    dayPlan.push({
      time: "Midday",
      text: interests.includes("food")
        ? "Lunch in Kemeralti or a meze stop near the Kordon waterfront."
        : shortDay
          ? "Turkish coffee and waterfront stroll along the Kordon."
          : "On-site at Ephesus — carry water and take shade breaks.",
    });
    if (timeframe !== "short")
      dayPlan.push({
        time: "Afternoon",
        text: interests.includes("sirince")
          ? "Şirince village wine and stone lanes before the highway back to port."
          : "Return from Ephesus or explore Alsancak before heading back to the ship.",
      });
    dayPlan.push({
      time: "Return buffer",
      text: "Be back at the port at least 45–60 minutes before all-aboard after Ephesus; 30 minutes for city-only days.",
    });
  } else if (visitorType === "embarking") {
    dayPlan.push({
      time: "On landing",
      text: "Transfer from Izmir Adnan Menderes Airport (ADB) to the port area (45–60 min) or a city hotel.",
    });
    dayPlan.push({
      time: "Check-in window",
      text: "Arrive at the cruise terminal at the start of your check-in window.",
    });
    dayPlan.push({
      time: "Spare time",
      text: "If you have hours before boarding, walk Kemeralti or the Kordon promenade — both are feasible from Alsancak.",
    });
  } else if (visitorType === "disembarking") {
    dayPlan.push({ time: "07:00–09:30", text: "Disembark. Have your onward transfer to ADB arranged in advance." });
    dayPlan.push({
      time: "Spare hours",
      text: "Enjoy boyoz, bazaar browsing or a final Aegean coffee before your flight.",
    });
    dayPlan.push({
      time: "To the airport",
      text: "Head to ADB with a comfortable buffer; pre-book an afternoon transfer.",
    });
  } else {
    dayPlan.push({
      time: "Choose a base",
      text: "Alsancak/Konak for port proximity; Selçuk if you want Ephesus at dawn before crowds.",
    });
    dayPlan.push({
      time: "Day 1",
      text: "Ephesus, House of the Virgin Mary and optional Şirince village.",
    });
    dayPlan.push({
      time: "Day 2",
      text: "Izmir city — Kemeralti Bazaar, Konak Clock Tower and Aegean seafood on the Kordon.",
    });
  }

  const typeLabels: Record<VisitorTypeId, string> = {
    "port-day": "Izmir Port-Day Plan",
    embarking: "Izmir Embarkation Plan",
    disembarking: "Izmir Disembarkation Plan",
    staying: "Izmir Pre/Post-Cruise Plan",
  };

  const summaries: Record<VisitorTypeId, string> = {
    "port-day": `A ${timeframe === "short" ? "short" : timeframe === "long" ? "long" : "standard"} port day for ${party} guest${party === 1 ? "" : "s"} focused on ${activeInterests.map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i).join(", ").toLowerCase()}.`,
    embarking: `An embarkation plan for ${party} guest${party === 1 ? "" : "s"} — Alsancak timing and what to see before you board.`,
    disembarking: `A disembarkation plan for ${party} guest${party === 1 ? "" : "s"} — getting to the airport smoothly.`,
    staying: `A pre/post-cruise stay for ${party} guest${party === 1 ? "" : "s"} — Ephesus, city and Aegean coast options.`,
  };

  return {
    headline: typeLabels[visitorType],
    summary: summaries[visitorType],
    excursions: excursionLinks,
    transfers,
    stay,
    logistics,
    dayPlan,
  };
}
