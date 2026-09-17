// Generic placeholder block — replace with a real <img> once photography is available.
export default function PhotoPlaceholder({ label, className = "aspect-4/3", dark = false }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed p-4 text-center text-xs font-medium ${
        dark
          ? "border-brand-gold/40 bg-brand-cream/5 text-brand-cream/60"
          : "border-brand-gold/40 bg-brand-black/5 text-brand-black/50"
      } ${className}`}
    >
      {label}
    </div>
  );
}
