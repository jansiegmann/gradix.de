export interface Kategorie {
  slug: string;
  name: string;
  beschreibung: string;
  icon?: string;
  sortierung: number;
}

export interface VergleichsKategorie {
  key: string;
  label: string;
  einheit?: string;
  sortierung: number;
}

export interface Produkt {
  name: string;
  amazonLink: string;
  werte: Record<string, string>;
}

export interface FAQ {
  frage: string;
  antwort: string;
}

export interface Vergleich {
  slug: string;
  kategorie: string;
  titel: string;
  beschreibung: string;
  keywords: string[];
  einleitung: string;
  kaufberatung: string;
  vergleichsKategorien: VergleichsKategorie[];
  faq: FAQ[];
  produkte: Produkt[];
  erstelltAm: string;
  aktualisiertAm: string;
}
