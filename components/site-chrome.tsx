"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ART_GROUPS } from "@/lib/characters";
import { COLLECTIONS } from "@/lib/collections";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-[#1A1A1A] bg-[#FFFDF5]">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-[2.5px] border-[#1A1A1A] bg-[#FFD23F] font-display text-xl shadow-[3px_3px_0_#1A1A1A]">
            R
          </span>
          <span className="leading-none">
            <span className="font-display block text-lg tracking-tight">RETRO.ICONS</span>
            <span className="block truncate text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/60">
              Hand-drawn retro SVG library
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold md:flex">
          <Link href="/icons" className="hover:underline decoration-wavy underline-offset-4">Icons</Link>
          <Link href="/characters" className="hover:underline decoration-wavy underline-offset-4">Characters</Link>
          <Link href="/#collections" className="hover:underline decoration-wavy underline-offset-4">Collections</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/icons" className="hidden sm:block">
            <Button variant="yellow" size="sm">Browse icons</Button>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border-[2.5px] border-[#1A1A1A] bg-white p-2 shadow-[3px_3px_0_#1A1A1A] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t-[2.5px] border-[#1A1A1A] bg-[#FFFDF5] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1 text-base font-extrabold">
            <Link href="/icons" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-[#FFD23F]/40">✳ Icons</Link>
            <Link href="/characters" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-[#FFB3C7]/40">✳ Characters</Link>
            <Link href="/#collections" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-[#B8F169]/40">✳ Collections</Link>
            <Link href="/#faq" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-[#7BDFF2]/40">✳ FAQ</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Hero({ iconCount, charCount }: { iconCount: number; charCount: number }) {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-[#1A1A1A] bg-[#FBF3DF]">
      <div className="overflow-hidden border-b-[2.5px] border-[#1A1A1A] bg-[#1A1A1A] py-1.5 text-[#FFFDF5]">
        <div className="marquee-track flex w-max gap-0">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-8 pr-8 text-xs font-extrabold uppercase tracking-[0.2em]">
              {["Websites", "Blog", "News Media", "Hospitals", "Banks", "LMS", "AI", "Web3", "Music", "Humans", "Animals", "Caricatures", "Click to copy ✳ Download SVG ✳ 100% Free"].map((t) => (
                <span key={t + k}>{t} ✳</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.2fr_0.8fr] md:py-14">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="yellow">✳ hand-drawn retro set</Badge>
            <Badge variant="white">MIT — free for commercial use</Badge>
          </div>
          <h1 className="font-display mt-4 text-4xl leading-[0.95] tracking-tight sm:text-6xl">
            {iconCount}+ RETRO ICONS
            <br />
            <span className="bg-[#FFD23F] px-2 border-[3px] border-[#1A1A1A] rounded-xl inline-block mt-2 -rotate-1">+ {charCount} DOODLE</span>
            <br />
            CHARACTERS & ANIMALS.
          </h1>
          <p className="mt-4 max-w-xl text-base font-medium text-[#1A1A1A]/75">
            Thick-ink, paper-warm SVGs for websites, blogs, news media, hospitals, clinics, banks, LMS, AI and Web3 products —
            plus human characters, animal mascots and caricatures for onboarding, heroes and empty states.
            Search, click to copy, or download.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/icons"><Button variant="default" size="lg">✳ Explore {iconCount} icons</Button></Link>
            <Link href="/characters"><Button variant="white" size="lg">Meet {charCount} characters</Button></Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wide text-[#1A1A1A]/60">
            <span className="rounded-full border-2 border-[#1A1A1A] bg-white px-3 py-1">◉ 24×24 icons</span>
            <span className="rounded-full border-2 border-[#1A1A1A] bg-white px-3 py-1">◉ 120×120 doodles</span>
            <span className="rounded-full border-2 border-[#1A1A1A] bg-white px-3 py-1">◉ SVG + JSX + PNG</span>
          </div>
        </div>

        {/* Doodle hero art inspired by reference: photographer + paper-plane */}
        <div className="relative min-w-0">
          <div className="retro-card rounded-3xl bg-[#FFFDF5] p-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border-2 border-[#1A1A1A] bg-[#FFD23F]/40 p-3 text-center">
                <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28 max-w-full" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Doodle of a photographer girl">
                  <circle cx="60" cy="42" r="16" fill="#FFFDF5" />
                  <path d="M44 40c2-8 8-12 16-12s14 4 16 12l4 2-4 4-2 14H46l-2-14-4-4 4-2Z" fill="#1A1A1A" stroke="none" opacity="0.9" />
                  <circle cx="60" cy="42" r="16" />
                  <path d="M35 70c5-8 15-12 25-12s20 4 25 12l6 30H29l6-30Z" fill="#FFFDF5" />
                  <path d="M45 78l10 10M75 78l-10 10" />
                  <rect x="28" y="58" width="26" height="20" rx="4" fill="#1A1A1A" />
                  <circle cx="41" cy="68" r="6" fill="#FFFDF5" stroke="#FFFDF5" />
                  <circle cx="41" cy="68" r="2.5" fill="#1A1A1A" stroke="none" />
                </svg>
                <p className="mt-1 font-display text-xs">CLICK 📷 COPY!</p>
              </div>
              <div className="rounded-2xl border-2 border-[#1A1A1A] bg-[#7BDFF2]/30 p-3 text-center">
                <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28 max-w-full" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Doodle of a boy throwing a paper plane">
                  <path d="M100 15L25 55l30 8 8 30L100 15Z" fill="#FFFDF5" />
                  <path d="M100 15L55 63" />
                  <path d="M30 100l-8 12M45 102l-3 10" />
                  <circle cx="88" cy="28" r="3" fill="#FFD23F" />
                  <path d="M20 30h24M28 38h14" />
                </svg>
                <p className="mt-1 font-display text-xs">SEND ✈ SHARE!</p>
              </div>
            </div>
            <p className="mt-3 text-center font-hand text-xl">click any icon or character — svg copied instantly!</p>
          </div>
          <span className="absolute -left-2 -top-3 rotate-[-8deg] rounded-xl border-2 border-[#1A1A1A] bg-[#FF8A5C] px-3 py-1 font-display text-xs shadow-[3px_3px_0_#1A1A1A] sm:-left-3">
            NEW ✳ {iconCount + charCount} DOODLES
          </span>
          <span className="absolute -bottom-3 -right-1 rotate-[6deg] rounded-xl border-2 border-[#1A1A1A] bg-[#B8F169] px-3 py-1 font-display text-xs shadow-[3px_3px_0_#1A1A1A] sm:-right-2">
            SVG • JSX • PNG
          </span>
        </div>
      </div>
    </section>
  );
}

export function CollectionsStrip() {
  return (
    <section id="collections" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em]">✳ Collections</p>
          <h2 className="font-display text-3xl">Built for every industry</h2>
        </div>
        <Link href="/icons"><Button variant="white" size="sm">Browse all →</Button></Link>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {COLLECTIONS.map((c) => (
          <Link key={c.slug} href={`/icons?c=${c.slug}`} className="retro-card rounded-2xl p-4">
            <span className="inline-block h-8 w-8 rounded-lg border-2 border-[#1A1A1A]" style={{ background: c.accent }} />
            <p className="font-display mt-2 text-lg leading-none">{c.name}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#1A1A1A]/55">{c.tagline}</p>
            <p className="mt-2 line-clamp-2 text-[13px] font-medium text-[#1A1A1A]/70">{c.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {ART_GROUPS.map((g) => (
          <Link key={g.slug} href={`/characters?g=${g.slug}`} className="retro-card rounded-2xl p-5">
            <span className="inline-block rounded-full border-2 border-[#1A1A1A] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest" style={{ background: g.accent }}>
              ✳ {g.name}
            </span>
            <p className="mt-2 text-sm font-medium text-[#1A1A1A]/75">{g.blurb}</p>
            <p className="mt-2 text-sm font-extrabold underline decoration-wavy underline-offset-4">Meet the {g.name.toLowerCase()} →</p>
          </Link>
        ))}
      </div>

      <div id="usage" className="mt-8 grid scroll-mt-20 gap-4 rounded-2xl border-[3px] border-[#1A1A1A] bg-[#1A1A1A] p-6 text-[#FFFDF5] shadow-[6px_6px_0_#1A1A1A] md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-[#FFD23F]">01 — Search</p>
          <p className="mt-1 text-sm text-white/80">Filter icons & characters by name, tag or collection. Tune stroke weight live.</p>
        </div>
        <div>
          <p className="font-display text-xl text-[#B8F169]">02 — Click to copy</p>
          <p className="mt-1 text-sm text-white/80">Click any card to copy clean SVG. Open preview for JSX, framed badge or PNG.</p>
        </div>
        <div>
          <p className="font-display text-xl text-[#7BDFF2]">03 — Ship it</p>
          <p className="mt-1 text-sm text-white/80">Paste into React, HTML, Figma or slides. Use characters in heroes, onboarding & empty states.</p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-[#1A1A1A] bg-[#FFFDF5]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl border-[2.5px] border-[#1A1A1A] bg-[#FFD23F] font-display text-lg shadow-[3px_3px_0_#1A1A1A]">
            R
          </span>
          <span className="leading-none">
            <span className="font-display block text-base tracking-tight">RETRO.ICONS</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60">
              doodle SVGs for everyone
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-[13px]">
          <Link href="/icons" className="hover:underline decoration-wavy underline-offset-4">Icons</Link>
          <Link href="/characters" className="hover:underline decoration-wavy underline-offset-4">Characters</Link>
          <Link href="/#faq" className="hover:underline decoration-wavy underline-offset-4">FAQ</Link>
        </nav>
        <p className="text-[#1A1A1A]/70">
          Made with love by <a href="https://vetrisuriya.in/" target="_blank" rel="noopener noreferrer" className="underline decoration-wavy underline-offset-4">vetrisuriya.in</a>
        </p>
      </div>
    </footer>
  );
}
