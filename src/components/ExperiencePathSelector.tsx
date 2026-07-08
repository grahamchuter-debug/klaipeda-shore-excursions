import Link from "next/link";
import { experiencePaths } from "@/data/homepage";
import { getExperiencePathImage } from "@/lib/images";

export function ExperiencePathSelector() {
  return (
    <section className="section-padding bg-coastal-50/60" id="experience-paths">
      <div className="container-wide">
        <p className="section-eyebrow">Choose your experience</p>
        <h2 className="section-title mt-2">How would you like to experience Klaipėda?</h2>
        <p className="section-subtitle">
          Five genuinely different ways to spend your day ashore — each with editorial guidance on why it might be right for you, not just what it includes.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiencePaths.map((path, index) => {
            const image = getExperiencePathImage(path.id);
            const isEditorsChoice = path.id === "editors-choice";
            return (
              <Link
                key={path.id}
                href={path.scrollTo}
                className={`card-editorial group flex h-full flex-col overflow-hidden ${isEditorsChoice ? "ring-2 ring-maple-400/50" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/70 via-coastal-900/20 to-transparent" aria-hidden="true" />
                  {isEditorsChoice && (
                    <span className="absolute left-4 top-4 pill-accent bg-maple-500/90 text-white">Editor&apos;s Choice</span>
                  )}
                  <span className="absolute bottom-4 left-4 font-display text-3xl font-bold text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-coastal-800">
                    {path.label}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{path.description}</p>
                  <p className="mt-4 text-xs font-medium tracking-wide text-coastal-700">{path.suits}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-maple-600">
                    Read our guidance
                    <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
