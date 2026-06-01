import { UploadCloud } from "lucide-react";
import Button from "../common/Button.jsx";

export default function BulkCTA() {
  return (
    <section className="bg-brand-red py-16 text-white">
      <div className="container-page flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/72">Bulk order ready</p>
          <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">Upload your design. Get bulk pricing.</h2>
          <p className="mt-4 max-w-2xl text-white/78">
            Share quantity, deadline, product type, and artwork. We’ll help you pick the right print method and finish.
          </p>
        </div>
        <Button to="/bulk-orders" variant="light" className="shrink-0">
          Start Bulk Inquiry <UploadCloud size={18} />
        </Button>
      </div>
    </section>
  );
}
