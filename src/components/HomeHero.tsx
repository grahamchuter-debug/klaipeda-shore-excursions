import Link from "next/link";
import { siteImages } from "@/lib/images";

export function HomeHero() {
  return (
    <section className="home-hero min-h-[85vh] flex items-center">
      <img
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden="true" />
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow mb-3 text-coastal-100/90">Baltic cruise port · Lithuania</p>
        <h1 className="home-hero-heading">
          Find the Best Version of Your Day Ashore in Klaipėda
        </h1>
        <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-snug text-white/95 sm:text-2xl">
          A port city where Baltic light meets centuries of harbour life — and where the right day ashore depends on more than a brochure headline.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Klaipėda offers charming old streets shaped by German heritage, Lithuania&apos;s beautiful coastline and the spectacular Curonian Spit — a UNESCO sand peninsula unlike anywhere else on your cruise. We help you choose the day that fits your ship, your pace and what you actually want from Lithuania.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="#recommendations" className="btn-accent">
            Explore Recommended Experiences
          </Link>
          <Link
            href="#cruise-planner"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Plan My Perfect Port Day
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
