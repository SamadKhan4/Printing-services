import Button from "../common/Button.jsx";

export default function InquiryForm({ compact = false }) {
  return (
    <form className={`grid gap-4 ${compact ? "" : "rounded-md border border-line bg-white p-6 shadow-sm"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Name" />
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Phone Number" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Product Type" />
        <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4" placeholder="Quantity" />
      </div>
      <input className="focus-ring min-h-12 rounded-md border border-line bg-smoke px-4 py-3" type="file" />
      <textarea className="focus-ring min-h-28 rounded-md border border-line bg-smoke px-4 py-3" placeholder="Tell us about your design, colors, sizes, and deadline" />
      <Button type="button">Send Inquiry</Button>
    </form>
  );
}
