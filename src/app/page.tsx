import { getKategorien, getVergleichCount } from "@/lib/data";
import KategorieKarte from "@/components/KategorieKarte";
import Suchleiste from "@/components/Suchleiste";

export default function HomePage() {
  const kategorien = getKategorien();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <section className="mb-8 sm:mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
          Das größte Produkt-Vergleichsportal Deutschlands
        </h1>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600">
          Unabhängige Vergleiche für Produkte von 100 € bis 2.500 €
        </p>
        <div className="mx-auto mt-5 sm:mt-6 max-w-xl">
          <Suchleiste placeholder="Was möchtest du vergleichen?" />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Kategorien
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kategorien.map((k) => (
            <KategorieKarte
              key={k.slug}
              slug={k.slug}
              name={k.name}
              icon={k.icon}
              vergleichCount={getVergleichCount(k.slug)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
