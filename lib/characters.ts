import { art as A, blush, chibi, dot, person, shadow, type ArtGroup, type Artwork } from "./doodle";
import { MORE_ARTWORKS } from "./characters-more";
import { EXTRA_ARTWORKS } from "./characters-extra";

export type { ArtGroup, Artwork };
export { buildCharacterSvg } from "./doodle";

export const ART_GROUPS: { slug: ArtGroup; name: string; blurb: string; accent: string }[] = [
  { slug: "humans", name: "Humans", blurb: "Professions, actions & emotions for UI, onboarding and blogs", accent: "#FFD23F" },
  { slug: "animals", name: "Animals", blurb: "Cute sidekicks for empty states, mascots and kids content", accent: "#B8F169" },
  { slug: "caricatures", name: "Caricatures", blurb: "Big-head chibi characters & legends with oversized props", accent: "#FFB3C7" },
];

/* ── HUMANS ─────────────────────────────────────── */
const HUMANS: Artwork[] = [
  A("humans", "Photographer Priya", ["camera", "photo", "girl", "media"], person({ skin: "#FFD9C0", hairStyle: "bob", face: "happy", top: "dress", shirt: "#FFD23F", pose: "photo", prop: "camera", extra: "sparkle" })),
  A("humans", "Paper-Plane Arjun", ["plane", "send", "boy", "play"], person({ skin: "#E8B48A", hairStyle: "short", face: "happy", shirt: "#FFFDF5", pants: "#1A1A1A", pose: "throw", prop: "plane", extra: "runlines" })),
  A("humans", "Waving Meera", ["hello", "wave", "girl", "welcome"], person({ skin: "#C68642", hairStyle: "long", face: "smile", top: "dress", shirt: "#FFB3C7", pose: "wave", extra: "hearts" })),
  A("humans", "Walking Kabir", ["walk", "boy", "casual"], person({ skin: "#8D5524", hairStyle: "spikes", face: "calm", shirt: "#7BDFF2", pants: "#2E2E2E", pose: "walk" })),
  A("humans", "Runner Tara", ["run", "sport", "girl", "fitness"], person({ skin: "#FFD9C0", hairStyle: "pony", face: "happy", top: "jersey", shirt: "#FF5D5D", pants: "#1A1A1A", pose: "run", extra: "runlines" })),
  A("humans", "Professor Rao", ["think", "teacher", "idea"], person({ skin: "#C68642", hairStyle: "grey", face: "calm", top: "suit", accent: "#7BDFF2", pose: "think", specs: true, extra: "thought" })),
  A("humans", "Laptop Dev", ["developer", "code", "work"], person({ skin: "#E8B48A", hairStyle: "cap", accent: "#B8F169", face: "smile", shirt: "#B8F169", pose: "laptop", prop: "laptop" })),
  A("humans", "Boss on Call", ["phone", "business", "suit"], person({ skin: "#FFD9C0", hairStyle: "short", face: "smile", top: "suit", accent: "#FF5D5D", pose: "phone" })),
  A("humans", "Reader Anaya", ["book", "read", "study"], person({ skin: "#F5C69C", hairStyle: "bun", face: "calm", top: "dress", shirt: "#CDB4F6", pose: "read", prop: "book" })),
  A("humans", "Rockstar Ravi", ["guitar", "music", "band"], person({ skin: "#8D5524", hairStyle: "spikes", face: "cool", shirt: "#2E2E2E", pose: "guitar", prop: "guitar", extra: "notes" })),
  A("humans", "Singer Sona", ["mic", "sing", "music"], person({ skin: "#C68642", hairStyle: "afro", face: "happy", top: "dress", shirt: "#FF8A5C", pose: "mic", prop: "mic", extra: "notes" })),
  A("humans", "Chef Chotu", ["cook", "food", "kitchen"], person({ skin: "#FFD9C0", hairStyle: "chef", face: "happy", top: "apron", shirt: "#7BDFF2", pose: "tray", prop: "tray" })),
  A("humans", "Doctor Dev", ["hospital", "health", "care"], person({ skin: "#E8B48A", hairStyle: "short", face: "smile", top: "coat", shirt: "#7BDFF2", pose: "stand", specs: true, steth: true })),
  A("humans", "Nurse Nila", ["clinic", "care", "health"], person({ skin: "#C68642", hairStyle: "nurse", face: "smile", top: "coat", shirt: "#FFB3C7", pose: "hold", prop: "syringe" })),
  A("humans", "Scientist Sen", ["lab", "experiment", "research"], person({ skin: "#F5C69C", hairStyle: "afro", hair: "#C9C9C9", face: "wow", top: "coat", shirt: "#B8F169", pose: "hold", prop: "flask", specs: true })),
  A("humans", "Teacher Tara", ["school", "lms", "lesson"], person({ skin: "#FFD9C0", hairStyle: "bun", face: "smile", top: "suit", accent: "#FFD23F", pose: "hold", prop: "stick", specs: true })),
  A("humans", "Student Sid", ["school", "backpack", "kid"], person({ skin: "#E8B48A", hairStyle: "cap", accent: "#FF8A5C", face: "happy", shirt: "#FFD23F", pose: "wave", pack: "#FF8A5C" })),
  A("humans", "Barista Bina", ["coffee", "cafe", "drink"], person({ skin: "#C68642", hairStyle: "pony", face: "smile", top: "apron", shirt: "#C89B6D", pose: "hold", prop: "cup" })),
  A("humans", "Farmer Balu", ["farm", "harvest", "village"], person({ skin: "#8D5524", hairStyle: "strawhat", face: "happy", shirt: "#B8F169", pants: "#5A3A1E", pose: "hold", prop: "flower" })),
  A("humans", "Delivery Rider", ["parcel", "delivery", "bike"], person({ skin: "#E8B48A", hairStyle: "helmet", accent: "#FF5D5D", face: "smile", shirt: "#FF5D5D", pose: "hold", prop: "box" })),
  A("humans", "Skater Sam", ["skate", "fun", "kid"], person({ skin: "#F5C69C", hairStyle: "cap", accent: "#7BDFF2", face: "cool", shirt: "#1A1A1A", pants: "#2E2E2E", pose: "skate" })),
  A("humans", "Yogi Yash", ["yoga", "meditate", "calm"], person({ skin: "#C68642", hairStyle: "bald", face: "calm", shirt: "#FFD23F", pants: "#FF8A5C", pose: "lotus" })),
  A("humans", "Dancer Dia", ["dance", "party", "music"], person({ skin: "#E8B48A", hairStyle: "pony", face: "happy", top: "dress", shirt: "#E4C1F9", pose: "dance", extra: "notes" })),
  A("humans", "Footballer Fahad", ["soccer", "sport", "kick"], person({ skin: "#8D5524", hairStyle: "short", face: "happy", top: "jersey", shirt: "#B8F169", pose: "ball", prop: "ball" })),
  A("humans", "Grandpa Gopal", ["old", "cane", "walk"], person({ skin: "#E8B48A", hairStyle: "grey", face: "smile", top: "suit", accent: "#BDE0FE", pose: "cane", prop: "cane", specs: true })),
  A("humans", "Grandma Gauri", ["old", "flower", "kind"], person({ skin: "#F5C69C", hairStyle: "bun", hair: "#C9C9C9", face: "happy", top: "dress", shirt: "#FFAFCC", pose: "hold", prop: "flower", specs: true })),
  A("humans", "Balloon Kid", ["balloon", "kid", "happy"], person({ skin: "#FFD9C0", hairStyle: "short", face: "happy", shirt: "#7BDFF2", pants: "#FF8A5C", pose: "holdup", prop: "balloon" })),
  A("humans", "Artist Aisha", ["paint", "art", "design"], person({ skin: "#C68642", hairStyle: "beret", accent: "#FF5D5D", face: "smile", shirt: "#FFFDF5", pose: "hold", prop: "palette", extra: "sparkle" })),
  A("humans", "Pilot Vikram", ["fly", "plane", "travel"], person({ skin: "#E8B48A", hairStyle: "pilot", accent: "#7BDFF2", face: "cool", top: "suit", pose: "holdup", prop: "plane" })),
  A("humans", "Strongman Sheru", ["gym", "lift", "power"], person({ skin: "#8D5524", hairStyle: "bald", face: "wow", top: "jersey", shirt: "#FF5D5D", pose: "holdup", prop: "dumbbell" })),
];

