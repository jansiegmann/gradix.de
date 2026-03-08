import { NextRequest, NextResponse } from "next/server";
import { getAlleVergleiche } from "@/lib/data";
import { suche } from "@/lib/suche";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q") || "";
  const kategorie = searchParams.get("kategorie") || undefined;

  const vergleiche = getAlleVergleiche();
  const ergebnisse = suche(vergleiche, q, kategorie);

  return NextResponse.json(
    ergebnisse.slice(0, 10).map((e) => ({
      titel: e.vergleich.titel,
      beschreibung: e.vergleich.beschreibung,
      kategorie: e.vergleich.kategorie,
      slug: e.vergleich.slug,
    }))
  );
}
