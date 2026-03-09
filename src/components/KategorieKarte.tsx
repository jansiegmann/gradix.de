import Link from "next/link";

export default function KategorieKarte({
  slug,
  name,
  icon,
  vergleichCount,
}: {
  slug: string;
  name: string;
  icon?: string;
  vergleichCount: number;
}) {
  return (
    <Link
      href={`/${slug}`}
      className="block rounded border border-gray-200 bg-white px-5 py-4 sm:px-6 sm:py-5 hover:border-accent active:scale-[0.98] transition-transform"
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <p className="mt-2 font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">
        {vergleichCount} {vergleichCount === 1 ? "Vergleich" : "Vergleiche"}
      </p>
    </Link>
  );
}
