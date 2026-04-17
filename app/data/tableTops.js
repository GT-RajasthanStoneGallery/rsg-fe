/**
 * Table Top Stone Finishes – static for now, API-ready.
 * Replace with fetch('/api/table-tops') when backend is ready.
 * Names and content aligned with natural stone catalogue; can be sourced from same API.
 */

const BRAND = "Rajasthan Stone Gallery";

// API-ready: same shape as natural stones for consistency; backend can return this.
export const TABLE_TOPS_DATA = [
  {
    id: 1,
    slug: "apple-green",
    name: "Apple Green",
    features: ["Rich apple-green natural tone", "Ideal for table tops and countertops", "Durable and polished surface"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "Polished", "Category": "Table Top" },
    description: "Apple Green is crafted from vibrant natural green granite with a rich, deep colour and polished finish. A striking choice for dining tables, kitchen islands, and countertops.",
    image: "/images/tableTops/apple-green.png",
    productDetails: { name: "Apple Green", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "Polished", "Category": "Table Top" },
  },
  {
    id: 2,
    slug: "cipollino-white",
    name: "Cipollino White",
    features: ["Exotic translucent green surface", "Perfect for luxury dining tables", "High gloss polished finish", "Unique natural veining"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
    description: "Cipollino White is crafted from rare translucent green onyx with vivid natural veining. A stunning centerpiece for luxury dining tables, reception desks, and feature surfaces.",
    image: "/images/tableTops/cipollino-white.jpg",
    productDetails: { name: "Cipollino White", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
  },
  {
    id: 3,
    slug: "quartzo-panda",
    name: "Quartzo Panda",
    features: ["Elegant black and white tones", "Ideal for decorative table surfaces", "Premium translucent stone", "Polished to a mirror finish"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
    description: "Quartzo Panda features elegant black and white hues with a translucent quality. Perfect for luxury coffee tables, vanity tops, and high-end reception counters.",
    image: "/images/tableTops/quartzo-panda.jpg",
    productDetails: { name: "Quartzo Panda", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
  },
  {
    id: 4,
    slug: "panda-black",
    name: "Panda Black",
    features: ["Warm honey and amber tones", "Naturally translucent surface", "Stunning veining patterns", "Premium table top stone"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
    description: "Panda Black showcases warm amber tones with stunning natural veining. An exceptional choice for luxury dining tables, bar counters, and feature tabletops.",
    image: "/images/tableTops/panda-black.jpg",
    productDetails: { name: "Panda Black", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
  },
  {
    id: 5,
    slug: "pallisandro-brown",
    name: "Pallisandro Brown",
    features: ["Pure white translucent stone", "Luxurious and timeless appeal", "Ideal for backlit table surfaces", "Smooth high gloss finish"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
    description: "Pallisandro Brown is crafted from luxurious translucent white onyx with subtle natural veining. Perfect for elegant dining tables, bar tops, and premium decorative surfaces.",
    image: "/images/tableTops/pallisandro-brown.jpg",
    productDetails: { name: "Pallisandro Brown", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Category": "Table Top" },
  },
];

export function getTableTopById(id) {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  if (Number.isNaN(numId)) return null;
  return TABLE_TOPS_DATA.find((s) => s.id === numId) ?? null;
}
