"use client";

import { useState } from "react";
import Link from "next/link";
import { siteImages } from "@/lib/images";

const INTERESTS = [
  "Old Town & architecture",
  "Nature & dunes",
  "Photography",
  "Food & cafés",
  "Family-friendly",
  "Relaxed pace",
];

const WALKING_OPTIONS = [
  "Comfortable — happy to walk 4+ km",
  "Moderate — prefer shorter distances",
  "Limited — minimal walking preferred",
];

export function KlaipedaCruisePlannerSection() {
  const [ship, setShip] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [walking, setWalking] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleInterest(interest: string) {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest],
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden" id="cruise-planner">
      <img
        src={siteImages.port.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-coastal-900/88" aria-hidden="true" />
      <div className="section-padding relative z-10 text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-coastal-300">AI cruise planner — coming soon</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Tell us your ship.<br className="hidden sm:block" /> We&apos;ll recommend your perfect day ashore.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Ship, schedule, walking ability and interests — we are building an AI planner that matches your exact port window to the right Klaipėda experience. For now, explore the form below and browse our editorial recommendations.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div>
                <label htmlFor="ship" className="block text-sm font-medium text-white/90">Ship</label>
                <input
                  id="ship"
                  type="text"
                  value={ship}
                  onChange={(e) => setShip(e.target.value)}
                  placeholder="e.g. MSC Euribia"
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="arrival" className="block text-sm font-medium text-white/90">Arrival time</label>
                  <input
                    id="arrival"
                    type="time"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
                  />
                </div>
                <div>
                  <label htmlFor="departure" className="block text-sm font-medium text-white/90">Departure time</label>
                  <input
                    id="departure"
                    type="time"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="walking" className="block text-sm font-medium text-white/90">Walking ability</label>
                <select
                  id="walking"
                  value={walking}
                  onChange={(e) => setWalking(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
                >
                  <option value="" className="text-gray-900">Select your comfort level</option>
                  {WALKING_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="text-gray-900">{opt}</option>
                  ))}
                </select>
              </div>
              <fieldset>
                <legend className="block text-sm font-medium text-white/90">Interests</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        interests.includes(interest)
                          ? "bg-maple-500 text-white"
                          : "border border-white/25 bg-white/10 text-white/90 hover:bg-white/20"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button type="submit" className="btn-accent w-full sm:w-auto">
                Get my recommendation
              </button>
            </form>

            {submitted && (
              <div className="mt-6 rounded-xl border border-maple-400/30 bg-maple-500/10 p-5">
                <p className="font-semibold text-maple-200">Thanks — your planner request is noted.</p>
                <p className="mt-2 text-sm text-white/80">
                  Full AI recommendations are coming soon. For now, browse our{" "}
                  <Link href="/shore-excursions" className="font-medium text-maple-300 underline hover:text-maple-200">editorial excursion picks</Link>{" "}
                  or use our{" "}
                  <Link href="/#which-excursion" className="font-medium text-maple-300 underline hover:text-maple-200">comparison guide</Link>{" "}
                  to match your {arrival && departure ? `${arrival}–${departure}` : "schedule"}.
                </p>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link href="/klaipeda-cruise-planner" className="text-sm font-medium text-coastal-300 hover:text-white">
                Open full cruise planner page →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
