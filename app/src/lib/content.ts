// Real content sourced from the client's brief (Sourcing_Fair_Website_Brief.docx)
// and handwritten product-category notes. Nothing here is invented marketing
// social-proof — stats, addresses, and category lists are the client's own.

export const company = {
  name: "Sourcing Fair",
  legalNote: "RMG Trims & Accessories Manufacturer and Supplier",
  phones: ["+880 1831-333599", "+880 1875-429750"],
  email: "info@sourcingfairbd.com",
  address: "House #19 (Ground & 1st Floor), Road #3/C, Sector #09, Uttara-1230, Dhaka, Bangladesh",
  mapQuery: "House 19, Road 3/C, Sector 9, Uttara, Dhaka 1230, Bangladesh",
  whatsapp: "8801831333599",
  hours: "Saturday to Thursday, 9:00 AM to 6:00 PM (GMT+6)",
};

export const stats = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 30, suffix: "+", label: "Expert team members" },
  { value: 520, suffix: "+", label: "Customers served" },
  { value: 6, suffix: "", label: "Countries in our sourcing network" },
];

export const presenceCountries = [
  { name: "Bangladesh", role: "Head office, Uttara, Dhaka" },
  { name: "China", role: "Sourcing & supplier network" },
  { name: "Hong Kong", role: "Sourcing & supplier network" },
  { name: "Sri Lanka", role: "Sourcing & supplier network" },
  { name: "India", role: "Sourcing & supplier network" },
  { name: "Indonesia", role: "Sourcing & supplier network" },
];

export const values = [
  {
    title: "Integrity in business",
    body: "Every quote, sample, and shipment is exactly what we said it would be.",
  },
  {
    title: "Quality & on-time delivery",
    body: "Consistent, inspected output that lands on the date the production plan promised.",
  },
  {
    title: "Customer satisfaction",
    body: "Long-term buyer relationships built order after order, not one-off transactions.",
  },
  {
    title: "Innovation & continuous improvement",
    body: "Sampling, materials, and process refined every season, not left static.",
  },
];

export const strengths = [
  {
    title: "Strict quality control",
    body: "Inspection built into every stage from raw material to shipment.",
  },
  {
    title: "Custom design & development",
    body: "Bespoke buttons, labels, and tags developed to a buyer's own spec.",
  },
  {
    title: "Competitive factory pricing",
    body: "Direct factory relationships in Bangladesh and China keep costs sharp.",
  },
  {
    title: "Strong supply chain",
    body: "Dual-country network across Bangladesh and China for continuity.",
  },
  {
    title: "Bulk production capability",
    body: "Scaled for the volumes global apparel exporters actually order.",
  },
  {
    title: "Fast sampling & delivery",
    body: "Sample turnaround built to match a buyer's development calendar.",
  },
  {
    title: "Export-ready standard",
    body: "Finishing and packaging built to clear international buyer audits.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Buyer requirement analysis",
    body: "We start from the tech pack and spec sheet, not a generic catalog.",
  },
  {
    step: "02",
    title: "Product sourcing",
    body: "Matched to reliable factories across our Bangladesh & China network.",
  },
  {
    step: "03",
    title: "Sample development",
    body: "Physical samples turned around against the buyer's approval calendar.",
  },
  {
    step: "04",
    title: "Price negotiation",
    body: "Direct factory pricing, negotiated transparently against target cost.",
  },
  {
    step: "05",
    title: "Production coordination",
    body: "Bulk run scheduled and tracked against the confirmed delivery date.",
  },
  {
    step: "06",
    title: "Quality inspection & shipment",
    body: "Inspected before packing, then supported through to shipment.",
  },
];

