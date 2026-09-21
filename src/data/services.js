// Real pricing, transcribed from the client's own in-salon flyers (2026-09).
// Prices are in ZAR (R). `lengths` prices apply where noted.
// A few cells are unconfirmed by the client — shown as "Ask in branch" rather than a guessed number.

export const LENGTHS = ["Short", "Mid", "Long", "Extra Long"];

const ASK = "Ask in branch";

export const hairServices = [
  {
    name: "Wash, Blow & Flat Iron",
    prices: { Short: "R50", Mid: "R70", Long: "R90", "Extra Long": "R120" },
  },
  {
    name: "Highlights",
    prices: { Short: "R150", Mid: "R200", Long: "R250", "Extra Long": "R300" },
  },
  {
    name: "Colours",
    prices: { Short: "R150", Mid: "R200", Long: "R250", "Extra Long": "R300" },
  },
  {
    name: "Cuts",
    prices: { Short: "R70", Mid: "R70", Long: "R70", "Extra Long": "R70" },
  },
  {
    name: "Trim",
    prices: { Short: "R30", Mid: "R30", Long: "R30", "Extra Long": "R30" },
  },
  {
    name: "Brazilian Gold / BHS Treatment",
    prices: { Short: "R100", Mid: "R150", Long: "R200", "Extra Long": "R250" },
  },
  {
    name: "Koffee Botox Treatment",
    prices: { Short: "R150", Mid: "R200", Long: "R250", "Extra Long": ASK },
  },
  {
    name: "Ztox Treatment",
    prices: { Short: "R100", Mid: ASK, Long: ASK, "Extra Long": ASK },
  },
];

export const nanoplastiaService = {
  name: "Brasil Cacau Nanoplastia",
  note: "Available at all 4 branches",
  prices: { Short: "R250", Mid: "R350", Long: "R450", "Extra Long": "R550" },
};

// Sourced from an in-salon N&N Beauty price list photo — real figures, but
// confirm before publishing in case branches vary or prices have moved on.
export const beautyServices = [
  { name: "Nail Extensions + Gel", price: "R200" },
  { name: "Soak Off", price: "R50" },
  { name: "Lashes", price: "R200" },
  { name: "Brow Tint", price: "R30" },
  { name: "Lash Tint", price: "R30" },
  { name: "Brow Wax", price: "R50" },
  { name: "Lip Wax", price: "R50" },
  { name: "Chin Wax", price: "R50" },
  { name: "Underarms Wax", price: "R80" },
  { name: "Arms Wax (Half / Full)", price: "R60 / R120" },
  { name: "Legs Wax (Half / Full)", price: "R100 / R180" },
  { name: "Bikini Wax", price: "R150" },
  { name: "Brazilian Wax", price: "R200" },
  {
    name: "R100 Deal: Manicure + Gel",
    price: "R100",
    highlight: true,
  },
  {
    name: "R100 Deal: Pedicure + Gel",
    price: "R100",
    highlight: true,
  },
  {
    name: "R100 Deal: Full Face Wax",
    price: "R100",
    highlight: true,
  },
  {
    name: "R100 Deal: Make Up",
    price: "R100",
    highlight: true,
  },
];

export const beautyNote =
  "Matric ball, wedding & package deals available — ask in branch for a custom quote.";

export const massageServices = [
  { name: "Promo: 1hr Full Body", price: "R100" },
  { name: "Swedish Full Body", price: "R200" },
  { name: "Deep Tissue Full Body", price: "R250" },
  { name: "Back & Neck (30 min)", price: "R120" },
  { name: "Foot (30 min)", price: "R60" },
];

export const massageBranches = ["Mitchell's Plain (Rocklands)", "Rylands (2nd Branch)"];
