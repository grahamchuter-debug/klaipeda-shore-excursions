import klaipedaSchedule from "./imported-schedules/klaipeda.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "klaipeda",
    name: "Klaipėda",
    country: "Lithuania",
    seoTitle: "Klaipėda Cruise Ship Schedule",
    metaDescription:
      "Klaipėda cruise ship schedule hub. See which ships are in port and plan Old Town, Curonian Spit and Baltic shore excursions around arrival and departure times.",
    description:
      "Klaipėda is a key Baltic cruise port — gateway to the Curonian Spit and Lithuania's coastal heritage. Check which vessels are scheduled before booking excursions.",
    intro:
      "Klaipėda sees cruise traffic from May through September on the Baltic circuit, with peak calls in June, July and August.",
    scheduleOverview:
      "Schedule data is updated periodically from published cruise timetables. Always confirm times with your cruise line.",
    planningTips: [
      "Confirm your all-aboard time before booking Curonian Spit excursions",
      "Short port calls suit Old Town walking tours; full days suit the Spit",
      "Build 30 minutes return margin for city tours, 45 for Spit day trips",
    ],
    faqs: [
      {
        question: "When is Klaipėda cruise season?",
        answer: "Most calls run from May through September, with peak traffic in summer months.",
      },
    ],
  },
];

const schedules: Record<string, ScheduleEntry[]> = {
  klaipeda: klaipedaSchedule as ScheduleEntry[],
};

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return schedules[slug] ?? [];
}
