import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Klaipėda?",
    answer:
      "Most ships berth at the Klaipėda cruise terminal, within walking distance of the Old Town. See our port guide for terminal layout, distances and practical timing.",
  },
  {
    question: "What currency is used in Klaipėda?",
    answer:
      "Lithuania uses the euro. Cards are widely accepted in the Old Town; carry a little cash for smaller cafés and market stalls.",
  },
  {
    question: "Do I need a visa for a Klaipėda port day?",
    answer:
      "EU and many other passport holders can go ashore without a separate visa for typical cruise port stays. Check your nationality's requirements before sailing.",
  },
  {
    question: "What language will I hear ashore?",
    answer:
      "Lithuanian is the local language. English is widely spoken in tourist areas and on organised days designed for cruise passengers.",
  },
  {
    question: "Is this site trying to sell me tours?",
    answer:
      "No — we're a planning companion first. We help you choose the right day ashore. If you later decide you want someone to organise the logistics, we can point you there too. But the decision comes first.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
