import { useState } from "react";
import { facebookStat, reviews } from "../data/reviews";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const hasReviews = reviews.length > 0;

  function prev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }
  function next() {
    setIndex((i) => (i + 1) % reviews.length);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="font-display text-3xl font-extrabold text-brand-black sm:text-4xl">
          What Our Clients Say
        </h1>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand-black px-6 py-3 text-brand-gold">
          <StarRow />
          <span className="font-display text-base font-bold">
            {facebookStat.percentRecommend}% Recommend
          </span>
          <span className="text-sm text-brand-cream/70">
            · {facebookStat.reviewCount} reviews on {facebookStat.source}
          </span>
        </div>
      </header>

      {hasReviews ? (
        <div className="relative rounded-3xl border border-brand-gold/20 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-center font-display text-xl italic leading-relaxed text-brand-black sm:text-2xl">
            “{reviews[index].quote}”
          </p>
          <p className="mt-6 text-center text-sm font-semibold text-brand-gold">
            — {reviews[index].name}, {reviews[index].branch}
          </p>

          {reviews.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="tap-target flex items-center justify-center rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-black hover:bg-brand-gold/10"
                aria-label="Previous review"
              >
                ← Prev
              </button>
              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full ${
                      i === index ? "bg-brand-gold" : "bg-brand-gold/20"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="tap-target flex items-center justify-center rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-black hover:bg-brand-gold/10"
                aria-label="Next review"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-brand-black/60">
          Reviews coming soon — check back shortly.
        </p>
      )}
    </div>
  );
}

function StarRow() {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.74 1-5.79-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </span>
  );
}
