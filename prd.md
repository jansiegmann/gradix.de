# PRD: Gradix.de — Produkt-Vergleichsportal

## Projektzusammenfassung

Gradix.de ist ein deutschsprachiges Produkt-Vergleichsportal für physische Produkte im Preissegment €100–€2500. Die Seite monetarisiert über Amazon PartnerNet Affiliate-Links. Design ist minimalistisch: heller Hintergrund, dunkle Schrift, kein visueller Schnickschnack.

---

## Tech-Stack

- **Framework:** Next.js 14+ (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Datenbank:** SQLite via Prisma (später skalierbar auf PostgreSQL)
- **Content:** MDX oder JSON-basierte Produktdaten
- **Deployment:** Vercel
- **Paketmanager:** pnpm

---

## Design-Prinzipien

- Heller Hintergrund (#FFFFFF oder #FAFAFA), dunkle Schrift (#111111)
- Keine bunten Farben außer einer einzigen Akzentfarbe (z.B. #1A56DB)
- Keine Animationen, keine Schatten, keine Verläufe
- Maximale Lesbarkeit: große Schrift, viel Whitespace
- Mobile-first, voll responsiv
- Systemfont-Stack (kein Google Fonts laden)
- Ladezeit unter 2 Sekunden auf 3G

---

## Seitenstruktur

```
gradix.de/                              → Homepage
gradix.de/impressum                     → Impressum
gradix.de/datenschutz                   → Datenschutzerklärung
gradix.de/{kategorie}                   → Kategorie-Übersicht
gradix.de/{kategorie}/{produkt-slug}    → Einzelner Produktvergleich
```

### Beispiel:
```
gradix.de/handwerk                      → Alle Handwerk-Vergleiche
gradix.de/handwerk/farbspruehsystem     → Vergleich: Farbsprühsysteme
gradix.de/kueche/kaffeevollautomat      → Vergleich: Kaffeevollautomaten
```

---

## Seitenbeschreibungen

### 1. Homepage (`/`)

**Zweck:** Einstiegsseite, Suchfunktion, Kategorie-Übersicht

**Elemente:**
- Header mit Logo "Gradix" (links) und globale Suchleiste (rechts)
- Hero-Bereich:
  - Headline: "Das größte Produkt-Vergleichsportal Deutschlands"
  - Subline: kurzer Einzeiler, z.B. "Unabhängige Vergleiche für Produkte von €100 bis €2.500"
  - Große Suchleiste (zentriert, prominent)
- Kategorie-Raster darunter:
  - Jede Kategorie als Karte mit Name und Anzahl der Vergleiche
  - Karten verlinken auf `/{kategorie}`
- Footer: Links zu Impressum, Datenschutz, "Mit ♥ aus Deutschland"

**Verhalten der Suche:**
- Sucht über alle Vergleichsseiten (Titel + Keywords)
- Autocomplete/Suggest mit Live-Ergebnissen
- Enter oder Klick führt direkt zur Vergleichsseite

---

### 2. Kategorie-Übersicht (`/{kategorie}`)

**Zweck:** Alle Vergleiche einer Kategorie auflisten

**Elemente:**
- Header (identisch auf allen Seiten)
- Breadcrumb: Startseite > {Kategorie}
- Kategorie-Titel als H1
- Suchleiste (sucht nur innerhalb dieser Kategorie)
- Liste aller Vergleiche dieser Kategorie:
  - Jeder Eintrag zeigt: Produktname, kurze Beschreibung (1 Satz), Anzahl verglichener Produkte
  - Klick führt zu `/{kategorie}/{produkt-slug}`
- Falls viele Einträge: Pagination oder "Mehr laden"

---

### 3. Produktvergleich (`/{kategorie}/{produkt-slug}`)

**Zweck:** Detaillierter Vergleich von Produkten einer Gattung

**Elemente:**
- Header (identisch)
- Breadcrumb: Startseite > {Kategorie} > {Produktname}
- H1: "Die besten {Produktname} im Vergleich"
- Kurze Einleitung (2–3 Sätze, was man beim Kauf beachten sollte)
- **Vergleichstabelle (Kernstück der Seite):**
  - Layout: Spalten = Produkte, Zeilen = Vergleichskriterien
  - Aufbau pro Spalte (von oben nach unten, immer gleich):
    1. **Bildkarussell:** Produktbilder zum Durchblättern (Pfeile links/rechts oder Dots). Erstes Bild sofort sichtbar, weitere per Klick/Swipe
    2. **Preis** (immer erste Zeile, konstant auf jeder Vergleichsseite, Format: "ab XXX €")
    3. **Alle Vergleichswerte:** Sämtliche Zeilen aus `vergleichsKategorien` — pro Zeile links das Label, rechts der Wert des Produkts. Beispiele:
       - Farbsprühsystem: Leistung, Behältervolumen, Sprühweite, Gewicht, Düsenarten, Reinigung
       - Kaffeevollautomat: Brühgruppe, Mahlwerk, Milchsystem, Wassertank, Tassenabstand, Lautstärke
       - Bürostuhl: Belastbarkeit, Sitztiefe, Armlehnen, Lordosenstütze, Material, Garantie
    4. **"Zum {Produktname}" Button** (Affiliate-Link, ganz unten in der Spalte)
  - Kein separater Preis-Bereich, keine Badges, keine Vor-/Nachteile-Listen — nur Bilder, Daten, Button
  - Tabelle ist horizontal scrollbar auf Mobile (Swipe-Geste)
  - Erste Spalte (Kriterienamen) bleibt auf Mobile fixiert (sticky column)
- Unterhalb der Tabelle:
  - Abschnitt "Worauf achten beim Kauf von {Produkt}?" (SEO-Content)
  - FAQ-Bereich (Schema.org FAQ-Markup für Google)
- Affiliate-Hinweis am Seitenende: "* Affiliate-Links: Bei einem Kauf über unsere Links erhalten wir eine kleine Provision. Der Preis für dich bleibt gleich."

---

### 4. Header (global)

**Auf jeder Seite identisch:**
- Links: Logo "Gradix" (verlinkt auf `/`)
- Mitte/Rechts: Suchleiste (globale Suche über alle Vergleiche)
- Mobile: Hamburger-Menü mit Kategorien, Suchleiste klappt auf
- Sticky: Header bleibt beim Scrollen oben fixiert

---

### 5. Footer (global)

- Spalte 1: Logo + Einzeiler
- Spalte 2: Kategorien (Links)
- Spalte 3: Rechtliches (Impressum, Datenschutz)
- Affiliate-Disclaimer: "Gradix.de ist Teilnehmer des Amazon PartnerNet-Programms."

---

## Datenmodell

### Kategorie
```typescript
interface Kategorie {
  slug: string;            // "handwerk"
  name: string;            // "Handwerk"
  beschreibung: string;    // Kurzbeschreibung für SEO
  icon?: string;           // Optional: Emoji oder SVG-Icon
  sortierung: number;      // Reihenfolge auf Homepage
}
```

### Vergleich
```typescript
interface Vergleich {
  slug: string;            // "farbspruehsystem"
  kategorie: string;       // "handwerk" (FK)
  titel: string;           // "Farbsprühsystem"
  beschreibung: string;    // Kurzbeschreibung (1-2 Sätze)
  keywords: string[];      // ["farbsprühsystem", "farbspritzpistole", "airless sprühgerät"]
  einleitung: string;      // Einleitungstext für die Seite
  kaufberatung: string;    // "Worauf achten"-Text (Markdown)
  vergleichsKategorien: VergleichsKategorie[]; // Dynamische Zeilen der Tabelle — pro Seite individuell
  faq: FAQ[];              // FAQ-Einträge
  produkte: Produkt[];     // Verglichene Produkte (= Spalten der Tabelle)
  erstelltAm: Date;
  aktualisiertAm: Date;
}
```

### VergleichsKategorie
```typescript
// Definiert die Zeilen der Vergleichstabelle — pro Vergleichsseite individuell
interface VergleichsKategorie {
  key: string;             // Interner Schlüssel, z.B. "leistung"
  label: string;           // Anzeige in Tabelle, z.B. "Leistung"
  einheit?: string;        // Optional: "W", "ml", "kg", "dB"
  sortierung: number;      // Reihenfolge in der Tabelle
}
```

**Beispiel Farbsprühsystem:**
```json
[
  { "key": "leistung", "label": "Leistung", "einheit": "W", "sortierung": 1 },
  { "key": "behaelter", "label": "Behältervolumen", "einheit": "ml", "sortierung": 2 },
  { "key": "spruehmenge", "label": "Sprühmenge", "einheit": "ml/min", "sortierung": 3 },
  { "key": "gewicht", "label": "Gewicht", "einheit": "kg", "sortierung": 4 },
  { "key": "duesen", "label": "Düsenarten", "sortierung": 5 },
  { "key": "reinigung", "label": "Reinigung", "sortierung": 6 }
]
```

**Beispiel Bürostuhl:**
```json
[
  { "key": "belastbarkeit", "label": "Max. Belastbarkeit", "einheit": "kg", "sortierung": 1 },
  { "key": "sitztiefe", "label": "Sitztiefe", "einheit": "cm", "sortierung": 2 },
  { "key": "armlehnen", "label": "Armlehnen", "sortierung": 3 },
  { "key": "lordose", "label": "Lordosenstütze", "sortierung": 4 },
  { "key": "material", "label": "Material", "sortierung": 5 },
  { "key": "garantie", "label": "Garantie", "einheit": "Jahre", "sortierung": 6 }
]
```

### Produkt
```typescript
interface Produkt {
  name: string;            // "Bosch PFS 5000 E"
  bilder: string[];        // Mehrere Bilder fürs Karussell, erstes = Hauptbild
  preis: number;           // Ca.-Preis in Euro — wird immer als erste Zeile angezeigt
  amazonLink: string;      // Affiliate-Link → Button "Zum {name}"
  werte: Record<string, string>; // Keys matchen vergleichsKategorien.key
                                 // z.B. {"leistung": "1200", "behaelter": "1000", "duesen": "3 Stück"}
}
```

### FAQ
```typescript
interface FAQ {
  frage: string;
  antwort: string;         // Markdown
}
```

---

## SEO-Anforderungen

### Meta-Tags (pro Seite)
- `<title>`: "{Produkt} Vergleich 2026 – Gradix.de"
- `<meta name="description">`: Individuell pro Seite, max 155 Zeichen
- `<link rel="canonical">`: Kanonische URL

### Strukturierte Daten (Schema.org)
- **Homepage:** `WebSite` + `SearchAction`
- **Vergleichsseiten:** `Product` (je Produkt), `FAQ`, `BreadcrumbList`
- **Kategorieseiten:** `CollectionPage`, `BreadcrumbList`

### Technisches SEO
- Sitemap.xml (automatisch generiert)
- robots.txt
- Alle Seiten SSR oder SSG (kein Client-Side-Only Rendering)
- Bilder: WebP, lazy loading, alt-Texte auf Deutsch
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Affiliate-Integration

### Amazon PartnerNet
- Alle Produktlinks enthalten den PartnerNet-Tag: `?tag=gradix-21` (nach Registrierung anpassen)
- Links öffnen in neuem Tab (`target="_blank" rel="noopener noreferrer nofollow"`)
- `rel="sponsored"` auf allen Affiliate-Links (Google-Richtlinie)
- Affiliate-Hinweis auf jeder Seite mit Affiliate-Links (rechtlich erforderlich)

---

## Rechtliche Seiten

### Impressum (`/impressum`)
- Pflichtangaben nach §5 TMG
- Platzhalter für: Name, Anschrift, E-Mail, Telefon
- Verantwortlich für den Inhalt nach §55 Abs. 2 RStV

### Datenschutz (`/datenschutz`)
- DSGVO-konform
- Abschnitte: Verantwortlicher, Hosting, Cookies, Amazon PartnerNet, Analyse-Tools, Rechte der Betroffenen
- Cookie-Consent-Banner auf allen Seiten (opt-in für nicht-essentielle Cookies)

---

## Such-Implementierung

### Globale Suche (Header)
- Durchsucht: `vergleich.titel`, `vergleich.keywords`, `vergleich.beschreibung`
- Fuzzy-Matching: "farbspritz" findet "Farbsprühsystem"
- Ergebnisse zeigen: Titel, Kategorie, kurze Beschreibung
- Debounced Input (300ms)
- Tastatur-Navigation (Pfeiltasten, Enter)

### Kategorie-Suche
- Identisch zur globalen Suche, aber gefiltert auf aktuelle Kategorie
- Placeholder: "In {Kategorie} suchen..."

---

## Datei-Struktur

```
gradix/
├── prisma/
│   └── schema.prisma
├── public/
│   ├── robots.txt
│   └── images/
│       └── produkte/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root Layout mit Header/Footer
│   │   ├── page.tsx                # Homepage
│   │   ├── impressum/
│   │   │   └── page.tsx
│   │   ├── datenschutz/
│   │   │   └── page.tsx
│   │   └── [kategorie]/
│   │       ├── page.tsx            # Kategorie-Übersicht
│   │       └── [slug]/
│   │           └── page.tsx        # Produktvergleich
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Suchleiste.tsx
│   │   ├── KategorieKarte.tsx
│   │   ├── VergleichsListe.tsx
│   │   ├── VergleichsTabelle.tsx  # Dynamische Spalten/Zeilen-Tabelle
│   │   ├── BildKarussell.tsx      # Produktbilder rotieren (Pfeile/Dots)
│   │   ├── Breadcrumb.tsx
│   │   ├── FAQBereich.tsx
│   │   ├── AffiliateButton.tsx
│   │   └── CookieBanner.tsx
│   ├── lib/
│   │   ├── db.ts                   # Prisma Client
│   │   ├── suche.ts                # Suchlogik
│   │   └── schema.ts               # Schema.org Generierung
│   ├── data/
│   │   ├── kategorien.json         # Kategorie-Definitionen
│   │   └── vergleiche/             # Ein JSON pro Vergleich
│   │       ├── farbspruehsystem.json
│   │       └── kaffeevollautomat.json
│   └── types/
│       └── index.ts                # TypeScript Interfaces
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── prd.md                          # Diese Datei
```

---

## Initiale Kategorien

| Slug | Name | Beispiel-Vergleiche |
|------|------|---------------------|
| handwerk | Handwerk | Farbsprühsystem, Akkuschrauber, Tischkreissäge |
| kueche | Küche | Kaffeevollautomat, Standmixer, Geschirrspüler |
| garten | Garten | Mähroboter, Hochdruckreiniger, Akkurasenmäher |
| elektronik | Elektronik | Beamer, Monitor, Soundbar |
| haushalt | Haushalt | Staubsauger, Luftreiniger, Waschmaschine |
| sport | Sport & Fitness | Laufband, Rudergerät, E-Bike |
| buero | Büro | Bürostuhl, Schreibtisch, Drucker |

---

## Befehle

```bash
# Projekt initialisieren
pnpm create next-app gradix --typescript --tailwind --app --src-dir

# Abhängigkeiten
pnpm add prisma @prisma/client
pnpm add -D @types/node

# Dev starten
pnpm dev

# Build
pnpm build
```

---

## Phase 1 (MVP)

1. Homepage mit Suchleiste und Kategorie-Raster
2. Kategorie-Übersicht mit Suche innerhalb der Kategorie
3. Produktvergleich-Seite mit Tabelle und Affiliate-Links
4. Header (sticky, globale Suche) und Footer
5. Impressum + Datenschutz (Platzhalter)
6. 3 Beispiel-Vergleiche mit echten Daten
7. SEO: Meta-Tags, Schema.org, Sitemap
8. Responsives Design (Mobile-first)
9. Cookie-Consent-Banner

## Phase 2

- Admin-Bereich zum Anlegen neuer Vergleiche
- Amazon Product Advertising API Integration (Preise live)
- Filterfunktion in Vergleichstabellen
- "Ähnliche Vergleiche"-Vorschläge
- Bewertungssystem mit Sterneanzeige
- Performance-Monitoring (Web Vitals)

## Phase 3

- Nutzerbewertungen/Kommentare
- Newsletter-Anmeldung
- Preisverläufe pro Produkt
- Vergleichs-Konfigurator (eigene Auswahl zusammenstellen)
- Mehrere Affiliate-Netzwerke neben Amazon
