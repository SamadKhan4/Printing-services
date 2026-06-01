import { services } from "../../data/services.js";
import { useReveal } from "../../hooks/useReveal.js";
import Button from "../common/Button.jsx";
import SectionHeader from "../common/SectionHeader.jsx";

export default function ServicesPreview() {
  const ref = useReveal();
  return (
    <section className="bg-ink py-20 text-white">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Printing services"
            title="The right print finish for every product."
            text="From DTF and screen printing to embroidery, UV, vinyl, and sublimation, each order gets a production method that fits the use case."
          />
          <Button to="/services" variant="light">Explore Services</Button>
        </div>
        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article className="overflow-hidden rounded-md border border-white/10 bg-white/7" key={service.title}>
              <img className="aspect-[4/3] w-full object-cover opacity-88" src={service.image} alt={service.title} />
              <div className="p-5">
                <h3 className="font-display text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