export type ProductCategory = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  subcategories: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "buttons",
    name: "Buttons",
    icon: "button",
    description:
      "High-quality garment buttons, durable, stylish, and customizable for all apparel needs with consistent quality and timely supply.",
    subcategories: [
      "Plastic chalk button",
      "Pearl button",
      "Horn button",
      "Shell button",
      "Wooden button",
      "Coconut button",
      "Metal button",
      "ABS button",
      "Logo & fancy button",
    ],
  },
  {
    slug: "labels",
    name: "Labels",
    icon: "label",
    description:
      "Premium woven and printed labels ensuring durability and style, with custom designs in high-quality materials.",
    subcategories: [
      "Woven label",
      "Printing label",
      "Needle label",
      "Leather label",
      "Heat seal label",
    ],
  },
  {
    slug: "elastic",
    name: "Elastic",
    icon: "elastic",
    description:
      "Woven and knit elastics engineered for consistent stretch recovery across waistbands, cuffs, and activewear.",
    subcategories: ["Jacquard elastic", "Woven elastic", "Plain elastic", "Hole elastic"],
  },
  {
    slug: "zippers",
    name: "Zippers",
    icon: "zipper",
    description:
      "All types of garment zippers with durable quality and export-standard finishing.",
    subcategories: ["Metal zipper", "Nylon zipper", "Vislon zipper"],
  },
  {
    slug: "twill-tape",
    name: "Twill Tape",
    icon: "twill",
    description:
      "Premium twill tapes ensuring strength, flexibility, and a perfect finish for garment binding and trims.",
    subcategories: ["Cotton twill tape", "Poly twill tape"],
  },
  {
    slug: "drawstring",
    name: "Drawstring",
    icon: "drawstring",
    description:
      "Woven and braided drawstrings sized and finished to match hoodie, short, and outerwear specs.",
    subcategories: ["Flat drawstring", "Round braided drawstring"],
  },
  {
    slug: "belt-buckle",
    name: "Belt & Buckle",
    icon: "buckle",
    description:
      "Belts and buckles finished to export standard for workwear, uniforms, and outerwear.",
    subcategories: ["Fabric belt", "Metal buckle", "Plastic buckle"],
  },
  {
    slug: "tags",
    name: "Hang Tags & Paper Items",
    icon: "tag",
    description:
      "Premium hang tags, price tags, and fit tags: custom design, quality print, and competitive pricing.",
    subcategories: ["Hang tag", "Price tag", "All kinds of paper item"],
  },
  {
    slug: "leather-items",
    name: "Leather Items (PU)",
    icon: "patch",
    description:
      "Manufacturer and supplier of premium PU patches and rubber PU labels for the global RMG trims industry.",
    subcategories: ["PU patch", "Rubber PU label"],
  },
  {
    slug: "lace",
    name: "Lace",
    icon: "lace",
    description:
      "Decorative and functional lace trims finished for lingerie, kidswear, and fashion apparel.",
    subcategories: ["Cotton lace", "Elastic lace"],
  },
  {
    slug: "poly",
    name: "Poly",
    icon: "poly",
    description: "Poly bags and poly packaging sized and printed to a buyer's packing list.",
    subcategories: ["Garment poly bag", "Printed poly bag"],
  },
  {
    slug: "carton",
    name: "Carton",
    icon: "carton",
    description: "Export-grade cartons built to protect bulk shipments through global freight.",
    subcategories: ["Standard export carton", "Printed carton"],
  },
];

export const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ depends on the specific trim and material. Share your product and target quantity through the quote form and we will confirm MOQ and lead time against your spec.",
  },
  {
    q: "Can you develop a custom design for buttons, labels, or tags?",
    a: "Yes. Custom design and development is one of our core strengths, from a buyer's own logo button to a bespoke woven label or hang tag.",
  },
  {
    q: "Which countries do you currently supply?",
    a: "Our sourcing network spans Bangladesh, China, Hong Kong, Sri Lanka, India, and Indonesia, supplying garment exporters and buying houses internationally.",
  },
  {
    q: "How fast can you turn around samples?",
    a: "Fast sampling is built into our process so development samples can match a buyer's approval calendar. Exact timing depends on the trim and material.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the Request a Quote form with your product category, quantity, and target date, or reach us directly on WhatsApp or by phone.",
  },
];

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Quality", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];
