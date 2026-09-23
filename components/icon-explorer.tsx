"use client";

import * as React from "react";
import { Check, Copy, Download, Search, Share2, Shuffle, X, ImageDown, Code2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { COLLECTIONS, COLLECTION_MAP } from "@/lib/collections";
import { buildMinimalSvg, buildStandaloneSvg, type RetroIcon } from "@/lib/icons";
import { RetroIconView } from "./retro-icon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

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

async function downloadPng(icon: RetroIcon, size = 512) {
  const svg = buildMinimalSvg(icon, "#1A1A1A");
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
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
  ctx.fillStyle = "#FFFDF5";
  ctx.fillRect(0, 0, size, size);
  ctx.drawImage(img, 32, 32, size - 64, size - 64);
  URL.revokeObjectURL(url);
  const a = document.createElement("a");
  a.download = `${icon.slug}.png`;
  a.href = canvas.toDataURL("image/png");
  a.click();
}

function toJsx(svg: string, componentName: string) {
  return svg
    .replace("<svg", `<${componentName}Svg // ${componentName}`)
    .replace('xmlns="http://www.w3.org/2000/svg"', "")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/class=/g, "className=");
}

export function IconExplorer({ icons }: { icons: RetroIcon[] }) {
  const params = useSearchParams();
  const validCollections = React.useMemo(() => new Set(["all", ...COLLECTIONS.map((c) => c.slug)]), []);
  const paramC = params.get("c") ?? "all";
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState<string>(() =>
    validCollections.has(params.get("c") ?? "") ? (params.get("c") as string) : "all"
  );
  // Keep pills in sync when arriving via /icons?c=slug (collection cards / back button).
  // Adjusted during render (not in an effect) per React docs.
  const [lastParam, setLastParam] = React.useState(paramC);
  if (paramC !== lastParam) {
    setLastParam(paramC);
    if (validCollections.has(paramC)) setActive(paramC);
  }
  const pick = (slug: string) => {
    setActive(slug);
    window.history.replaceState(null, "", slug === "all" ? "/icons" : `/icons?c=${slug}`);
  };
  const [strokeW, setStrokeW] = React.useState(2);
  const [selected, setSelected] = React.useState<RetroIcon | null>(null);
  const [copied, setCopied] = React.useState<string | null>(null);
  const [toast, setToast] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((showToast as unknown as { t?: number }).t);
    (showToast as unknown as { t?: number }).t = window.setTimeout(() => setToast(null), 1800);
  };

  const copySvg = async (icon: RetroIcon) => {
    try {
      await navigator.clipboard.writeText(buildMinimalSvg(icon));
      setCopied(icon.slug);
      showToast(`Copied ${icon.name} SVG`);
      setTimeout(() => setCopied((c) => (c === icon.slug ? null : c)), 1500);
    } catch {
      showToast("Copy failed — select & copy manually");
    }
  };

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return icons.filter((icon) => {
      if (active !== "all" && icon.collection !== active) return false;
      if (!q) return true;
      return (
        icon.name.toLowerCase().includes(q) ||
        icon.slug.includes(q) ||
        icon.collection.includes(q) ||
        icon.tags.some((t) => t.includes(q))
      );
    });
  }, [icons, query, active]);

  const counts = React.useMemo(() => {
    const m: Record<string, number> = { all: icons.length };
    for (const c of COLLECTIONS) m[c.slug] = icons.filter((i) => i.collection === c.slug).length;
    return m;
  }, [icons]);

  const random = () => {
    const pool = filtered.length ? filtered : icons;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSelected(pick);
  };

  const downloadCollection = () => {
    if (active === "all") {
      showToast("Pick a collection to download sprite");
      return;
    }
    const list = icons.filter((i) => i.collection === active);
    // NOTE: presentation attrs live on each <symbol> (not the root <svg>),
    // because <use> shadow content inherits from the symbol, not the sprite root.
    const symbols = list
      .map((i) => `  <symbol id="retro-${i.slug}" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i.body}</symbol>`)
      .join("\n");
    const sprite = `<svg xmlns="http://www.w3.org/2000/svg">\n<!-- Retro.Icons "${active}" sprite — use: <svg width="24" height="24"><use href="retro-${active}-sprite.svg#retro-${list[0]?.slug ?? "SLUG"}"/></svg> -->\n${symbols}\n</svg>`;
    downloadFile(`retro-${active}-sprite.svg`, sprite);
    showToast(`Downloaded ${list.length} ${active} icons`);
  };

  return (
    <div id="icons">
      {/* Search + controls */}
      <div className="sticky top-16 z-30 border-y-[2.5px] border-[#1A1A1A] bg-[#FFFDF5]/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1A1A1A]/50" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${icons.length} retro icons — try "bank", "plane", "bot"...`}
                className="pl-11"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-[#1A1A1A] bg-white p-0.5"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label className="hidden text-xs font-extrabold uppercase tracking-wider md:block">
                Stroke
              </label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.25}
                value={strokeW}
                onChange={(e) => setStrokeW(Number(e.target.value))}
                className="h-2 w-28 accent-[#1A1A1A]"
                aria-label="Stroke width"
              />
              <span className="w-8 text-sm font-bold">{strokeW}</span>
              <Button variant="white" size="sm" onClick={random} title="Surprise me">
                <Shuffle className="h-4 w-4" /> Surprise
              </Button>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            <FilterPill
              active={active === "all"}
              onClick={() => pick("all")}
              label={`All ✳ ${counts.all}`}
            />
            {COLLECTIONS.map((c) => (
              <FilterPill
                key={c.slug}
                active={active === c.slug}
                onClick={() => pick(active === c.slug ? "all" : c.slug)}
                label={`${c.name} · ${counts[c.slug]}`}
                dot={c.accent}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Result bar */}
      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between px-4">
        <p className="text-sm font-bold">
          {filtered.length} icon{filtered.length === 1 ? "" : "s"}
          {active !== "all" && (
            <>
              {" "}in <span className="underline decoration-wavy">{COLLECTION_MAP[active as keyof typeof COLLECTION_MAP]?.name}</span>
            </>
          )}
          {query && <> for “{query}”</>}
        </p>
        {active !== "all" && (
          <Button variant="yellow" size="sm" onClick={downloadCollection}>
            <Download className="h-4 w-4" /> Sprite .svg
          </Button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mx-auto mt-8 max-w-6xl px-4">
          <div className="retro-card rounded-2xl p-10 text-center">
            <p className="font-display text-2xl">No doodles found!</p>
            <p className="mt-2 text-sm font-medium text-[#1A1A1A]/70">
              Try “heart”, “bank”, “plane”, “bot” — or clear filters.
            </p>
            <Button
              className="mt-4"
              variant="yellow"
              onClick={() => {
                setQuery("");
                pick("all");
              }}
            >
              Reset filters
            </Button>
          </div>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 pb-20 pt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((icon) => {
            const col = COLLECTION_MAP[icon.collection];
            const isCopied = copied === icon.slug;
            return (
              <div
                key={icon.slug}
                onClick={() => setSelected(icon)}
                className="retro-card group relative cursor-pointer rounded-2xl p-3 text-center"
                title={`${icon.name} — click to preview`}
              >
                <div
                  className="mx-auto flex h-20 items-center justify-center rounded-xl border-2 border-[#1A1A1A]"
                  style={{ background: col.accent + "55" }}
                >
                  <div className="rounded-xl border-2 border-[#1A1A1A] bg-[#FFFDF5] p-2 transition-transform group-hover:-rotate-3 group-hover:scale-110">
                    <RetroIconView icon={icon} size={36} strokeWidth={strokeW} />
                  </div>
                </div>
                <p className="mt-2 truncate text-[13px] font-extrabold">{icon.name}</p>
                <p className="truncate text-[11px] font-medium text-[#1A1A1A]/55">{col.name}</p>
                <div className="mt-2 flex justify-center gap-1.5 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copySvg(icon);
                    }}
                    className="rounded-lg border-2 border-[#1A1A1A] bg-[#1A1A1A] p-1.5 text-[#FFFDF5]"
                    title="Copy SVG"
                  >
                    {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadFile(`${icon.slug}.svg`, buildMinimalSvg(icon));
                      showToast(`Downloaded ${icon.name}.svg`);
                    }}
                    className="rounded-lg border-2 border-[#1A1A1A] bg-[#FFD23F] p-1.5"
                    title="Download SVG"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <IconModal
          icon={selected}
          strokeW={strokeW}
          onClose={() => setSelected(null)}
          onCopy={() => copySvg(selected)}
          copied={copied === selected.slug}
          showToast={showToast}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-xl border-[2.5px] border-[#1A1A1A] bg-[#1A1A1A] px-4 py-2.5 text-sm font-bold text-[#FFFDF5] shadow-[4px_4px_0_#FFD23F]">
            <Check className="h-4 w-4 text-[#B8F169]" /> {toast}
          </div>
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
  dot,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  dot?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex shrink-0 items-center gap-1.5 rounded-full border-2 border-[#1A1A1A] px-3 py-1.5 text-xs font-extrabold shadow-[3px_3px_0_#1A1A1A] transition-all hover:-translate-y-0.5",
        active ? "bg-[#1A1A1A] text-[#FFFDF5]" : "bg-white"
      )}
    >
      {dot && <span className="h-2.5 w-2.5 rounded-full border border-[#1A1A1A]" style={{ background: dot }} />}
      {label}
    </button>
  );
}

function IconModal({
  icon,
  strokeW,
  onClose,
  onCopy,
  copied,
  showToast,
}: {
  icon: RetroIcon;
  strokeW: number;
  onClose: () => void;
  onCopy: () => void;
  copied: boolean;
  showToast: (m: string) => void;
}) {
  const [bg, setBg] = React.useState("#FFD23F");
  const col = COLLECTION_MAP[icon.collection];
  const svgCode = buildMinimalSvg(icon);

  React.useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1A1A1A]/60 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-t-3xl border-[3px] border-[#1A1A1A] bg-[#FFFDF5] shadow-[8px_8px_0_#1A1A1A] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b-[2.5px] border-[#1A1A1A] bg-[#1A1A1A] px-5 py-3 text-[#FFFDF5]">
          <div className="flex items-center gap-2">
            <Badge variant="yellow">{col.name}</Badge>
            <span className="font-display text-lg">{icon.name}</span>
          </div>
          <button onClick={onClose} className="rounded-lg border-2 border-[#FFFDF5] p-1 hover:bg-white/10" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 border-b-[2.5px] border-[#1A1A1A] p-6 sm:border-b-0 sm:border-r-[2.5px]" style={{ background: bg }}>
            <div className="halftone absolute" />
            <div className="rounded-2xl border-[3px] border-[#1A1A1A] bg-[#FFFDF5] p-6 shadow-[6px_6px_0_#1A1A1A]">
              <RetroIconView icon={icon} size={120} strokeWidth={strokeW} />
            </div>
            <div className="flex gap-2">
              {["#FFD23F", "#FFB3C7", "#B8F169", "#7BDFF2", "#FFFDF5", "#1A1A1A"].map((c) => (
                <button
                  key={c}
                  onClick={() => setBg(c)}
                  className={cn("h-7 w-7 rounded-full border-2 border-[#1A1A1A]", bg === c && "ring-2 ring-[#1A1A1A] ring-offset-2")}
                  style={{ background: c }}
                  aria-label={`Background ${c}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              {[24, 48, 96].map((s) => (
                <div key={s} className="rounded-lg border-2 border-[#1A1A1A] bg-white/80 p-1.5">
                  <RetroIconView icon={icon} size={s === 96 ? 28 : s === 48 ? 22 : 16} strokeWidth={strokeW} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <div className="flex flex-wrap gap-1.5">
              {[icon.collection, ...icon.tags].map((t) => (
                <Badge key={t} variant="white">#{t}</Badge>
              ))}
            </div>
            <pre className="max-h-40 overflow-auto rounded-xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-3 text-[11px] leading-relaxed text-[#B8F169]">
              {svgCode}
            </pre>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="default" onClick={onCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Copied!" : "Copy SVG"}
              </Button>
              <Button
                variant="yellow"
                onClick={() => {
                  downloadFile(`${icon.slug}.svg`, svgCode);
                  showToast(`Downloaded ${icon.slug}.svg`);
                }}
              >
                <Download className="h-4 w-4" /> SVG
              </Button>
              <Button
                variant="white"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(toJsx(svgCode, icon.name.replace(/[^A-Za-z]/g, "")));
                    showToast("Copied JSX snippet");
                  } catch {
                    showToast("Copy failed");
                  }
                }}
              >
                <Code2 className="h-4 w-4" /> Copy JSX
              </Button>
              <Button
                variant="green"
                onClick={() => {
                  downloadPng(icon).then(() => showToast(`Downloaded ${icon.slug}.png`));
                }}
              >
                <ImageDown className="h-4 w-4" /> PNG
              </Button>
            </div>
            <Button
              variant="white"
              size="sm"
              onClick={() => {
                downloadFile(`${icon.slug}-framed.svg`, buildStandaloneSvg(icon, { size: 256 }));
                showToast("Downloaded framed retro SVG");
              }}
            >
              <Download className="h-3.5 w-3.5" /> Download framed retro badge
            </Button>
            <Button
              variant="white"
              size="sm"
              onClick={async () => {
                const url = `${window.location.origin}/icons?c=${icon.collection}`;
                try {
                  if (navigator.share) {
                    await navigator.share({ title: `${icon.name} — Retro.Icons`, url });
                  } else {
                    await navigator.clipboard.writeText(url);
                    showToast("Copied link to collection");
                  }
                } catch {
                  /* share dismissed */
                }
              }}
            >
              <Share2 className="h-3.5 w-3.5" /> Share collection
            </Button>
            <p className="text-[11px] font-medium text-[#1A1A1A]/60">
              Free for websites, blogs, news, hospitals, banks, LMS, AI & Web3 products. Click any card to copy instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
