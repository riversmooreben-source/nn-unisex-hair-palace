import { site, telLink, whatsappLink } from "../data/site";

export function CallButton({ className = "", full = false }) {
  return (
    <a
      href={telLink()}
      className={`tap-target inline-flex items-center justify-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-semibold text-brand-cream shadow-sm transition hover:bg-brand-charcoal ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <PhoneIcon /> Call {site.phoneDisplay}
    </a>
  );
}

export function WhatsAppButton({ className = "", full = false, phone, message }) {
  return (
    <a
      href={whatsappLink(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`tap-target inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black shadow-sm transition hover:bg-brand-gold-light ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <WhatsAppIcon /> WhatsApp Us
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 004.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.09c-.24.68-1.4 1.31-1.93 1.36-.5.05-1 .24-3.35-.7-2.83-1.13-4.63-4.02-4.77-4.2-.14-.19-1.13-1.51-1.13-2.87 0-1.37.71-2.03.96-2.31.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.17.01.39-.06.6.47.24.6.81 2.06.87 2.21.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.28.72 1.2 1.55 1.94 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}
