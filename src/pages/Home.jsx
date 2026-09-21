import { Link } from "react-router-dom";
import { CallButton, WhatsAppButton } from "../components/CTAButtons";
import { SpecialsCard } from "../components/SpecialsBadge";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Logo from "../components/Logo";
import { specials } from "../data/specials";
import { facebookStat, reviews } from "../data/reviews";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-black text-brand-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <Logo variant="emblem" className="mb-6 h-24 w-24 sm:h-28 sm:w-28" />
            <p className="mb-3 inline-block rounded-full bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              4 Branches Across Cape Town
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Specials any day, <span className="text-brand-gold">every day.</span>
            </h1>
            <p className="mt-4 max-w-md text-brand-cream/80">
              Hair, beauty & massage therapy for everyone — walk in, look good, feel great.
              Real value, real personality, real results.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
          {/* Photo placeholder: hero image of salon interior or stylist at work */}
          <PhotoPlaceholder
            label="Photo needed: hero shot — salon interior / stylist at work"
            className="aspect-video w-full lg:aspect-4/3"
            dark
          />
        </div>
      </section>

      {/* Trust badge strip */}
      <section className="border-b border-brand-gold/20 bg-brand-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:gap-4">
          <div className="flex items-center gap-2 rounded-full bg-brand-black px-5 py-2 text-brand-gold">
            <StarIcon />
            <span className="font-display text-sm font-bold">
              {facebookStat.percentRecommend}% Recommend
            </span>
          </div>
          <p className="text-sm text-brand-black/70">
            Based on {facebookStat.reviewCount} reviews on {facebookStat.source}
          </p>
        </div>
      </section>

      {/* Specials strip */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-brand-black sm:text-3xl">
              Featured Specials
            </h2>
            <Link
              to="/services"
              className="text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
            >
              See all pricing →
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {specials.map((s) => (
              <SpecialsCard key={s.title} special={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured testimonial teaser */}
      {reviews[0] && (
        <section className="bg-brand-black px-4 py-14 text-brand-cream">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xl italic leading-relaxed sm:text-2xl">
              “{reviews[0].quote}”
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-gold">
              — {reviews[0].name}, {reviews[0].branch}
            </p>
            <Link
              to="/reviews"
              className="mt-6 inline-block text-sm font-semibold text-brand-cream/70 hover:text-brand-gold-light"
            >
              Read more reviews →
            </Link>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="px-4 py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-3xl bg-brand-gold/10 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-brand-black">
            Ready to book your appointment?
          </h2>
          <p className="max-w-md text-sm text-brand-black/70">
            Message us on WhatsApp or give your nearest branch a call — we'll sort you out.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.74 1-5.79-4.21-4.1 5.82-.85z" />
    </svg>
  );
}
