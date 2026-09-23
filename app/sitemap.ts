import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vetrisuriya.in";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/icons`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/characters`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
