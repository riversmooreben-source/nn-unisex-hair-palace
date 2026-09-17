// Bright, punchy colors are intentionally reserved for specials/promo content only —
// keep this palette out of the main nav/footer/buttons.
const BADGE_STYLES = {
  HOT: "bg-specials-pink text-white",
  NEW: "bg-specials-purple text-white",
  SAVE: "bg-specials-coral text-white",
};

export function SpecialsBadge({ text = "HOT" }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
        BADGE_STYLES[text] || BADGE_STYLES.HOT
      }`}
    >
      {text}
    </span>
  );
}

export function SpecialsCard({ special }) {
  return (
    <div className="relative flex min-w-[260px] flex-col gap-2 rounded-2xl border border-brand-gold/30 bg-white p-5 shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-bold text-brand-black">{special.title}</h3>
        <SpecialsBadge text={special.badge} />
      </div>
      <p className="text-sm text-brand-black/70">{special.detail}</p>
      <p className="mt-1 font-display text-xl font-bold text-brand-gold">{special.price}</p>
    </div>
  );
}
