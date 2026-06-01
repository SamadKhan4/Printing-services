import { useState } from "react";
import PageHero from "../components/common/PageHero.jsx";
import { galleryItems } from "../data/gallery.js";

const filters = ["All", ...new Set(galleryItems.map((item) => item.category))];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at finished merchandise across categories."
        text="Event merchandise, college orders, corporate kits, sports jerseys, and custom keychains in a filterable showcase."
      />
      <section className="bg-white py-16">
        <div className="container-page">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {filters.map((filter) => (
              <button
                className={`focus-ring shrink-0 rounded-md border px-4 py-2 text-sm font-bold ${active === filter ? "border-ink bg-ink text-white" : "border-line bg-smoke text-ink"}`}
                key={filter}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, index) => (
              <article className="group mb-5 break-inside-avoid overflow-hidden rounded-md bg-smoke" key={item.title}>
                <img className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index % 2 ? "aspect-[4/5]" : "aspect-[5/4]"}`} src={item.image} alt={item.title} />
                <div className="p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red">{item.category}</p>
                  <h2 className="mt-2 font-display text-2xl font-black">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
