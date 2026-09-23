import type { CollectionSlug } from "./collections";
import type { RetroIcon } from "./icons";

/* 140 extra icons — uneven counts per collection (some topics are deep, some are tight).
   All bodies are 24x24 stroke doodles, unique across the whole set. */

const R = (collection: CollectionSlug, name: string, tags: string[], body: string): RetroIcon => ({
  slug: `${collection}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  name,
  collection,
  tags,
  body,
});

export const MORE_ICONS: RetroIcon[] = [
  // ── WEBSITES +8 (→20) ─────────────────────────────
  R("websites", "Sitemap", ["ia", "pages", "tree"], `<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5H5v5M12 12h7v5M12 12v5"/>`),
  R("websites", "Error 404", ["oops", "missing"], `<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M8.5 9.5a1.5 1.5 0 1 0 .1 0M15.5 9.5a1.5 1.5 0 1 0 .1 0" stroke-width="2.6"/><path d="M8 15.5q4-3 8 0"/>`),
  R("websites", "Cookie", ["consent", "bite"], `<circle cx="12" cy="12" r="8.5"/><path d="M20.5 12a8.5 8.5 0 0 0-8.5-8.5V7a3 3 0 0 1-3 3H6.5A8.5 8.5 0 0 0 20.5 12Z" fill="currentColor" stroke="none"/>${""}<circle cx="10" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="10.5" cy="15" r="1" fill="currentColor" stroke="none"/>`),
  R("websites", "Sidebar", ["panel", "docs"], `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9.5 4v16"/><path d="M12.5 8.5h5M12.5 12h5M12.5 15.5h3"/>`),
  R("websites", "Carousel", ["slider", "slides"], `<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M10 6v12M14 6v12"/><path d="M9 12H5.5M18.5 12H15"/>`),
  R("websites", "Input Field", ["form", "text"], `<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 12h5"/><path d="M14.5 11v2" stroke-width="2.6"/>`),
  R("websites", "Password Lock", ["auth", "login"], `<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/><circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none"/><path d="M12 16v1.5"/>`),
  R("websites", "Mouse", ["device", "click"], `<rect x="8" y="3" width="8" height="18" rx="4"/><path d="M12 3v6"/><path d="M12 7.5v.1" stroke-width="2.6"/>`),

  // ── BLOG +6 (→18) ─────────────────────────────────
  R("blog", "Eraser", ["delete", "correct"], `<path d="M5 15l8-8a2 2 0 0 1 3 0l3 3a2 2 0 0 1 0 3l-5 5H8l-3-3Z"/><path d="M5 15l3 3h6"/><path d="M4 20h16"/>`),
  R("blog", "Align Center", ["text", "format"], `<path d="M4 6h16M7 10h10M5 14h14M8.5 18h7"/>`),
  R("blog", "Bold B", ["format", "type"], `<path d="M8 4h5a3.5 3.5 0 0 1 0 7H8V4Z"/><path d="M8 11h6a3.5 3.5 0 0 1 0 7H8v-7Z"/>`),
  R("blog", "Insert Image", ["media", "photo"], `<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l4-4 3 3 3-3 3 3"/><path d="M15 3.5V7M13.5 5h3"/>`),
  R("blog", "Hashtag", ["tag", "topic"], `<path d="M9.5 4L7.5 20M16.5 4l-2 16"/><path d="M4.5 9h16M3.5 15h16"/>`),
  R("blog", "Pushpin", ["pin", "sticky"], `<path d="M9 4h6l-1 6 3 3v2H7v-2l3-3-1-6Z"/><path d="M12 15v6"/>`),

  // ── NEWS +6 (→18) ─────────────────────────────────
  R("news", "Drone", ["aerial", "footage"], `<path d="M7 11h10v4H7z"/><circle cx="12" cy="13" r="1" fill="currentColor" stroke="none"/><path d="M7 11L3.5 8M7 11l-1-4M17 11l3.5-3M17 11l1-4M3.5 8h2M18.5 8h2M6 7h2M16 7h2"/><path d="M10 15l-1 3M14 15l1 3"/>`),
  R("news", "Clapperboard", ["film", "scene"], `<path d="M4 10h16v10H4z"/><path d="M4 10l2-5 16 1-1 4"/><path d="M8 9.5L9.5 5M13 9.8l1.5-4.4M18 10l1.5-4.2"/><path d="M8 14l8 3"/>`),
  R("news", "Spotlight", ["stage", "focus"], `<path d="M9 3h6l1 6H8l1-6Z"/><path d="M12 9v3"/><path d="M8 21l2.5-8M16 21l-2.5-8"/><circle cx="12" cy="16.5" r="1.5"/>`),
  R("news", "Binoculars", ["watch", "field"], `<circle cx="8" cy="13" r="4"/><circle cx="16" cy="13" r="4"/><path d="M8 9V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V9"/><path d="M12 17v3.5"/>`),
  R("news", "News Van", ["broadcast", "truck"], `<path d="M2.5 8h11V17h-11zM13.5 11h3l3 3v3h-6"/><circle cx="7" cy="18.5" r="1.6"/><circle cx="16.5" cy="18.5" r="1.6"/><path d="M7 5.5a5 5 0 0 1 5 0M7 5.5L4 3M12 5.5l3-2.5"/>`),
  R("news", "Teleprompter", ["anchor", "script"], `<rect x="5" y="4" width="14" height="9" rx="1.5"/><path d="M8 7.5h8M8 10h5"/><path d="M12 13v4M8.5 20.5h7"/>`),

  // ── HOSPITAL +6 (→18) ─────────────────────────────
  R("hospital", "DNA", ["genetics", "lab"], `<path d="M8 3.5c0 5 8 5.5 8 8.5s-8 3.5-8 8.5M16 3.5c0 5-8 5.5-8 8.5s8 3.5 8 8.5"/><path d="M9.5 7h5M9.5 17h5M8.5 12h7"/>`),
  R("hospital", "Lungs", ["breathe", "chest"], `<path d="M12 4v6"/><path d="M12 10C10 12 8 15 7.5 19a1.5 1.5 0 0 0 1.5 1.8h2A1.5 1.5 0 0 0 12.5 19L12 10ZM12 10c2 2 4 5 4.5 9a1.5 1.5 0 0 1-1.5 1.8h-2A1.5 1.5 0 0 1 11.5 19L12 10Z"/><path d="M10 4h4"/>`),
  R("hospital", "Bone", ["ortho", "xray"], `<path d="M7 7l10 10M7 7L5 5.5A1.5 1.5 0 0 0 5 8.5L6 9.5M7 7l2.5-.5L9 4a1.8 1.8 0 0 1 3.5 0L12 6.5M17 17l2 1.5a1.5 1.5 0 0 1 0-3L18 14.5M17 17l-2.5.5.5 2.5a1.8 1.8 0 0 0-3.5 0L12 17.5"/>`),
  R("hospital", "Crutch", ["support", "injury"], `<path d="M9 3h6"/><path d="M12 3v18"/><path d="M8 7h8"/><path d="M9 21h6"/>`),
  R("hospital", "Oxygen Tank", ["o2", "respiratory"], `<rect x="9" y="6" width="6" height="14" rx="3"/><path d="M11 6V4h2v2"/><path d="M12 4V2.5"/><path d="M15 12h3a1.5 1.5 0 0 1 0 3h-3"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/>`),
  R("hospital", "Op Light", ["surgery", "theatre"], `<path d="M12 3v5"/><circle cx="12" cy="13" r="5"/><circle cx="10" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/><path d="M12 18v3"/>`),

  // ── CLINIC +6 (→18) ───────────────────────────────
  R("clinic", "First-Aid Kit", ["emergency", "box"], `<rect x="3.5" y="8" width="17" height="12" rx="2.5"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M12 12v5M9.5 14.5h5"/>`),
  R("clinic", "Brain", ["neuro", "mind"], `<path d="M9 5a3 3 0 0 0-3 4 3 3 0 0 0 1 5 3 3 0 0 0 5 6 3 3 0 0 0 6 1V8a3 3 0 0 0-2-3 3 3 0 0 0-5-1 3 3 0 0 0-7 1Z"/><path d="M12 5v14"/>`),
  R("clinic", "Ear", ["hearing", "ent"], `<path d="M7 9a5 5 0 0 1 10 0c0 3-2 4-2 6a4 4 0 0 1-8 .5"/><path d="M10 12a2.5 2.5 0 0 1 5 .5c0 1.5-1 2-1 3a2.5 2.5 0 0 1-5 .5"/>`),
  R("clinic", "Cotton Swab", ["bud", "test"], `<path d="M5 19L19 5"/><rect x="3.5" y="17" width="5" height="3" rx="1.5" transform="rotate(-45 6 18.5)"/><rect x="15.5" y="3" width="5" height="3" rx="1.5" transform="rotate(-45 18 4.5)"/>`),
  R("clinic", "Ointment Tube", ["cream", "gel"], `<path d="M9 8h6l1 12H8l1-12Z"/><path d="M10 8V6h4v2"/><path d="M12 6V4"/><path d="M10.5 12h3"/>`),
  R("clinic", "Rx Pad", ["prescription", "dose"], `<path d="M6 3.5h12V20.5H6V3.5Z"/><path d="M9 8.5h.1M9 8.5L14 14M9 11.5h5"/><path d="M14 14l1.5 2.5"/>`),

  // ── BANK +6 (→18) ─────────────────────────────────
  R("bank", "ATM", ["cash", "machine"], `<rect x="4" y="3.5" width="16" height="13" rx="2"/><rect x="7" y="6.5" width="7" height="5" rx="1"/><path d="M16 7.5h.1M16 10h.1" stroke-width="2.4"/><path d="M8 20.5h8M12 16.5V20"/>`),
  R("bank", "Cheque", ["check", "pay"], `<path d="M3 7h18v11H3z"/><path d="M3 10.5h18"/><path d="M6 14.5c1.5 0 1.5 2 3 2s1.5-2 3-2 1.5 2 3 2 1.5-2 3-2"/>`),
  R("bank", "Gold Bars", ["bullion", "invest"], `<path d="M5 15l2-4h4l2 4H5ZM13 15l2-4h4l2 4h-8ZM9 19l2-4h4l2 4H9Z"/>`),
  R("bank", "Money Bag", ["savings", "fund"], `<path d="M9 7L7 3.5h10L15 7"/><path d="M9 7c-3 2-5 5-5 8a7 5.5 0 0 0 14 0c0-3-2-6-5-8"/><path d="M12 12v4M10 13.5h4"/>`),
  R("bank", "Score Gauge", ["credit", "rating"], `<path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16l4-5"/><circle cx="12" cy="16" r="1.4" fill="currentColor"/>`),
  R("bank", "Currency Swap", ["forex", "exchange"], `<circle cx="8.5" cy="8.5" r="5"/><circle cx="15.5" cy="15.5" r="5"/><path d="M8.5 6.5v4M6.5 8.5h4M13.5 15.5h4M15.5 13.5v4"/>`),

  // ── LMS +6 (→18) ──────────────────────────────────
  R("lms", "Diploma", ["degree", "scroll"], `<path d="M6 6h11a3 3 0 0 1 3 3v9H9a3 3 0 0 1-3-3V6Z"/><path d="M6 6a3 3 0 0 0-3 3v9h3"/><path d="M14 18v2a2 2 0 1 1-4 0v-2"/><circle cx="12" cy="21" r=".8" fill="currentColor"/>`),
  R("lms", "Microscope", ["science", "zoom"], `<path d="M9 3.5h6"/><path d="M10 3.5V7l6 4-2 3"/><circle cx="14" cy="17" r="3.5"/><path d="M8 21h10"/>`),
  R("lms", "Protractor", ["geometry", "angle"], `<path d="M4 17a8 8 0 0 1 16 0H4Z"/><path d="M8.5 17a3.5 3.5 0 0 1 7 0"/><circle cx="12" cy="17" r="1" fill="currentColor"/>`),
  R("lms", "Crayons", ["kids", "draw"], `<path d="M7 20l-2-2 7-11 4 4-9 9Z"/><path d="M14 5l3-2 4 4-2 3"/><path d="M13 13l4-4 4 4-4 4-4-4Z"/><path d="M5 20l3-1-2-2-1 3Z"/>`),
  R("lms", "Test A+", ["exam", "grade"], `<path d="M6 3.5h8L19 8.5V20.5H6V3.5Z"/><path d="M13.5 3.5v5H19"/><path d="M9.5 16l1-3 1 3M8.8 14.5h2.4"/><path d="M14.5 13.5l3 3M17.5 13.5l-3 3"/>`),
  R("lms", "Chess Knight", ["strategy", "club"], `<path d="M7 20h11"/><path d="M8 20v-3l2-1 1-4-2-2 3-5 4 1-1 3 3 2-1 6-1 1v2"/><circle cx="15" cy="7" r="1" fill="currentColor" stroke="none"/>`),

  // ── AI +8 (→20) ───────────────────────────────────
  R("ai", "Robot Arm", ["automation", "tool"], `<path d="M4 20h8"/><path d="M8 20v-6l6-3 2-4"/><circle cx="16" cy="7" r="2"/><path d="M16 5V3M16 9v4M6 13l-2-2M10 13l2-2"/>`),
  R("ai", "Circuit Brain", ["neural", "chip"], `<path d="M9 5a3 3 0 0 0-3 4 3 3 0 0 0 1 5 3 3 0 0 0 5 6 3 3 0 0 0 6 1V8a3 3 0 0 0-2-3 3 3 0 0 0-5-1 3 3 0 0 0-7 1Z"/><path d="M9 3v2M15 3v2M5 8H3M21 8h-2"/>`),
  R("ai", "Generate Image", ["create", "art"], `<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l4-4 3 3 3-3 3 3"/><path d="M17.5 2.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" fill="currentColor" stroke="none"/>`),
  R("ai", "Voice Wave", ["audio", "speak"], `<circle cx="12" cy="12" r="2"/><path d="M8.5 9.5a5 5 0 0 0 0 5M15.5 9.5a5 5 0 0 1 0 5M6 7a9 9 0 0 0 0 10M18 7a9 9 0 0 1 0 10"/>`),
  R("ai", "Smart Home", ["iot", "house"], `<path d="M4 11l8-6 8 6"/><path d="M6 9.5V19h12V9.5"/><circle cx="12" cy="14" r="2"/><path d="M10 20v-3h4v3"/>`),
  R("ai", "Prompt Bulb", ["idea", "generate"], `<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.4 1.5 2.6h4c0-1.2.7-2 1.5-2.6A6 6 0 0 0 12 3Z"/><path d="M12 8l.9 1.9 2.1.3-1.5 1.5.4 2.1-1.9-1-1.9 1 .4-2.1-1.5-1.5 2.1-.3L12 8Z" fill="currentColor" stroke="none"/>`),
  R("ai", "Data Flow", ["pipeline", "etl"], `<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6h6a4 4 0 0 1 4 4v.5M7 18h6a4 4 0 0 0 4-4v-.5"/>`),
  R("ai", "GPU Card", ["compute", "hardware"], `<rect x="3" y="8" width="18" height="9" rx="2"/><path d="M3 12h18"/><circle cx="12" cy="14.5" r="1.2"/><path d="M7 17v2.5M17 17v2.5M7 4.5V8M17 4.5V8"/>`),

  // ── WEB3 +8 (→20) ─────────────────────────────────
  R("web3", "Gem NFT", ["collectible", "rare"], `<path d="M7 4h10v4l3 4-8 8-8-8 3-4V4Z"/><path d="M4 12h16M12 4v16"/>`),
  R("web3", "Pickaxe", ["mining", "dig"], `<path d="M4 6a8 5 0 0 1 16 0"/><path d="M4 6l-1 3M20 6l1 3"/><path d="M12 8v5"/><path d="M9 20l3-7 3 7"/>`),
  R("web3", "USB Vault", ["cold", "storage"], `<rect x="7" y="8" width="10" height="12" rx="2"/><path d="M10 8V5.5A1.5 1.5 0 0 1 11.5 4h1A1.5 1.5 0 0 1 14 5.5V8"/><path d="M10.5 13v3M13.5 13v3"/>`),
  R("web3", "Ballot Box", ["dao", "vote"], `<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M9 9V6h6v3"/><path d="M10 5V3.5h4V5"/><path d="M9.5 14.5l1.8 1.8 3.2-3.5"/>`),
  R("web3", "Chain Bridge", ["swap", "connect"], `<circle cx="6" cy="16" r="3"/><circle cx="18" cy="8" r="3"/><path d="M8.5 14l7-4"/><path d="M12 3v4M12 17v4"/>`),
  R("web3", "Parachute", ["airdrop", "drop"], `<path d="M4 11a8 8 0 0 1 16 0H4Z"/><path d="M12 3v2M7 11l3 6M17 11l-3 6M12 11v6"/><rect x="10" y="17" width="4" height="3.5" rx="1"/>`),
  R("web3", "Cube Stack", ["blocks", "ledger"], `<path d="M4 8l8-4 8 4-8 4-8-4Z"/><path d="M4 12l8 4 8-4"/><path d="M4 16l8 4 8-4"/>`),
  R("web3", "Orbit Coin", ["token", "defi"], `<circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-20 12 12)"/><circle cx="19" cy="8.5" r="1.2" fill="currentColor" stroke="none"/>`),

  // ── SHOP +8 (→20) ─────────────────────────────────
  R("shop", "Cash Register", ["checkout", "billing"], `<rect x="4" y="9" width="16" height="7" rx="2"/><path d="M6 16v4.5h12V16"/><path d="M7 12.5h.1M10.5 12.5h.1M14 12.5h.1" stroke-width="2.6"/><path d="M9 9V6.5h6V9"/>`),
  R("shop", "Shopping List", ["grocery", "check"], `<path d="M7 3.5h10V20.5H7V3.5Z"/><path d="M9.5 4.5h5"/><path d="M10 10l1 1 2-2M10 14l1 1 2-2"/>`),
  R("shop", "Open Sign", ["store", "welcome"], `<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M12 4v-1.5"/><path d="M8 12V9.5A1.5 1.5 0 0 1 9.5 8h1A1.5 1.5 0 0 1 12 9.5V12v2.5"/><path d="M14 8.5h2.5v3H14"/>`),
  R("shop", "Fragile Glass", ["handle", "wine"], `<path d="M8 3h8v5a4 4 0 0 1-3 3.9V15"/><path d="M12 11.9V15"/><path d="M8.5 18.5h7M12 15v3.5"/><path d="M5 20.5h14"/>`),
  R("shop", "Hand Mirror", ["beauty", "try"], `<circle cx="12" cy="9" r="5.5"/><circle cx="12" cy="9" r="2.5"/><path d="M12 14.5V21"/>`),
  R("shop", "Queue Ticket", ["token", "number"], `<path d="M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 0 0 6v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-6V8Z"/><path d="M13 6v2M13 11v2M13 16v2"/>`),
  R("shop", "Price Gun", ["label", "mrp"], `<path d="M4 6h11v5H9l-2 4H4V6Z"/><path d="M7 15v5.5"/><path d="M7 9.5h5"/>`),
  R("shop", "Star Sale", ["offer", "badge"], `<path d="M12 2.8l2.2 4.7 5.1.6-3.8 3.5.9 5-4.4-2.4-4.4 2.4.9-5L4.7 8.1l5.1-.6L12 2.8Z"/><path d="M9 20.5h6"/>`),

  // ── TRAVEL +6 (→18) ───────────────────────────────
  R("travel", "Anchor", ["ship", "sea"], `<circle cx="12" cy="5.5" r="2.5"/><path d="M12 8v13"/><path d="M5 13a7 7 0 0 0 14 0"/><path d="M5 13l-2 1M5 13l.5-2.5M19 13l2 1M19 13l-.5-2.5"/>`),
  R("travel", "Sailboat", ["sail", "yacht"], `<path d="M12 4v11"/><path d="M12 4c4 3 6 7 6 11h-6"/><path d="M12 7C9 9 7.5 12 7.5 15H12"/><path d="M4 18h16l-2 2.5H6L4 18Z"/>`),
  R("travel", "Train", ["rail", "metro"], `<rect x="6" y="3" width="12" height="14" rx="3"/><path d="M6 11h12"/><circle cx="9.5" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none"/><path d="M8.5 17L7 21M15.5 17l1.5 4"/>`),
  R("travel", "Air Balloon", ["hot-air", "ride"], `<path d="M12 3c4 0 7 3 7 7 0 4-4 8-7 8s-7-4-7-8c0-4 3-7 7-7Z"/><path d="M12 3v15M7 7c-1 4 1 8 5 11M17 7c1 4-1 8-5 11"/><path d="M10 18h4l-1 3h-2l-1-3Z"/>`),
  R("travel", "Cocktail", ["beach", "drink"], `<path d="M5 5h14l-7 8-7-8Z"/><path d="M12 13v7"/><path d="M8 20.5h8"/><path d="M14 3l2-1"/>`),
  R("travel", "Life Buoy", ["safety", "rescue"], `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M7 7l3.5 3.5M17 7l-3.5 3.5M7 17l3.5-3.5M17 17l-3.5-3.5"/>`),

  // ── SOCIAL +6 (→18) ───────────────────────────────
  R("social", "Trend Flame", ["viral", "hot"], `<path d="M12 21c-4 0-7-2.8-7-6.5 0-4 3-5.5 4-8.5.5 1.5 1.5 2.5 3 3-.5-2.5 0-4.5 2-6.5 3 3 5 6 5 11.5 0 3.7-3 6.5-7 6.5Z"/><path d="M12 21c-2 0-3.5-1.3-3.5-3 0-2 1.5-2.5 2-4.5 1 1 1.5 1.5 3 2-.3 3-3 5.5-1.5 5.5Z"/>`),
  R("social", "Poll Chart", ["vote", "stats"], `<path d="M4 4v16h16"/><path d="M8.5 16v-5M13 16V8M17.5 16v-3"/>`),
  R("social", "Verified Seal", ["badge", "check"], `<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2"/><path d="M9 12l2.2 2.2L15.5 10"/>`),
  R("social", "Inbox Tray", ["dm", "messages"], `<path d="M3.5 13.5L5 5h14l1.5 8.5a3 3 0 0 1-3 3.5h-11a3 3 0 0 1-3-3.5Z"/><path d="M3.5 13.5L12 9l8.5 4.5"/>`),
  R("social", "Live Button", ["stream", "go-live"], `<rect x="3" y="7" width="18" height="10" rx="5"/><circle cx="9" cy="12" r="2.5" fill="currentColor" stroke="none"/><path d="M13.5 10.5h5M13.5 13.5h5"/>`),
  R("social", "Follow Plus", ["add", "friend"], `<circle cx="10" cy="8.5" r="3.5"/><path d="M4 20c.7-3.5 3-5 6-5s5.3 1.5 6 5"/><circle cx="18" cy="18" r="3"/><path d="M18 16.5v3M16.5 18h3"/>`),

  // ── ARROWS +8 (→20) ───────────────────────────────
  R("arrows", "Shuffle", ["random", "mix"], `<path d="M3.5 7H7l10 10h3.5"/><path d="M17.5 14v3h-3M20.5 4v3h-3"/><path d="M3.5 17H7l2.5-2.5M13.5 9.5L17 6h3.5"/>`),
  R("arrows", "Maximize", ["expand", "full"], `<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`),
  R("arrows", "Minimize", ["shrink", "exit-full"], `<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>`),
  R("arrows", "Split Branch", ["fork", "git"], `<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="12" r="2.2"/><path d="M6 8.2v7.6M8 7c4 0 3 3 7.8 4"/>`),
  R("arrows", "Merge", ["combine", "git"], `<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="12" r="2.2"/><path d="M8 7c4 0 3 9 7.8 6"/>`),
  R("arrows", "Corner Down", ["turn", "enter"], `<path d="M4 4v9a3 3 0 0 0 3 3h13"/><path d="M15.5 12.5L20 16l-4.5 3.5"/>`),
  R("arrows", "Focus Frame", ["target", "crop"], `<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><circle cx="12" cy="12" r="2.5"/>`),
  R("arrows", "Reply", ["respond", "back"], `<path d="M9 11L5 7l4-4"/><path d="M5 7h9a6 6 0 0 1 0 12h-5"/>`),

  // ── FOOD +10 (→22) ────────────────────────────────
  R("food", "Noodles Bowl", ["ramen", "soup"], `<path d="M4 13h16a8 5 0 0 1-16 0Z"/><path d="M9 13V9.5M12 13V8M15 13V9.5"/><path d="M10 20.5h4"/>`),
  R("food", "Salad Bowl", ["healthy", "veg"], `<path d="M4 14h16a8 6 0 0 1-16 0Z"/><path d="M8 14c-1-3 1-5 3-6 0 2 2 3 4 3 1-2 3-2 5-1 0 3-2 4-4 4H8Z"/><circle cx="11" cy="11" r=".9" fill="currentColor" stroke="none"/><circle cx="14" cy="12" r=".9" fill="currentColor" stroke="none"/>`),
  R("food", "Sandwich", ["toast", "club"], `<path d="M4 8l8-4 8 4v3H4V8Z"/><path d="M4 13h16v3l-8 4-8-4v-3Z"/><circle cx="12" cy="6" r=".8" fill="currentColor" stroke="none"/>`),
  R("food", "Popcorn", ["movie", "snack"], `<path d="M6 10h12l-1.5 10h-9L6 10Z"/><path d="M6 10a2.5 2.5 0 0 1 0-5 3 3 0 0 1 5-1 3 3 0 0 1 5 0 2.5 2.5 0 0 1 2 6"/>`),
  R("food", "Sushi", ["japanese", "roll"], `<ellipse cx="12" cy="14" rx="8" ry="4.5"/><ellipse cx="12" cy="13" rx="5" ry="2.5"/><path d="M7 13c1-2 3-2 4 0M13 13c1-2 3-2 4 0"/><path d="M9 8.5L15 5M10.5 9.5L16 6.5"/>`),
  R("food", "Croissant", ["breakfast", "french"], `<path d="M7 15c-2 0-3.5-1.5-3-3.5C4.5 8 7 7 9 8c1-2 3-3 5-2l-1 4c1 1 1 3-1 4-2 2-3 1-5 1Z"/><path d="M13 8l4-3 3 3-4 3"/>`),
  R("food", "Milk Carton", ["dairy", "drink"], `<path d="M8 8h8v12H8z"/><path d="M8 8l2-4h4l2 4"/><path d="M8 8h8"/><path d="M11 13.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Z"/>`),
  R("food", "Chai Kettle", ["tea", "indian"], `<path d="M8 9h9v6a5 5 0 0 1-10 0V9Z"/><path d="M17 10.5h1a2.5 2.5 0 0 1 0 5h-1"/><path d="M8 9L5.5 6M8 12H5"/><path d="M10 6.5h4l-1-3h-2l-1 3Z"/>`),
  R("food", "Samosa", ["indian", "snack"], `<path d="M12 4L20 18H4L12 4Z"/><circle cx="11" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="15" r="1" fill="currentColor" stroke="none"/><circle cx="10" cy="16" r="1" fill="currentColor" stroke="none"/>`),
  R("food", "Mango", ["fruit", "summer"], `<path d="M10 5C6 6 4 10 5 14c1 4 4 7 8 6 3-1 4-5 3-9-1-4-3-7-6-6Z"/><path d="M10 5c0-1.5 1-2.5 2.5-3"/><path d="M8.5 12q2 3 5 4"/>`),

  // ── SPORTS +8 (→20) ───────────────────────────────
  R("sports", "Cricket Bat", ["cricket", "india"], `<path d="M13 3l8 8-2 2-8-8 2-2Z"/><path d="M11 13L4 20"/><path d="M4 20l-1.5.5L3 19 10 12"/><circle cx="16" cy="17" r="3"/><path d="M16 15.5v.1M14.8 17.5l2.4-1" stroke-width="1.6"/>`),
  R("sports", "Shuttle", ["badminton", "birdie"], `<path d="M8 3l8 8M10 3l8 8M8 3l-1 3M10 3l-.5 3M16 11l-1-3M18 11l-1.5-3"/><path d="M14 12l-4 4a2.5 2.5 0 0 0 3.5 3.5l4-4"/>`),
  R("sports", "Table Tennis", ["ping-pong", "paddle"], `<circle cx="9" cy="9" r="6"/><path d="M13.5 13.5L20 20"/><path d="M18 18l2 2"/>`),
  R("sports", "Boxing Glove", ["fight", "box"], `<path d="M8 4a5 5 0 0 1 9 2l2 4a5 5 0 0 1-8 5l-4-2a3 3 0 0 1-1-4l2-5Z"/><path d="M8 12h6"/><path d="M9 16v4h5v-3"/>`),
  R("sports", "Yoga Mat", ["roll", "stretch"], `<ellipse cx="7" cy="8" rx="3.5" ry="2.5"/><path d="M10 8h9v9H8"/><path d="M10 17l-2 3.5M7 8L5 5"/>`),
  R("sports", "Jump Rope", ["skip", "cardio"], `<path d="M7 3v6M17 3v6"/><path d="M7 9a5 6 0 0 0 10 0"/><path d="M5.5 3h3M15.5 3h3"/>`),
  R("sports", "Kettlebell", ["gym", "lift"], `<path d="M9 8V7a3 3 0 0 1 6 0v1"/><circle cx="12" cy="15" r="5.5"/><circle cx="12" cy="15" r="1.5"/>`),
  R("sports", "Chess Pawn", ["game", "strategy"], `<circle cx="12" cy="7" r="3"/><path d="M10 12h4l1 6H9l1-6Z"/><path d="M8 20.5h8"/>`),

  // ── MUSIC (18, new) ───────────────────────────────
  R("music", "Guitar", ["rock", "strings"], `<circle cx="8" cy="16" r="5"/><circle cx="8" cy="16" r="1.5"/><path d="M11 12L19 4"/><path d="M16 5l3 3"/><path d="M17.5 3.5L20.5 6.5"/>`),
  R("music", "Drum Kit", ["drums", "band"], `<ellipse cx="12" cy="15" rx="7" ry="4"/><path d="M5 15v-2h14v2"/><path d="M6 8l4 4M18 8l-4 4"/><circle cx="6" cy="7" r="1.4"/><circle cx="18" cy="7" r="1.4"/>`),
  R("music", "Piano Keys", ["keyboard", "play"], `<rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7.5 7v6M12 7v6M16.5 7v6"/><path d="M7.5 13v4M12 13v4M16.5 13v4"/>`),
  R("music", "Headphones", ["listen", "audio"], `<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/>`),
  R("music", "Vinyl Record", ["retro", "lp"], `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r=".8" fill="currentColor"/>`),
  R("music", "Speaker", ["sound", "bass"], `<rect x="6" y="3" width="12" height="18" rx="2.5"/><circle cx="12" cy="15" r="3.5"/><circle cx="12" cy="8" r="1.5"/>`),
  R("music", "Trumpet", ["brass", "jazz"], `<path d="M3 10h12l4-3v7l-4-3"/><path d="M8 10v4M11 10v4M14 10v3"/><path d="M19 7v7"/>`),
  R("music", "Violin", ["classic", "strings"], `<circle cx="8" cy="17" r="4"/><circle cx="16" cy="7" r="2.5"/><path d="M10 14l4-5"/><path d="M8 15.5v.1M8 18.5v.1" stroke-width="2.2"/>`),
  R("music", "Note Beam", ["melody", "song"], `<circle cx="7" cy="17" r="3"/><circle cx="17" cy="15" r="3"/><path d="M10 17V7l10-2v10"/>`),
  R("music", "Playlist", ["queue", "songs"], `<path d="M4 6h12M4 10h12"/><circle cx="8" cy="17" r="2.5"/><path d="M10.5 17h9.5V7l-6-2"/>`),
  R("music", "Boombox", ["retro", "party"], `<rect x="3" y="8" width="18" height="11" rx="2"/><circle cx="8.5" cy="13.5" r="3"/><circle cx="15.5" cy="13.5" r="3"/><path d="M7 8V5.5h10V8"/><circle cx="12" cy="6.7" r=".8" fill="currentColor"/>`),
  R("music", "DJ Mixer", ["deck", "mix"], `<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8.5" cy="12" r="3"/><circle cx="15.5" cy="12" r="3"/><path d="M8.5 10.5v.1M15.5 10.5v.1" stroke-width="2.2"/><path d="M12 18v2.5"/>`),
  R("music", "Backstage Pass", ["vip", "concert"], `<rect x="6" y="7" width="12" height="13" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v3"/><path d="M9.5 17.5h5"/>`),
  R("music", "Metronome", ["tempo", "beat"], `<path d="M7 20L10 5h4l3 15H7Z"/><path d="M7 20h10"/><path d="M12 12l4-3"/><circle cx="16" cy="9" r="1.2"/>`),
  R("music", "Amplifier", ["amp", "rock"], `<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="9" cy="14.5" r="2.5"/><path d="M14 12.5h3M14 15.5h3"/><path d="M8 9V6h8v3"/>`),
  R("music", "Saxophone", ["jazz", "brass"], `<path d="M9 3c4 0 5 3 4 6l-2 5"/><circle cx="9" cy="17" r="4"/><path d="M9 15.5v.1" stroke-width="2.2"/><path d="M13 9l3 1M12 11.5l3 1"/>`),
  R("music", "Tambourine", ["folk", "rhythm"], `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="4" r="1.2"/><circle cx="12" cy="20" r="1.2"/><circle cx="4" cy="12" r="1.2"/><circle cx="20" cy="12" r="1.2"/>`),
  R("music", "Sitar", ["indian", "classical"], `<ellipse cx="8" cy="17" rx="4" ry="3.5"/><path d="M10 14L18 4"/><circle cx="18.5" cy="3.5" r="1.5"/><path d="M13 11l1.5 1.5M14.5 9.5L16 11"/>`),

  // ── NATURE (16, new) ──────────────────────────────
  R("nature", "Paw Print", ["pet", "dog", "cat"], `<ellipse cx="12" cy="15" rx="4" ry="3.5"/><circle cx="6.5" cy="10" r="1.8"/><circle cx="10" cy="7.5" r="1.8"/><circle cx="14" cy="7.5" r="1.8"/><circle cx="17.5" cy="10" r="1.8"/>`),
  R("nature", "Dog Bone", ["pet", "treat"], `<path d="M7 10l10 4"/><circle cx="6" cy="8" r="2.2"/><circle cx="8.5" cy="11.5" r="2.2"/><circle cx="15.5" cy="12.5" r="2.2"/><circle cx="18" cy="16" r="2.2"/>`),
  R("nature", "Leaf", ["eco", "green"], `<path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15Z"/><path d="M5 19c3-6 7-10 12-12"/>`),
  R("nature", "Tree", ["forest", "park"], `<path d="M12 3l6 8h-4l5 7H5l5-7H6l6-8Z"/><path d="M12 18v3"/>`),
  R("nature", "Cactus", ["desert", "plant"], `<path d="M10 21V8a2 2 0 0 1 4 0v13"/><path d="M10 13H8a2 2 0 0 1-2-2V8"/><path d="M14 15h2a2 2 0 0 0 2-2v-4"/><path d="M8 21h8"/>`),
  R("nature", "Flower Bloom", ["spring", "garden"], `<circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="7" rx="2.5" ry="3.5"/><ellipse cx="12" cy="17" rx="2.5" ry="3.5"/><ellipse cx="7" cy="12" rx="3.5" ry="2.5"/><ellipse cx="17" cy="12" rx="3.5" ry="2.5"/>`),
  R("nature", "Sun", ["day", "bright"], `<circle cx="12" cy="12" r="4.5"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>`),
  R("nature", "Moon", ["night", "sleep"], `<path d="M19 14A8 8 0 0 1 10 5a8 8 0 1 0 9 9Z"/><path d="M16 4l.7 1.8 1.8.7-1.8.7L16 9l-.7-1.8-1.8-.7 1.8-.7L16 4Z" fill="currentColor" stroke="none"/>`),
  R("nature", "Cloud", ["sky", "weather"], `<path d="M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.5A3.5 3.5 0 0 1 17 18H7Z"/>`),
  R("nature", "Rainbow", ["color", "sky"], `<path d="M4 18a8 8 0 0 1 16 0"/><path d="M7 18a5 5 0 0 1 10 0"/><path d="M10 18a2 2 0 0 1 4 0"/><path d="M3 20.5h18"/>`),
  R("nature", "Mushroom", ["forest", "fungi"], `<path d="M4 11a8 6 0 0 1 16 0H4Z"/><path d="M10 11v7a2 2 0 0 0 4 0v-7"/><circle cx="9" cy="8" r="1.2" fill="#FFFDF5" stroke="none"/><circle cx="14" cy="9" r="1.2" fill="#FFFDF5" stroke="none"/>`),
  R("nature", "Shell", ["beach", "sea"], `<path d="M12 20V7"/><path d="M12 7C8 7 5 10 4 14c3 1 6 1 8 0 2 1 5 1 8 0-1-4-4-7-8-7Z"/><path d="M9 9c-1 3-1 6 0 9M15 9c1 3 1 6 0 9"/>`),
  R("nature", "Snowflake", ["winter", "cold"], `<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/><path d="M12 3l-2 2M12 3l2 2M12 21l-2-2M12 21l2-2"/>`),
  R("nature", "Acorn", ["oak", "seed"], `<path d="M6 10a6 4.5 0 0 1 12 0H6Z"/><path d="M8 14c0 4 2 6 4 6s4-2 4-6"/><path d="M12 5.5V3.5"/><path d="M10 3.5h4"/>`),
  R("nature", "Sprout", ["grow", "eco"], `<path d="M12 21v-8"/><path d="M12 13C12 9 9 7 5 7c0 4 3 6 7 6Z"/><path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6Z"/>`),
  R("nature", "Water Drop", ["rain", "aqua"], `<path d="M12 3.5s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10.5 12 3.5 12 3.5Z"/><path d="M9 14.5a3 3 0 0 0 2.5 3"/>`),
];
