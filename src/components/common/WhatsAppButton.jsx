import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../utils/whatsapp.js";

export default function WhatsAppButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={25} />
    </a>
  );
}
