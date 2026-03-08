import { Vergleich, Kategorie } from "@/types";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gradix",
    url: "https://gradix.de",
    description: "Das größte Produkt-Vergleichsportal Deutschlands",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gradix.de/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://gradix.de${item.url}`,
    })),
  };
}

export function generateCollectionPageSchema(
  kategorie: Kategorie,
  vergleichCount: number
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: kategorie.name,
    description: kategorie.beschreibung,
    url: `https://gradix.de/${kategorie.slug}`,
    numberOfItems: vergleichCount,
  };
}

export function generateProductSchema(vergleich: Vergleich) {
  return vergleich.produkte.map((produkt) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: produkt.name,
  }));
}

export function generateFAQSchema(vergleich: Vergleich) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: vergleich.faq.map((faq) => ({
      "@type": "Question",
      name: faq.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.antwort,
      },
    })),
  };
}
