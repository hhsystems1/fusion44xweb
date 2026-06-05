export const landingPages = [
  {
    slug: "chemical-free-pool-system",
    productId: "fusion-residential-pool",
    eyebrow: "Residential Pool Campaign",
    title: "Replace Chlorine Maintenance With Fusion 44X",
    subtitle:
      "A focused landing page for homeowners comparing chlorine, salt, UV, ozone, and ionizer systems against Fusion 44X.",
    image: "/poolex4.webp",
    imageAlt: "Residential pool with Fusion 44X installed",
    bullets: [
      "No chlorine, salt, or sanitizer chemicals added to the water",
      "Built for 5,000-28,000 gallon residential pools",
      "Lifetime warranty and 30-day money-back guarantee",
      "Professional installation and setup support available",
    ],
    proofPoints: ["$5,890", "5,000-28,000 gal", "$99/mo financing"],
  },
] as const;

export type LandingPageSlug = (typeof landingPages)[number]["slug"];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
