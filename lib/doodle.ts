/* Retro doodle engine — shared builders for humans, animals & caricatures.
   Canvas: 120x120. Parent svg sets stroke #1A1A1A, width 3, round caps. */

export type ArtGroup = "humans" | "animals" | "caricatures";

export interface Artwork {
  slug: string;
  name: string;
  group: ArtGroup;
  tags: string[];
  svg: string; // inner markup for viewBox 0 0 120 120
}

export const art = (group: ArtGroup, name: string, tags: string[], svg: string): Artwork => ({
  slug: `${group}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  name,
  group,
  tags,
  svg,
});

export function buildCharacterSvg(artwork: Artwork, opts?: { size?: number; bg?: string }): string {
  const size = opts?.size ?? 256;
  const bg = opts?.bg ?? "#FFFDF5";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect width="120" height="120" fill="${bg}"/>${artwork.svg}</svg>`;
}

/* ── shared bits ─────────────────────────────────── */
export const shadow = `<ellipse cx="60" cy="106" rx="30" ry="4" fill="#1A1A1A" opacity="0.12" stroke="none"/>`;
export const dot = (x: number, y: number, r = 1.8) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="#1A1A1A" stroke="none"/>`;
export const blush = (x: number, y: number) =>
  `<circle cx="${x}" cy="${y}" r="2.2" fill="#FF9B9B" stroke="none"/>`;

export type HairStyle =
  | "bob" | "short" | "cap" | "bun" | "afro" | "spikes" | "long"
  | "chef" | "hijab" | "beret" | "bald" | "pony" | "grey" | "clown"
  | "pilot" | "strawhat" | "helmet" | "nurse"
  | "turban" | "bandana" | "wizard" | "tophat" | "headphones" | "crown" | "alien";
export type FaceKind = "smile" | "happy" | "wow" | "cool" | "calm" | "sad" | "sleep" | "wink";

function hairBack(style: HairStyle, cx: number, cy: number, r: number, c: string): string {
  switch (style) {
    case "bob":
      return `<path d="M${cx - r - 3} ${cy - 2}c0-13 ${r - 3}-${r + 7} ${r + 3}-${r + 7}s${r + 3} ${r - 6} ${r + 3} ${r + 7}l2 14-7-2-2 8-5-6-9 3-3 6-3-9-4 1 1-15Z" fill="${c}"/>`;
    case "afro":
      return `<circle cx="${cx}" cy="${cy - 8}" r="${r + 7}" fill="${c}"/>`;
    case "long":
      return `<path d="M${cx - r} ${cy - 4}c-3 12-3 24 1 34l8-2c-3-10-3-20-1-28ZM${cx + r} ${cy - 4}c3 12 3 24-1 34l-8-2c3-10 3-20 1-28Z" fill="${c}"/><path d="M${cx - r - 2} ${cy - 4}c0-12 ${r - 4}-${r + 6} ${r + 2}-${r + 6}s${r + 2} ${r - 5} ${r + 2} ${r + 6}" fill="${c}"/>`;
    case "bun":
      return `<circle cx="${cx}" cy="${cy - r - 4}" r="6" fill="${c}"/>`;
    case "hijab":
      return `<ellipse cx="${cx}" cy="${cy + 7}" rx="${r + 7}" ry="${r + 11}" fill="${c}"/>`;
    case "pony":
      return `<path d="M${cx + r - 2} ${cy - 8}q12 2 10 16" stroke="${c}" stroke-width="6"/><circle cx="${cx + r + 8}" cy="${cy + 8}" r="4" fill="${c}" stroke="none"/>`;
    case "clown":
      return `<circle cx="${cx - r - 2}" cy="${cy - 4}" r="6" fill="#FF5D5D"/><circle cx="${cx + r + 2}" cy="${cy - 4}" r="6" fill="#7BDFF2"/><circle cx="${cx}" cy="${cy - r - 4}" r="6" fill="#FFD23F"/>`;
    case "turban":
      return `<circle cx="${cx}" cy="${cy - 4}" r="${r + 4}" fill="${c}"/>`;
    case "alien":
      return `<path d="M${cx - 6} ${cy - r}l-5-9M${cx + 6} ${cy - r}l5-9"/><circle cx="${cx - 11}" cy="${cy - r - 9}" r="2.5" fill="#B8F169"/><circle cx="${cx + 11}" cy="${cy - r - 9}" r="2.5" fill="#B8F169"/>`;
    default:
      return "";
  }
}

function hairFront(style: HairStyle, cx: number, cy: number, r: number, c: string, accent = "#FFD23F"): string {
  const top = cy - r;
  switch (style) {
    case "bob":
    case "long":
      return `<path d="M${cx - r + 1} ${cy - 2}c1-9 6-13 13-13s${12} 4 ${13} 13l-4 2c-2-5-5-6-7-9-1 2-3 3-5 1-2 2-4 1-5-1-2 3-5 4-7 9l-2-2Z" fill="${c}"/><path d="M${cx - r + 1} ${cy - 2}c-2 7-2 14 1 19l6-2c-2-5-2-10-1-15ZM${cx + r - 1} ${cy - 2}c2 7 2 14-1 19l-6-2c2-5 2-10 1-15Z" fill="${c}"/>`;
    case "short":
    case "grey":
      return `<path d="M${cx - r} ${cy - 1}c1-9 6-14 ${r}-14s${r - 1} 5 ${r} 14c-4-4-8-6-${r / 2}-4-2-2-4-2-6 0-2-1-5 0-${r / 2} 4Z" fill="${c}"/>`;
    case "cap":
      return `<path d="M${cx - r} ${cy - 2}a${r} ${r} 0 0 1 ${r * 2} 0Z" fill="${accent}"/><rect x="${cx - r - 1}" y="${cy - 5}" width="${r * 2 + 2}" height="5" rx="2.5" fill="#1A1A1A"/><rect x="${cx + 2}" y="${cy - 6}" width="17" height="5" rx="2.5" fill="${accent}"/>`;
    case "helmet":
      return `<path d="M${cx - r - 1} ${cy - 1}a${r + 1} ${r + 1} 0 0 1 ${(r + 1) * 2} 0Z" fill="${accent}"/><path d="M${cx - r} ${cy + 8}v6M${cx + r} ${cy + 8}v6"/>`;
    case "bun":
      return `<path d="M${cx - r} ${cy - 1}c1-9 6-14 ${r}-14s${r - 1} 5 ${r} 14c-5-5-9-5-${r} 0Z" fill="${c}"/>`;
    case "afro":
      return "";
    case "spikes":
      return `<path d="M${cx - r} ${cy}l2-12 5 8 4-12 5 10 5-11 4 10 5-9 4 10 3-8 2 10-3 3h-${r * 2 - 4}l-3-4Z" fill="${c}"/>`;
    case "chef":
      return `<rect x="${cx - 12}" y="${top - 15}" width="24" height="12" rx="6" fill="#FFFDF5"/><circle cx="${cx - 8}" cy="${top - 14}" r="6" fill="#FFFDF5"/><circle cx="${cx}" cy="${top - 17}" r="7" fill="#FFFDF5"/><circle cx="${cx + 8}" cy="${top - 14}" r="6" fill="#FFFDF5"/><rect x="${cx - 13}" y="${top - 6}" width="26" height="5" rx="2" fill="#FFFDF5"/>`;
    case "hijab":
      return `<path d="M${cx - r} ${cy + 9}q${r} 8 ${r * 2} 0l-2 9h-${r * 2 - 4}Z" fill="${c}"/>`;
    case "beret":
      return `<ellipse cx="${cx - 2}" cy="${top + 1}" rx="15" ry="7" fill="${accent}" transform="rotate(-10 ${cx} ${top})"/><circle cx="${cx + 8}" cy="${top - 6}" r="2.5" fill="${accent}"/>`;
    case "bald":
      return `<path d="M${cx - 8} ${top + 6}q5-6 12-4" stroke="#FFFDF5" stroke-width="2.5"/>`;
    case "pony":
      return `<path d="M${cx - r} ${cy - 1}c1-9 6-14 ${r}-14s${r - 1} 5 ${r} 14c-5-5-9-5-${r} 0Z" fill="${c}"/>`;
    case "nurse":
      return `<rect x="${cx - 10}" y="${top - 8}" width="20" height="10" rx="4" fill="#FFFDF5" transform="rotate(-6 ${cx} ${top})"/><path d="M${cx - 2} ${top - 6}v6M${cx - 5} ${top - 3}h6"/>`;
    case "strawhat":
      return `<ellipse cx="${cx}" cy="${top + 3}" rx="24" ry="6" fill="#E8C86A"/><path d="M${cx - 12} ${top + 2}a12 10 0 0 1 24 0" fill="#E8C86A"/><path d="M${cx - 12} ${top - 1}h24"/>`;
    case "pilot":
      return `<path d="M${cx - r} ${cy - 1}c1-9 6-14 ${r}-14s${r - 1} 5 ${r} 14c-5-5-9-5-${r} 0Z" fill="${c}"/><rect x="${cx - 13}" y="${top - 9}" width="26" height="9" rx="4.5" fill="${accent}"/><circle cx="${cx - 6}" cy="${top - 4.5}" r="3" fill="#7BDFF2"/><circle cx="${cx + 6}" cy="${top - 4.5}" r="3" fill="#7BDFF2"/>`;
    case "clown":
      return `<path d="M${cx - r} ${cy - 1}c1-9 6-14 ${r}-14s${r - 1} 5 ${r} 14c-5-5-9-5-${r} 0Z" fill="${c}"/>`;
    case "turban":
      return `<path d="M${cx - r - 3} ${cy}c0-11 7-19 ${r + 3}-19s${r + 3} 8 ${r + 3} 19c-6-4-14-4-${(r + 3) * 2} 0Z" fill="${c}"/><circle cx="${cx}" cy="${top + 3}" r="2.5" fill="${accent}"/>`;
    case "bandana":
      return `<path d="M${cx - r} ${cy - 2}a${r} ${r} 0 0 1 ${r * 2} 0Z" fill="${accent}"/><path d="M${cx - r - 1} ${cy - 3}h${r * 2 + 2}"/><path d="M${cx + r} ${cy - 3}l8 3-7 4"/>`;
    case "wizard":
      return `<path d="M${cx - 11} ${top + 3}L${cx - 1} ${top - 21}l9 24Z" fill="${accent}"/><ellipse cx="${cx - 2}" cy="${top + 4}" rx="17" ry="5" fill="${accent}"/>${dot(cx - 2, top - 8, 1.4)}${dot(cx + 1, top - 13, 1.4)}`;
    case "tophat":
      return `<rect x="${cx - 9}" y="${top - 20}" width="18" height="18" rx="2" fill="#1A1A1A"/><ellipse cx="${cx}" cy="${top - 1}" rx="16" ry="4.5" fill="#1A1A1A"/><rect x="${cx - 9}" y="${top - 8}" width="18" height="5" fill="${accent}" stroke="none"/>`;
    case "headphones":
      return `<path d="M${cx - r - 2} ${cy - 2}c0-10 7-17 ${r + 2}-17s${r + 2} 7 ${r + 2} 17"/><rect x="${cx - r - 6}" y="${cy - 6}" width="8" height="14" rx="4" fill="${accent}"/><rect x="${cx + r - 2}" y="${cy - 6}" width="8" height="14" rx="4" fill="${accent}"/>`;
    case "crown":
      return `<path d="M${cx - 11} ${top + 4}l-2-11 6 4 4-8 4 8 6-4-2 11Z" fill="#FFD23F"/><circle cx="${cx - 13}" cy="${top - 7}" r="1.8" fill="#FF5D5D" stroke="none"/><circle cx="${cx}" cy="${top - 11}" r="1.8" fill="#7BDFF2" stroke="none"/><circle cx="${cx + 13}" cy="${top - 7}" r="1.8" fill="#B8F169" stroke="none"/>`;
    case "alien":
      return "";
    default:
      return "";
  }
}

function faceFeatures(face: FaceKind, cx: number, cy: number, r: number): string {
  const ey = cy - 1;
  switch (face) {
    case "happy":
      return `<path d="M${cx - r + 3} ${ey}q3-3 6 0M${cx + r - 9} ${ey}q3-3 6 0"/><path d="M${cx - 6} ${cy + 5}q6 8 12 0"/>${blush(cx - 10, cy + 4)}${blush(cx + 10, cy + 4)}`;
    case "wow":
      return `${dot(cx - 5, ey)}${dot(cx + 5, ey)}<ellipse cx="${cx}" cy="${cy + 7}" rx="3" ry="4" fill="#1A1A1A"/>`;
    case "cool":
      return `<rect x="${cx - 11}" y="${ey - 4}" width="22" height="7" rx="3.5" fill="#1A1A1A"/><path d="M${cx - 5} ${cy + 7}q6 2 10-2"/>`;
    case "calm":
      return `<path d="M${cx - 8} ${ey}q2 2 4 0M${cx + 4} ${ey}q2 2 4 0"/><path d="M${cx - 4} ${cy + 6}q4 3 8 0"/>`;
    case "sad":
      return `${dot(cx - 5, ey)}${dot(cx + 5, ey)}<path d="M${cx - 6} ${cy + 9}q6-5 12 0"/>`;
    case "sleep":
      return `<path d="M${cx - 9} ${ey}q2 2 5 0M${cx + 4} ${ey}q2 2 5 0"/><path d="M${cx - 2} ${cy + 6}q2 1 4 0"/>`;
    case "wink":
      return `<path d="M${cx - 9} ${ey}q3-3 6 0"/>${dot(cx + 6, ey)}<path d="M${cx - 6} ${cy + 5}q6 6 12-1"/>`;
    default:
      return `<path d="M${cx - 9} ${ey}h5M${cx + 4} ${ey}h5"/><path d="M${cx - 6} ${cy + 6}q6 5 12 0"/>`;
  }
}

export function head(o: {
  cx?: number; cy?: number; r?: number; skin?: string; hair?: string;
  hairStyle?: HairStyle; face?: FaceKind; specs?: boolean; mask?: string; accent?: string;
  beard?: string; mo?: boolean;
}): string {
  const { cx = 60, cy = 33, r = 13, skin = "#FFD9C0", hair = "#1A1A1A", hairStyle = "short", face = "smile", specs = false, mask, accent = "#FFD23F", beard, mo = false } = o;
  return `${hairBack(hairStyle, cx, cy, r, hair)}`
    + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${skin}"/>`
    + `${hairFront(hairStyle, cx, cy, r, hair, accent)}`
    + `${faceFeatures(face, cx, cy, r)}`
    + (hairStyle === "clown" ? `<circle cx="${cx}" cy="${cy + 4}" r="3" fill="#FF5D5D"/>` : "")
    + (mo ? `<path d="M${cx} ${cy + 5}q-5-3.5-9 0q4 3.5 9 0q5 3.5 9 0q-4-3.5-9 0Z" fill="#1A1A1A" stroke="none"/>` : "")
    + (beard ? `<path d="M${cx - r + 2} ${cy + 1}Q${cx - r + 2} ${cy + r + 4} ${cx} ${cy + r + 4}Q${cx + r - 2} ${cy + r + 4} ${cx + r - 2} ${cy + 1}" fill="${beard}"/>` : "")
    + (specs ? `<circle cx="${cx - 6}" cy="${cy - 1}" r="4.5"/><circle cx="${cx + 6}" cy="${cy - 1}" r="4.5"/><path d="M${cx - 1.5} ${cy - 1}h3M${cx - 10.5} ${cy - 2}l-4-2M${cx + 10.5} ${cy - 2}l4-2"/>` : "")
    + (mask ? `<path d="M${cx - r} ${cy - 5}h${r * 2}v6c0 3-4 5-8 4l-5-2-5 2c-4 1-8-1-8-4v-6Z" fill="${mask}"/><ellipse cx="${cx - 5}" cy="${cy - 2}" rx="2.5" ry="2" fill="#FFFDF5" stroke="none"/><ellipse cx="${cx + 5}" cy="${cy - 2}" rx="2.5" ry="2" fill="#FFFDF5" stroke="none"/>` : "");
}

