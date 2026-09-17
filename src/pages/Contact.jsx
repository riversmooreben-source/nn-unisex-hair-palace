import { useState } from "react";
import { CallButton, WhatsAppButton } from "../components/CTAButtons";
import { site } from "../data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Placeholder handler — wire this up to a real booking system (e.g. Fresha)
  // or a form backend (e.g. Formspree, Netlify Forms) when ready.
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="font-display text-3xl font-extrabold text-brand-black sm:text-4xl">
          Contact &amp; Book
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-brand-black/70">
          Quickest way to book: call or WhatsApp your nearest branch. Or send us an
          enquiry below and we'll get back to you.
        </p>
      </header>

      <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
        <CallButton />
        <WhatsAppButton />
      </div>

      <div className="rounded-3xl border border-brand-gold/20 bg-white p-6 shadow-sm sm:p-10">
        {submitted ? (
          <div className="py-10 text-center">
            <p className="font-display text-xl font-bold text-brand-black">Thanks for reaching out!</p>
            <p className="mt-2 text-sm text-brand-black/70">
              We've received your enquiry and will be in touch shortly. For faster service,
              feel free to WhatsApp or call us directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-brand-black">
                Preferred Branch
              </label>
              <select
                name="branch"
                className="tap-target w-full rounded-lg border border-brand-gold/30 bg-brand-cream px-4 py-2.5 text-sm text-brand-black focus:border-brand-gold focus:outline-none"
              >
                <option>Rylands / Penlyn Estate</option>
                <option>Mitchell's Plain (Rocklands)</option>
                <option>Rylands (2nd Branch)</option>
                <option>Plumstead</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-brand-black">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you'd like to book..."
                className="w-full rounded-lg border border-brand-gold/30 bg-brand-cream px-4 py-2.5 text-sm text-brand-black focus:border-brand-gold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="tap-target rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-gold-light sm:col-span-2"
            >
              Send Enquiry
            </button>
            <p className="text-xs text-brand-black/50 sm:col-span-2">
              This form currently sends an enquiry only — online booking via a system
              like Fresha is coming soon.
            </p>
          </form>
        )}
      </div>

      <p className="mt-8 text-center text-sm text-brand-black/60">
        Prefer email? Reach us at{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-brand-gold hover:text-brand-gold-light">
          {site.email}
        </a>
      </p>
    </div>
  );
}

function Field({ label, name, type = "text", required = false, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-brand-black">
        {label} {required && <span className="text-specials-pink">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="tap-target w-full rounded-lg border border-brand-gold/30 bg-brand-cream px-4 py-2.5 text-sm text-brand-black focus:border-brand-gold focus:outline-none"
      />
    </div>
  );
}
