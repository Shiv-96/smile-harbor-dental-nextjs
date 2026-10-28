/**
 * Consistent heading block for page sections: small eyebrow label,
 * an h2 (its id is used by the section's aria-labelledby) and optional intro text.
 */

export default function SectionHeading({ id, eyebrow, title, intro, align = "center" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`} data-reveal>
      {eyebrow && (
        <p className="font-display text-sm font-bold tracking-wider text-accent-700 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-2 text-3xl font-extrabold sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}
