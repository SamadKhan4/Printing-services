import { products } from "../../data/products.js";
import { useReveal } from "../../hooks/useReveal.js";
import Button from "../common/Button.jsx";
import SectionHeader from "../common/SectionHeader.jsx";
import ProductCard from "../products/ProductCard.jsx";

export default function FeaturedProducts() {
  const ref = useReveal();
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Featured products"
            title="Best-selling merch people actually want to keep."
            text="Start with proven products, then customize colors, print method, sizes, and packaging for your audience."
          />
          <Button to="/products" variant="outline">View Collection</Button>
        </div>
        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
