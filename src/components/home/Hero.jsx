import { ArrowRight, PackageCheck, Upload } from "lucide-react";
import Button from "../common/Button.jsx";

export default function Hero() {
  return (
    <section className="merch-grid overflow-hidden bg-smoke">
      <div className="container-page grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.92fr]">
        <div className="hero-copy">
          <p className="mb-4 inline-flex rounded-md bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red shadow-sm">
            Custom Merchandise & Printing
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.98] text-ink md:text-7xl">
            Custom Merchandise & Printing Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68 md:text-xl">
            T-Shirts, caps, keychains, mugs, hoodies, jerseys, tote bags, and corporate merchandise made for teams,
            events, brands, and bulk campaigns.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/products">
              Explore Products <ArrowRight size={18} />
            </Button>
            <Button to="/bulk-orders" variant="dark">
              Get Bulk Quote <PackageCheck size={18} />
            </Button>
          </div>
          <div className="mt-9 grid gap-3 text-sm font-bold text-ink/70 sm:grid-cols-3">
            {["Premium Quality", "Fast Delivery", "Design Upload"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Upload size={16} className="text-brand-red" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hero-visual">
          <div className="grid rotate-1 grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=80",
              "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
              "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80",
              "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=80"
            ].map((src, index) => (
              <div className={`overflow-hidden rounded-md bg-white p-2 shadow-soft ${index % 2 ? "translate-y-8" : ""}`} key={src}>
                <img className="aspect-[4/5] h-full w-full rounded object-cover" src={src} alt="Custom merchandise mockup" />
              </div>
            ))}
          </div>
          <div className="absolute -bottom-5 left-8 rounded-md bg-ink px-5 py-4 text-white shadow-soft">
            <p className="text-3xl font-black">50+</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/58">Product options</p>
          </div>
        </div>
      </div>
    </section>
  );
}
