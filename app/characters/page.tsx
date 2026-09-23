import { Suspense } from "react";
import type { Metadata } from "next";
import { ART_GROUPS, CHARACTERS } from "@/lib/characters";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CharacterExplorer } from "@/components/character-explorer";

export const metadata: Metadata = {
  title: "250+ Free Doodle Characters, Animals & Caricatures (SVG)",
  description:
    "Meet 250+ free hand-drawn doodle characters: human professions, festival icons, animal mascots and star-style caricatures for onboarding, heroes and UI/UX mockups. Copy SVG or download PNG.",
  alternates: { canonical: "/characters" },
};

export default function CharactersPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="w-full flex-1">
        <section className="border-b-[2.5px] border-[#1A1A1A] bg-[#FBF3DF]">
          <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em]">✳ The doodle crew</p>
            <h1 className="font-display mt-2 max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
              {CHARACTERS.length}+ CHARACTERS, ANIMALS & CARICATURES.
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-medium text-[#1A1A1A]/70 sm:text-base">
              {ART_GROUPS.map((g) => `${g.name} — ${g.blurb}`).join(" · ")}. Built for onboarding flows,
              hero sections, empty states and pitch decks.
            </p>
          </div>
        </section>
        <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16 text-center font-bold">Loading characters…</div>}>
          <CharacterExplorer items={CHARACTERS} />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