/* ── ANIMALS ────────────────────────────────────── */
const ANIMALS: Artwork[] = [
  A("animals", "Ginger Cat", ["cat", "pet", "cute"], `${shadow}<path d="M88 78q14-4 10-20" stroke-width="7" stroke="#FFB26B"/><ellipse cx="60" cy="80" rx="20" ry="15" fill="#FFB26B"/><circle cx="60" cy="50" r="15" fill="#FFB26B"/><path d="M48 40l-3-11 10 5ZM72 40l3-11-10 5Z" fill="#FFB26B"/><path d="M52 62q8 6 16 0"/><path d="M44 54h10M44 60h10M76 54H66M76 60H66"/>${dot(54, 48)}${dot(66, 48)}${blush(49, 53)}${blush(71, 53)}<path d="M52 44h4M64 44h4"/>`),
  A("animals", "Buddy Dog", ["dog", "pet", "puppy"], `${shadow}<ellipse cx="60" cy="80" rx="19" ry="14" fill="#E8C86A"/><circle cx="60" cy="52" r="15" fill="#E8C86A"/><ellipse cx="44" cy="54" rx="5" ry="10" fill="#8A5A2B" transform="rotate(15 44 54)"/><ellipse cx="76" cy="54" rx="5" ry="10" fill="#8A5A2B" transform="rotate(-15 76 54)"/><ellipse cx="66" cy="46" rx="5" ry="4" fill="#FFFDF5"/>${dot(55, 51)}${dot(66, 50)}<ellipse cx="60" cy="59" rx="3.5" ry="2.8" fill="#1A1A1A"/><path d="M60 62v4q0 3-4 3M60 66q0 3 4 3"/>`),
  A("animals", "Pip Bird", ["bird", "fly", "tweet"], `${shadow}<ellipse cx="60" cy="66" rx="17" ry="15" fill="#7BDFF2"/><circle cx="60" cy="48" r="12" fill="#7BDFF2"/><path d="M60 60l12 4-12 4v-8Z" fill="#FF8A5C"/><path d="M46 64q-8 2-10 10 8 0 12-4" fill="#3AA8C1"/>${dot(58, 46)}<path d="M54 34q2-6 6-6 0 5 4 6" fill="#FF5D5D"/><path d="M52 80v8M68 80v8"/><path d="M48 90h8M64 90h8"/>`),
  A("animals", "Bubbles Fish", ["fish", "sea", "water"], `${shadow}<ellipse cx="58" cy="62" rx="18" ry="12" fill="#7BDFF2"/><path d="M76 62l14-10v20l-14-10Z" fill="#3AA8C1"/><path d="M58 50l-4-8h8l-4 8Z" fill="#3AA8C1"/>${dot(50, 60)}<path d="M62 58q4 4 0 8"/><circle cx="86" cy="34" r="3" fill="#BDE0FE"/><circle cx="93" cy="26" r="2.2" fill="#BDE0FE"/><circle cx="80" cy="24" r="1.8" fill="#BDE0FE"/>`),
  A("animals", "Momo Bunny", ["rabbit", "bunny", "easter"], `${shadow}<ellipse cx="60" cy="84" rx="16" ry="11" fill="#FFFDF5"/><circle cx="60" cy="62" r="13" fill="#FFFDF5"/><ellipse cx="52" cy="40" rx="5" ry="13" fill="#FFFDF5"/><ellipse cx="68" cy="40" rx="5" ry="13" fill="#FFFDF5"/><ellipse cx="52" cy="41" rx="2.2" ry="8" fill="#FFB3C7" stroke="none"/><ellipse cx="68" cy="41" rx="2.2" ry="8" fill="#FFB3C7" stroke="none"/>${dot(55, 61)}${dot(65, 61)}<path d="M58 66h4l-2 3-2-3Z" fill="#FFB3C7"/><path d="M60 69v3M60 72q-3 3-6 1M60 72q3 3 6 1"/>${blush(51, 65)}${blush(69, 65)}`),
  A("animals", "Kero Frog", ["frog", "pond", "green"], `${shadow}<ellipse cx="60" cy="76" rx="20" ry="15" fill="#B8F169"/><ellipse cx="60" cy="78" rx="11" ry="9" fill="#FFFDF5"/><circle cx="49" cy="56" r="8" fill="#B8F169"/><circle cx="71" cy="56" r="8" fill="#B8F169"/>${dot(49, 56, 2.5)}${dot(71, 56, 2.5)}<path d="M48 70q12 8 24 0"/>${blush(45, 66)}${blush(75, 66)}`),
  A("animals", "Hoot Owl", ["owl", "night", "wise"], `${shadow}<ellipse cx="60" cy="66" rx="18" ry="22" fill="#C89B6D"/><circle cx="53" cy="58" r="7" fill="#FFFDF5"/><circle cx="67" cy="58" r="7" fill="#FFFDF5"/>${dot(53, 58, 2.5)}${dot(67, 58, 2.5)}<path d="M60 64l-3 5h6l-3-5Z" fill="#FF8A5C"/><path d="M44 62q-6 8-2 18M76 62q6 8 2 18"/><path d="M53 90v5M67 90v5"/><path d="M50 44l-4-8 9 4ZM70 44l4-8-9 4Z" fill="#8A5A2B"/>`),
  A("animals", "Buzz Bee", ["bee", "honey", "fly"], `${shadow}<ellipse cx="60" cy="64" rx="14" ry="12" fill="#FFD23F"/><path d="M54 53v22M62 53v22"/><ellipse cx="50" cy="48" rx="7" ry="5" fill="#FFFDF5" transform="rotate(-25 50 48)"/><ellipse cx="70" cy="48" rx="7" ry="5" fill="#FFFDF5" transform="rotate(25 70 48)"/>${dot(56, 62)}${dot(64, 62)}<path d="M56 68q4 3 8 0"/><path d="M74 64l7 2-7 2"/><path d="M54 44q-3-6-8-7M66 44q3-6 8-7"/>${dot(46, 37, 1.6)}${dot(74, 37, 1.6)}<path d="M20 84q10-8 22-4" stroke-width="2.5"/>`),
  A("animals", "Rani Butterfly", ["butterfly", "fly", "pretty"], `${shadow}<ellipse cx="48" cy="52" rx="11" ry="14" fill="#FFB3C7" transform="rotate(-20 48 52)"/><ellipse cx="72" cy="52" rx="11" ry="14" fill="#CDB4F6" transform="rotate(20 72 52)"/><ellipse cx="50" cy="74" rx="8" ry="10" fill="#FF8A5C" transform="rotate(-15 50 74)"/><ellipse cx="70" cy="74" rx="8" ry="10" fill="#7BDFF2" transform="rotate(15 70 74)"/><rect x="57" y="52" width="6" height="26" rx="3" fill="#1A1A1A"/>${dot(58.5, 56, 1.2)}${dot(61.5, 56, 1.2)}<path d="M58 52q-4-8-9-9M62 52q4-8 9-9"/>`),
  A("animals", "Taro Turtle", ["turtle", "slow", "sea"], `${shadow}<path d="M30 78a30 24 0 0 1 60 0Z" fill="#95D5B2"/><path d="M45 62a15 12 0 0 1 8-6M60 56v-6M75 62a15 12 0 0 0-8-6"/><circle cx="90" cy="72" r="8" fill="#B8F169"/>${dot(92, 70)}<path d="M36 80l-8 4M44 88l-4 6M76 88l4 6M84 80l8 4"/>`),
  A("animals", "Rusty Fox", ["fox", "clever", "wild"], `${shadow}<circle cx="60" cy="62" r="15" fill="#FF8A5C"/><path d="M48 52l-5-14 13 7ZM72 52l5-14-13 7Z" fill="#FF8A5C"/><path d="M50 74q10 10 20 0l-3 8H53l-3-8Z" fill="#FFFDF5"/><ellipse cx="60" cy="68" rx="4" ry="3" fill="#1A1A1A"/>${dot(54, 60)}${dot(66, 60)}<path d="M88 84q14 0 12-16-10 2-14 8" fill="#FF8A5C"/><path d="M98 68q2 6-2 10l-6-2 4-6 4-2Z" fill="#FFFDF5"/>`),
  A("animals", "Bao Panda", ["panda", "bear", "china"], `${shadow}<ellipse cx="60" cy="82" rx="17" ry="12" fill="#FFFDF5"/><circle cx="60" cy="58" r="15" fill="#FFFDF5"/><circle cx="47" cy="46" r="6" fill="#1A1A1A"/><circle cx="73" cy="46" r="6" fill="#1A1A1A"/><ellipse cx="54" cy="57" rx="4" ry="5" fill="#1A1A1A" transform="rotate(-15 54 57)"/><ellipse cx="66" cy="57" rx="4" ry="5" fill="#1A1A1A" transform="rotate(15 66 57)"/>${dot(54, 56, 1.4)}${dot(66, 56, 1.4)}<ellipse cx="60" cy="63" rx="3" ry="2.4" fill="#1A1A1A"/><path d="M60 65v3M60 68q-3 2-6 1M60 68q3 2 6 1"/>`),
  A("animals", "Pingu Penguin", ["penguin", "winter", "ice"], `${shadow}<ellipse cx="60" cy="68" rx="16" ry="22" fill="#2E2E2E"/><ellipse cx="60" cy="72" rx="10" ry="15" fill="#FFFDF5"/>${dot(55, 58)}${dot(65, 58)}<path d="M60 61l-4 4h8l-4-4Z" fill="#FF8A5C"/><path d="M46 66q-6 4-4 12M74 66q6 4 4 12"/><path d="M50 92l-5 5h9l-2-5ZM70 92l5 5h-9l2-5Z" fill="#FF8A5C"/>`),
  A("animals", "Kiki Monkey", ["monkey", "banana", "play"], `${shadow}<circle cx="42" cy="54" r="7" fill="#C89B6D"/><circle cx="78" cy="54" r="7" fill="#C89B6D"/><circle cx="42" cy="54" r="3" fill="#FFD9C0" stroke="none"/><circle cx="78" cy="54" r="3" fill="#FFD9C0" stroke="none"/><circle cx="60" cy="58" r="15" fill="#C89B6D"/><ellipse cx="60" cy="64" rx="9" ry="7" fill="#FFD9C0"/>${dot(54, 55)}${dot(66, 55)}<ellipse cx="60" cy="62" rx="2.5" ry="2" fill="#1A1A1A"/><path d="M52 70q8 5 16 0"/><path d="M78 74q12 2 8-12"/>`),
  A("animals", "Slowmo Snail", ["snail", "slow", "garden"], `${shadow}<circle cx="58" cy="66" r="17" fill="#E4C1F9"/><circle cx="58" cy="66" r="10" fill="#CDB4F6"/><path d="M58 66a4 4 0 1 1 4 4"/><path d="M30 84h60q6 0 5-6l-2-8"/><path d="M88 70l3-14M93 56q-1-6-6-7M83 56q0-6 5-8"/>${dot(87, 48, 1.6)}<path d="M34 84q8-3 8 2"/>`),
  A("animals", "Pinchy Crab", ["crab", "sea", "beach"], `${shadow}<ellipse cx="60" cy="72" rx="17" ry="11" fill="#FF5D5D"/>${dot(53, 68)}${dot(67, 68)}<path d="M55 76q5 4 10 0"/><path d="M53 62v-8M67 62v-8"/><circle cx="36" cy="52" r="8" fill="#FF5D5D"/><circle cx="84" cy="52" r="8" fill="#FF5D5D"/><path d="M36 52l-8-6M36 52l-9 3M84 52l8-6M84 52l9 3"/><path d="M44 74l-10 4M46 80l-8 6M76 74l10 4M74 80l8 6"/>`),
];

