import PageHero from "../components/common/PageHero.jsx";
import BulkOrderForm from "../components/forms/BulkOrderForm.jsx";

export default function BulkOrders() {
  return (
    <>
      <PageHero
        eyebrow="Bulk orders"
        title="Request bulk pricing for events, teams, colleges, and corporate kits."
        text="Share product category, quantity, deadline, artwork, and notes. The form is structured around the exact details needed for fast quoting."
      />
      <section className="bg-smoke py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-black">What to include</h2>
            <div className="mt-6 grid gap-3">
              {["Product category", "Quantity and sizes", "Deadline", "Design upload", "Printing preference", "Delivery city"].map((item) => (
                <div className="rounded-md border border-line bg-white p-4 text-sm font-bold text-ink/72" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <BulkOrderForm />
        </div>
      </section>
    </>
  );
}