export type Pose = "stand" | "wave" | "walk" | "run" | "throw" | "photo" | "read" | "laptop" | "phone" | "think" | "jump" | "guitar" | "mic" | "tray" | "ball" | "hold" | "holdup" | "lotus" | "dance" | "skate" | "cane";

export function arms(pose: Pose, shirt: string, skin: string): string {
  const L7 = (d: string) => `<path d="${d}" stroke="${shirt}" stroke-width="8"/>`;
  const H = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="4" fill="${skin}"/>`;
  switch (pose) {
    case "wave": return L7("M45 58L37 76") + L7("M75 58L90 36") + H(37, 78) + H(90, 34);
    case "walk": return L7("M45 58L39 74") + L7("M75 58L81 74") + H(39, 76) + H(81, 76);
    case "run": return L7("M45 58L36 66L44 72") + L7("M75 58L84 66L76 72") + H(44, 73) + H(76, 73);
    case "throw": return L7("M45 58L37 76") + L7("M75 58L93 46") + H(37, 78) + H(93, 44);
    case "photo": return L7("M45 58L53 72") + L7("M75 58L67 72") + H(53, 74) + H(67, 74);
    case "read": return L7("M45 58L50 70") + L7("M75 58L70 70") + H(50, 72) + H(70, 72);
    case "laptop": return L7("M45 58L52 74") + L7("M75 58L68 74") + H(52, 76) + H(68, 76);
    case "phone": return L7("M45 58L37 76") + L7("M75 58L70 44L66 38") + H(37, 78) + H(66, 36);
    case "think": return L7("M45 58L37 76") + L7("M75 58L68 52L63 45") + H(37, 78) + H(63, 43);
    case "jump": return L7("M45 58L32 38") + L7("M75 58L88 38") + H(32, 36) + H(88, 36);
    case "guitar": return L7("M45 58L50 64") + L7("M75 58L68 70") + H(50, 65) + H(68, 72);
    case "mic": return L7("M45 58L37 76") + L7("M75 58L70 46") + H(37, 78) + H(70, 44);
    case "tray": return L7("M45 58L30 50") + L7("M75 58L83 76") + H(28, 49) + H(83, 78);
    case "hold": return L7("M45 58L54 70") + L7("M75 58L66 70") + H(54, 72) + H(66, 72);
    case "holdup": return L7("M45 58L37 76") + L7("M75 58L88 36") + H(37, 78) + H(88, 34);
    case "lotus": return L7("M45 58L36 80") + L7("M75 58L84 80") + H(36, 82) + H(84, 82);
    case "dance": return L7("M45 58L33 40") + L7("M75 58L92 54") + H(33, 38) + H(92, 53);
    case "skate": return L7("M45 58L34 66") + L7("M75 58L86 66") + H(34, 67) + H(86, 67);
    case "cane": return L7("M45 58L37 76") + L7("M75 58L82 72") + H(37, 78) + H(82, 74);
    case "ball": return L7("M45 58L37 74") + L7("M75 58L83 74") + H(37, 76) + H(83, 76);
    default: return L7("M45 58L37 76") + L7("M75 58L83 76") + H(37, 78) + H(83, 78);
  }
}

export function legs(pose: Pose, pants: string, skin: string, dress: boolean): string {
  const c = dress ? skin : pants;
  const w = dress ? 8 : 9;
  const P = (d: string) => `<path d="${d}" stroke="${c}" stroke-width="${w}"/>`;
  const S = (x: number, y: number) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="3.5" fill="#1A1A1A" stroke="none"/>`;
  switch (pose) {
    case "walk": case "cane": return P("M53 82L45 96") + P("M67 82L73 95") + S(43, 99) + S(75, 98);
    case "run": return P("M53 82L43 90L47 98") + P("M67 82L77 88L73 97") + S(47, 100) + S(73, 99);
    case "jump": return P("M53 82L45 92") + P("M67 82L75 92") + S(43, 95) + S(77, 95);
    case "dance": return P("M53 82L51 97") + P("M67 82L79 77L83 66") + S(51, 100) + S(84, 64);
    case "lotus": return `<path d="M52 88q-12 8-22 4M68 88q12 8 22 4" stroke="${c}" stroke-width="${w}"/>` + S(30, 95) + S(90, 95);
    case "skate": return P("M52 82L48 96") + P("M68 82L72 96") + S(48, 99) + S(72, 99) + `<rect x="32" y="99" width="56" height="6" rx="3" fill="#1A1A1A"/><circle cx="44" cy="108" r="2.5" fill="#1A1A1A" stroke="none"/><circle cx="76" cy="108" r="2.5" fill="#1A1A1A" stroke="none"/>`;
    case "ball": return P("M53 82L45 95") + P("M67 82L76 91") + S(43, 98) + S(78, 94);
    default: return P("M53 82L53 96") + P("M67 82L67 96") + S(49, 99) + S(71, 99);
  }
}

