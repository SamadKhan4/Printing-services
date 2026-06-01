import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      className="group overflow-hidden rounded-md border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
      to={`/product/${product.slug}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-line">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
        <span className="absolute left-3 top-3 rounded-md bg-brand-red px-3 py-1 text-xs font-extrabold text-white">
          {product.badge}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-black leading-tight text-ink">{product.name}</h3>
          <ArrowUpRight className="mt-1 shrink-0 text-brand-red transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink/62">{product.description}</p>
      </div>
    </Link>
  );
}
