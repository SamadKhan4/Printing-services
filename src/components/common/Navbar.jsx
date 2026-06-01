import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import { whatsappLink } from "../../utils/whatsapp.js";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Bulk Orders", "/bulk-orders"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-bold transition hover:text-brand-red ${
      isActive ? "text-brand-red" : "text-ink/78"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-smoke/88 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between gap-6">
        <NavLink className="flex items-center gap-3" to="/" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-white shadow-sm">
            <img className="h-full w-full object-contain p-1" src={logo} alt="A1 Tshirts & printing Services logo" />
          </span>
          <span>
            <span className="block font-display text-base font-black leading-5 text-ink sm:text-lg">A1 Tshirts & printing Services</span>
            <span className="block text-xs font-semibold text-ink/54">Custom merchandise studio</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} className={linkClass} to={to}>
              {label}
            </NavLink>
          ))}
        </div>

        <a
          className="focus-ring hidden min-h-11 items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-red md:flex"
          href={whatsappLink("Hi A1 Tshirts & printing Services, I need a bulk merchandise quote.")}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          aria-label="Toggle menu"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-ink/10 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-page grid py-4">
            {links.map(([label, to]) => (
              <NavLink key={to} className={linkClass} to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
