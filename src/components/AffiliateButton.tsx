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
      className="inline-block rounded bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
    >
      Zum {name} *
    </a>
  );
}
