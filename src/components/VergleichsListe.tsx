import Link from "next/link";
import { Vergleich } from "@/types";

export default function VergleichsListe({
  vergleiche,
  kategorie,
}: {
  vergleiche: Vergleich[];
  kategorie: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {vergleiche.map((v) => (
        <Link
          key={v.slug}
          href={`/${kategorie}/${v.slug}`}
          className="block rounded border border-gray-200 bg-white px-5 py-4 hover:border-accent"
        >
          <p className="font-semibold text-gray-900">{v.titel}</p>
          <p className="mt-1 text-sm text-gray-600">{v.beschreibung}</p>
          <p className="mt-1 text-xs text-gray-400">
            {v.produkte.length} Produkte verglichen
          </p>
        </Link>
      ))}
    </div>
  );
}
