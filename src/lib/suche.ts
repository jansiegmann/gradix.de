import { Vergleich } from "@/types";

export interface SuchErgebnis {
  vergleich: Vergleich;
  kategorieName: string;
  score: number;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äÄ]/g, "ae")
    .replace(/[öÖ]/g, "oe")
    .replace(/[üÜ]/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function fuzzyMatch(query: string, text: string): number {
  const normalizedQuery = normalize(query);
  const normalizedText = normalize(text);

  if (normalizedText.includes(normalizedQuery)) {
    return normalizedText.startsWith(normalizedQuery) ? 3 : 2;
  }

  // Check if all query words are found in the text
  const queryWords = normalizedQuery.split(/\s+/);
  const allWordsFound = queryWords.every((word) =>
    normalizedText.includes(word)
  );
  if (allWordsFound) return 1;

  // Partial match: check if query is a substring of any word
  const textWords = normalizedText.split(/\s+/);
  const partialMatch = queryWords.some((qWord) =>
    textWords.some((tWord) => tWord.startsWith(qWord) || qWord.startsWith(tWord))
  );
  if (partialMatch) return 0.5;

  return 0;
}

export function suche(
  vergleiche: Vergleich[],
  query: string,
  kategorie?: string
): SuchErgebnis[] {
  if (!query.trim()) return [];

  const filtered = kategorie
    ? vergleiche.filter((v) => v.kategorie === kategorie)
    : vergleiche;

  const results: SuchErgebnis[] = [];

  for (const vergleich of filtered) {
    let score = 0;

    // Search in title (highest weight)
    score += fuzzyMatch(query, vergleich.titel) * 10;

    // Search in keywords
    for (const keyword of vergleich.keywords) {
      score += fuzzyMatch(query, keyword) * 5;
    }

    // Search in description
    score += fuzzyMatch(query, vergleich.beschreibung) * 2;

    if (score > 0) {
      results.push({
        vergleich,
        kategorieName: vergleich.kategorie,
        score,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