/* ── CARICATURES (big-head chibi) ───────────────── */
const CARICATURES: Artwork[] = [
  A("caricatures", "Boss Chibi", ["boss", "suit", "funny", "office"], chibi({ face: "cool", outfit: "suit", accent: "#FF5D5D", extra: "sparkle" })),
  A("caricatures", "Chef Chibi", ["chef", "cook", "funny"], chibi({ hairStyle: "chef", outfit: "apron", shirt: "#7BDFF2", prop: "tray" })),
  A("caricatures", "Doctor Chibi", ["doctor", "hospital", "cute"], chibi({ outfit: "coat", shirt: "#7BDFF2", prop: "syringe", specs: true, steth: true })),
  A("caricatures", "Rockstar Chibi", ["music", "guitar", "star"], chibi({ hairStyle: "spikes", face: "cool", outfit: "tee", shirt: "#2E2E2E", prop: "guitar", extra: "notes" })),
  A("caricatures", "Professor Chibi", ["teacher", "wise", "book"], chibi({ hairStyle: "afro", hair: "#C9C9C9", outfit: "suit", accent: "#BDE0FE", prop: "book", specs: true })),
  A("caricatures", "Clown Chibi", ["clown", "party", "circus"], chibi({ hairStyle: "clown", face: "happy", outfit: "tee", shirt: "#FF8A5C", prop: "balloon", extra: "hearts" })),
  A("caricatures", "Football Chibi", ["soccer", "sport", "kid"], chibi({ outfit: "jersey", shirt: "#B8F169", prop: "ball", extra: "runlines" })),
  A("caricatures", "Artist Chibi", ["paint", "art", "beret"], chibi({ hairStyle: "beret", accent: "#FF5D5D", outfit: "tee", shirt: "#FFFDF5", prop: "palette" })),
  A("caricatures", "Pilot Chibi", ["pilot", "fly", "plane"], chibi({ hairStyle: "pilot", accent: "#7BDFF2", face: "cool", outfit: "suit", prop: "plane" })),
  A("caricatures", "Superkid Chibi", ["hero", "super", "cape"], chibi({ hairStyle: "short", face: "happy", outfit: "tee", shirt: "#FF5D5D", mask: "#7BDFF2", prop: "dumbbell", extra: "sparkle" })),
];

export const CHARACTERS: Artwork[] = [...HUMANS, ...ANIMALS, ...CARICATURES, ...MORE_ARTWORKS, ...EXTRA_ARTWORKS];
export const CHARACTER_COUNT = CHARACTERS.length;
