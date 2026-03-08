"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface SuchErgebnis {
  titel: string;
  beschreibung: string;
  kategorie: string;
  slug: string;
}

export default function Suchleiste({
  kategorieFilter,
  placeholder,
}: {
  kategorieFilter?: string;
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [ergebnisse, setErgebnisse] = useState<SuchErgebnis[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setErgebnisse([]);
      return;
    }

    const timer = setTimeout(async () => {
      const params = new URLSearchParams({ q: query });
      if (kategorieFilter) params.set("kategorie", kategorieFilter);

      const res = await fetch(`/api/suche?${params}`);
      const data = await res.json();
      setErgebnisse(data);
      setSelectedIndex(-1);
      setShowResults(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, kategorieFilter]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function navigate(ergebnis: SuchErgebnis) {
    router.push(`/${ergebnis.kategorie}/${ergebnis.slug}`);
    setQuery("");
    setShowResults(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, ergebnisse.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      navigate(ergebnisse[selectedIndex]);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => ergebnisse.length > 0 && setShowResults(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Produkte suchen..."}
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-accent"
      />

      {showResults && ergebnisse.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-y-auto rounded border border-gray-200 bg-white">
          {ergebnisse.map((ergebnis, index) => (
            <li
              key={`${ergebnis.kategorie}/${ergebnis.slug}`}
              onClick={() => navigate(ergebnis)}
              className={`cursor-pointer px-3 py-2 text-sm ${
                index === selectedIndex ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <p className="font-medium text-gray-900">{ergebnis.titel}</p>
              <p className="text-xs text-gray-500">{ergebnis.beschreibung}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