export function torso(kind: string, shirt: string, accent = "#FFD23F"): string {
  const collar = `<path d="M54 54q6 5 12 0"/>`;
  switch (kind) {
    case "dress":
      return `<path d="M44 54h32l9 28H35l9-28Z" fill="${shirt}"/>${collar}<path d="M41 68h38"/><circle cx="60" cy="61" r="1.5" fill="#1A1A1A" stroke="none"/><circle cx="60" cy="74" r="1.5" fill="#1A1A1A" stroke="none"/>`;
    case "coat":
      return `<path d="M44 54h32l-4 28H48l-4-28Z" fill="#FFFDF5"/><path d="M55 54h10l-5 12-5-12Z" fill="${shirt}"/><path d="M52 54l-3 28M68 54l3 28"/>${dot(60, 70)}${dot(60, 77)}<rect x="64" y="66" width="8" height="6" rx="1.5" fill="#FFFDF5"/>`;
    case "suit":
      return `<path d="M44 54h32l-4 28H48l-4-28Z" fill="#2E2E2E"/><path d="M55 54h10l-5 8-5-8Z" fill="#FFFDF5"/><path d="M60 60l-3.5 5L60 76l3.5-11L60 60Z" fill="${accent}"/>`;
    case "apron":
      return `<path d="M44 54h32l-4 28H48l-4-28Z" fill="${shirt}"/><path d="M52 56h16l3 24H49l3-24Z" fill="#FFFDF5"/><path d="M52 56l-5-4M68 56l5-4"/><rect x="55" y="68" width="10" height="7" rx="1.5" fill="#FFFDF5"/>`;
    case "jersey":
      return `<path d="M44 54h32l-4 28H48l-4-28Z" fill="${shirt}"/>${collar}<path d="M46 64h28M46 70h28"/><circle cx="60" cy="76" r="4" fill="#FFFDF5"/>${dot(60, 76, 1.4)}`;
    default:
      return `<path d="M44 54h32l-4 28H48l-4-28Z" fill="${shirt}"/>${collar}`;
  }
}

