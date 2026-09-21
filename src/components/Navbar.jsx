import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { CallButton, WhatsAppButton } from "./CTAButtons";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Pricing" },
  { to: "/locations", label: "Locations" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <Logo variant="wordmark" className="h-8 sm:h-9" />
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition ${
                  isActive ? "text-brand-gold" : "text-brand-cream/80 hover:text-brand-gold-light"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton className="px-4 py-2" />
        </div>

        <button
          className="tap-target flex items-center justify-center rounded-lg text-brand-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-gold/20 bg-brand-black px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `tap-target flex items-center rounded-lg px-3 py-3 text-base font-medium ${
                    isActive
                      ? "bg-brand-gold/10 text-brand-gold"
                      : "text-brand-cream/90 hover:bg-brand-gold/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <CallButton full />
            <WhatsAppButton full />
          </div>
        </div>
      )}
    </header>
  );
}
