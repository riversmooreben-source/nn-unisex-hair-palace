import { branches, SERVICE_LABELS } from "../data/branches";
import { CallButton, WhatsAppButton } from "../components/CTAButtons";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import { telLink, whatsappLink } from "../data/site";

export default function Locations() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="font-display text-3xl font-extrabold text-brand-black sm:text-4xl">
          Our Locations
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-brand-black/70">
          4 branches across Cape Town. Massage therapy is available at 2 of them —
          look for the badge below.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {branches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
}

function BranchCard({ branch }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-brand-gold/20 bg-white shadow-sm">
      <PhotoPlaceholder label={branch.photoPlaceholder} className="aspect-video rounded-none border-x-0 border-t-0" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="font-display text-xl font-bold text-brand-black">{branch.name}</h2>
          <div className="flex flex-wrap gap-1">
            {branch.hasMassage && <Badge>Massage Available</Badge>}
            {branch.hasCoffeeShop && <Badge>☕ Coffee Shop</Badge>}
          </div>
        </div>

        <p className="mt-2 text-sm text-brand-black/70">{branch.address}</p>

        <div className="mt-4 space-y-1 text-sm text-brand-black/80">
          {branch.hours.map((h) => (
            <div key={h.days} className="flex justify-between">
              <span>{h.days}</span>
              <span className="font-medium">{h.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {branch.services.map((s) => (
            <span
              key={s}
              className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-black/80"
            >
              {SERVICE_LABELS[s]}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <a
            href={telLink(branch.phone)}
            className="tap-target flex flex-1 items-center justify-center rounded-full bg-brand-black px-4 py-2.5 text-sm font-semibold text-brand-cream hover:bg-brand-charcoal"
          >
            Call
          </a>
          <a
            href={whatsappLink(branch.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex flex-1 items-center justify-center rounded-full bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-black hover:bg-brand-gold-light"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-brand-black px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-gold-light">
      {children}
    </span>
  );
}
