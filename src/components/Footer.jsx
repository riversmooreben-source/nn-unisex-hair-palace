import { Link } from "react-router-dom";
import Logo from "./Logo";
import { branches } from "../data/branches";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 text-sm text-brand-cream/70">{site.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-center justify-center rounded-full border border-brand-gold/40 px-3 py-2 text-xs font-medium text-brand-gold hover:bg-brand-gold/10"
            >
              Facebook
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-center justify-center rounded-full border border-brand-gold/40 px-3 py-2 text-xs font-medium text-brand-gold hover:bg-brand-gold/10"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            <li><Link to="/services" className="hover:text-brand-gold-light">Services & Pricing</Link></li>
            <li><Link to="/locations" className="hover:text-brand-gold-light">Locations</Link></li>
            <li><Link to="/reviews" className="hover:text-brand-gold-light">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold-light">Contact / Book</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-gold">
            Our Branches
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            {branches.map((b) => (
              <li key={b.id}>{b.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-gold">
            Get In Touch
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            <li>{site.phoneDisplay}</li>
            <li>{site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-gold/10 px-4 py-4 text-center text-xs text-brand-cream/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
