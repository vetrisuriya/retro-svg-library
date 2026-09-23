"use client";

import * as React from "react";
import { Check, Copy, Download, Search, Share2, Shuffle, X, ImageDown, Code2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ART_GROUPS, buildCharacterSvg, type ArtGroup, type Artwork } from "@/lib/characters";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export function DoodleView({ art, size = 96, className }: { art: Artwork; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      stroke="#1A1A1A"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: artwork bodies are local static strings
      dangerouslySetInnerHTML={{ __html: art.svg }}
      aria-hidden
    />
  );
}

function downloadFile(filename: string, content: string, mime = "image/svg+xml") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function downloadPng(art: Artwork, bg: string, size = 512) {
  const svg = buildCharacterSvg(art, { size: 240, bg });
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  const img = new Image();
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("png render failed"));
    img.src = url;
  });
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.drawImage(img, 0, 0, size, size);
  URL.revokeObjectURL(url);
  const a = document.createElement("a");
  a.download = `${art.slug}.png`;
  a.href = canvas.toDataURL("image/png");
  a.click();
}

const GROUP_MAP = Object.fromEntries(ART_GROUPS.map((g) => [g.slug, g])) as Record<ArtGroup, (typeof ART_GROUPS)[number]>;

export function CharacterExplorer({ items }: { items: Artwork[] }) {
  const params = useSearchParams();
  const validGroups = React.useMemo(() => new Set(["all", ...ART_GROUPS.map((g) => g.slug)]), []);
  const paramG = params.get("g") ?? "all";
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState<string>(() =>
    validGroups.has(params.get("g") ?? "") ? (params.get("g") as string) : "all"
  );
  // Keep pills in sync when arriving via /characters?g=slug (group cards / back button).
  const [lastParam, setLastParam] = React.useState(paramG);
  if (paramG !== lastParam) {
    setLastParam(paramG);
    if (validGroups.has(paramG)) setActive(paramG);
  }
  const pick = (slug: string) => {
    setActive(slug);
    window.history.replaceState(null, "", slug === "all" ? "/characters" : `/characters?g=${slug}`);
  };
  const [selected, setSelected] = React.useState<Artwork | null>(null);
  const [copied, setCopied] = React.useState<string | null>(null);
  const [toast, setToast] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((showToast as unknown as { t?: number }).t);
    (showToast as unknown as { t?: number }).t = window.setTimeout(() => setToast(null), 1800);
  };

  const copySvg = async (art: Artwork, bg = "#FFFDF5") => {
    try {
      await navigator.clipboard.writeText(buildCharacterSvg(art, { size: 256, bg }));
      setCopied(art.slug);
      showToast(`Copied ${art.name} SVG`);
      setTimeout(() => setCopied((c) => (c === art.slug ? null : c)), 1500);
    } catch {
      showToast("Copy failed — select & copy manually");
    }
  };

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((a) => {
      if (active !== "all" && a.group !== active) return false;
      if (!q) return true;
      return a.name.toLowerCase().includes(q) || a.slug.includes(q) || a.tags.some((t) => t.includes(q));
    });
  }, [items, query, active]);

  const counts = React.useMemo(() => {
    const m: Record<string, number> = { all: items.length };
    for (const g of ART_GROUPS) m[g.slug] = items.filter((i) => i.group === g.slug).length;
    return m;
  }, [items]);

  return (
    <div id="characters" className="border-t-[2.5px] border-[#1A1A1A] bg-[#FBF3DF]/60">
      <div className="mx-auto max-w-6xl px-4 pb-2 pt-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em]">✳ Doodle characters</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl leading-none">
            HUMANS, ANIMALS <span className="bg-[#FFB3C7] px-2 border-[3px] border-[#1A1A1A] rounded-xl inline-block rotate-1">& CARICATURES</span>
          </h2>
          <Button variant="white" size="sm" onClick={() => {
            const pool = filtered.length ? filtered : items;
            setSelected(pool[Math.floor(Math.random() * pool.length)]);
          }}>
            <Shuffle className="h-4 w-4" /> Surprise me
          </Button>
        </div>
        <p className="mt-2 max-w-2xl text-sm font-medium text-[#1A1A1A]/70">
          Hand-drawn doodle people for onboarding, empty states, hero sections and UI/UX mockups — plus animal mascots and big-head caricatures. Click any card to copy the SVG.
        </p>
        <div className="relative mt-4 max-w-xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1A1A1A]/50" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${items.length} characters — try "doctor", "cat", "guitar"...`}
            className="pl-11"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-[#1A1A1A] bg-white p-0.5" aria-label="Clear search">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <button onClick={() => pick("all")} className={cn("shrink-0 rounded-full border-2 border-[#1A1A1A] px-3 py-1.5 text-xs font-extrabold shadow-[3px_3px_0_#1A1A1A]", active === "all" ? "bg-[#1A1A1A] text-[#FFFDF5]" : "bg-white")}>
            All ✳ {counts.all}
          </button>
          {ART_GROUPS.map((g) => (
            <button key={g.slug} onClick={() => pick(active === g.slug ? "all" : g.slug)} className={cn("flex shrink-0 items-center gap-1.5 rounded-full border-2 border-[#1A1A1A] px-3 py-1.5 text-xs font-extrabold shadow-[3px_3px_0_#1A1A1A]", active === g.slug ? "bg-[#1A1A1A] text-[#FFFDF5]" : "bg-white")}>
              <span className="h-2.5 w-2.5 rounded-full border border-[#1A1A1A]" style={{ background: g.accent }} />
              {g.name} · {counts[g.slug]}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm font-bold">
          {filtered.length} character{filtered.length === 1 ? "" : "s"}
          {active !== "all" && <> in <span className="underline decoration-wavy">{GROUP_MAP[active as ArtGroup]?.name}</span></>}
          {query && <> for “{query}”</>}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="retro-card mt-4 rounded-2xl p-10 text-center">
            <p className="font-display text-2xl">No characters found!</p>
            <Button className="mt-4" variant="yellow" onClick={() => { setQuery(""); pick("all"); }}>Reset filters</Button>
          </div>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 pb-16 pt-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((art) => {
            const g = GROUP_MAP[art.group];
            const isCopied = copied === art.slug;
            return (
              <div key={art.slug} onClick={() => setSelected(art)} className="retro-card group cursor-pointer rounded-2xl p-3 text-center" title={`${art.name} — click to preview`}>
                <div className="flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] p-2" style={{ background: g.accent + "44" }}>
                  <div className="rounded-xl border-2 border-[#1A1A1A] bg-[#FFFDF5] transition-transform group-hover:-rotate-2 group-hover:scale-105">
                    <DoodleView art={art} size={120} />
                  </div>
                </div>
                <p className="mt-2 truncate text-[13px] font-extrabold">{art.name}</p>
                <p className="truncate text-[11px] font-medium text-[#1A1A1A]/55">{g.name} · {art.tags.slice(0, 2).join(" · ")}</p>
                <div className="mt-2 flex justify-center gap-1.5 md:opacity-0 md:group-hover:opacity-100">
                  <button onClick={(e) => { e.stopPropagation(); copySvg(art); }} className="rounded-lg border-2 border-[#1A1A1A] bg-[#1A1A1A] p-1.5 text-[#FFFDF5]" title="Copy SVG">
                    {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); downloadFile(`${art.slug}.svg`, buildCharacterSvg(art, { size: 512 })); showToast(`Downloaded ${art.name}.svg`); }} className="rounded-lg border-2 border-[#1A1A1A] bg-[#FFD23F] p-1.5" title="Download SVG">
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selected && (
        <CharacterModal art={selected} onClose={() => setSelected(null)} onCopy={() => copySvg(selected)} copied={copied === selected.slug} showToast={showToast} />
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-xl border-[2.5px] border-[#1A1A1A] bg-[#1A1A1A] px-4 py-2.5 text-sm font-bold text-[#FFFDF5] shadow-[4px_4px_0_#FFB3C7]">
            <Check className="h-4 w-4 text-[#B8F169]" /> {toast}
          </div>
        </div>
      )}
    </div>
  );
}

function CharacterModal({ art, onClose, onCopy, copied, showToast }: {
  art: Artwork; onClose: () => void; onCopy: () => void; copied: boolean; showToast: (m: string) => void;
}) {
  const [bg, setBg] = React.useState("#FFFDF5");
  const g = GROUP_MAP[art.group];
  const svgCode = buildCharacterSvg(art, { size: 256, bg });

  React.useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1A1A1A]/60 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-t-3xl border-[3px] border-[#1A1A1A] bg-[#FFFDF5] shadow-[8px_8px_0_#1A1A1A] sm:rounded-3xl">
        <div className="flex items-center justify-between border-b-[2.5px] border-[#1A1A1A] bg-[#1A1A1A] px-5 py-3 text-[#FFFDF5]">
          <div className="flex items-center gap-2">
            <Badge variant="yellow">{g.name}</Badge>
            <span className="font-display text-lg">{art.name}</span>
          </div>
          <button onClick={onClose} className="rounded-lg border-2 border-[#FFFDF5] p-1 hover:bg-white/10" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 border-b-[2.5px] border-[#1A1A1A] p-6 sm:border-b-0 sm:border-r-[2.5px]" style={{ background: bg }}>
            <div className="rounded-2xl border-[3px] border-[#1A1A1A] bg-[#FFFDF5] p-4 shadow-[6px_6px_0_#1A1A1A]">
              <DoodleView art={art} size={180} />
            </div>
            <div className="flex gap-2">
              {["#FFFDF5", "#FFD23F", "#FFB3C7", "#B8F169", "#7BDFF2", "#1A1A1A"].map((c) => (
                <button key={c} onClick={() => setBg(c)} className={cn("h-7 w-7 rounded-full border-2 border-[#1A1A1A]", bg === c && "ring-2 ring-[#1A1A1A] ring-offset-2")} style={{ background: c }} aria-label={`Background ${c}`} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex flex-wrap gap-1.5">
              {[art.group, ...art.tags].map((t) => <Badge key={t} variant="white">#{t}</Badge>)}
            </div>
            <pre className="max-h-40 overflow-auto rounded-xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-3 text-[11px] leading-relaxed text-[#B8F169]">{svgCode}</pre>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="default" onClick={onCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Copied!" : "Copy SVG"}
              </Button>
              <Button variant="yellow" onClick={() => { downloadFile(`${art.slug}.svg`, buildCharacterSvg(art, { size: 512, bg })); showToast(`Downloaded ${art.slug}.svg`); }}>
                <Download className="h-4 w-4" /> SVG
              </Button>
              <Button variant="white" onClick={async () => {
                try {
                  await navigator.clipboard.writeText(svgCode.replace(/stroke-width/g, "strokeWidth").replace(/stroke-linecap/g, "strokeLinecap").replace(/stroke-linejoin/g, "strokeLinejoin"));
                  showToast("Copied JSX snippet");
                } catch { showToast("Copy failed"); }
              }}>
                <Code2 className="h-4 w-4" /> Copy JSX
              </Button>
              <Button variant="green" onClick={() => { downloadPng(art, bg).then(() => showToast(`Downloaded ${art.slug}.png`)); }}>
                <ImageDown className="h-4 w-4" /> PNG
              </Button>
              <Button variant="white" size="sm" className="col-span-2" onClick={async () => {
                const url = `${window.location.origin}/characters?g=${art.group}`;
                try {
                  if (navigator.share) {
                    await navigator.share({ title: `${art.name} — Retro.Icons`, url });
                  } else {
                    await navigator.clipboard.writeText(url);
                    showToast("Copied link to group");
                  }
                } catch {
                  /* share dismissed */
                }
              }}>
                <Share2 className="h-3.5 w-3.5" /> Share group
              </Button>
            </div>
            <p className="text-[11px] font-medium text-[#1A1A1A]/60">
              Drop into hero sections, onboarding, empty states & presentations. Free for commercial use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
