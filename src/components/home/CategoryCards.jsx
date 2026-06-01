import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories.js";
import { useReveal } from "../../hooks/useReveal.js";
import SectionHeader from "../common/SectionHeader.jsx";

export default function CategoryCards() {
  const ref = useReveal();
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Shop by category"
          title="Everything your brand can wear, carry, gift, and sell."
          text="Choose from apparel, accessories, drinkware, bags, jerseys, and corporate merchandise built for custom printing."
        />
        <div ref={ref} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              className="group overflow-hidden rounded-md border border-line bg-smoke transition hover:-translate-y-1 hover:shadow-soft"
              key={category.slug}
              to={`/products/${category.slug}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={category.image} alt={category.title} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-black">{category.title}</h3>
                  <ArrowRight className="text-brand-red transition group-hover:translate-x-1" size={20} />
                </div>
                <p className="mt-3 text-sm leading-6 text-ink/60">{category.subcategories.slice(0, 3).join(", ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
