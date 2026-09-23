import type { CollectionSlug } from "./collections";
import { MORE_ICONS } from "./icons-more";
import { EXTRA_ICONS } from "./icons-extra";

export interface RetroIcon {
  slug: string; // unique: collection-name
  name: string;
  collection: CollectionSlug;
  tags: string[];
  /** inner SVG markup, inherits stroke=currentColor, fill=none unless specified */
  body: string;
}

const R = (collection: CollectionSlug, name: string, tags: string[], body: string): RetroIcon => ({
  slug: `${collection}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  name,
  collection,
  tags,
  body,
});

const BASE_ICONS: RetroIcon[] = [
  // ── WEBSITES (12) ─────────────────────────────────
  R("websites", "Globe", ["world", "internet", "domain"], `<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.6 2.4 3.8 5.3 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.3-3.8-8.5s1.2-6.1 3.8-8.5Z"/>`),
  R("websites", "Layout Grid", ["dashboard", "sections"], `<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9h17"/><path d="M9 9v11"/><circle cx="6" cy="6.5" r=".6" fill="currentColor"/><circle cx="8.2" cy="6.5" r=".6" fill="currentColor"/>`),
  R("websites", "Browser", ["window", "tab"], `<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 9.5h18"/><circle cx="6" cy="7.2" r=".7" fill="currentColor"/><path d="M7 13.5l2.5 2.5L13 12.5"/><path d="M14.5 12.5H17"/>`),
  R("websites", "Cursor Click", ["pointer", "cta"], `<path d="M6 3.5l13 9.5-7.2 1.2L8.5 21 6 3.5Z"/><path d="M12.5 12.5l4 4"/><path d="M18.5 3.5v3M20 5l-3 .1M19.5 8.5l-2-2"/>`),
  R("websites", "Hero Image", ["banner", "gallery"], `<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M4 17.5l4.5-4.5 3 3 3.5-3.5 5 5"/>`),
  R("websites", "Navbar", ["menu", "hamburger"], `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M6 13h4M6 16h7"/><path d="M15 13.5h3M15 16h3"/>`),
  R("websites", "Anchor Link", ["url", "chain"], `<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1.5 1.5"/><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1.5-1.5"/>`),
  R("websites", "Search", ["find", "lens"], `<circle cx="11" cy="11" r="6.5"/><path d="M15.8 15.8L20.5 20.5"/><path d="M8.5 11a2.5 2.5 0 0 1 2.5-2.5"/>`),
  R("websites", "Code", ["dev", "brackets"], `<path d="M8.5 8L4 12l4.5 4"/><path d="M15.5 8L20 12l-4.5 4"/><path d="M13.5 5l-3 14"/>`),
  R("websites", "Palette", ["design", "theme"], `<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.4 0 2-.9 2-1.9 0-1.4-1.2-1.9-1.2-3 0-1 .8-1.8 1.9-1.8H17a4.5 4.5 0 0 0 4.5-4.5C21.5 5.7 17.1 3.5 12 3.5Z"/><circle cx="8" cy="10" r="1" fill="currentColor"/><circle cx="11.5" cy="7.5" r="1" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1" fill="currentColor"/>`),
  R("websites", "Rocket", ["launch", "startup"], `<path d="M12 3.5c3.5 2 5 5.5 4.5 9.5l-2.5 2.5c-4 .5-7.5-1-9.5-4.5C6 8 8.5 5 12 3.5Z"/><circle cx="13.5" cy="9.5" r="1.6"/><path d="M7.5 15.5L5 21l6-2.5"/><path d="M4 4l2 2M20 4l-1.5 1.5"/>`),
  R("websites", "Shield Check", ["secure", "ssl"], `<path d="M12 3l7.5 3v6c0 4.5-3.2 7.3-7.5 9-4.3-1.7-7.5-4.5-7.5-9V6L12 3Z"/><path d="M9 12l2.2 2.2L15.5 10"/>`),

  // ── BLOG (12) ─────────────────────────────────────
  R("blog", "Pen Nib", ["write", "author"], `<path d="M5 19l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L9 18l-4 1Z"/><path d="M14.5 6.5l3 3"/><path d="M5 19c1.5.3 3-.4 3.5-1.5"/>`),
  R("blog", "Typewriter", ["retro", "draft"], `<rect x="2.5" y="9" width="19" height="7" rx="2"/><path d="M6 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M2.5 13.5h19"/><circle cx="7" cy="11.5" r=".7" fill="currentColor"/><circle cx="10" cy="11.5" r=".7" fill="currentColor"/><circle cx="13" cy="11.5" r=".7" fill="currentColor"/><path d="M7 16.5h10l1 3.5H6l1-3.5Z"/>`),
  R("blog", "Quill", ["feather", "story"], `<path d="M19 4c-4 0-9 3-11 8l-3 7 7-3c5-2 8-7 7-12Z"/><path d="M8 16L16 8"/><path d="M11 13l1.5 1.5M13.5 10.5L15 12"/>`),
  R("blog", "Bookmark", ["save", "read-later"], `<path d="M7 3.5h10a1 1 0 0 1 1 1V21l-6-4-6 4V4.5a1 1 0 0 1 1-1Z"/><path d="M9.5 8.5h5"/>`),
  R("blog", "Open Book", ["article", "read"], `<path d="M12 6.5C10 4.8 7.2 4.5 4 5v13c3.2-.5 6-.2 8 1.5 2-1.7 4.8-2 8-1.5V5c-3.2-.5-6-.2-8 1.5Z"/><path d="M12 6.5v13"/>`),
  R("blog", "Quote", ["testimonial"], `<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M9.5 9.5c-1.5.5-2.3 1.6-2.3 3.2v1.8h2.6v-2.6H8.4c.1-.9.7-1.4 1.8-1.6l-.7-.8ZM16 9.5c-1.5.5-2.3 1.6-2.3 3.2v1.8h2.6v-2.6h-1.4c.1-.9.7-1.4 1.8-1.6l-.7-.8Z" fill="currentColor" stroke="none"/>`),
  R("blog", "Highlighter", ["edit", "mark"], `<path d="M9 15l-4.5 4.5L3 18l4.5-4.5 1.5 1.5Z"/><path d="M11 11l5.5-5.5a1.8 1.8 0 0 1 2.5 0l1.5 1.5a1.8 1.8 0 0 1 0 2.5L15 15l-4-4Z"/><path d="M9.5 13.5l3 3"/>`),
  R("blog", "Ink Pot", ["fountain", "draw"], `<path d="M8 9h8l-1 11H9L8 9Z"/><path d="M9.5 9L12 3l2.5 6"/><path d="M7 12.5h10"/>`),
  R("blog", "Glasses", ["reading"], `<circle cx="7" cy="14" r="3.2"/><circle cx="17" cy="14" r="3.2"/><path d="M10.2 14h3.6M3.8 14L3 8.5M20.2 14L21 8.5"/>`),
  R("blog", "RSS", ["feed", "subscribe"], `<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4" fill="currentColor" stroke="none"/>`),
  R("blog", "Post Calendar", ["schedule"], `<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17"/><path d="M8 3v4M16 3v4"/><path d="M7.5 13.5h3M7.5 16.5h6"/>`),
  R("blog", "Paperclip", ["attach"], `<path d="M8 12.5V6a4 4 0 0 1 8 0v9a6 6 0 0 1-12 0V9.5a3.5 3.5 0 0 1 7 0V15"/>`),

  // ── NEWS MEDIA (12) ───────────────────────────────
  R("news", "Newspaper", ["press", "article"], `<path d="M4 6.5A1.5 1.5 0 0 1 5.5 5H18v11H5.7A1.7 1.7 0 0 0 4 17.7V6.5Z"/><path d="M18 16.5h1.5A1.5 1.5 0 0 0 21 15V7.5L18 5"/><path d="M7 8.5h7M7 11.5h7M7 14.5h4"/>`),
  R("news", "Mic", ["podcast", "interview"], `<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v3.5M8.5 20.5h7"/>`),
  R("news", "Video Cam", ["broadcast"], `<rect x="2.5" y="7" width="13" height="10" rx="2.5"/><path d="M15.5 10.5l6-3.5v10l-6-3.5"/>`),
  R("news", "Camera", ["photo", "press"], `<rect x="3" y="7.5" width="18" height="12.5" rx="2.5"/><path d="M8.5 7.5L10 5h4l1.5 2.5"/><circle cx="12" cy="13.5" r="3.5"/><circle cx="12" cy="13.5" r="1.2" fill="currentColor" stroke="none"/>`),
  R("news", "Radio Tower", ["signal", "fm"], `<circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M6 6a9 9 0 0 0 0 12M18 6a9 9 0 0 1 0 12"/><path d="M12 13.5V21"/>`),
  R("news", "Breaking Bolt", ["alert", "live"], `<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M13 7l-4.5 6H12l-1 4 4.5-6H12l1-4Z" fill="currentColor" stroke="none"/>`),
  R("news", "Press Badge", ["id", "reporter"], `<rect x="5" y="7" width="14" height="13" rx="2"/><circle cx="12" cy="12" r="2.2"/><path d="M8.5 17.5c.6-1.2 1.9-1.8 3.5-1.8s2.9.6 3.5 1.8"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M12 3v4"/>`),
  R("news", "Headline", ["type", "editor"], `<path d="M4 6V4h16v2"/><path d="M12 4v16"/><path d="M9 20h6"/><path d="M9.5 10h5M9.5 13h5"/>`),
  R("news", "Archive Box", ["records"], `<rect x="3" y="4.5" width="18" height="5" rx="1.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 13h4"/>`),
  R("news", "Live Dot", ["on-air"], `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/><path d="M12 5.5v2M12 16.5v2M5.5 12h2M16.5 12h2"/>`),
  R("news", "Printer", ["print"], `<path d="M7 8V3.5h10V8"/><rect x="3.5" y="8" width="17" height="8" rx="2"/><rect x="7" y="13.5" width="10" height="7" rx="1"/>`),
  R("news", "Satellite", ["dish"], `<path d="M6 16a8 8 0 0 1 8-8"/><path d="M6 16l-2.5 4L7 18.5 5.5 21l3-1L7 16.5"/><circle cx="16" cy="8" r="2.5"/><path d="M18 10l4 4M14.5 5.5L4 16"/>`),

  // ── HOSPITAL (12) ─────────────────────────────────
  R("hospital", "Cross", ["emergency", "plus"], `<circle cx="12" cy="12" r="8.5"/><path d="M12 8v8M8 12h8"/>`),
  R("hospital", "Ambulance", ["er", "vehicle"], `<path d="M2.5 7h11v9h-11zM13.5 10h4l3 3.5V16h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/><path d="M6 8.5h4M8 6.5v4"/>`),
  R("hospital", "Bed", ["ward", "patient"], `<path d="M3 18V7"/><path d="M3 13.5h18v4.5"/><path d="M3 15.5h18"/><circle cx="7" cy="10.5" r="1.6"/><path d="M11 13.5v-2a2 2 0 0 1 2-2h4v3.5"/>`),
  R("hospital", "Heart Pulse", ["cardio"], `<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/><path d="M5 12h3l1.5-2.5L12 14l1.5-2h3.5"/>`),
  R("hospital", "IV Drip", ["infusion"], `<path d="M8 3.5h8"/><path d="M12 3.5V9"/><path d="M10 9h4v4a2 2 0 0 1-4 0V9Z"/><path d="M12 15v6"/><path d="M9 21h6"/>`),
  R("hospital", "Building H", ["facility"], `<rect x="4" y="3.5" width="16" height="17" rx="1.5"/><path d="M9 8.5h6v6H9zM12 8.5v6M9 11.5h6"/><path d="M10 20.5v-3h4v3"/>`),
  R("hospital", "Siren", ["alarm"], `<path d="M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7Z"/><path d="M4 14h16v2.5H4zM6 16.5V19h12v-2.5"/><circle cx="12" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>`),
  R("hospital", "Chart Board", ["records"], `<rect x="5" y="4.5" width="14" height="16" rx="2"/><path d="M9 4.5V3h6v1.5"/><path d="M8.5 13l2.5-3 2 2 3-3.5"/>`),
  R("hospital", "Mask", ["safety"], `<path d="M4 9a8 6 0 0 0 16 0v1a8 6 0 0 1-16 0V9Z"/><path d="M4 9l-1.5-2M20 9l1.5-2M9 12.5h.1M15 12.5h.1"/>`),
  R("hospital", "Blood Drop", ["donate"], `<path d="M12 3.5s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10.5 12 3.5 12 3.5Z"/><path d="M9 14.5a3 3 0 0 0 2.5 3"/>`),
  R("hospital", "Emergency Call", ["phone"], `<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/><path d="M9.5 7.5a5 5 0 0 1 5 0"/><path d="M9.5 10.5l1.2-1.2a1 1 0 0 1 1.4 0l.7.7a1 1 0 0 0 1.4 0l1-1"/>`),
  R("hospital", "Wheelchair", ["access"], `<circle cx="10" cy="5" r="1.8"/><path d="M10 7.5V12h5l2.5 7"/><path d="M10 10.5h4"/><path d="M7 13.5a5 5 0 1 0 7.5 4.3"/>`),

  // ── CLINIC (12) ───────────────────────────────────
  R("clinic", "Stethoscope", ["checkup"], `<path d="M6 3.5v5a4 4 0 0 0 8 0v-5"/><path d="M6 3.5H4.5M6 3.5h1.5M18 3.5h-1.5M18 3.5H19.5"/><path d="M10 12.5V16a4 4 0 0 0 8 0v-1"/><circle cx="18" cy="13.5" r="1.8"/>`),
  R("clinic", "Pill", ["pharmacy"], `<rect x="3.5" y="9" width="17" height="6.5" rx="3.2" transform="rotate(-35 12 12)"/><path d="M9.5 14.5l5-5"/>`),
  R("clinic", "Thermometer", ["fever"], `<path d="M10 4a2 2 0 0 1 4 0v9.3a4.5 4.5 0 1 1-4 0V4Z"/><circle cx="12" cy="17.5" r="1.5" fill="currentColor" stroke="none"/><path d="M12 16v-6"/>`),
  R("clinic", "Syringe", ["vaccine"], `<path d="M4 20l4-1 9-9-3-3-9 9-1 4Z"/><path d="M14 7l3 3"/><path d="M16.5 4.5l3 3M19 2l3 3M13 2l3 3"/>`),
  R("clinic", "Tooth", ["dental"], `<path d="M7.5 3.5C5 3.5 3.5 5 4 7.5c.6 3 1.5 4.5 2 7 .3 1.6.8 6 2.2 6 1.6 0 1.2-4.5 3.8-4.5s2.2 4.5 3.8 4.5c1.4 0 1.9-4.4 2.2-6 .5-2.5 1.4-4 2-7 .5-2.5-1-4-3.5-4-1.8 0-2.5 1-4.5 1s-2.7-1-4.5-1Z"/>`),
  R("clinic", "Eye", ["vision", "optical"], `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>`),
  R("clinic", "Bandage", ["wound"], `<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-25 12 12)"/><path d="M11 11.2h.1M12.7 12.4h.1M13.9 10.6h.1M10.1 13h.1" stroke-width="2.6"/>`),
  R("clinic", "Appointment", ["card", "schedule"], `<rect x="3" y="5.5" width="18" height="14" rx="2"/><path d="M3 10h18"/><circle cx="8" cy="14.5" r="2"/><path d="M13 13.5h5M13 16h5"/>`),
  R("clinic", "Mortar", ["herbal", "mix"], `<path d="M4 11h16c0 4-3.5 7-8 7s-8-3-8-7Z"/><path d="M14 5l5 5"/><circle cx="16.5" cy="4.5" r="1.5"/><path d="M9 21h6"/>`),
  R("clinic", "Weight Scale", ["bmi"], `<path d="M12 4v16M7 20h10"/><path d="M5 7l7-3 7 3"/><circle cx="7.5" cy="12" r="2.5"/><circle cx="16.5" cy="12" r="2.5"/><path d="M7.5 9.5L6 7M16.5 9.5L18 7"/>`),
  R("clinic", "Sanitizer", ["hygiene"], `<rect x="8" y="9" width="8" height="11.5" rx="2"/><path d="M10 9V7h4v2"/><path d="M12 7V4.5h3"/><path d="M11 13.5h2M11 16h2"/>`),
  R("clinic", "Pulse Doc", ["report"], `<path d="M6 3.5h8L19 8.5V20.5H6V3.5Z"/><path d="M13.5 3.5v5H19"/><path d="M9 14h2l1-2 1.5 4 1-2H17"/>`),

  // ── BANK (12) ─────────────────────────────────────
  R("bank", "Vault", ["safe", "secure"], `<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/><path d="M12 7.5V10M12 14v2.5M7.5 12H10M14 12h2.5"/>`),
  R("bank", "Coins", ["money", "stack"], `<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/><path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"/>`),
  R("bank", "Card", ["credit", "debit"], `<rect x="2.5" y="6" width="19" height="13" rx="2.5"/><path d="M2.5 10h19"/><path d="M6 15h4"/>`),
  R("bank", "Piggy", ["save"], `<path d="M5 11a7 6 0 0 1 12-3l2-2 1 3 2.5.5-1.5 2.5c.3.6.5 1.3.5 2a6 6 0 0 1-9 5.2L9 21l-.5-2.5A6 6 0 0 1 5 11Z"/><circle cx="15" cy="10" r=".8" fill="currentColor"/><path d="M9 20v1.5M14.5 19.5V21"/>`),
  R("bank", "Chart Up", ["growth", "invest"], `<path d="M3.5 3.5V20.5H20.5"/><path d="M7 15l3.5-4 2.5 2.5L18 8.5"/><path d="M15 8.5h3v3"/>`),
  R("bank", "Bank", ["branch", "classic"], `<path d="M3 9l9-5.5L21 9"/><path d="M4.5 9v9M9.5 9v9M14.5 9v9M19.5 9v9"/><path d="M3 20.5h18"/>`),
  R("bank", "Wallet", ["cash"], `<path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"/><path d="M16 12.5h4v4h-4a2 2 0 0 1 0-4Z"/><circle cx="18" cy="14.5" r=".7" fill="currentColor"/>`),
  R("bank", "Receipt", ["bill"], `<path d="M6 3.5h12V21l-3-2-3 2-3-2-3 2V3.5Z"/><path d="M9 8h6M9 11.5h6"/>`),
  R("bank", "Percent", ["interest", "loan"], `<circle cx="7.5" cy="7.5" r="3"/><circle cx="16.5" cy="16.5" r="3"/><path d="M18.5 5.5l-13 13"/>`),
  R("bank", "Handshake", ["deal"], `<path d="M3 8l4-2 5 4 5-4 4 2-7 8-2-1.5L10 16l-7-8Z"/><path d="M10 16l1.5 2M12 14.5l1.7 2.2"/>`),
  R("bank", "Key", ["locker"], `<circle cx="8" cy="14" r="4.5"/><path d="M11.5 10.5L20 2"/><path d="M16.5 5.5l2.5 2.5M14 8l2 2"/>`),
  R("bank", "Calculator", ["math"], `<rect x="5.5" y="3" width="13" height="18" rx="2"/><path d="M8.5 7.5h7"/><path d="M8.5 12h.1M12 12h.1M15.5 12h.1M8.5 15.5h.1M12 15.5h.1M15.5 15.5h.1M8.5 19h.1M12 19h.1M15.5 19h.1" stroke-width="2.4"/>`),

  // ── LMS (12) ──────────────────────────────────────
  R("lms", "Grad Cap", ["degree"], `<path d="M2.5 9L12 5l9.5 4L12 13 2.5 9Z"/><path d="M6.5 11v4.5c0 1.5 11 1.5 11 0V11"/><path d="M19.5 9v5.5"/>`),
  R("lms", "Book", ["course"], `<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.7A1.7 1.7 0 0 0 5 19.7V4.5Z"/><path d="M5 19.5A1.5 1.5 0 0 1 6.5 18H19"/><path d="M9 7.5h6"/>`),
  R("lms", "Backpack", ["school"], `<rect x="6" y="7" width="12" height="13" rx="3"/><path d="M9 7V6a3 3 0 0 1 6 0v1"/><path d="M9 4a3 3 0 0 1 6 0"/><rect x="9.5" y="12" width="5" height="4" rx="1.5"/>`),
  R("lms", "Board", ["teach", "chalk"], `<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v3.5M8.5 20.5h7"/><path d="M7 8l2.5 2.5L13 7M14.5 11.5h3"/>`),
  R("lms", "Certificate", ["award"], `<rect x="3.5" y="4" width="17" height="13" rx="2"/><circle cx="12" cy="10.5" r="2.5"/><path d="M10 15l-1 5 3-2 3 2-1-5"/><path d="M7 7h4M7 9.5h2"/>`),
  R("lms", "Pencil Ruler", ["design", "exam"], `<path d="M4 20l1-4L16 5l3 3L8 19l-4 1Z"/><path d="M13.5 12.5l-5-5M15 4l5 5M18 3l3 3"/>`),
  R("lms", "Abacus", ["math", "count"], `<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M4 9h16M4 15h16"/><circle cx="9" cy="9" r="1.4" fill="currentColor"/><circle cx="15" cy="15" r="1.4" fill="currentColor"/><path d="M12 3.5V9M12 15v5.5"/>`),
  R("lms", "Laptop Class", ["online"], `<rect x="4" y="4.5" width="16" height="11" rx="2"/><path d="M2.5 18.5h19l-1.5 2h-16l-1.5-2Z"/><path d="M10.5 8.5l-2 2 2 2M13.5 8.5l2 2-2 2"/>`),
  R("lms", "Medal", ["trophy"], `<circle cx="12" cy="14" r="5"/><path d="M9 9.5L7 3.5h4l1 3 1-3h4l-2 6"/><circle cx="12" cy="14" r="1.5"/>`),
  R("lms", "Flask", ["science", "lab"], `<path d="M10 3.5h4"/><path d="M10.5 3.5V9l-5.5 9.5A1.5 1.5 0 0 0 6.3 21h11.4a1.5 1.5 0 0 0 1.3-2.5L13.5 9V3.5"/><path d="M8 14.5h8"/>`),
  R("lms", "Library", ["books"], `<path d="M4 20.5h16"/><path d="M5 20.5V5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5v15"/><path d="M9 8h6M9 11h6"/><path d="M12 4v16.5"/>`),
  R("lms", "Bell", ["reminder"], `<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2.5h-15L6 16Z"/><path d="M10 21a2 2 0 0 0 4 0"/>`),

  // ── AI (12) ───────────────────────────────────────
  R("ai", "Bot", ["robot"], `<rect x="5" y="9" width="14" height="11" rx="3"/><path d="M12 9V5.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="9.5" cy="13.5" r="1" fill="currentColor"/><circle cx="14.5" cy="13.5" r="1" fill="currentColor"/><path d="M9.5 17h5M3.5 12v3M20.5 12v3"/>`),
  R("ai", "Chip", ["processor"], `<rect x="7" y="7" width="10" height="10" rx="2"/><rect x="10" y="10" width="4" height="4" rx="1"/><path d="M10 7V3.5M14 7V3.5M10 20.5V17M14 20.5V17M7 10H3.5M7 14H3.5M20.5 10H17M20.5 14H17"/>`),
  R("ai", "Sparkles", ["magic", "generate"], `<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M18.5 14.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z"/>`),
  R("ai", "Neural", ["network"], `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3"/>`),
  R("ai", "Prompt", ["terminal", "chat"], `<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 9.5l3 3-3 3"/><path d="M12.5 15.5H17"/>`),
  R("ai", "Scan Eye", ["vision"], `<path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16"/><circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>`),
  R("ai", "Wand", ["enhance"], `<path d="M5 19L15.5 8.5"/><path d="M15 4l.9 2.1L18 7l-2.1.9L15 10l-.9-2.1L12 7l2.1-.9L15 4Z"/><path d="M19 11l.7 1.8 1.8.7-1.8.7L19 16l-.7-1.8-1.8-.7 1.8-.7L19 11ZM8 4l.6 1.4L10 6l-1.4.6L8 8l-.6-1.4L6 6l1.4-.6L8 4Z"/>`),
  R("ai", "Database", ["vector"], `<ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13"/><path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/>`),
  R("ai", "Sliders", ["tune", "params"], `<path d="M5 7h14M5 12h14M5 17h14"/><circle cx="10" cy="7" r="2" fill="#FFFDF5"/><circle cx="15" cy="12" r="2" fill="#FFFDF5"/><circle cx="9" cy="17" r="2" fill="#FFFDF5"/>`),
  R("ai", "Face ID", ["auth"], `<path d="M7 4H5.5A1.5 1.5 0 0 0 4 5.5V7M17 4h1.5A1.5 1.5 0 0 1 20 5.5V7M20 17v1.5a1.5 1.5 0 0 1-1.5 1.5H17M7 20H5.5A1.5 1.5 0 0 1 4 18.5V17"/><path d="M9 10h.1M15 10h.1M9 15c.7 1 1.7 1.5 3 1.5s2.3-.5 3-1.5"/>`),
  R("ai", "Layers", ["model"], `<path d="M12 3l9 4.5-9 4.5-9-4.5L12 3Z"/><path d="M4.5 12.5L12 16.2l7.5-3.7"/><path d="M4.5 16.5L12 20.2l7.5-3.7"/>`),
  R("ai", "Terminal", ["code"], `<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 9l3 3-3 3"/><path d="M12 15h5"/>`),

  // ── WEB3 (12) ─────────────────────────────────────
  R("web3", "Cube", ["blockchain", "3d"], `<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>`),
  R("web3", "Wallet Key", ["connect"], `<path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"/><path d="M14 11.5h6v3h-6a1.5 1.5 0 0 1 0-3Z"/><circle cx="16.5" cy="13" r=".7" fill="currentColor"/>`),
  R("web3", "Link Blocks", ["chain"], `<rect x="3" y="8" width="8" height="8" rx="2"/><rect x="13" y="8" width="8" height="8" rx="2"/><path d="M11 12h2"/>`),
  R("web3", "Token", ["coin", "eth"], `<circle cx="12" cy="12" r="8.5"/><path d="M12 6.5l3.5 5.5L12 17.5 8.5 12 12 6.5Z"/><path d="M8.5 12h7"/>`),
  R("web3", "Ledger", ["notebook"], `<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 3.5V6h6V3.5"/><path d="M9 11h6M9 14.5h6M9 18h4"/>`),
  R("web3", "Fingerprint", ["identity"], `<path d="M6 6a8 8 0 0 1 12 0"/><path d="M4.5 10a8 8 0 0 1 1.5-2M19.5 10a8 8 0 0 0-1.5-2"/><path d="M6.5 13a8 8 0 0 1 11 0"/><path d="M12 8a4 4 0 0 1 4 4c0 2-.5 4-1 6-.3 1.2-.7 2-1.5 2.5M12 8a4 4 0 0 0-4 4c0 1 .2 2.5.5 4M12 12v3c0 1.5-.3 3-.8 4"/>`),
  R("web3", "Hex", ["token-icon"], `<path d="M12 2.8l7.8 4.5v9L12 20.8l-7.8-4.5v-9L12 2.8Z"/><circle cx="12" cy="11.8" r="2.5"/>`),
  R("web3", "Nodes", ["defi", "graph"], `<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="8" r="2.2"/><circle cx="10" cy="18" r="2.2"/><path d="M8 7l7.5.7M7 8.2l2 7.3M16.5 10l-4.5 6"/>`),
  R("web3", "Contract", ["doc", "sign"], `<path d="M6 3.5h8L19 8.5V20.5H6V3.5Z"/><path d="M13.5 3.5v5H19"/><path d="M9 16c1-1.5 2-1.5 3 0s2 1.5 3 0"/><circle cx="9.5" cy="12" r=".8" fill="currentColor"/><circle cx="14.5" cy="12" r=".8" fill="currentColor"/>`),
  R("web3", "Gas Drop", ["fee"], `<path d="M12 3.5s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10.5 12 3.5 12 3.5Z"/><path d="M10 9.5h4M10.5 12h3"/>`),
  R("web3", "Shield Web3", ["audit"], `<path d="M12 3l7.5 3v6c0 4.5-3.2 7.3-7.5 9-4.3-1.7-7.5-4.5-7.5-9V6L12 3Z"/><path d="M9.5 9.5l4 4M13.5 9.5l-4 4"/>`),
  R("web3", "Swap", ["exchange"], `<path d="M4 8h13l-3-3M20 16H7l3 3"/>`),

  // ── SHOP (12) ─────────────────────────────────────
  R("shop", "Cart", ["buy"], `<path d="M3 4h2.5l2.2 11h10.8l2-8H7"/><circle cx="9.5" cy="19" r="1.5"/><circle cx="16.5" cy="19" r="1.5"/>`),
  R("shop", "Bag", ["store"], `<path d="M6 8h12l-1 12.5H7L6 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>`),
  R("shop", "Tag", ["price", "sale"], `<path d="M4 4h7l9 9-7 7-9-9V4Z"/><circle cx="9" cy="9" r="1.4"/>`),
  R("shop", "Truck", ["ship", "delivery"], `<path d="M2.5 6.5h12V17h-12zM14.5 10.5h3.5l3.5 3.5V17h-7"/><circle cx="7" cy="18.5" r="1.8"/><circle cx="17" cy="18.5" r="1.8"/>`),
  R("shop", "Parcel", ["box"], `<path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/><path d="M8 6l8.5 4"/>`),
  R("shop", "Storefront", ["shop"], `<path d="M4 10l1-5h14l1 5"/><path d="M4 10v10h16V10"/><path d="M4 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M10 20v-5h4v5"/>`),
  R("shop", "Barcode", ["scan"], `<path d="M4 6v12M7.5 6v12M11 6v12M13.5 6v12M17 6v12M20 6v12"/>`),
  R("shop", "Gift", ["present"], `<rect x="4" y="9" width="16" height="4" rx="1"/><path d="M6 13v7.5h12V13"/><path d="M12 9v11.5"/><path d="M12 9S5 9 4.5 6.8C4.2 5.2 6 4 7.4 4.8 9 5.8 12 9 12 9ZM12 9s7 0 7.5-2.2C19.8 5.2 18 4 16.6 4.8 15 5.8 12 9 12 9Z"/>`),
  R("shop", "Return", ["refund"], `<path d="M4 9h11a5 5 0 0 1 0 10h-6"/><path d="M7 6l-3 3 3 3"/>`),
  R("shop", "Discount", ["offer", "badge"], `<circle cx="12" cy="12" r="8.5"/><path d="M8 8h8v8H8z" transform="rotate(15 12 12)"/><path d="M9.5 14.5l5-5"/>`),
  R("shop", "Cash", ["dollar"], `<rect x="2.5" y="7" width="19" height="10" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v.1M18 14v.1"/>`),
  R("shop", "Hanger", ["fashion"], `<circle cx="12" cy="5.5" r="1.8"/><path d="M12 7.3V9l-8 5.5a1.5 1.5 0 0 0 .8 2.7H12h7.2a1.5 1.5 0 0 0 .8-2.7L12 9"/>`),

  // ── TRAVEL (12) ───────────────────────────────────
  R("travel", "Paper Plane", ["send", "fly"], `<path d="M21 3.5L3.5 10.5l7 2.5 2.5 7L21 3.5Z"/><path d="M21 3.5L10.5 13"/>`),
  R("travel", "Airplane", ["flight"], `<path d="M10.5 20.5L3 12l4-4 5 3V5.5L14.5 3l1 5.5 4-1L21 10l-5.5 2.5-1 4-4 4Z"/><path d="M7 16l9-9"/>`),
  R("travel", "Map Pin", ["location"], `<path d="M12 21.5S5 14.5 5 9.5a7 7 0 0 1 14 0c0 5-7 12-7 12Z"/><circle cx="12" cy="9.5" r="2.3"/>`),
  R("travel", "Compass", ["explore"], `<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z"/>`),
  R("travel", "Passport", ["id"], `<rect x="5" y="3.5" width="14" height="17" rx="2"/><circle cx="12" cy="10.5" r="3"/><path d="M8.5 17c.7-1.5 2-2.2 3.5-2.2s2.8.7 3.5 2.2"/>`),
  R("travel", "Suitcase", ["luggage"], `<rect x="4" y="8" width="16" height="12.5" rx="2.5"/><path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8"/><path d="M4 13h16"/>`),
  R("travel", "Mountain", ["hike", "camp"], `<path d="M3 19L10 7l4 6 2.5-3.5L21 19H3Z"/><circle cx="17" cy="5.5" r="1.8"/>`),
  R("travel", "Tent", ["camping"], `<path d="M12 4L2.5 20h19L12 4Z"/><path d="M12 13l-3 7M12 13l3 7"/><path d="M12 4v9"/>`),
  R("travel", "Ticket", ["pass"], `<path d="M4 7.5h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4v-3Z"/><path d="M14 7.5v2M14 11.5v1M14 14.5v2"/>`),
  R("travel", "Lighthouse", ["beacon"], `<path d="M9 21l1-11h4l1 11"/><path d="M8 21h8"/><path d="M9 10L7 6h10l-2 4"/><circle cx="12" cy="8" r="1" fill="currentColor"/><path d="M7 6l-3-1M17 6l3-1"/>`),
  R("travel", "Bus", ["transit"], `<rect x="4" y="4" width="16" height="14" rx="2.5"/><path d="M4 11.5h16"/><circle cx="8" cy="19.5" r="1.5"/><circle cx="16" cy="19.5" r="1.5"/><path d="M7 8.5h.1M17 8.5h.1" stroke-width="2.6"/>`),
  R("travel", "Travel Cam", ["photo"], `<rect x="2.5" y="8" width="19" height="12" rx="2.5"/><circle cx="12" cy="14" r="3.2"/><path d="M8 8l1.5-3h5L16 8"/>`),

  // ── SOCIAL (12) ───────────────────────────────────
  R("social", "Chat", ["message"], `<path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4V6.5a1 1 0 0 1 1-1Z"/><path d="M8 10h8M8 12.5h5"/>`),
  R("social", "Heart", ["like", "love"], `<path d="M12 20s-7.5-4.7-7.5-10.5A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.5C19.5 15.3 12 20 12 20Z"/>`),
  R("social", "Insta", ["camera", "photo"], `<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" stroke="none"/>`),
  R("social", "Thumbs Up", ["approve"], `<path d="M7 11.5V20H4V11.5h3Z"/><path d="M7 12l4-7c1.2 0 2 .9 1.8 2L12 11h7a2 2 0 0 1 2 2.4l-1.5 6A2 2 0 0 1 17.5 21H7"/>`),
  R("social", "Share", ["send"], `<circle cx="6.5" cy="12" r="2.5"/><circle cx="17.5" cy="5.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/><path d="M8.8 10.8l6.4-4M8.8 13.2l6.4 4"/>`),
  R("social", "At Sign", ["mention", "email"], `<circle cx="12" cy="12" r="4"/><path d="M16 8v6a3 3 0 0 0 3 3h.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 19.5 13H16"/>`),
  R("social", "Notif Bell", ["alert"], `<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2.5h-15L6 16Z"/><path d="M10 21a2 2 0 0 0 4 0"/><path d="M18.5 4l1 1M20.5 4l-1 1"/>`),
  R("social", "Users", ["community"], `<circle cx="9" cy="8.5" r="3"/><path d="M3.5 20c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5"/><circle cx="16.5" cy="9.5" r="2.3"/><path d="M16 15.7c2 .4 3.7 1.7 4.2 4"/>`),
  R("social", "Megaphone", ["announce"], `<path d="M4 11v5l3 .5V10.5L4 11Z"/><path d="M7 10.5L19 5v13.5L7 16.5"/><path d="M10 16.5V20a1.5 1.5 0 0 0 3 0v-2.7"/>`),
  R("social", "Star", ["favorite", "rate"], `<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z"/>`),
  R("social", "Play", ["video", "reel"], `<circle cx="12" cy="12" r="8.5"/><path d="M10 8.8v6.4L15.5 12 10 8.8Z" fill="currentColor" stroke="none"/>`),
  R("social", "Mail", ["newsletter"], `<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M4 7l8 6 8-6"/>`),

  // ── ARROWS & UI (12) ──────────────────────────────
  R("arrows", "Arrow Up", ["upload", "north"], `<path d="M12 20V4"/><path d="M5.5 10.5L12 4l6.5 6.5"/>`),
  R("arrows", "Arrow Down", ["download", "south"], `<path d="M12 4v16"/><path d="M5.5 13.5L12 20l6.5-6.5"/>`),
  R("arrows", "Arrow Left", ["back", "west"], `<path d="M20 12H4"/><path d="M10.5 5.5L4 12l6.5 6.5"/>`),
  R("arrows", "Arrow Right", ["next", "east"], `<path d="M4 12h16"/><path d="M13.5 5.5L20 12l-6.5 6.5"/>`),
  R("arrows", "External", ["open", "up-right"], `<path d="M9 5H5v14h14v-4"/><path d="M13 5h6v6"/><path d="M19 5l-9 9"/>`),
  R("arrows", "Refresh", ["reload", "sync"], `<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3.5V8h-4.5"/>`),
  R("arrows", "Undo", ["back-arrow"], `<path d="M8 5L4 9l4 4"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/>`),
  R("arrows", "Redo", ["forward-arrow"], `<path d="M16 5l4 4-4 4"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/>`),
  R("arrows", "Chevrons", ["more", "double"], `<path d="M7 5l7 7-7 7"/><path d="M13 5l7 7-7 7"/>`),
  R("arrows", "Move", ["drag", "cross"], `<path d="M12 3v18M3 12h18"/><path d="M9.5 5.5L12 3l2.5 2.5M9.5 18.5L12 21l2.5-2.5M5.5 9.5L3 12l2.5 2.5M18.5 9.5L21 12l-2.5 2.5"/>`),
  R("arrows", "Upload", ["tray-up"], `<path d="M4 16v3.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V16"/><path d="M12 15V4"/><path d="M7.5 8.5L12 4l4.5 4.5"/>`),
  R("arrows", "Download Tray", ["tray-down"], `<path d="M4 16v3.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V16"/><path d="M12 4v11"/><path d="M7.5 11L12 15.5 16.5 11"/>`),

  // ── FOOD & DRINK (12) ─────────────────────────────
  R("food", "Burger", ["fast-food"], `<path d="M5 10a7 5 0 0 1 14 0H5Z"/><path d="M4 13.5h16"/><path d="M5 16.5h14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"/><path d="M8 7.5c.5-1 1.5-1 2 0M12 7c.5-1 1.5-1 2 0M16 7.5c.5-1 1.5-1 2 0"/>`),
  R("food", "Pizza", ["slice"], `<path d="M4.5 5.5c5-1.5 11-1.5 15 0L12 20 4.5 5.5Z"/><circle cx="10" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="14" cy="11" r="1.2" fill="currentColor" stroke="none"/><circle cx="11.5" cy="14" r="1.2" fill="currentColor" stroke="none"/>`),
  R("food", "Donut", ["sweet"], `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4.5c.8 1 2 1 2.8.2M7 8c1.2.2 1.8 1.2 1.5 2.3M16 16c-1-.5-2.2 0-2.5 1"/>`),
  R("food", "Coffee", ["cafe", "cup"], `<path d="M5 9h12v6a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V9Z"/><path d="M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8.5 5.5c0-1 .8-1 .8-2M12.5 5.5c0-1 .8-1 .8-2"/>`),
  R("food", "Cupcake", ["dessert"], `<path d="M7 11l1.5 8h7L17 11H7Z"/><path d="M7 11c-1.5 0-2.5-1.2-2-2.5C5.6 6.8 7.5 7 9 6c.6-1.5 2.5-2.5 4-2 .5-1 2-1.5 3-1 2 1 1.5 3.5 3 4.5 1.5.5 1.5 3.5-2 3.5H7Z"/><circle cx="12" cy="4" r="1" fill="currentColor"/>`),
  R("food", "Ice Cream", ["gelato"], `<path d="M7 10h10l-5 10-5-10Z"/><path d="M7 10a5 5 0 0 1 10 0Z"/><path d="M12 5V3.5"/><circle cx="12" cy="3" r=".9" fill="currentColor"/>`),
  R("food", "Apple", ["fruit"], `<path d="M12 8c-4-3-9 0-8 5.5C4.8 18 8 21 12 19c4 2 7.2-1 8-5.5C21 8 16 5 12 8Z"/><path d="M12 8c0-2.5 1.5-4 3.5-4.5"/>`),
  R("food", "Carrot", ["veggie"], `<path d="M9 10l9-5 1 1-5 9-6 6-4-4 5-7Z"/><path d="M18 5c1-2 3-2.5 4-2M19 7c2 0 3-1 3.5-2"/>`),
  R("food", "Fries", ["snacks"], `<path d="M7 12h10l-1.2 8H8.2L7 12Z"/><path d="M9 12V5.5M12 12V4M15 12V6.5"/>`),
  R("food", "Soda", ["drink", "cup"], `<path d="M8 8h8l-1 12.5H9L8 8Z"/><path d="M7 8a5 2.5 0 0 1 10 0H7Z"/><path d="M13 5.5L14.5 2"/>`),
  R("food", "Taco", ["mexican"], `<path d="M4 15a8 8 0 0 1 16 0v1H4v-1Z"/><circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="13" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13.5" r="1" fill="currentColor" stroke="none"/><path d="M6 19c2 1 10 1 12 0"/>`),
  R("food", "Cake", ["birthday"], `<path d="M5 13h14v7H5z"/><path d="M5 13c0-2 1.5-2 2.5 0 1-2 3.5-2 4.5 0 1-2 3.5-2 4.5 0 1-2 2.5-2 2.5 0"/><path d="M12 10V6.5"/><path d="M12 6.5c-1.5 0-2-1-1.2-2.2C11.5 3.3 13 3 13.5 4c.5 1.2-.5 2.5-1.5 2.5Z"/>`),

  // ── SPORTS & FUN (12) ─────────────────────────────
  R("sports", "Soccer", ["football"], `<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5l2.5 1.8-1 2.9h-3l-1-2.9L12 8.5Z" fill="currentColor" stroke="none"/><path d="M12 3.5v5M4.9 8.8l4.6 1.5M19.1 8.8l-4.6 1.5M7.2 19l2-4.3M16.8 19l-2-4.3"/>`),
  R("sports", "Basketball", ["hoops"], `<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5v17M6 6c3 3 3 9 0 12M18 6c-3 3-3 9 0 12"/>`),
  R("sports", "Tennis", ["racket", "ball"], `<circle cx="9" cy="9" r="5.5"/><path d="M13 13l8 8"/><path d="M5.5 5.5c2 2 2 5 0 7M12.5 5.5c-2 2-2 5 0 7"/>`),
  R("sports", "Trophy", ["win", "award"], `<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 5H4.5a3.5 3.5 0 0 0 3.7 3.5M16 5h3.5a3.5 3.5 0 0 1-3.7 3.5"/><path d="M12 13v4"/><path d="M8.5 20.5h7L13.5 17h-3l-2 3.5Z"/>`),
  R("sports", "Whistle", ["referee"], `<path d="M9 14a5 5 0 1 1 6.6 4.7L20 20l-1.5 1.5-4.3-4.3A5 5 0 0 1 9 14Z"/><circle cx="10.5" cy="13.5" r="1.2" fill="currentColor" stroke="none"/><path d="M4 9h5"/>`),
  R("sports", "Dumbbell", ["gym", "lift"], `<path d="M7 8v8M17 8v8M4.5 10v4M19.5 10v4"/><path d="M7 12h10"/>`),
  R("sports", "Skateboard", ["skate"], `<path d="M3.5 15.5L20 11l.5 1.8L4 17.3l-.5-1.8Z"/><circle cx="8" cy="19" r="1.6"/><circle cx="16" cy="17.5" r="1.6"/>`),
  R("sports", "Bike", ["cycling"], `<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l3.5-7H14l4 7M9.5 9L8 5.5h2.5M14 9l-2 7"/>`),
  R("sports", "Target", ["goal", "aim"], `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>`),
  R("sports", "Flag", ["finish", "golf"], `<path d="M6 21V4"/><path d="M6 5h11l-2.5 3.5L17 12H6"/>`),
  R("sports", "Stopwatch", ["timer"], `<circle cx="12" cy="13.5" r="7.5"/><path d="M12 10v3.5l2.5 1.5"/><path d="M9.5 2.5h5M12 2.5V6"/>`),
  R("sports", "Podium", ["rank", "winners"], `<path d="M5 20.5h14"/><rect x="9.5" y="10" width="5" height="10.5"/><rect x="4" y="14" width="5" height="6.5"/><rect x="15" y="12" width="5" height="8.5"/><path d="M11 6.5L12 4l1 2.5"/>`),
];

export const ICONS: RetroIcon[] = [...BASE_ICONS, ...MORE_ICONS, ...EXTRA_ICONS];

export const ICON_COUNT = ICONS.length;

export function buildStandaloneSvg(icon: RetroIcon, opts?: { stroke?: string; background?: string; size?: number }): string {
  const stroke = opts?.stroke ?? "#1A1A1A";
  const size = opts?.size ?? 48;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#FFFDF5" stroke="${stroke}" stroke-width="1"/><g transform="translate(2.4,2.4) scale(0.8)">${icon.body}</g></svg>`;
}

export function buildMinimalSvg(icon: RetroIcon, stroke = "#1A1A1A"): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.body}</svg>`;
}
