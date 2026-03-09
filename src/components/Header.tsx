"use client";

import Link from "next/link";
import { useState } from "react";
import Suchleiste from "./Suchleiste";

export default function Header() {
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
          <nav className="mt-3 flex flex-col gap-1">
            <Link
              href="/handwerk"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Handwerk
            </Link>
            <Link
              href="/kueche"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Küche
            </Link>
            <Link
              href="/garten"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Garten
            </Link>
            <Link
              href="/elektronik"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Elektronik
            </Link>
            <Link
              href="/haushalt"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Haushalt
            </Link>
            <Link
              href="/sport"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Sport & Fitness
            </Link>
            <Link
              href="/buero"
              className="py-2.5 text-gray-700 active:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Büro
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
