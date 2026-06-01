import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button.jsx";
import InquiryForm from "../components/forms/InquiryForm.jsx";
import { products } from "../data/products.js";
import { whatsappLink } from "../utils/whatsapp.js";

export default function ProductDetail() {
  const { productSlug } = useParams();
  const product = products.find((item) => item.slug === productSlug) ?? products[0];
  const specs = [
    ["Material", product.material],
    ["Sizes Available", product.sizes],
    ["Colors Available", product.colors],
    ["Printing Type", product.printing],
    ["Minimum Order Quantity", product.moq]
  ];

  return (
    <section className="bg-white py-12 md:py-18">
      <div className="container-page">
        <Link className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-ink/62 transition hover:text-brand-red" to="/products">
          <ArrowLeft size={18} /> Back to products
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="overflow-hidden rounded-md bg-smoke">
              <img className="aspect-[5/4] w-full object-cover" src={product.image} alt={product.name} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[product.image, product.image, product.image].map((src, index) => (
                <img className="aspect-[4/3] rounded-md object-cover" key={`${src}-${index}`} src={src} alt={`${product.name} gallery ${index + 1}`} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">{product.badge}</p>
            <h1 className="mt-3 font-display text-4xl font-black leading-tight text-ink md:text-6xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">{product.description}</p>
            <div className="mt-8 grid gap-3">
              {specs.map(([label, value]) => (
                <div className="grid gap-1 rounded-md border border-line bg-smoke p-4 sm:grid-cols-[180px_1fr]" key={label}>
                  <span className="text-sm font-extrabold text-ink">{label}</span>
                  <span className="text-sm text-ink/66">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink(`Hi A1 Tshirts & printing Services, I want a quote for ${product.name}.`)}>
                <MessageCircle size={18} /> Get Quote on WhatsApp
              </Button>
              <Button to="/bulk-orders" variant="dark">Bulk Inquiry</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Inquiry</p>
            <h2 className="mt-3 font-display text-3xl font-black">Upload your design and get a production quote.</h2>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
