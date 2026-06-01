export default function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-ink/68 md:text-lg">{text}</p>}
    </div>
  );
}