export function prop(p: string, accent = "#FFD23F"): string {
  switch (p) {
    case "camera":
      return `<rect x="49" y="61" width="22" height="14" rx="3" fill="#1A1A1A"/><circle cx="60" cy="68" r="4.5" fill="#FFFDF5"/><circle cx="60" cy="68" r="1.8" fill="#1A1A1A" stroke="none"/><rect x="55" y="58" width="6" height="4" rx="1.5" fill="#1A1A1A"/><path d="M53 61l-5-7M67 61l5-7"/>`;
    case "plane":
      return `<path d="M96 22l-19 8 8 3 2 8 9-19Z" fill="#FFFDF5"/><path d="M96 22l-11 11"/><path d="M70 30h8M73 35h6"/>`;
    case "book":
      return `<path d="M60 60l-13-3v14l13 3 13-3V57l-13 3Z" fill="#FFFDF5"/><path d="M60 60v14"/><path d="M52 63l5 1M63 64l5-1"/>`;
    case "laptop":
      return `<rect x="47" y="62" width="26" height="16" rx="2" fill="#1A1A1A"/><rect x="50" y="65" width="20" height="10" fill="#7BDFF2" stroke="none"/><path d="M43 78h34l-3 4H46l-3-4Z" fill="#1A1A1A"/><path d="M53 68l3 3-3 3M59 74h5"/>`;
    case "guitar":
      return `<circle cx="68" cy="71" r="10" fill="${accent}"/><circle cx="68" cy="71" r="3.5" fill="#1A1A1A"/><rect x="40" y="60" width="22" height="7" rx="3.5" fill="#8A5A2B" transform="rotate(-18 51 63)"/>`;
    case "mic":
      return `<circle cx="71" cy="37" r="5" fill="#1A1A1A"/><path d="M71 42v6M68 52h6"/><path d="M67 35a5 5 0 0 1 8 0"/>`;
    case "cup":
      return `<path d="M53 62h14v7a7 7 0 0 1-14 0v-7Z" fill="#FFFDF5"/><path d="M67 64h2a2.5 2.5 0 0 1 0 5h-2"/><path d="M57 59c0-1.5 1.5-1.5 1.5-3M61 59c0-1.5 1.5-1.5 1.5-3"/>`;
    case "balloon":
      return `<path d="M86 34V10"/><ellipse cx="86" cy="18" rx="11" ry="13" fill="${accent}"/><path d="M86 31l-2 4h4l-2-4Z" fill="#1A1A1A"/>`;
    case "ball":
      return `<circle cx="86" cy="93" r="8" fill="#FFFDF5"/><path d="M86 89l2.5 1.8-1 2.9h-3l-1-2.9L86 89Z" fill="#1A1A1A" stroke="none"/>`;
    case "flask":
      return `<path d="M56 60h8"/><path d="M57 60v6l-6 10a2 2 0 0 0 1.8 3h14.4a2 2 0 0 0 1.8-3l-6-10v-6"/><path d="M53 72h14"/><circle cx="66" cy="56" r="1.5" fill="#1A1A1A" stroke="none"/><circle cx="70" cy="60" r="1.2" fill="#1A1A1A" stroke="none"/>`;
    case "tray":
      return `<ellipse cx="27" cy="42" rx="14" ry="3" fill="#FFFDF5"/><path d="M17 42a10 8 0 0 1 20 0" fill="#FFFDF5"/><circle cx="27" cy="32" r="1.8" fill="#1A1A1A" stroke="none"/>`;
    case "palette":
      return `<ellipse cx="60" cy="66" rx="10" ry="8" fill="#FFFDF5" transform="rotate(-12 60 66)"/>${dot(56, 64, 1.6)}${dot(61, 62, 1.6)}${dot(65, 66, 1.6)}<path d="M70 58l6-8" stroke="#8A5A2B" stroke-width="3"/><path d="M74 48l3 3-2 2-3-3 2-2Z" fill="${accent}"/>`;
    case "syringe":
      return `<rect x="54" y="62" width="12" height="5" rx="2" fill="#7BDFF2" transform="rotate(-20 60 64)"/><path d="M66 59l8-4M52 66l-5 2"/>`;
    case "flower":
      return `<path d="M60 78V66"/><circle cx="60" cy="61" r="3" fill="#FFD23F"/><circle cx="60" cy="55" r="3" fill="#FFB3C7"/><circle cx="60" cy="67" r="3" fill="#FFB3C7"/><circle cx="54" cy="61" r="3" fill="#FFB3C7"/><circle cx="66" cy="61" r="3" fill="#FFB3C7"/><path d="M60 72l-5 2M60 74l5 2"/>`;
    case "pillow":
      return `<rect x="48" y="62" width="24" height="14" rx="6" fill="#FFFDF5"/><path d="M52 66h4M64 66h4M52 72h4M64 72h4"/>`;
    case "dumbbell":
      return `<path d="M80 30v-14M96 30V16M76 22h24" stroke-width="4"/><rect x="78" y="12" width="4" height="16" fill="#1A1A1A"/><rect x="94" y="12" width="4" height="16" fill="#1A1A1A"/>`;
    case "box":
      return `<rect x="48" y="62" width="24" height="18" rx="2" fill="#E8C86A"/><path d="M48 67h24M60 62v18"/><path d="M56 62l-2-6h4l2 6M64 62l-2-6h4l2 6"/>`;
    case "cane":
      return `<path d="M84 72v28"/><path d="M84 72q0-6 6-6"/>`;
    case "stick":
      return `<path d="M66 70l14-16"/>`;
    case "wrench":
      return `<path d="M53 73l9-9"/><circle cx="65" cy="60" r="4.5" fill="#FFFDF5"/><circle cx="65" cy="60" r="1.5"/>`;
    case "fish":
      return `<ellipse cx="59" cy="66" rx="10" ry="6" fill="#7BDFF2"/><path d="M69 66l8-5v10l-8-5Z" fill="#7BDFF2"/>${dot(55, 65, 1.4)}`;
    case "wand":
      return `<path d="M54 74l10-14"/><path d="M64 60l1.2 2.6 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4 1.2-2.6Z" fill="${accent}"/>`;
    case "gavel":
      return `<rect x="55" y="59" width="11" height="6" rx="2" fill="#8A5A2B" transform="rotate(-18 60 62)"/><path d="M58 66l-7 8"/><path d="M48 77h9"/>`;
    case "diploma":
      return `<rect x="51" y="60" width="17" height="11" rx="5.5" fill="#FFFDF5" transform="rotate(-12 60 65)"/><path d="M64 68l-2 5"/><circle cx="62" cy="74" r="2" fill="#FF5D5D"/>`;
    case "kite":
      return `<path d="M88 6l9 11-9 11-9-11 9-11Z" fill="${accent}"/><path d="M88 6v22M79 17h18"/><path d="M82 28q-4 14-14 34"/>`;
    case "diya":
      return `<path d="M50 68q10 8 20 0l-2 6H52l-2-6Z" fill="#8A5A2B"/><path d="M60 61c-2.5 3-2.5 5.5 0 7 2.5-1.5 2.5-4 0-7Z" fill="#FF8A5C"/>`;
    case "scissors":
      return `<circle cx="55" cy="72" r="3" fill="#FFFDF5"/><circle cx="63" cy="72" r="3" fill="#FFFDF5"/><path d="M57 70l9-10M61 70l-9-10"/>`;
    case "tooth":
      return `<path d="M54 62c-2 0-3 1.5-2.7 3.5.4 2.4 1.2 3.6 1.6 5.6.2 1.3.6 4.9 1.8 4.9 1.3 0 1-3.7 3.1-3.7s1.8 3.7 3.1 3.7c1.2 0 1.6-3.6 1.8-4.9.4-2 1.2-3.2 1.6-5.6.3-2-.7-3.5-2.7-3.5-1.5 0-2 .8-3.8.8s-2.3-.8-3.8-.8Z" fill="#FFFDF5"/>`;
    case "trophy":
      return `<path d="M55 58h10v6a5 5 0 0 1-10 0v-6Z" fill="${accent}"/><path d="M55 59h-3a3 3 0 0 0 3 4M65 59h3a3 3 0 0 1-3 4"/><path d="M60 69v4M56 76h8"/>`;
    case "shield":
      return `<path d="M60 56l8 3v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10v-6l8-3Z" fill="#BDE0FE"/><path d="M57 65l2 2 4-4"/>`;
    case "flag":
      return `<path d="M58 78V56"/><path d="M58 57h13l-3 4 3 4H58" fill="${accent}"/>`;
    case "bone":
      return `<path d="M54 71l12-8"/><circle cx="53" cy="69" r="2.6" fill="#FFFDF5"/><circle cx="55" cy="73" r="2.6" fill="#FFFDF5"/><circle cx="65" cy="61" r="2.6" fill="#FFFDF5"/><circle cx="67" cy="65" r="2.6" fill="#FFFDF5"/>`;
    case "medal":
      return `<path d="M56 58l-3-5M64 58l3-5"/><circle cx="60" cy="68" r="6.5" fill="${accent}"/>${dot(60, 68, 2)}`;
    case "whistle":
      return `<circle cx="59" cy="66" r="6" fill="#FFFDF5"/>${dot(59, 66, 1.6)}<path d="M65 66h9"/>`;
    case "vinyl":
      return `<circle cx="60" cy="66" r="9" fill="#1A1A1A"/><circle cx="60" cy="66" r="3" fill="${accent}"/><circle cx="60" cy="66" r="1" fill="#FFFDF5" stroke="none"/>`;
    case "racket":
      return `<ellipse cx="65" cy="57" rx="7" ry="9" fill="#FFFDF5" transform="rotate(18 65 57)"/><path d="M60 61l6 3M60 55l6 3M61 65l-8 11"/><path d="M58 52l6 3"/>`;
    case "gift":
      return `<rect x="52" y="64" width="16" height="12" rx="1.5" fill="${accent}"/><path d="M52 68h16M60 64v12"/><path d="M60 64s-6 0-6.5-2.5C53.2 60 54.5 59 55.5 59.5 57 60.3 60 64 60 64ZM60 64s6 0 6.5-2.5c.3-1.5-1-2.5-2-2-1.5.8-4.5 4.5-4.5 4.5Z" fill="${accent}"/>`;
    case "baby":
      return `<ellipse cx="60" cy="69" rx="11" ry="8" fill="#7BDFF2"/><circle cx="60" cy="63" r="5.5" fill="#FFD9C0"/><path d="M57 63q1.2 1.2 2.6 0M60.5 63q1.2 1.2 2.6 0"/>`;
    case "anchor":
      return `<circle cx="60" cy="58" r="2.5" fill="#FFFDF5"/><path d="M60 60v14"/><path d="M53 70a7 7 0 0 0 14 0"/><path d="M53 70l-2.5 1M67 70l2.5 1"/>`;
    case "shopbag":
      return `<path d="M53 64h14l-1.5 12h-11L53 64Z" fill="${accent}"/><path d="M57 64v-2a3 3 0 0 1 6 0v2"/>`;
    case "controller":
      return `<rect x="50" y="62" width="20" height="12" rx="6" fill="#1A1A1A"/><path d="M56 66v4M54 68h4" stroke="#FFFDF5"/><circle cx="65" cy="67" r="1.2" fill="#FFFDF5" stroke="none"/><circle cx="67.5" cy="69.5" r="1.2" fill="#FFFDF5" stroke="none"/>`;
    case "flute":
      return `<path d="M50 71l20-8"/><circle cx="55" cy="69" r="1.2" fill="#1A1A1A" stroke="none"/><circle cx="59" cy="67.4" r="1.2" fill="#1A1A1A" stroke="none"/><circle cx="63" cy="65.8" r="1.2" fill="#1A1A1A" stroke="none"/>`;
    case "sticks":
      return `<path d="M54 74l8-12M66 74l-8-12"/>${dot(62, 62, 1.8)}${dot(58, 62, 1.8)}`;
    case "bat":
      return `<path d="M63 55l8 4-2 4-8-4 2-4Z" fill="#E8C86A"/><path d="M59 61l-7 11"/>`;
    case "sword":
      return `<path d="M55 74l13-15"/><path d="M68 59l4-4"/><path d="M62 68l7-1"/>`;
    case "scalpel":
      return `<rect x="52" y="70" width="10" height="3" rx="1.5" fill="#8A97A5" transform="rotate(-35 57 71)"/><path d="M60 64l5-5-1 4-4 1Z" fill="#FFFDF5"/>`;
    case "coins":
      return `<ellipse cx="60" cy="70" rx="9" ry="3.5" fill="#FFD23F"/><ellipse cx="60" cy="66" rx="9" ry="3.5" fill="#FFD23F"/><ellipse cx="60" cy="62" rx="9" ry="3.5" fill="#FFD23F"/>`;
    case "plug":
      return `<rect x="55" y="62" width="9" height="9" rx="2" fill="#1A1A1A"/><path d="M57 62V58M62 62V58"/><path d="M64 66h6"/>`;
    case "saw":
      return `<path d="M50 70l14-6 3 2-14 7-3-3Z" fill="#B9C4CC"/><path d="M64 64l5-2 1 3-4 2"/>`;
    case "roller":
      return `<rect x="52" y="58" width="14" height="5" rx="2.5" fill="#7BDFF2"/><path d="M66 60.5h3v6h-7"/><path d="M62 66.5V76"/>`;
    case "milkcan":
      return `<path d="M54 62h12l-1.5 12h-9L54 62Z"/><path d="M53 62a7 2.8 0 0 1 14 0"/><path d="M58 59V56h4v3"/>`;
    case "papers":
      return `<rect x="53" y="60" width="13" height="15" rx="1.5" fill="#FFFDF5"/><path d="M56 64h7M56 67.5h7M56 71h4"/>`;
    case "shoe":
      return `<path d="M51 72V64l5 1 3 4h8a2 2 0 0 1 0 4H55l-4-1Z"/>`;
    case "pot":
      return `<path d="M52 62h16l-2 12H54l-2-12Z" fill="#8A5A2B"/><path d="M51 62a9 3 0 0 1 18 0"/>`;
    case "hammer":
      return `<rect x="54" y="58" width="12" height="6" rx="2" fill="#8A97A5" transform="rotate(-15 60 61)"/><path d="M58 64l-6 12"/>`;
    case "basket":
      return `<path d="M50 64h20l-2.5 10h-15L50 64Z" fill="#E8C86A"/><circle cx="56" cy="61" r="3" fill="#FF5D5D"/><circle cx="62" cy="60" r="3" fill="#B8F169"/><circle cx="68" cy="61" r="3" fill="#FF8A5C"/>`;
    case "wheel":
      return `<circle cx="60" cy="66" r="9" fill="#FFFDF5"/><circle cx="60" cy="66" r="2.5"/><path d="M60 57v7M52.5 70.5l6-2M67.5 70.5l-6-2"/>`;
    case "bread":
      return `<path d="M50 64a4 4 0 0 1 4-4h12a4 4 0 0 1 0 8H54a4 4 0 0 1-4-4Z" fill="#E8C86A"/>`;
    case "dhol":
      return `<ellipse cx="60" cy="66" rx="7" ry="10" fill="#FFFDF5" transform="rotate(15 60 66)"/><path d="M55 58q5 8 0 16M65 58q-5 8 0 16"/>`;
    case "pawn":
      return `<circle cx="60" cy="59" r="3.5" fill="#FFFDF5"/><path d="M57 66h6l1 8H56l1-8Z"/>`;
    case "puck":
      return `<circle cx="60" cy="66" r="8" fill="#FFFDF5"/><circle cx="60" cy="66" r="3" fill="#FF5D5D"/>`;
    case "trishul":
      return `<path d="M60 78V52"/><path d="M60 52l-2-3M60 52l2-3"/><path d="M53 62V56q0-4 4-5M67 62v-6q0-4-4-5"/><circle cx="60" cy="70" r="1.4" fill="currentColor" stroke="none"/>`;
    case "rose":
      return `<circle cx="60" cy="60" r="4" fill="#FF5D5D"/><circle cx="60" cy="60" r="1.6" fill="#FF8A9B" stroke="none"/><path d="M60 64v10"/><path d="M60 70l-4-1M60 72l4-1"/>`;
    case "pie":
      return `<ellipse cx="60" cy="68" rx="10" ry="4" fill="#E8C86A"/><path d="M52 68q8-6 16 0" fill="#FFFDF5"/><circle cx="60" cy="63" r="2" fill="#FF5D5D"/>`;
    case "broom":
      return `<path d="M66 52l-8 16"/><path d="M52 68q8 5 14 0l-1 6H53l-1-6Z" fill="#E8C86A"/>`;
    default:
      return "";
  }
}

