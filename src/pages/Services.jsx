import PageHero from "../components/common/PageHero.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Printing services for every finish, fabric, and campaign."
        text="Pick from DTF, screen printing, vinyl, UV, embroidery, and sublimation depending on budget, quantity, product type, and desired finish."
      />
      <section className="bg-white py-16">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article className="overflow-hidden rounded-md border border-line bg-smoke" key={service.title}>
              <img className="aspect-[4/3] w-full object-cover" src={service.image} alt={service.title} />
              <div className="p-6">
                <h2 className="font-display text-2xl font-black">{service.title}</h2>
                <p className="mt-3 leading-7 text-ink/64">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
