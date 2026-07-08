import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Klaipėda?",
    answer:
      "Most cruise ships berth at the Klaipėda cruise terminal, within walking distance of the Old Town. See our Klaipėda Cruise Port Guide for terminal details and distances.",
  },
  {
    question: "What currency is used in Klaipėda?",
    answer:
      "Lithuania uses the euro. Cards are widely accepted in the Old Town and at organised excursion providers; carry some cash for smaller market stalls and cafés.",
  },
  {
    question: "Do I need a visa for shore excursions in Lithuania?",
    answer:
      "EU and many other passport holders can go ashore without a separate visa for typical cruise port stays. Check your nationality's requirements before sailing.",
  },
  {
    question: "What language is spoken on Klaipėda shore excursions?",
    answer:
      "Lithuanian is the local language. Organised shore excursions for cruise passengers typically include English-speaking guides.",
  },
  {
    question: "Are your excursions bookable now?",
    answer:
      "We are an independent Klaipėda cruise planning resource. Our guides and editorial recommendations help you choose the right excursion; use the enquiry form or cruise planner for personalised advice.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
