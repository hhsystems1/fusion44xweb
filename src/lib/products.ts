export const products = [
  {
    id: "fusion-spas-jacuzzis",
    name: "Fusion Spas & Jacuzzis",
    shortName: "Spa System",
    price: "$2,890",
    volume: "1,200-5,000 gallon spa",
    financing: "As low as $65/month financing",
    image: "/fusion-spa-install.jpg",
    imageAlt: "Clear spa water after Fusion 44X installation",
    featured: false,
    features: [
      "Patented Hydro-pH-Infusion process",
      "Naturally supports 7.2-7.6 pH balance",
      "No chlorine, salt, or sanitizer chemicals added",
      "Lifetime warranty",
      "30-day money-back guarantee",
    ],
  },
  {
    id: "fusion-residential-pool",
    name: "Fusion Residential Pool",
    shortName: "Pool System",
    price: "$5,890",
    volume: "5,000-28,000 gallon pool",
    financing: "As low as $99/month with financing",
    image: "/poolex4.webp",
    imageAlt: "Residential pool with Fusion 44X installed",
    featured: true,
    features: [
      "Designed for residential pool systems",
      "Patented Hydro-pH-Infusion process",
      "Helps kill algae and bacteria without chlorine",
      "Lifetime warranty",
      "30-day money-back guarantee",
    ],
  },
] as const;

export type ProductId = (typeof products)[number]["id"];

export function checkoutHref(productId: ProductId) {
  return `/api/checkout?product=${productId}`;
}

export function getProduct(productId: ProductId) {
  return products.find((product) => product.id === productId);
}
