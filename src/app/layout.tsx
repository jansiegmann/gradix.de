import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { generateWebsiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "Gradix – Das Produkt-Vergleichsportal",
    template: "%s – Gradix.de",
  },
  description:
    "Unabhängige Produktvergleiche für Produkte von 100 € bis 2.500 €. Finde das beste Produkt für deine Bedürfnisse.",
  metadataBase: new URL("https://gradix.de"),
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