export function extras(kind: string): string {
  switch (kind) {
    case "notes":
      return `<circle cx="94" cy="52" r="3" fill="#1A1A1A" stroke="none"/><path d="M97 52V40l9-3v12"/><circle cx="106" cy="49" r="3" fill="#1A1A1A" stroke="none"/>`;
    case "thought":
      return `<circle cx="84" cy="30" r="2.5" fill="#FFFDF5"/><circle cx="91" cy="23" r="3.5" fill="#FFFDF5"/><circle cx="100" cy="15" r="4.5" fill="#FFFDF5"/><path d="M96 13h8M100 9v8"/>`;
    case "zzz":
      return `<path d="M88 32h9l-9 9h9M99 20h7l-7 7h7"/>`;
    case "hearts":
      return `<path d="M92 30c-2-3-7-1-5 3l5 4 5-4c2-4-3-6-5-3Z" fill="#FF5D5D"/>`;
    case "runlines":
      return `<path d="M22 70h10M18 78h12M24 86h9"/>`;
    case "sparkle":
      return `<path d="M94 60l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4Z" fill="#FFD23F"/><path d="M24 40l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" fill="#7BDFF2"/>`;
    default:
      return "";
  }
}

export interface PersonOpts {
  skin?: string; hair?: string; hairStyle?: HairStyle; face?: FaceKind;
  top?: "tee" | "dress" | "coat" | "suit" | "apron" | "jersey";
  shirt?: string; pants?: string; accent?: string;
  pose?: Pose; prop?: string; extra?: string;
  specs?: boolean; mask?: string; pack?: string; cape?: string; steth?: boolean;
  beard?: string; mo?: boolean;
}

