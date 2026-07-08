import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export const terminals: Terminal[] = [
  {
    name: "Alsancak Cruise Terminal",
    quay: "Konak waterfront — central Izmir cruise berths",
    usedBy:
      "Most mainstream cruise lines calling at Izmir (MSC, Costa, Celebrity, Norwegian, Royal Caribbean and similar)",
    cityAccess:
      "10–15 min walk or short taxi to Konak Square and Kemeralti Bazaar; 60–90 min drive to Ephesus",
  },
  {
    name: "Port of Izmir — North Quay",
    quay: "Northern section of the commercial/cruise port",
    usedBy: "Larger vessels and peak-season scheduling",
    cityAccess:
      "Same terminal area — follow gangway signs to taxi rank or port exit toward Alsancak promenade",
  },
  {
    name: "Alternate berths",
    quay: "Occasional use when scheduling requires",
    usedBy: "Smaller ships or exceptional port arrangements",
    cityAccess:
      "Confirm your berth on cruise documents — taxi to city centre or Ephesus coach pickup point",
  },
];

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideSections: PortGuideSection[] = [
  {
    heading: "Where cruise ships dock in Izmir",
    paragraphs: [
      "Cruise ships berth at the Port of Izmir along the Alsancak waterfront — a working Aegean port that doubles as the gateway to Ephesus, one of the Mediterranean's most important ancient sites. Unlike remote industrial ports, Izmir's cruise berths sit close enough to the city centre for a meaningful urban day, yet far enough from Selçuk that Ephesus requires a planned transfer.",
      "Most passengers disembark into the Konak/Alsancak area where the Kordon promenade, Konak Clock Tower and Kemeralti Bazaar are within reach. Your cruise documents confirm the exact berth and gangway location.",
    ],
  },
  {
    heading: "Distance to city centre and Ephesus",
    paragraphs: [
      "Izmir city centre (Konak Square, Kemeralti Bazaar, Alsancak waterfront) is roughly 2–4 km from most cruise berths — 10–20 minutes by taxi or a 20–30 minute walk along the Kordon if you enjoy urban strolling.",
      "Ephesus archaeological site at Selçuk lies approximately 80 km south of the port — typically 60–90 minutes each way by coach or private vehicle depending on traffic, especially on summer weekends when Turkish holiday traffic can add time.",
      "The House of the Virgin Mary sits on Bülbüldağ above Ephesus — usually visited in the same transfer window as the ancient city. Şirince village is a further 8 km into the hills beyond Selçuk.",
    ],
  },
  {
    heading: "Taxis, transfers and traffic",
    paragraphs: [
      "Official yellow taxis queue at the port exit. Agree on using the meter or confirm a fixed fare for longer trips to Ephesus before departing. Reputable shore excursions include licensed coaches with cruise-timed returns — the safest option for Ephesus on port days.",
      "City-centre taxis to Kemeralti or Konak are inexpensive. Ephesus transfers require half a day minimum when you include site time and the return drive. Morning departures beat midday heat and afternoon traffic on the İzmir–Aydın highway.",
      "Public transport to Ephesus (train to Selçuk plus taxi) is possible for independent travellers but timing is tight on cruise days — missing the train connection or underestimating the walk at the site creates real return-to-ship risk.",
    ],
  },
  {
    heading: "Currency, tipping and practicalities",
    paragraphs: [
      "The Turkish lira (TRY) is the local currency. Cards are accepted at major sights and restaurants; carry cash for bazaar stalls, small vendors and tips. ATMs are available near the port and in Kemeralti.",
      "Tipping is appreciated — round up taxi fares and leave 10% at sit-down restaurants if service was good. Bargaining is expected in Kemeralti market lanes; museum shops use fixed prices.",
      "Download offline maps and any timed-entry tickets before leaving the ship. Port Wi-Fi may be limited.",
    ],
  },
  {
    heading: "Weather, heat and walking",
    paragraphs: [
      "Izmir enjoys a Mediterranean climate — warm springs and autumns, hot dry summers (June–September), mild wet winters. Ephesus has almost no shade on marble streets; summer temperatures regularly exceed 35°C.",
      "Wear sun protection, a hat and comfortable walking shoes for both city cobbles and Ephesus ruins. Carry at least one litre of water per person for an Ephesus visit.",
      "Spring (April–May) and autumn (September–October) offer the best balance of warmth and manageable crowds for cruise passengers.",
    ],
  },
  {
    heading: "Best excursions by port window",
    paragraphs: [
      "4–5 hours: Izmir city highlights and Kemeralti Bazaar — walkable from the port with time for boyoz, kumru or Turkish coffee.",
      "6 hours: Short Ephesus-focused tour or a thorough Izmir city circuit — choose one, not both.",
      "8 hours: Ephesus plus House of the Virgin Mary — the classic Izmir port-day combination.",
      "10+ hours: Ephesus, Virgin Mary and Şirince village, or Ephesus with a deeper Izmir food and culture afternoon.",
    ],
  },
  {
    heading: "Return-to-ship advice",
    paragraphs: [
      "Confirm your all-aboard time and work backwards. Ephesus tours need 6+ usable hours ashore including transfers. Build a 45–60 minute buffer before all-aboard for traffic on the highway back to the port.",
      "City-only days are more forgiving — Kemeralti and the Kordon are 15–25 minutes from the gangway on foot or by taxi. Still keep 30 minutes before all-aboard.",
      "Ships do not wait. Organised shore excursions track your vessel's departure; independent travellers must monitor the time themselves.",
    ],
  },
];

export const portGuideFaqs: FAQ[] = [
  {
    question: "How far is Ephesus from Izmir cruise port?",
    answer:
      "About 80 km — typically 60–90 minutes each way by road. Allow at least 2.5–3 hours on site plus transfers for a meaningful visit.",
  },
  {
    question: "Can I walk to Izmir city centre from the cruise port?",
    answer:
      "Yes — Konak Square and Kemeralti Bazaar are 20–30 minutes on foot along the Kordon promenade, or a short taxi ride.",
  },
  {
    question: "Is Ephesus doable on a short port call?",
    answer:
      "You need at least 6 usable hours ashore for Ephesus with comfortable return margins. Shorter calls suit Izmir city and Kemeralti instead.",
  },
  {
    question: "Should I book a shore excursion or go independently?",
    answer:
      "Organised tours remove timing risk for Ephesus. Independent travel works for confident passengers with longer port windows who understand train and taxi connections.",
  },
  {
    question: "What currency should I carry?",
    answer:
      "Turkish lira. Cards work at major sites; cash helps in the bazaar and for tips.",
  },
  {
    question: "How hot does it get at Ephesus in summer?",
    answer:
      "Very hot — often 35°C+ with intense sun on exposed marble. Visit early, carry water and wear a hat. Spring and autumn are more comfortable.",
  },
  {
    question: "Where do coaches pick up for Ephesus tours?",
    answer:
      "At or near the cruise terminal exit. Confirm the meeting point on your booking voucher before you leave the ship.",
  },
  {
    question: "Can I combine Ephesus and Izmir city in one day?",
    answer:
      "Only on 10+ hour calls with an organised full-day tour. Standard port windows require choosing Ephesus or the city.",
  },
];
