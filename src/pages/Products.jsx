import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import { categories } from "../data/categories.js";
import { products } from "../data/products.js";

export default function Products() {
  const { categorySlug } = useParams();
  const activeCategory = categories.find((category) => category.slug === categorySlug);
  const filteredProducts = useMemo(
    () => (categorySlug ? products.filter((product) => product.category === categorySlug) : products),
    [categorySlug]
  );

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={activeCategory ? activeCategory.title : "Custom merchandise categories"}
        text="Browse product categories, check subcategories, and open product details for material, sizes, colors, printing type, MOQ, and inquiry options."
      />
      <section className="bg-white py-16">
        <div className="container-page">
          <div className="flex gap-3 overflow-x-auto pb-3">
            <Link className={`shrink-0 rounded-md border px-4 py-2 text-sm font-bold ${!categorySlug ? "border-ink bg-ink text-white" : "border-line bg-smoke text-ink"}`} to="/products">
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                className={`shrink-0 rounded-md border px-4 py-2 text-sm font-bold ${category.slug === categorySlug ? "border-ink bg-ink text-white" : "border-line bg-smoke text-ink"}`}
                key={category.slug}
                to={`/products/${category.slug}`}
              >
                {category.title}
              </Link>
            ))}
          </div>

          {activeCategory && (
            <div className="mt-8 rounded-md border border-line bg-smoke p-5">
              <h2 className="font-display text-2xl font-black">Subcategories</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeCategory.subcategories.map((item) => (
                  <span className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-ink/70" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <SectionHeader eyebrow="Collection" title="Product details made inquiry-ready." />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {filteredProducts.length ? (
                filteredProducts.map((product) => <ProductCard key={product.slug} product={product} />)
              ) : (
                <div className="rounded-md border border-line bg-smoke p-8 md:col-span-3">
                  <h3 className="font-display text-2xl font-black">Products coming soon</h3>
                  <p className="mt-3 text-ink/64">This category is ready in the structure. Add product entries in the data file when final catalog images arrive.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
