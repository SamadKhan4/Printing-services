import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { whatsappLink } from "../../utils/whatsapp.js";

const quickLinks = ["Products", "Services", "Bulk Orders", "Gallery", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md bg-white">
              <img className="h-full w-full object-contain p-1" src={logo} alt="A1 Tshirts & printing Services logo" />
            </span>
            <h2 className="font-display text-2xl font-black leading-tight">A1 Tshirts & printing Services</h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
            Premium custom merchandise, printing, apparel, keychains, mugs, bags, and bulk branding solutions for
            colleges, teams, creators, and companies.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/44">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <Link className="text-sm font-semibold text-white/72 transition hover:text-white" key={link} to={`/${link.toLowerCase().replaceAll(" ", "-")}`}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/44">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <a className="flex items-center gap-3 hover:text-white" href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp inquiry
            </a>
            <a className="flex items-center gap-3 hover:text-white" href="tel:+919999999999">
              <Phone size={17} /> +91 99999 99999
            </a>
            <a className="flex items-center gap-3 hover:text-white" href="mailto:hello@a1tshirtsprinting.com">
              <Mail size={17} /> hello@a1tshirtsprinting.com
            </a>
            <a className="flex items-center gap-3 hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={17} /> Instagram
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={17} /> India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
