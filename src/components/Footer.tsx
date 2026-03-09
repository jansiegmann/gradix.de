import Link from "next/link";
import { getKategorien } from "@/lib/data";

export default function Footer() {
  const kategorien = getKategorien();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-gray-900">Gradix</p>
            <p className="mt-1 text-sm text-gray-600">
              Unabhängige Produktvergleiche für durchdachte Kaufentscheidungen.
            </p>
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <p className="font-semibold text-gray-900">Kategorien</p>
            <nav className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm text-gray-600">
              {kategorien.map((k) => (
                <Link key={k.slug} href={`/${k.slug}`} className="hover:text-gray-900">
                  {k.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Rechtliches</p>
            <nav className="mt-2 flex flex-col gap-1 text-sm text-gray-600">
              <Link href="/impressum" className="hover:text-gray-900">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-gray-900">Datenschutz</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          <p>Gradix.de ist Teilnehmer des Amazon PartnerNet-Programms.</p>
          <p className="mt-1">Website von <a href="https://zentrasoftware.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Zentrasoftware</a></p>
        </div>
      </div>
    </footer>
  );
}
