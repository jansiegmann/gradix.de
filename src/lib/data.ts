import { Kategorie, Vergleich } from "@/types";
import kategorienData from "@/data/kategorien.json";
import fs from "fs";
import path from "path";

export function getKategorien(): Kategorie[] {
  return (kategorienData as Kategorie[]).sort(
    (a, b) => a.sortierung - b.sortierung
  );
}

export function getKategorie(slug: string): Kategorie | undefined {
  return getKategorien().find((k) => k.slug === slug);
}

export function getAlleVergleiche(): Vergleich[] {
  const vergleicheDir = path.join(process.cwd(), "src/data/vergleiche");
  const files = fs.readdirSync(vergleicheDir).filter((f) => f.endsWith(".json"));

  return files.map((file) => {
    const content = fs.readFileSync(path.join(vergleicheDir, file), "utf-8");
    return JSON.parse(content) as Vergleich;
  });
}

export function getVergleicheByKategorie(kategorie: string): Vergleich[] {
  return getAlleVergleiche().filter((v) => v.kategorie === kategorie);
}

export function getVergleich(
  kategorie: string,
  slug: string
): Vergleich | undefined {
  return getAlleVergleiche().find(
    (v) => v.kategorie === kategorie && v.slug === slug
  );
}

export function getVergleichCount(kategorie: string): number {
  return getVergleicheByKategorie(kategorie).length;
}

export function getAehnlicheVergleiche(
  kategorie: string,
  ausschlussSlug: string,
  anzahl = 3
): Vergleich[] {
  const alle = getVergleicheByKategorie(kategorie).filter(
    (v) => v.slug !== ausschlussSlug
  );
  // Shuffle and take first n
  for (let i = alle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [alle[i], alle[j]] = [alle[j], alle[i]];
  }
  return alle.slice(0, anzahl);
}
