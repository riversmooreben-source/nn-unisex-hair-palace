// 082 491 8881 is the real call & WhatsApp number, shared across all 4 branches.
export const site = {
  name: "N&N Unisex Hair Palace",
  tagline: "Specials any day, every day",
  phone: "+27 82 491 8881",
  phoneDisplay: "082 491 8881",
  whatsapp: "27824918881",
  whatsappMessage: "Hi N&N! I'd like to book an appointment.",
  email: "bookings@nnhairpalace.co.za",
  facebook: "https://www.facebook.com/profile.php?id=100062976834575",
  // TODO: replace with the real Instagram page URL
  instagram: "https://instagram.com/nnhairpalace",
};

export function whatsappLink(number = site.whatsapp, message = site.whatsappMessage) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone = site.phone) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
