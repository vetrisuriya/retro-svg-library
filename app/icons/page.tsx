import { Suspense } from "react";
import type { Metadata } from "next";
import { ICONS } from "@/lib/icons";
import { COLLECTIONS } from "@/lib/collections";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { IconExplorer } from "@/components/icon-explorer";

export const metadata: Metadata = {
  title: "500+ Free Retro SVG Icons — Click to Copy & Download",
  description:
    "Search 500+ free hand-drawn retro SVG icons: websites, blog, news, hospitals, banks, LMS, AI, Web3, music, food, sports, home, fashion, tools, nature and more. Click any icon to copy SVG, download SVG, JSX or PNG.",
  alternates: { canonical: "/icons" },
};

export default function IconsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main className="w-full flex-1">
        <section className="border-b-[2.5px] border-[#1A1A1A] bg-[#FBF3DF]">
          <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em]">✳ The icon wall</p>
            <h1 className="font-display mt-2 max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
              {ICONS.length}+ RETRO SVG ICONS, CLICK TO COPY.
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-medium text-[#1A1A1A]/70 sm:text-base">
              {COLLECTIONS.map((c) => c.name).join(" · ")}. Every icon is a clean 24×24 stroke SVG —
              copy it, download it, ship it.
            </p>
          </div>
        </section>
        <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16 text-center font-bold">Loading icons…</div>}>
          <IconExplorer icons={ICONS} />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
