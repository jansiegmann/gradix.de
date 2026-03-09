"use client";

import Link from "next/link";
import { useState } from "react";
import Suchleiste from "./Suchleiste";

export default function Header({
  kategorien,
}: {
  kategorien: { slug: string; name: string }[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Gradix
        </Link>

        <div className="hidden flex-1 max-w-md ml-8 md:block">
          <Suchleiste />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 md:hidden"
          aria-label="Menü öffnen"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 px-4 py-3 md:hidden">
          <Suchleiste />
          <nav className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
            {kategorien.map((k) => (
              <Link
                key={k.slug}
                href={`/${k.slug}`}
                className="py-2.5 text-gray-700 active:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {k.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
