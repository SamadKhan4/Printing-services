export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="merch-grid bg-smoke py-16 md:py-24">
      <div className="container-page max-w-4xl">
        {eyebrow && <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-black leading-tight text-ink md:text-6xl">{title}</h1>
        {text && <p className="mt-5 text-lg leading-8 text-ink/68">{text}</p>}
      </div>
    </section>
  );
}
