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
