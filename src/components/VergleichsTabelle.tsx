import { Vergleich } from "@/types";
import AffiliateButton from "./AffiliateButton";

export default function VergleichsTabelle({
  vergleich,
}: {
  vergleich: Vergleich;
}) {
  const { produkte, vergleichsKategorien } = vergleich;
  const sortedKategorien = [...vergleichsKategorien].sort(
    (a, b) => a.sortierung - b.sortierung
  );

  return (
    <div className="overflow-x-auto">
      <table className="comparison-table w-full min-w-[480px] border-collapse">
        <thead>
          <tr>
            <th className="w-28 sm:w-36 border-b border-gray-200 p-2 sm:p-3 text-left text-xs sm:text-sm font-normal text-gray-500">
              Produkt
            </th>
            {produkte.map((p) => (
              <th
                key={p.name}
                className="min-w-[140px] sm:min-w-[180px] border-b border-gray-200 p-2 sm:p-3 text-center"
              >
                <span className="block text-[10px] sm:text-xs font-medium uppercase tracking-wide text-accent">
                  {p.preisklasse}
                </span>
                <span className="block text-xs sm:text-sm font-semibold text-gray-900">
                  {p.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Dynamic comparison rows */}
          {sortedKategorien.map((kat) => (
            <tr key={kat.key}>
              <td className="border-b border-gray-100 p-2 sm:p-3 text-xs sm:text-sm text-gray-700">
                {kat.label}
                {kat.einheit && (
                  <span className="ml-1 text-xs text-gray-400">
                    ({kat.einheit})
                  </span>
                )}
              </td>
              {produkte.map((p) => (
                <td
                  key={p.name}
                  className="border-b border-gray-100 p-2 sm:p-3 text-center text-xs sm:text-sm text-gray-700"
                >
                  {p.werte[kat.key] || "–"}
                </td>
              ))}
            </tr>
          ))}

          {/* Affiliate button row */}
          <tr>
            <td className="p-2 sm:p-3"></td>
            {produkte.map((p) => (
              <td key={p.name} className="p-2 sm:p-3 text-center">
                <AffiliateButton name={p.name} link={p.amazonLink} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
