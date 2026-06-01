import { BadgeIndianRupee, Boxes, Clock3, ShieldCheck } from "lucide-react";
import { useReveal } from "../../hooks/useReveal.js";
import SectionHeader from "../common/SectionHeader.jsx";

const points = [
  ["Premium Quality", "Merchandise that looks polished in hand and on camera.", ShieldCheck],
  ["Fast Delivery", "Production flows built for events, campaigns, and launch dates.", Clock3],
  ["Bulk Orders", "Quantity-friendly planning for colleges, clubs, teams, and companies.", Boxes],
  ["Affordable Pricing", "Smart print methods selected around budget, quantity, and finish.", BadgeIndianRupee]
];

export default function WhyChooseUs() {
  const ref = useReveal();
  return (
    <section className="bg-smoke py-20">
      <div className="container-page">
        <SectionHeader align="center" eyebrow="Why choose us" title="Built for clean branding, repeat orders, and deadline pressure." />
        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-4">
          {points.map(([title, text, Icon]) => (
            <div className="rounded-md border border-line bg-white p-6 shadow-sm" key={title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
