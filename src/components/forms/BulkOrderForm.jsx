import Button from "../common/Button.jsx";

export default function BulkOrderForm() {
  return (
    <form className="grid gap-4 rounded-md border border-line bg-white p-5 shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Name" />
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Company / Club Name" />
        <select className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4">
          <option>Product Category</option>
          <option>T-Shirts</option>
          <option>Hoodies</option>
          <option>Keychains</option>
          <option>Mugs</option>
          <option>Corporate Merchandise</option>
        </select>
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Quantity" />
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" type="date" />
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4 py-3" type="file" />
      </div>
      <textarea className="focus-ring min-h-32 rounded-md border border-line bg-smoke px-4 py-3" placeholder="Notes, sizes, colors, printing type, and delivery city" />
      <Button type="button">Get Bulk Pricing</Button>
    </form>
  );
}
