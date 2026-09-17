// Bookings numbers below are real (from an in-salon price list) — confirm which
// branch(es) they route to before treating them as the single main line.
export const site = {
  name: "N&N Unisex Hair Palace",
  tagline: "Specials any day, every day",
  phone: "+27 82 491 8881",
  phoneDisplay: "082 491 8881",
  whatsapp: "27824918881",
  whatsappMessage: "Hi N&N! I'd like to book an appointment.",
  email: "bookings@nnhairpalace.co.za",
  // TODO: replace with the real Facebook/Instagram page URLs
  facebook: "https://facebook.com/nnhairpalace",
  instagram: "https://instagram.com/nnhairpalace",
};

export function whatsappLink(number = site.whatsapp, message = site.whatsappMessage) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone = site.phone) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
