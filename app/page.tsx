import Link from "next/link";
import type { Metadata } from "next";
import { CHARACTERS } from "@/lib/characters";
import { ICONS } from "@/lib/icons";
import { SiteHeader, Hero, CollectionsStrip, SiteFooter } from "@/components/site-chrome";
import { DoodleView } from "@/components/character-explorer";
import { RetroIconView } from "@/components/retro-icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Free Retro SVG Icons, Doodle Characters, Animals & Caricatures",
  description:
    "Browse 500+ free hand-drawn retro SVG icons plus 250+ doodle characters, animal mascots and caricatures for websites, apps and UI/UX mockups. Click to copy SVG, download SVG + PNG.",
  alternates: { canonical: "/" },
};

const FAQS = [
  {
    q: "What is Retro.Icons?",
    a: "Retro.Icons is a free library of hand-drawn retro SVG icons, doodle human characters, animal mascots and big-head caricatures. Every artwork uses the same thick-ink, paper-warm style so icons and illustrations always match in your UI.",
  },
  {
    q: "Is it really free for commercial use?",
    a: "Yes. All icons, characters, animals and caricatures are free for personal and commercial projects — websites, blogs, news apps, hospital and clinic software, banking and LMS products, AI and Web3 startups included. No attribution required (though it's appreciated).",
  },
  {
    q: "How do I copy or download an SVG?",
    a: "Open the Icons or Characters page, search or filter by collection, then click any card — the clean SVG markup is copied to your clipboard instantly. Open the preview for JSX snippets, framed retro badges, PNG export and per-collection sprite downloads.",
  },
  {
    q: "What characters are included?",
    a: "130+ human doodles (doctors, judges, engineers, athletes, festival characters like Durga and Santa, everyday heroes like chaiwala and auto driver), 70+ animals (lion, elephant, peacock, cobra, cat, dog and more) and 50+ caricatures including star-style legends — superstars, cricket captains, wizards, robots and aliens.",
  },
  {
    q: "Can I use these in UI/UX mockups and presentations?",
    a: "Absolutely — that's what they're made for. Drop characters into hero sections, onboarding flows, empty states, pitch decks and Figma mockups. Every character exports as SVG and PNG on multiple backgrounds.",
  },
  {
    q: "How do I request new icons or characters?",
    a: "The set grows every week — music, nature, sports, food and festival collections were all community-style requests. Ping the maker via vetrisuriya.in with your wishlist.",
  },
];

export default function Home() {
  const featuredIcons = ICONS.slice(0, 12);
  const featuredChars = CHARACTERS.slice(0, 8);
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="w-full flex-1">
        <Hero iconCount={ICONS.length} charCount={CHARACTERS.length} />
        <CollectionsStrip />

        {/* Featured icons teaser */}
        <section aria-label="Featured icons" className="mx-auto w-full max-w-6xl px-4 pb-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl sm:text-3xl">Fresh from the icon wall ✳</h2>
            <Link href="/icons"><Button variant="default" size="sm">Open all {ICONS.length} icons →</Button></Link>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {featuredIcons.map((icon) => (
              <Link key={icon.slug} href={`/icons?c=${icon.collection}`} className="retro-card rounded-2xl p-3 text-center" aria-label={`${icon.name} icon`}>
                <span className="mx-auto flex h-16 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FFD23F]/30">
                  <span className="rounded-lg border-2 border-[#1A1A1A] bg-[#FFFDF5] p-1.5">
                    <RetroIconView icon={icon} size={30} />
                  </span>
                </span>
                <span className="mt-2 block truncate text-xs font-extrabold">{icon.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured characters teaser */}
        <section aria-label="Featured characters" className="mx-auto w-full max-w-6xl px-4 py-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl sm:text-3xl">Meet the doodle crew ✳</h2>
            <Link href="/characters"><Button variant="default" size="sm">Open all {CHARACTERS.length} characters →</Button></Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {featuredChars.map((art) => (
              <Link key={art.slug} href={`/characters?g=${art.group}`} className="retro-card rounded-2xl p-3 text-center" aria-label={`${art.name} character`}>
                <span className="flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FFB3C7]/25 p-2">
                  <DoodleView art={art} size={110} />
                </span>
                <span className="mt-2 block truncate text-xs font-extrabold">{art.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ — SEO content */}
        <section id="faq" aria-label="Frequently asked questions" className="mx-auto w-full max-w-4xl scroll-mt-20 px-4 pb-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em]">✳ FAQ</p>
          <h2 className="font-display text-3xl">Questions, answered</h2>
          <div className="mt-5 flex flex-col gap-3">
            {FAQS.map((f) => (
              <details key={f.q} className="retro-card group rounded-2xl px-5 py-4">
                <summary className="cursor-pointer list-none font-display text-base sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="mr-2 inline-block transition-transform group-open:rotate-45">＋</span>
                  {f.q}
                </summary>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#1A1A1A]/75">{f.a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* Full galleries live on their own pages */}
        <section aria-label="Open the galleries" className="border-t-[2.5px] border-[#1A1A1A] bg-[#1A1A1A] text-[#FFFDF5]">
          <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-10 sm:grid-cols-2">
            <Link href="/icons" className="rounded-2xl border-[2.5px] border-[#FFFDF5] bg-[#FFD23F] p-6 text-[#1A1A1A] shadow-[5px_5px_0_#FFD23F]/40 transition-transform hover:-translate-y-1">
              <p className="font-display text-2xl">✳ {ICONS.length}+ ICONS →</p>
              <p className="mt-1 text-sm font-bold text-[#1A1A1A]/70">Search, filter by 17 collections, click to copy SVG.</p>
            </Link>
            <Link href="/characters" className="rounded-2xl border-[2.5px] border-[#FFFDF5] bg-[#FFB3C7] p-6 text-[#1A1A1A] shadow-[5px_5px_0_#FFB3C7]/40 transition-transform hover:-translate-y-1">
              <p className="font-display text-2xl">✳ {CHARACTERS.length}+ CHARACTERS →</p>
              <p className="mt-1 text-sm font-bold text-[#1A1A1A]/70">Humans, animals & caricatures for heroes and empty states.</p>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
