import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A custom merchandise partner for brands that care about presentation."
        text="A1 Tshirts & printing Services helps customers turn ideas, teams, campaigns, colleges, and communities into polished merchandise with clean production guidance."
      />
      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Brand-first approach"
            title="Not just printing. Product presentation, finish, and inquiry flow."
            text="The website is structured to make products easy to browse, quotes easy to request, and bulk orders easy to discuss."
          />
          <div className="grid gap-4">
            {["Premium product catalog", "Custom printing guidance", "Bulk order support", "Fast mobile inquiry experience"].map((item) => (
              <div className="rounded-md border border-line bg-smoke p-5 font-bold text-ink/72" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
