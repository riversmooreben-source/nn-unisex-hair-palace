// Sample/placeholder pricing structure — swap in confirmed figures.
// Prices are in ZAR (R). `lengths` prices apply where noted.

export const LENGTHS = ["Short", "Mid", "Long", "Extra Long"];

export const hairServices = [
  {
    name: "Wash, Blow & Flat Iron",
    prices: { Short: 150, Mid: 190, Long: 230, "Extra Long": 280 },
  },
  {
    name: "Highlights (Full Head)",
    prices: { Short: 450, Mid: 550, Long: 650, "Extra Long": 780 },
  },
  {
    name: "Colour (Full Head)",
    prices: { Short: 350, Mid: 430, Long: 520, "Extra Long": 620 },
  },
  {
    name: "Cut",
    prices: { Short: 120, Mid: 150, Long: 180, "Extra Long": 210 },
  },
  {
    name: "Trim",
    prices: { Short: 80, Mid: 100, Long: 120, "Extra Long": 140 },
  },
  {
    name: "Brazilian Gold / BHS Treatment",
    prices: { Short: 400, Mid: 500, Long: 600, "Extra Long": 720 },
  },
  {
    name: "Koffee Botox Treatment",
    prices: { Short: 450, Mid: 550, Long: 650, "Extra Long": 780 },
  },
  {
    name: "Ztox Treatment",
    prices: { Short: 400, Mid: 500, Long: 600, "Extra Long": 720 },
  },
];

export const nanoplastiaService = {
  name: "Brasil Cacau Nanoplastia",
  note: "Available at all 4 branches",
  prices: { Short: 900, Mid: 1100, Long: 1350, "Extra Long": 1600 },
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
  { name: "Swedish Massage (60 min)", price: "R450" },
  { name: "Deep Tissue Massage (60 min)", price: "R520" },
  { name: "Back & Neck Massage (30 min)", price: "R280" },
  { name: "Foot Massage (30 min)", price: "R220" },
];

export const massageBranches = ["Mitchell's Plain (Rocklands)", "Rylands (2nd Branch)"];
