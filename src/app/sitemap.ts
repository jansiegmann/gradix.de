import { MetadataRoute } from "next";
import { getKategorien, getAlleVergleiche } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gradix.de";

  const kategorien = getKategorien();
  const vergleiche = getAlleVergleiche();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const kategoriePages: MetadataRoute.Sitemap = kategorien.map((k) => ({
    url: `${baseUrl}/${k.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const vergleichPages: MetadataRoute.Sitemap = vergleiche.map((v) => ({
    url: `${baseUrl}/${v.kategorie}/${v.slug}`,
    lastModified: new Date(v.aktualisiertAm),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...kategoriePages, ...vergleichPages];
}
