import Link from "next/link";
import { planningTopics, planningArticles } from "@/data/homepage";

export function PlanningGuideEditorial() {
  return (
    <section className="section-padding bg-coastal-50/60" id="planning-guides">
      <div className="container-wide">
        <p className="section-eyebrow">Planning guide</p>
        <h2 className="section-title mt-2">Everything you need to plan your Klaipėda port day</h2>
        <p className="section-subtitle">
          Long-form editorial guidance on the questions cruise passengers actually ask — written by people who know this port, not SEO algorithms.
        </p>

        <div className="mt-12 space-y-10">
          {planningTopics.map((topic) => (
            <article key={topic.id} className="border-b border-coastal-100 pb-10 last:border-0">
              <h3 className="font-display text-2xl font-semibold text-gray-900">{topic.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">{topic.content}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-bold text-gray-900">Deeper guides</h3>
          <p className="mt-2 text-sm text-gray-600">Extended articles for passengers who want more detail.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {planningArticles.map((article) => (
              <Link key={article.slug} href={article.href} className="nav-card group flex h-full flex-col">
                <h4 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{article.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{article.description}</p>
                <span className="mt-4 text-sm font-semibold text-maple-600">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