export function person(o: PersonOpts): string {
  const { skin = "#FFD9C0", hair = "#1A1A1A", hairStyle = "short", face = "smile", top = "tee", shirt = "#FFFDF5", pants = "#1A1A1A", accent = "#FFD23F", pose = "stand", prop: pp = "none", extra = "none", specs = false, mask, pack, cape, steth = false, beard, mo = false } = o;
  const dress = top === "dress";
  return shadow
    + (cape ? `<path d="M44 54L28 94l12 5 8-30M76 54l16 40-12 5-8-30Z" fill="${cape}"/>` : "")
    + (pack ? `<rect x="34" y="58" width="12" height="22" rx="5" fill="${pack}"/><path d="M44 58l4-4M76 58l-4-4"/>` : "")
    + `<rect x="56" y="43" width="8" height="8" fill="${skin}"/>`
    + legs(pose, pants, skin, dress)
    + torso(top, shirt, accent)
    + (steth ? `<path d="M54 56v8a6 6 0 0 0 12 0v-8"/><circle cx="60" cy="72" r="2.5" fill="#1A1A1A"/>` : "")
    + arms(pose, top === "coat" ? "#FFFDF5" : shirt, skin)
    + head({ skin, hair, hairStyle, face, specs, mask, accent, beard, mo })
    + (pp !== "none" ? prop(pp, accent) : "")
    + (extra !== "none" ? extras(extra) : "");
}

