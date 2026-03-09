export default function AffiliateButton({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="inline-block rounded bg-accent px-3 py-2.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-accent-hover active:scale-95 transition-transform"
    >
      <span className="hidden sm:inline">Zum {name} *</span>
      <span className="sm:hidden">Bei Amazon *</span>
    </a>
  );
}
