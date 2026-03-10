import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getKategorie,
  getVergleich,
  getAlleVergleiche,
  getAehnlicheVergleiche,
} from "@/lib/data";
import Link from "next/link";
import {
  generateBreadcrumbSchema,
  generateProductSchema,
  generateFAQSchema,
} from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import VergleichsTabelle from "@/components/VergleichsTabelle";
import FAQBereich from "@/components/FAQBereich";

type Params = Promise<{ kategorie: string; slug: string }>;

export async function generateStaticParams() {
  return getAlleVergleiche().map((v) => ({
    kategorie: v.kategorie,
    slug: v.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { kategorie, slug } = await params;
  const vergleich = getVergleich(kategorie, slug);
  if (!vergleich) return {};

  return {
    title: `${vergleich.titel} Vergleich 2026`,
    description: vergleich.beschreibung,
    alternates: { canonical: `/${kategorie}/${slug}` },
  };
}

export default async function VergleichSeite({
  params,
}: {
  params: Params;
}) {
  const { kategorie: kategorieSlug, slug } = await params;
  const kategorie = getKategorie(kategorieSlug);
  const vergleich = getVergleich(kategorieSlug, slug);

  if (!kategorie || !vergleich) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: kategorie.name, url: `/${kategorie.slug}` },
    { name: vergleich.titel, url: `/${kategorie.slug}/${vergleich.slug}` },
  ]);

  const productSchemas = generateProductSchema(vergleich);
  const faqSchema = generateFAQSchema(vergleich);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            ...productSchemas,
            faqSchema,
          ]),
        }}
      />

      <Breadcrumb
        items={[
          { label: kategorie.name, href: `/${kategorie.slug}` },
          { label: vergleich.titel },
        ]}
      />

      <h1 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-gray-900">
        Die besten {vergleich.titel} im Vergleich
      </h1>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">{vergleich.einleitung}</p>

      <VergleichsTabelle vergleich={vergleich} />

      {vergleich.kaufberatung && (
        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Worauf achten beim Kauf von {vergleich.titel}?
          </h2>
          <div className="prose prose-sm max-w-none text-gray-700">
            {vergleich.kaufberatung.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return null; // Skip the h2 as we already have one
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="mt-4 mb-2 text-lg font-semibold text-gray-900">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.trim()) {
                return <p key={i} className="mb-2">{line}</p>;
              }
              return null;
            })}
          </div>
        </section>
      )}

      {vergleich.faq.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Häufig gestellte Fragen
          </h2>
          <FAQBereich faqs={vergleich.faq} />
        </section>
      )}

      {(() => {
        const aehnliche = getAehnlicheVergleiche(kategorieSlug, slug);
        if (aehnliche.length === 0) return null;
        return (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Ähnliche Vergleiche
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {aehnliche.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.kategorie}/${v.slug}`}
                  className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-accent hover:bg-blue-50"
                >
                  <span className="block text-sm font-semibold text-gray-900">
                    {v.titel}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {v.produkte.length} Produkte im Vergleich
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      <p className="mt-10 text-xs text-gray-400">
        * Affiliate-Links: Bei einem Kauf über unsere Links erhalten wir eine
        kleine Provision. Der Preis für dich bleibt gleich.
      </p>
    </div>
  );
}
