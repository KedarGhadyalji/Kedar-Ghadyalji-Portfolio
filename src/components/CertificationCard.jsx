/**
 * What: a single certification card — image (or fallback tile), title,
 * issuing organization, and month/year, with an optional "View credential"
 * link.
 * Data from: a single certification object (see src/data/certifications.js),
 * passed in via the `certification` prop — this component holds no data of
 * its own.
 * Used by: src/pages/Experience.jsx, once per entry in `certifications.items`.
 */
const CertificationCard = ({ certification }) => {
  const { image, title, issuer, month, year, credentialUrl } = certification;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1f]/40 transition-all duration-200 hover:-translate-y-1 hover:border-[#5ce1e6] hover:shadow-[0_0_28px_rgba(92,225,230,0.45)]">
      <div className="relative aspect-video w-full flex-none overflow-hidden border-b border-white/10 bg-[#0b0f1f]">
        {image ? (
          <img
            src={image}
            alt={`${title} certificate`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center font-source-code-pro text-[10px] uppercase tracking-wider text-white/30">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 font-source-code-pro text-sm text-white/60">
          {issuer}
        </p>
        <p className="mt-0.5 font-source-code-pro text-xs text-white/40">
          {month} {year}
        </p>

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 self-start font-source-code-pro text-xs font-semibold text-[#5ce1e6] transition-colors duration-200 hover:text-white"
          >
            View credential <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
