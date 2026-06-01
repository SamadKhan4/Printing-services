import { useReveal } from "../../hooks/useReveal.js";
import SectionHeader from "../common/SectionHeader.jsx";

const showcaseItems = [
  {
    title: "College Fest Tees",
    category: "College Merchandise",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Corporate Welcome Kits",
    category: "Corporate Orders",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Team Jerseys",
    category: "Sports Jerseys",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
  }
];

export default function Showcase() {
  const ref = useReveal();
  return (
    <section className="bg-smoke py-20">
      <div className="container-page">
        <SectionHeader
          align="center"
          eyebrow="Customer showcase"
          title="Merch for colleges, events, sports teams, and corporate branding."
        />
        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-3">
          {showcaseItems.map((item) => (
            <article className="group relative overflow-hidden rounded-md" key={item.title}>
              <img className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/62">{item.category}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
