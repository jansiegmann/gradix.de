import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getKategorie, getKategorien, getVergleicheByKategorie } from "@/lib/data";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
} from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import VergleichsListe from "@/components/VergleichsListe";
import Suchleiste from "@/components/Suchleiste";

type Params = Promise<{ kategorie: string }>;

export async function generateStaticParams() {
  return getKategorien().map((k) => ({ kategorie: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { kategorie: slug } = await params;
  const kategorie = getKategorie(slug);
  if (!kategorie) return {};

  return {
    title: `${kategorie.name} Vergleiche`,
    description: kategorie.beschreibung,
    alternates: { canonical: `/${kategorie.slug}` },
  };
}

export default async function KategorieSeite({
  params,
}: {
  params: Params;
}) {
  const { kategorie: slug } = await params;
  const kategorie = getKategorie(slug);
  if (!kategorie) notFound();

  const vergleiche = getVergleicheByKategorie(slug);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: kategorie.name, url: `/${kategorie.slug}` },
  ]);

  const collectionSchema = generateCollectionPageSchema(
    kategorie,
    vergleiche.length
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, collectionSchema]),
        }}
      />

      <Breadcrumb items={[{ label: kategorie.name }]} />

      <h1 className="mb-4 text-2xl font-bold text-gray-900">
        {kategorie.name}
      </h1>

      <div className="mb-6 max-w-md">
        <Suchleiste
          kategorieFilter={slug}
          placeholder={`In ${kategorie.name} suchen...`}
        />
      </div>

      {vergleiche.length > 0 ? (
        <VergleichsListe vergleiche={vergleiche} kategorie={slug} />
      ) : (
        <p className="text-gray-500">
          Noch keine Vergleiche in dieser Kategorie.
        </p>
      )}
    </div>
  );
}
