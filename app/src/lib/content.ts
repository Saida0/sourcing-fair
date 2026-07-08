// Real content sourced from the client's brief (Sourcing_Fair_Website_Brief.docx)
// and handwritten product-category notes. Nothing here is invented marketing
// social-proof — stats, addresses, and category lists are the client's own.

// Product photography: ALL category images below are AI-generated studio
// shots (client request, 2026-07-06) — the previous versions were tiny
// low-resolution crops from the client's company profile PDF (~550×130px)
// that looked blurry in the 16:10 card slots. Each image depicts the generic
// product type only (no brand marks, no readable text). If the client later
// supplies real high-res factory photography, swap these files in place.
import labelsPhoto from "../assets/products/labels.jpg";
import elasticPhoto from "../assets/products/elastic.jpg";
import drawstringPhoto from "../assets/products/drawstring.jpg";
import twillTapePhoto from "../assets/products/twill-tape.jpg";
import tagsPhoto from "../assets/products/tags.jpg";
import buttonsPhoto from "../assets/products/buttons.jpg";
import leatherItemsPhoto from "../assets/products/leather-items.jpg";
import lacePhoto from "../assets/products/lace.jpg";
import beltBucklePhoto from "../assets/products/belt-buckle.jpg";
import zippersPhoto from "../assets/products/zippers.jpg";
import polyPhoto from "../assets/products/poly.jpg";
import cartonPhoto from "../assets/products/carton.jpg";
import tradeLicenseScan from "../assets/certificates/trade-license.jpg";
import etinScan from "../assets/certificates/etin.jpg";
import binScan from "../assets/certificates/bin.jpg";
import ercScan from "../assets/certificates/erc.jpg";
import ircScan from "../assets/certificates/irc.jpg";
import oekoTexScan from "../assets/certificates/oeko-tex.jpg";

export const company = {
  name: "Sourcing Fair",
  legalNote: "RMG Trims & Accessories Manufacturer and Supplier",
  phones: ["+880 1831-333599", "+880 1875-429750"],
  email: "info@sourcingfairbd.com",
  address: "House #19 (Ground & 1st Floor), Road #3/C, Sector #09, Uttara-1230, Dhaka, Bangladesh",
  mapQuery: "House 19, Road 3/C, Sector 9, Uttara, Dhaka 1230, Bangladesh",
  whatsapp: "8801831333599",
  hours: "Saturday to Thursday, 9:00 AM to 6:00 PM (GMT+6)",
  chinaOffice: "Jinhai Creative Center B4-402B, Le Cong Town, Shunde District, Foshan City, Guangdong Province, China",
};

export const stats = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 30, suffix: "+", label: "Expert team members" },
  { value: 520, suffix: "+", label: "Customers served" },
  { value: 6, suffix: "", label: "Countries in our sourcing network" },
];

export const presenceCountries = [
  { name: "Bangladesh", role: "Head office, Uttara, Dhaka" },
  { name: "China", role: "Foshan, Guangdong — sourcing & supplier network" },
  { name: "Hong Kong", role: "Sourcing & supplier network" },
  { name: "Sri Lanka", role: "Sourcing & supplier network" },
  { name: "India", role: "Sourcing & supplier network" },
  { name: "Indonesia", role: "Sourcing & supplier network" },
];

// Leadership messages condensed from the client's own company profile PDF
// (Sourcing_Fair_Company_Profile_Update.pdf) — not invented bios.
export const leadership = [
  {
    name: "Md. Rakibul Islam Ripon",
    title: "Managing Partner",
    credential: "MSc · 20+ years in RMG trims & accessories",
    quote:
      "Our goal is to become a trusted global sourcing partner by delivering excellence in every aspect of our service — from product development to final shipment. We believe in integrity, commitment, and long-term business relationships.",
  },
  {
    name: "S.M. Al Mamun Himel",
    title: "Managing Partner",
    credential: "18+ years in RMG trims & accessories",
    quote:
      "Our mission is to strengthen long-term business relationships with global partners by maintaining trust, transparency, and high service standards, while continuously improving our sourcing network and operational efficiency.",
  },
];

// Buyer names as given in the client's company profile PDF. Rendered as a
// plain typographic wordmark strip, not logo artwork — we do not hold
// image rights to reproduce these brands' marks.
export const buyers = [
  "CELO",
  "Lee",
  "GAP",
  "JCPenney",
  "TFG London",
  "Modextil",
  "AKK Fashion",
  "Rockmans",
  "United States Polo Association",
  "Weatherproof",
  "Wearhouse",
  "Giant Tiger",
  "Rimar",
  "RB Sellars",
  "P&C",
  "NEXT",
];

