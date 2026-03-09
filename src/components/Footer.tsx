import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-gray-900">Gradix</p>
            <p className="mt-1 text-sm text-gray-600">
              Unabhängige Produktvergleiche für durchdachte Kaufentscheidungen.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Kategorien</p>
            <nav className="mt-2 flex flex-col gap-1 text-sm text-gray-600">
              <Link href="/handwerk" className="hover:text-gray-900">Handwerk</Link>
              <Link href="/kueche" className="hover:text-gray-900">Küche</Link>
              <Link href="/garten" className="hover:text-gray-900">Garten</Link>
              <Link href="/elektronik" className="hover:text-gray-900">Elektronik</Link>
              <Link href="/haushalt" className="hover:text-gray-900">Haushalt</Link>
              <Link href="/sport" className="hover:text-gray-900">Sport & Fitness</Link>
              <Link href="/buero" className="hover:text-gray-900">Büro</Link>
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
