# Neue Vergleichsseite für Gradix.de

Bitte recherchiere die folgenden Informationen für einen neuen Produktvergleich. Die Daten werden als JSON-Datei in das Projekt eingefügt.

---

## 1. Grundinfos

| Feld | Beschreibung | Beispiel |
|------|-------------|---------|
| **Produkttyp** | Was wird verglichen? | Farbsprühsystem |
| **Kategorie** | Eine der folgenden: `handwerk`, `kueche`, `garten`, `elektronik`, `haushalt`, `sport`, `buero`, `fotografie`, `e-mobilitaet`, `musik`, `heizen-klima`, `bad`, `schlafen`, `gaming`, `auto`, `outdoor`, `sicherheit`, `kinder`, `reinigung`, `beleuchtung`, `wohnen`, `koerperpflege`, `camping`, `aquaristik`, `textil`, `energie`, `wintersport` | handwerk |
| **SEO-Keywords** | Mindestens 10 deutsche Suchbegriffe die Leute bei Google eingeben würden | farbsprühsystem, farbspritzpistole, airless sprühgerät, farbsprühsystem test, ... |

## 2. Texte (auf Deutsch, SEO-optimiert)

| Feld | Beschreibung | Länge |
|------|-------------|-------|
| **Einleitung** | Kurzer Intro-Text der erklärt warum dieser Vergleich nützlich ist | 2-3 Sätze |
| **Kaufberatung** | Worauf beim Kauf achten? Mit Markdown-Überschriften (`### Thema`) und Absätzen | 4-6 Abschnitte |
| **Meta-Beschreibung** | SEO-Description für Google | max. 155 Zeichen |

## 3. Vergleichskriterien (4-8 Stück)

Welche technischen Eigenschaften sollen in der Vergleichstabelle verglichen werden?

Pro Kriterium brauche ich:
- **Label**: Anzeigename (z.B. "Leistung")
- **Einheit** (optional): z.B. "W", "kg", "ml", "cm"

Beispiel:
```
1. Leistung (W)
2. Behältervolumen (ml)
3. Gewicht (kg)
4. Düsenarten
5. Reinigung
```

## 4. Produkte (genau 4 Stück)

Es werden immer genau 4 Produkte verglichen, eines pro Preisklasse:

| Preisklasse | Beschreibung |
|-------------|-------------|
| **Budget** | Günstiges Einsteigermodell, gutes Preis-Leistungs-Verhältnis |
| **Mittelklasse** | Solides Allrounder-Modell für die meisten Nutzer |
| **Premium** | Hochwertiges Modell mit erweiterten Features |
| **Profi** | Top-Modell für Profis oder Enthusiasten |

Pro Produkt brauche ich:

| Feld | Beschreibung |
|------|-------------|
| **Name** | Voller Produktname (z.B. "Bosch PFS 5000 E") |
| **Preisklasse** | Eine der 4 Preisklassen: Budget, Mittelklasse, Premium, Profi |
| **Amazon-ASIN** | Die 10-stellige ASIN von amazon.de (findest du in der URL: `amazon.de/dp/XXXXXXXXXX`) |
| **Werte** | Für jedes Vergleichskriterium den konkreten Wert |

Beispiel:
```
Produkt 1 (Budget): Einhell TC-SY 700 S
ASIN: B06XTPWJD8
- Leistung: 700
- Behältervolumen: 800
- Gewicht: 3.1

Produkt 2 (Mittelklasse): Bosch PFS 3000-2 E
ASIN: B00HX70IIM
- Leistung: 650
- ...

Produkt 3 (Premium): Wagner W 590 FLEXiO
ASIN: B01BUDJ6TG
- ...

Produkt 4 (Profi): Bosch PFS 5000 E
ASIN: B00HX70J5Y
- ...
```

**Wichtig bei der Produktauswahl:**
- Immer genau 4 Produkte, Reihenfolge: Budget → Mittelklasse → Premium → Profi
- Nur Produkte die aktuell auf amazon.de verfügbar sind
- Nur bekannte Marken, keine No-Name-Produkte
- ASIN muss korrekt sein (prüfe die URL `amazon.de/dp/[ASIN]`)

## 5. FAQ (3-5 Fragen)

Häufig gestellte Fragen zum Produkttyp. Formuliere Frage UND Antwort.

Format:
```
F: Welches Farbsprühsystem ist für Anfänger geeignet?
A: Für Anfänger empfehlen sich Geräte mit einfacher Bedienung und geringem Gewicht, wie das Bosch PFS 3000-2 E.
```

---

## Ausgabeformat

Bitte gib alles in diesem JSON-Format zurück (copy-paste-ready):

```json
{
  "slug": "produkttyp-in-kebab-case",
  "kategorie": "eine-der-kategorien",
  "titel": "Produkttyp",
  "beschreibung": "Meta-Beschreibung für SEO (max 155 Zeichen)",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "einleitung": "Einleitungstext...",
  "kaufberatung": "### Überschrift1\nAbsatz...\n\n### Überschrift2\nAbsatz...",
  "vergleichsKategorien": [
    { "key": "kriterium_key", "label": "Anzeigename", "einheit": "Einheit", "sortierung": 1 }
  ],
  "faq": [
    { "frage": "Frage?", "antwort": "Antwort." }
  ],
  "produkte": [
    {
      "name": "Budget-Produktname",
      "preisklasse": "Budget",
      "amazonLink": "https://www.amazon.de/dp/ASIN?tag=janxsiegmann-21",
      "werte": { "kriterium_key": "Wert" }
    },
    {
      "name": "Mittelklasse-Produktname",
      "preisklasse": "Mittelklasse",
      "amazonLink": "https://www.amazon.de/dp/ASIN?tag=janxsiegmann-21",
      "werte": { "kriterium_key": "Wert" }
    },
    {
      "name": "Premium-Produktname",
      "preisklasse": "Premium",
      "amazonLink": "https://www.amazon.de/dp/ASIN?tag=janxsiegmann-21",
      "werte": { "kriterium_key": "Wert" }
    },
    {
      "name": "Profi-Produktname",
      "preisklasse": "Profi",
      "amazonLink": "https://www.amazon.de/dp/ASIN?tag=janxsiegmann-21",
      "werte": { "kriterium_key": "Wert" }
    }
  ],
  "erstelltAm": "YYYY-MM-DD",
  "aktualisiertAm": "YYYY-MM-DD"
}
```

**Regeln für das JSON:**
- `slug`: Kleinbuchstaben, Bindestriche, keine Umlaute (ue statt ü)
- `kategorie`: Muss exakt einer der Werte sein: `handwerk`, `kueche`, `garten`, `elektronik`, `haushalt`, `sport`, `buero`, `fotografie`, `e-mobilitaet`, `musik`, `heizen-klima`, `bad`, `schlafen`, `gaming`, `auto`, `outdoor`, `sicherheit`, `kinder`, `reinigung`, `beleuchtung`, `wohnen`, `koerperpflege`, `camping`, `aquaristik`, `textil`, `energie`, `wintersport`
- `preisklasse`: Muss exakt einer der Werte sein: `Budget`, `Mittelklasse`, `Premium`, `Profi` — immer genau 4 Produkte, eines pro Preisklasse
- `amazonLink`: Immer mit `?tag=janxsiegmann-21` am Ende
- `werte`-Keys müssen exakt den `key`-Werten aus `vergleichsKategorien` entsprechen
- Alle Texte auf Deutsch
- Datum im Format `YYYY-MM-DD`
