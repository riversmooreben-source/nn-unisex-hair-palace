// Edit branch details here — no layout code needs to change.

// Business hours are the same across all 4 branches (confirmed from in-salon signage).
export const businessHours = [
  { days: "Mon – Thu", time: "9:00 – 17:00" },
  { days: "Friday", time: "9:00 – 18:00" },
  { days: "Saturday", time: "8:00 – 16:00" },
  { days: "Sunday", time: "9:00 – 13:00" },
];
export const openPublicHolidays = true;

export const branches = [
  {
    id: "rylands-penlyn",
    name: "Rylands / Penlyn Estate",
    address:
      "Behind 7-Eleven & Engen garage, next to Dr Bheeka Dentist, Penlyn Estate, Cape Town",
    phone: "+27 82 491 8881",
    whatsapp: "27798861309",
    services: ["hair", "beauty", "nanoplastia"],
    hasMassage: false,
    hasCoffeeShop: false,
    // TODO: swap in real branch exterior/interior photo
    photoPlaceholder: "Photo needed: Rylands / Penlyn Estate branch exterior",
  },
  {
    id: "mitchells-plain-rocklands",
    name: "Mitchell's Plain (Rocklands)",
    address:
      "Corner of Gladiator & Weltevrede Road (old Foodland building), Mitchell's Plain, Cape Town",
    phone: "+27 82 491 8881",
    whatsapp: "27798861309",
    services: ["hair", "beauty", "nanoplastia", "massage"],
    hasMassage: true,
    hasCoffeeShop: false,
    photoPlaceholder: "Photo needed: Mitchell's Plain (Rocklands) branch interior",
  },
  {
    id: "rylands-second",
    name: "Rylands (2nd Branch)",
    address:
      "Rycom Centre, Murton Road, same building as Radio 786 & Debonairs, opposite the dialysis centre, Rylands, Cape Town",
    phone: "+27 82 491 8881",
    whatsapp: "27798861309",
    services: ["hair", "beauty", "nanoplastia", "massage"],
    hasMassage: true,
    hasCoffeeShop: false,
    photoPlaceholder: "Photo needed: Rylands 2nd branch team photo",
  },
  {
    id: "plumstead",
    name: "Plumstead",
    address: "161 Victoria Road, next to Chilli Bar, Plumstead, Cape Town",
    phone: "+27 82 491 8881",
    whatsapp: "27798861309",
    services: ["hair", "beauty", "nanoplastia", "coffee"],
    hasMassage: false,
    hasCoffeeShop: true,
    photoPlaceholder: "Photo needed: Plumstead branch + coffee shop corner",
  },
];

export const SERVICE_LABELS = {
  hair: "Hair",
  beauty: "Beauty Bar",
  nanoplastia: "Brasil Cacau Nanoplastia",
  massage: "Massage Therapy",
  coffee: "Coffee Shop",
};