// The company's own registrations (Trade License, eTIN, BIN, ERC, IRC) as
// listed in its company profile. Certificate numbers and scanned copies are
// shared with buyers directly during vendor qualification, not published
// here — the scans carry personal photos/signatures/ID numbers.
export const businessRegistrations = [
  "Trade License — Gazipur City Corporation",
  "eTIN — National Board of Revenue",
  "BIN / VAT Registration Certificate",
  "Export Registration Certificate (ERC)",
  "Import Registration Certificate (IRC)",
];

// Scanned certificate/registration documents, cropped from the client's own
// company profile PDF (client request, 2026-07-08: publish them in a sliding
// strip like competitor sites). Note: some scans carry the owners' photos and
// signatures — the client chose to publish them, as they already do in the
// PDF they distribute to buyers.
export const certificates: { name: string; issuer: string; image: string }[] = [
  {
    name: "Trade License",
    issuer: "Gazipur City Corporation",
    image: tradeLicenseScan,
  },
  {
    name: "eTIN Certificate",
    issuer: "National Board of Revenue",
    image: etinScan,
  },
  {
    name: "BIN / VAT Registration",
    issuer: "National Board of Revenue",
    image: binScan,
  },
  {
    name: "Export Registration (ERC)",
    issuer: "Office of the CCI&E",
    image: ercScan,
  },
  {
    name: "Import Registration (IRC)",
    issuer: "Office of the CCI&E",
    image: ircScan,
  },
  {
    name: "OEKO-TEX® Standard 100",
    issuer: "Partner factory — Angel Button Ltd.",
    image: oekoTexScan,
  },
];

export const factoryCertification = {
  factory: "Angel Button Limited",
  standard: "OEKO-TEX® Standard 100",
  scope: "Buttons made of 100% polyester — horn, chalk & pearl finishes",
};

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
  image?: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "buttons",
    name: "Buttons",
    icon: "button",
    image: buttonsPhoto,
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
    image: labelsPhoto,
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
    image: elasticPhoto,
    description:
      "Woven and knit elastics engineered for consistent stretch recovery across waistbands, cuffs, and activewear.",
    subcategories: ["Jacquard elastic", "Woven elastic", "Plain elastic", "Hole elastic"],
  },
  {
    slug: "zippers",
    name: "Zippers",
    icon: "zipper",
    image: zippersPhoto,
    description:
      "All types of garment zippers with durable quality and export-standard finishing.",
    subcategories: ["Metal zipper", "Nylon zipper", "Vislon zipper"],
  },
  {
    slug: "twill-tape",
    name: "Twill Tape",
    icon: "twill",
    image: twillTapePhoto,
    description:
      "Premium twill tapes ensuring strength, flexibility, and a perfect finish for garment binding and trims.",
    subcategories: ["Cotton twill tape", "Poly twill tape"],
  },
  {
    slug: "drawstring",
    name: "Drawstring",
    icon: "drawstring",
    image: drawstringPhoto,
    description:
      "Woven and braided drawstrings sized and finished to match hoodie, short, and outerwear specs.",
    subcategories: ["Flat drawstring", "Round braided drawstring"],
  },
  {
    slug: "belt-buckle",
    name: "Belt & Buckle",
    icon: "buckle",
    image: beltBucklePhoto,
    description:
      "Belts and buckles finished to export standard for workwear, uniforms, and outerwear.",
    subcategories: ["Fabric belt", "Metal buckle", "Plastic buckle"],
  },
  {
    slug: "tags",
    name: "Hang Tags & Paper Items",
    icon: "tag",
    image: tagsPhoto,
    description:
      "Premium hang tags, price tags, and fit tags: custom design, quality print, and competitive pricing.",
    subcategories: ["Hang tag", "Price tag", "All kinds of paper item"],
  },
  {
    slug: "leather-items",
    name: "Leather Items (PU)",
    icon: "patch",
    image: leatherItemsPhoto,
    description:
      "Manufacturer and supplier of premium PU patches and rubber PU labels for the global RMG trims industry.",
    subcategories: ["PU patch", "Rubber PU label"],
  },
  {
    slug: "lace",
    name: "Lace",
    icon: "lace",
    image: lacePhoto,
    description:
      "Decorative and functional lace trims finished for lingerie, kidswear, and fashion apparel.",
    subcategories: ["Cotton lace", "Elastic lace"],
  },
  {
    slug: "poly",
    name: "Poly",
    icon: "poly",
    image: polyPhoto,
    description: "Poly bags and poly packaging sized and printed to a buyer's packing list.",
    subcategories: ["Garment poly bag", "Printed poly bag"],
  },
  {
    slug: "carton",
    name: "Carton",
    icon: "carton",
    image: cartonPhoto,
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
  { label: "Showcase", to: "/showcase" },
  { label: "Quality", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];
