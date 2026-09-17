# N&N Unisex Hair Palace — Marketing Website

React + Vite + Tailwind CSS marketing site for N&N Unisex Hair Palace (4 branches, Cape Town).

## Getting started

```bash
npm install
npm run dev
```

## Editing content

All editable content lives in `src/data/` as plain JS objects — no layout/JSX changes needed:

- `site.js` — business name, phone, WhatsApp number, email, social links
- `branches.js` — the 4 branches: address, hours, phone, services offered, coffee shop / massage flags
- `services.js` — hair/nanoplastia/beauty/massage services & sample pricing
- `specials.js` — rotating specials shown on the Home page
- `reviews.js` — testimonial quotes + the Facebook "100% recommend" stat

## Real content already wired in

- **Logo**: `src/assets/logo.jpg` (also copied to `public/` for the favicon) — the real N&N Hair & Beauty crest.
- **Reviews**: `src/data/reviews.js` has 10 real quotes pulled from Google & Facebook review screenshots.
- **Beauty Bar pricing**: `src/data/services.js` → `beautyServices` is transcribed from a real in-salon N&N price list photo (nails, lashes, waxing, R100 deals). Still worth confirming it's current across all branches.
- **Contact number**: `site.js` uses a real bookings number found on that same price list — confirm which branch(es) it should route to before treating it as the one main line.

## Known placeholders (swap before launch)

- **Photos**: every `PhotoPlaceholder` component marks a spot needing real photography (hero, branch interiors/exteriors, team, before/afters). Search the codebase for `PhotoPlaceholder` to find them all.
- **Hair / Nanoplastia / Massage pricing**: still sample/placeholder figures in `services.js` — the Services page shows an on-page "subject to confirmation" note. Only Beauty Bar pricing is from a real source so far.
- **Branch phone numbers**: `branches.js` still has placeholder per-branch numbers — replace with real ones.
- **Facebook/Instagram URLs**: placeholders in `site.js` — swap in the real page links.
- **Contact form**: currently client-side only (shows a thank-you message). Wire up to a real backend or booking system (e.g. Fresha) when ready — see the comment in `src/pages/Contact.jsx`.

## Brand palette

Defined in `src/index.css` under `@theme`:

- `brand-black` #0D0D0D, `brand-gold` #C9A24B, `brand-gold-light` #EFC16C, `brand-cream` #F5F0E6 — used throughout nav/footer/buttons/chrome.
- `specials-pink` / `specials-coral` / `specials-purple` — reserved for the Specials badge/banner only, kept out of the main UI.
