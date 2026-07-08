import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Klaipėda Port Planner</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">
              {SITE.tagline}. Honest guidance for your day ashore — before you pack, while you&apos;re in port, and long after you&apos;ve sailed on.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/klaipeda-cruise-planner" className="hover:text-white">Cruise Planner</Link></li>
              <li><Link href="/klaipeda-port-day-by-duration" className="hover:text-white">Port Day by Duration</Link></li>
              <li><Link href="/klaipeda-cruise-port-guide" className="hover:text-white">Port Guide</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Your Options</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Make the right call</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/klaipeda-city-vs-curonian-spit" className="hover:text-white">Old Town vs Curonian Spit</Link></li>
              <li><Link href="/curonian-spit-from-klaipeda" className="hover:text-white">Curonian Spit Guide</Link></li>
              <li><Link href="/is-klaipeda-worth-visiting" className="hover:text-white">Is Klaipėda Worth It?</Link></li>
              <li><Link href="/independent-klaipeda-exploration" className="hover:text-white">Going Independent</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">We&apos;re here to help</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/#cruiseflex" className="hover:text-white">CruiseFlex</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Talk to a planner</Link></li>
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent cruise port planning — not affiliated with any cruise line or the Port of Klaipėda.
      </div>
    </footer>
  );
}
