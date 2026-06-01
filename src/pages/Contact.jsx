import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "../components/common/Button.jsx";
import PageHero from "../components/common/PageHero.jsx";
import InquiryForm from "../components/forms/InquiryForm.jsx";
import { whatsappLink } from "../utils/whatsapp.js";

const contactCards = [
  ["WhatsApp", "Get the fastest quote response", MessageCircle],
  ["Call", "+91 99999 99999", Phone],
  ["Email", "hello@a1tshirtsprinting.com", Mail],
  ["Instagram", "@a1tshirtsprinting", Instagram],
  ["Address", "India", MapPin]
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send your idea, product type, and quantity."
        text="Use WhatsApp for quick inquiries or submit the form for design upload, product details, and bulk order discussions."
      />
      <section className="bg-smoke py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="grid gap-4">
              {contactCards.map(([title, text, Icon]) => (
                <div className="flex items-center gap-4 rounded-md border border-line bg-white p-5" key={title}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-white">
                    <Icon size={21} />
                  </span>
                  <span>
                    <span className="block font-bold">{title}</span>
                    <span className="block text-sm text-ink/58">{text}</span>
                  </span>
                </div>
              ))}
            </div>
            <Button className="mt-6 w-full" href={whatsappLink("Hi A1 Tshirts & printing Services, I want to discuss a custom merchandise order.")}>
              Chat on WhatsApp
            </Button>
            <div className="mt-6 overflow-hidden rounded-md border border-line bg-white">
              <iframe
                className="h-72 w-full"
                title="Google Maps"
                loading="lazy"
                src="https://www.google.com/maps?q=India&output=embed"
              />
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
