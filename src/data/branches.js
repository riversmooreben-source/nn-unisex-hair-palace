// Edit branch details here — no layout code needs to change.
export const branches = [
  {
    id: "rylands-penlyn",
    name: "Rylands / Penlyn Estate",
    address: "Klipfontein Rd, Penlyn Estate, Rylands, Cape Town",
    phone: "+27 21 000 0001",
    whatsapp: "27810000001",
    hours: [
      { days: "Mon – Fri", time: "08:00 – 18:00" },
      { days: "Saturday", time: "08:00 – 17:00" },
      { days: "Sunday", time: "09:00 – 14:00" },
    ],
    services: ["hair", "beauty", "nanoplastia"],
    hasMassage: false,
    hasCoffeeShop: false,
    // TODO: swap in real branch exterior/interior photo
    photoPlaceholder: "Photo needed: Rylands / Penlyn Estate branch exterior",
  },
  {
    id: "mitchells-plain-rocklands",
    name: "Mitchell's Plain (Rocklands)",
    address: "Rocklands Centre, Mitchell's Plain, Cape Town",
    phone: "+27 21 000 0002",
    whatsapp: "27810000002",
    hours: [
      { days: "Mon – Fri", time: "08:00 – 18:00" },
      { days: "Saturday", time: "08:00 – 17:00" },
      { days: "Sunday", time: "09:00 – 14:00" },
    ],
    services: ["hair", "beauty", "nanoplastia", "massage"],
    hasMassage: true,
    hasCoffeeShop: false,
    photoPlaceholder: "Photo needed: Mitchell's Plain (Rocklands) branch interior",
  },
  {
    id: "rylands-second",
    name: "Rylands (2nd Branch)",
    address: "Belgravia Rd, Rylands, Cape Town",
    phone: "+27 21 000 0003",
    whatsapp: "27810000003",
    hours: [
      { days: "Mon – Fri", time: "08:00 – 18:00" },
      { days: "Saturday", time: "08:00 – 17:00" },
      { days: "Sunday", time: "09:00 – 14:00" },
    ],
    services: ["hair", "beauty", "nanoplastia", "massage"],
    hasMassage: true,
    hasCoffeeShop: false,
    photoPlaceholder: "Photo needed: Rylands 2nd branch team photo",
  },
  {
    id: "plumstead",
    name: "Plumstead",
    address: "Main Rd, Plumstead, Cape Town",
    phone: "+27 21 000 0004",
    whatsapp: "27810000004",
    hours: [
      { days: "Mon – Fri", time: "07:30 – 18:00" },
      { days: "Saturday", time: "08:00 – 17:00" },
      { days: "Sunday", time: "09:00 – 14:00" },
    ],
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
