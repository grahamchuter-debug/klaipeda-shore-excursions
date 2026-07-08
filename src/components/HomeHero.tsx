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
        <p className="section-eyebrow mb-3 text-coastal-100/90">Klaipėda cruise port · Lithuania</p>
        <h1 className="home-hero-heading">
          Find the Best Version of Your Day Ashore in Klaipėda
        </h1>
        <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-snug text-white/95 sm:text-2xl">
          Most port websites want to sell you a tour. We&apos;d rather help you choose a brilliant day — then decide later if you want someone to organise it.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Old Town lanes and German heritage. A harbour that still feels alive. And the Curonian Spit — a UNESCO sand peninsula unlike anywhere else on your itinerary. The question isn&apos;t whether Klaipėda is worth your time. It&apos;s how to spend the hours you actually have.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/#which-excursion" className="btn-accent">
            Help me choose my day
          </Link>
          <Link
            href="#cruise-planner"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Plan around my ship
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