export function chibi(o: {
  skin?: string; hair?: string; hairStyle?: HairStyle; face?: FaceKind;
  outfit?: "suit" | "coat" | "tee" | "apron" | "jersey" | "dress"; shirt?: string;
  accent?: string; prop?: string; extra?: string; specs?: boolean; mask?: string; steth?: boolean;
  beard?: string; mo?: boolean; cape?: string;
}): string {
  const { skin = "#FFD9C0", hair = "#1A1A1A", hairStyle = "short", face = "happy", outfit = "tee", shirt = "#FFD23F", accent = "#FFD23F", prop: pp = "none", extra = "none", specs = false, mask, steth = false, beard, mo = false, cape } = o;
  const cx = 60, cy = 42, r = 19;
  return shadow
    + (cape ? `<path d="M48 66L36 96l10 4 6-22M72 66l12 30-10 4-6-22Z" fill="${cape}"/>` : "")
    + `<rect x="56" y="58" width="8" height="8" fill="${skin}"/>`
    + `<path d="M52 84h5v12h-5zM63 84h5v12h-5z" stroke="#1A1A1A" stroke-width="8"/>`
    + `<ellipse cx="53" cy="99" rx="7" ry="3.5" fill="#1A1A1A" stroke="none"/><ellipse cx="67" cy="99" rx="7" ry="3.5" fill="#1A1A1A" stroke="none"/>`
    + torso(outfit, shirt, accent).replaceAll("M44 54h32l-4 28H48l-4-28Z", "M46 66h28l-3 18H49l-3-18Z").replaceAll("M44 54h32l9 28H35l9-28Z", "M46 66h28l7 18H39l7-18Z")
    + (steth ? `<path d="M55 68v6a5 5 0 0 0 10 0v-6"/><circle cx="60" cy="80" r="2" fill="#1A1A1A"/>` : "")
    + `<path d="M48 68L40 78M72 68L80 78" stroke="${outfit === "coat" ? "#FFFDF5" : shirt}" stroke-width="7"/><circle cx="40" cy="79" r="3.5" fill="${skin}"/><circle cx="80" cy="79" r="3.5" fill="${skin}"/>`
    + head({ cx, cy, r, skin, hair, hairStyle, face, specs, mask, accent, beard, mo })
    + (pp !== "none" ? `<g transform="translate(14,-6) scale(0.85)">${prop(pp, accent)}</g>` : "")
    + (extra !== "none" ? extras(extra) : "");
}
