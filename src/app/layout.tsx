import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { generateWebsiteSchema } from "@/lib/schema";
import { getKategorien } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "Gradix – Das Produkt-Vergleichsportal",
    template: "%s – Gradix.de",
  },
  description:
    "Unabhängige Vergleiche nach klaren und praxisnahen Kriterien für Alltags-Produkte aller Art. Finde das beste Produkt für deine Bedürfnisse.",
  metadataBase: new URL("https://gradix.de"),
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header kategorien={getKategorien().map((k) => ({ slug: k.slug, name: k.name }))} />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
