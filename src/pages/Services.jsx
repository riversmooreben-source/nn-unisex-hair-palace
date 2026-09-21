import {
  LENGTHS,
  hairServices,
  nanoplastiaService,
  beautyServices,
  beautyNote,
  massageServices,
  massageBranches,
} from "../data/services";

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="font-display text-3xl font-extrabold text-brand-black sm:text-4xl">
          Services &amp; Pricing
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-brand-black/70">
          Pricing below is taken from our in-branch price lists.
        </p>
      </header>

      <PriceNote />

      <SectionTitle>Hair</SectionTitle>
      <div className="overflow-x-auto rounded-2xl border border-brand-gold/20 bg-white shadow-sm">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="bg-brand-black text-brand-cream">
              <th className="px-4 py-3 font-semibold">Service</th>
              {LENGTHS.map((len) => (
                <th key={len} className="px-4 py-3 text-right font-semibold">
                  {len}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hairServices.map((svc, i) => (
              <tr
                key={svc.name}
                className={i % 2 ? "bg-brand-cream/50" : "bg-white"}
              >
                <td className="px-4 py-3 font-medium text-brand-black">{svc.name}</td>
                {LENGTHS.map((len) => (
                  <td
                    key={len}
                    className={`px-4 py-3 text-right ${
                      svc.prices[len] === "Ask in branch"
                        ? "text-brand-black/40 italic"
                        : "text-brand-black/80"
                    }`}
                  >
                    {svc.prices[len]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Brasil Cacau Nanoplastia</SectionTitle>
      <p className="mb-4 -mt-3 text-sm font-medium text-brand-gold">
        {nanoplastiaService.note}
      </p>
      <div className="overflow-x-auto rounded-2xl border border-brand-gold/20 bg-white shadow-sm">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="bg-brand-black text-brand-cream">
              <th className="px-4 py-3 font-semibold">Service</th>
              {LENGTHS.map((len) => (
                <th key={len} className="px-4 py-3 text-right font-semibold">
                  {len}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-brand-black">
                {nanoplastiaService.name}
              </td>
              {LENGTHS.map((len) => (
                <td key={len} className="px-4 py-3 text-right text-brand-black/80">
                  {nanoplastiaService.prices[len]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <SectionTitle>Beauty Bar</SectionTitle>
      <p className="mb-4 -mt-3 text-sm text-brand-black/60">{beautyNote}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {beautyServices.map((svc) => (
          <div
            key={svc.name}
            className={`flex items-center justify-between rounded-xl border p-4 shadow-sm ${
              svc.highlight
                ? "border-brand-gold bg-brand-gold/10"
                : "border-brand-gold/20 bg-white"
            }`}
          >
            <span className="text-sm font-medium text-brand-black">{svc.name}</span>
            <span className="font-display text-sm font-bold text-brand-gold">{svc.price}</span>
          </div>
        ))}
      </div>

      <SectionTitle>Massage Therapy</SectionTitle>
      <div className="mb-4 -mt-3 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm font-medium text-brand-black">
        Available only at: <strong>{massageBranches.join(" & ")}</strong>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {massageServices.map((svc) => (
          <div
            key={svc.name}
            className="flex flex-col gap-1 rounded-xl border border-brand-gold/20 bg-white p-4 shadow-sm"
          >
            <span className="text-sm font-medium text-brand-black">{svc.name}</span>
            <span className="font-display text-lg font-bold text-brand-gold">{svc.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-brand-black first:mt-0">
      {children}
    </h2>
  );
}

function PriceNote() {
  return (
    <div className="mb-8 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-center text-sm text-brand-black/80">
      ⚠️ Prices are accurate as of our last in-branch price list but should be confirmed
      before publishing — some items marked "Ask in branch" are still to be finalized.
    </div>
  );
}
