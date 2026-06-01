import { testimonials } from "../../data/testimonials.js";
import { useReveal } from "../../hooks/useReveal.js";
import SectionHeader from "../common/SectionHeader.jsx";

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeader align="center" eyebrow="Testimonials" title="Orders that arrive sharp, on time, and ready to represent." />
        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure className="rounded-md border border-line bg-smoke p-6" key={item.name}>
              <blockquote className="text-lg font-semibold leading-8 text-ink">“{item.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-bold text-ink">{item.name}</p>
                <p className="text-sm text-ink/54">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
