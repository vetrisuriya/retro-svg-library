export type CollectionSlug =
  | "websites"
  | "blog"
  | "news"
  | "hospital"
  | "clinic"
  | "bank"
  | "lms"
  | "ai"
  | "web3"
  | "shop"
  | "travel"
  | "social"
  | "arrows"
  | "food"
  | "sports"
  | "music"
  | "nature"
  | "home"
  | "fashion"
  | "tools";

export interface Collection {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  description: string;
  accent: string; // hex used for card blob
  emoji?: string;
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "websites",
    name: "Websites",
    tagline: "Layouts, browsers & UI chrome",
    description: "Headers, heroes, cursors and wireframe staples for marketing sites and portfolios.",
    accent: "#FFD23F",
  },
  {
    slug: "blog",
    name: "Blog",
    tagline: "Writing, editing & reading",
    description: "Pens, typewriters, bookmarks and editorial marks for bloggers.",
    accent: "#FF8A5C",
  },
  {
    slug: "news",
    name: "News Media",
    tagline: "Press, broadcast & print",
    description: "Newspapers, mics, cameras and breaking-news badges.",
    accent: "#7BDFF2",
  },
  {
    slug: "hospital",
    name: "Hospitals",
    tagline: "Emergency & care",
    description: "Crosses, ambulances, beds and signage for large hospitals.",
    accent: "#FF5D5D",
  },
  {
    slug: "clinic",
    name: "Clinic",
    tagline: "Checkups & pharmacy",
    description: "Stethoscopes, pills, thermometers and appointment cards.",
    accent: "#95D5B2",
  },
  {
    slug: "bank",
    name: "Banks",
    tagline: "Money, vaults & cards",
    description: "Coins, safes, charts and branch icons for fintech and banks.",
    accent: "#B8F169",
  },
  {
    slug: "lms",
    name: "LMS & Education",
    tagline: "Courses, exams & campus",
    description: "Caps, books, boards and certificates for schools and LMS products.",
    accent: "#CDB4F6",
  },
  {
    slug: "ai",
    name: "AI",
    tagline: "Bots, chips & prompts",
    description: "Sparkles, neural nets, robots and prompt boxes for AI features.",
    accent: "#F9C6D3",
  },
  {
    slug: "web3",
    name: "Web3",
    tagline: "Wallets, chains & tokens",
    description: "Cubes, keys, ledgers and coins for crypto and dApps.",
    accent: "#F4E285",
  },
  {
    slug: "shop",
    name: "E-commerce",
    tagline: "Carts, bags & parcels",
    description: "Baskets, tags, trucks and returns for storefronts.",
    accent: "#FFB3C7",
  },
  {
    slug: "travel",
    name: "Travel",
    tagline: "Planes, maps & stays",
    description: "Paper planes, passports, mountains and compasses.",
    accent: "#A8E6CF",
  },
  {
    slug: "social",
    name: "Social",
    tagline: "Chats, likes & sharing",
    description: "Bubbles, hearts, cameras and megaphones for community UIs.",
    accent: "#FFD6A5",
  },
  {
    slug: "arrows",
    name: "Arrows & UI",
    tagline: "Direction & actions",
    description: "Directional arrows, refresh, undo and upload marks for flows and buttons.",
    accent: "#BDE0FE",
  },
  {
    slug: "food",
    name: "Food & Drink",
    tagline: "Snacks, sips & treats",
    description: "Burgers, brews and desserts for menus, delivery and restaurant apps.",
    accent: "#FFAFCC",
  },
  {
    slug: "sports",
    name: "Sports & Fun",
    tagline: "Games, gear & wins",
    description: "Balls, trophies, boards and timers for fitness and play.",
    accent: "#E4C1F9",
  },
  {
    slug: "music",
    name: "Music & Party",
    tagline: "Instruments & stage",
    description: "Guitars, drums, decks and desi instruments for players and party apps.",
    accent: "#F9C6D3",
  },
  {
    slug: "nature",
    name: "Nature & Pets",
    tagline: "Outdoors & animals",
    description: "Paws, leaves, sun, rain and garden icons for eco and pet products.",
    accent: "#95D5B2",
  },
  {
    slug: "home",
    name: "Home & Living",
    tagline: "Rooms, decor & festivals",
    description: "Furniture, appliances and festive home icons for realty and lifestyle apps.",
    accent: "#FFD6A5",
  },
  {
    slug: "fashion",
    name: "Fashion & Style",
    tagline: "Wear, glam & desi fits",
    description: "Outfits, accessories and Indian wear icons for stores and lookbooks.",
    accent: "#F9C6D3",
  },
  {
    slug: "tools",
    name: "Tools & Build",
    tagline: "Workshop & DIY",
    description: "Hammers, drills, paint and gear for hardware and services apps.",
    accent: "#B8B8B8",
  },
];

export const COLLECTION_MAP = Object.fromEntries(
  COLLECTIONS.map((c) => [c.slug, c])
) as Record<CollectionSlug, Collection>;
