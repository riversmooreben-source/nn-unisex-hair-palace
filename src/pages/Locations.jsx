import { branches, SERVICE_LABELS, businessHours, openPublicHolidays } from "../data/branches";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import { telLink, whatsappLink, mapsLink } from "../data/site";

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

      <BusinessHoursCard />

      <div className="grid gap-6 sm:grid-cols-2">
        {branches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
}

function BusinessHoursCard() {
  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-black text-brand-cream shadow-sm">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="font-display text-lg font-bold text-brand-gold">
            Business Hours
          </h2>
          <p className="mt-1 text-sm text-brand-cream/60">Same at all 4 branches</p>
          <div className="mt-4 space-y-1.5 text-sm">
            {businessHours.map((h) => (
              <div key={h.days} className="flex justify-between gap-8">
                <span className="text-brand-cream/80">{h.days}</span>
                <span className="font-medium">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {openPublicHolidays && (
          <div className="flex items-center gap-3 self-start rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-5 py-4 sm:self-center">
            <span className="text-2xl">🎉</span>
            <span className="font-display text-sm font-bold text-brand-gold">
              Open on Public Holidays!
            </span>
          </div>
        )}
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
          <h2 className="font-display text-xl font-bold text-brand-black">
            <a
              href={mapsLink(branch.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold hover:underline"
            >
              {branch.name}
            </a>
          </h2>
          <div className="flex flex-wrap gap-1">
            {branch.hasMassage && <Badge>Massage Available</Badge>}
            {branch.hasCoffeeShop && <Badge>☕ Coffee Shop</Badge>}
          </div>
        </div>

        <p className="mt-2 text-sm text-brand-black/70">{branch.address}</p>

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
