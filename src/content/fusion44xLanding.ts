import type { Fusion44xDestination } from "@/lib/fusion44xLinks";

export type Fusion44xLandingSlug =
  | "chlorine-free-pool"
  | "chlorine-free-pool2"
  | "financing"
  | "financing-2"
  | "financing-3"
  | "consultation"
  | "youtube-vsl";

export interface Fusion44xLandingFaq {
  question: string;
  answer: string;
}

export interface Fusion44xLandingTestimonial {
  quote: string;
  name: string;
  detail: string;
  badge?: string;
}

export interface Fusion44xLandingCampaign {
  slug: Fusion44xLandingSlug;
  seoTitle: string;
  seoDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryCtaLabel: string;
  primaryCtaTarget: Fusion44xDestination;
  secondaryCtaLabel: string;
  secondaryCtaTarget: Fusion44xDestination;
  heroStats: Array<{ value: string; label: string }>;
  trustBar: string[];
  vslEyebrow: string;
  vslTitle: string;
  vslDescription: string;
  vslBullets: string[];
  vslVideoUrl?: string;
  vslPosterImage?: string;
  problemTitle: string;
  problemIntro: string;
  problemItems: string[];
  solutionTitle: string;
  solutionIntro: string;
  solutionItems: string[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Array<{ title: string; description: string }>;
  technologyTitle: string;
  technologySubtitle: string;
  technologyCards: Array<{ title: string; description: string; highlight: string }>;
  productImage?: string;
  productImageAlt?: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonRows: Array<{ label: string; traditional: string; fusion44x: string }>;
  financingTitle: string;
  financingSubtitle: string;
  financingBadge: string;
  financingBullets: string[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Fusion44xLandingTestimonial[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: Fusion44xLandingFaq[];
  finalTitle: string;
  finalSubtitle: string;
  finalPrimaryCtaLabel: string;
  finalPrimaryCtaTarget: Fusion44xDestination;
  finalSecondaryCtaLabel: string;
  finalSecondaryCtaTarget: Fusion44xDestination;
}

const sharedBenefits = [
  {
    title: "Cleaner-feeling water",
    description:
      "Built to support a smoother, more premium-feeling pool experience while moving away from a chlorine-first mindset.",
  },
  {
    title: "Reduced chemical dependence",
    description:
      "Positioned for owners who want to reduce traditional pool chemical reliance where the system is a fit.",
  },
  {
    title: "Premium ownership experience",
    description:
      "A clearer path from ad click to decision, with a higher-end presentation throughout the page.",
  },
  {
    title: "Simple next step",
    description:
      "The page moves visitors toward checkout or a specialist conversation without unnecessary friction.",
  },
  {
    title: "Ad-ready and mobile-first",
    description:
      "Designed for paid traffic, fast scans, and a strong conversion path on smaller screens.",
  },
  {
    title: "Reusable launch system",
    description:
      "The same section architecture can support future Fusion44x campaign pages later.",
  },
];

const sharedFaqs = [
  {
    question: "What is Fusion44x designed to do?",
    answer:
      "Fusion44x is positioned as a premium chlorine-free or chemical-reducing pool sanitation and water technology experience. These pages help visitors see whether it fits their pool and how to continue.",
  },
  {
    question: "How do I buy or finance it?",
    answer:
      "The landing pages send visitors to the current live Fusion44x checkout flow so payment can happen there until the full site migration is complete.",
  },
  {
    question: "Can I talk to someone before purchasing?",
    answer:
      "Yes. Each landing page routes qualified visitors to a water specialist consultation path so they can confirm fit before they buy.",
  },
  {
    question: "Do these pages replace the main site right away?",
    answer:
      "No. They are built inside the existing website repo now so they can later become part of the migrated main site without rework.",
  },
];

const sharedTestimonials = [
  {
    quote:
      "The experience feels much more premium than a standard pool product page. The next step is obvious and easy to follow.",
    name: "Customer quote placeholder",
    detail: "Swap in approved owner feedback when available.",
    badge: "Placeholder",
  },
  {
    quote:
      "The water-system positioning is clear, calm, and much easier to understand than a typical chemical-heavy sales page.",
    name: "Customer quote placeholder",
    detail: "Swap in approved owner feedback when available.",
    badge: "Placeholder",
  },
  {
    quote:
      "The consultation path makes it simple to see whether the system fits the pool before anyone makes a purchase decision.",
    name: "Customer quote placeholder",
    detail: "Swap in approved owner feedback when available.",
    badge: "Placeholder",
  },
];

export const fusion44xLandingCampaigns: Record<
  Fusion44xLandingSlug,
  Fusion44xLandingCampaign
> = {
  "chlorine-free-pool": {
    slug: "chlorine-free-pool",
    seoTitle: "Chlorine-Free Pool Experience",
    heroImage: "/fusion-clear-pool.jpg",
    heroImageAlt: "Clear, chemical-free pool water shining in the sunlight",
    vslVideoUrl: "/0604-1.mov",
    vslPosterImage: "/fusion-clear-pool.jpg",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "Premium Fusion44x landing page for chlorine-free and chemical-reducing pool buyers. Send paid traffic to checkout or a water specialist consultation.",
    heroEyebrow: "Fusion44x chlorine-free pool experience",
    heroHeadline: "Stop Swimming in Chemicals. Start Swimming in Pure Hydrogen.",
    heroSubheadline:
      "Fusion44x is positioned for pool owners who want a cleaner-feeling water experience and a more premium path away from traditional chemical dependence.",
    primaryCtaLabel: "Buy Now",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Finance Options",
    secondaryCtaTarget: "finance",
    heroStats: [
      { value: "Premium", label: "dark SaaS-style presentation" },
      { value: "Mobile-first", label: "built for paid traffic" },
      { value: "Fast path", label: "checkout or consultation" },
    ],
    trustBar: [
      "Chlorine-free positioning",
      "Chemical-reducing language",
      "Current live site checkout",
      "Consultation-ready",
    ],
    vslEyebrow: "VSL overview",
    vslTitle: "See the water-technology story before you decide.",
    vslDescription:
      "Use this section for the paid-ad walkthrough. It should explain the product, show the visual system, and move visitors toward the next step without clutter.",
    vslBullets: [
      "What the system is designed to change",
      "How the ownership experience feels different",
      "When to choose checkout versus a consultation",
    ],
    problemTitle: "Why buyers start looking for something better",
    problemIntro:
      "Many pool owners are simply tired of the cycle of strong smells, chemical management, and inconsistent water feel.",
    problemItems: [
      "Routine chemical dependence becomes part of the experience",
      "The water can feel harsher than customers want",
      "Buyers struggle to compare premium alternatives quickly",
      "Most pool pages do not show the ownership path clearly",
    ],
    solutionTitle: "What Fusion44x changes",
    solutionIntro:
      "This landing page turns the pitch into a clear conversion path: understand the fit, review the options, and move forward only if the system matches the pool.",
    solutionItems: [
      "A premium water-technology framing instead of commodity language",
      "Cleaner-feeling pool water positioning with simpler buyer education",
      "A straightforward consult-or-buy next step for ad traffic",
      "Reusable sections that can support future campaign variations",
    ],
    benefitsTitle: "Benefits that matter to premium pool buyers",
    benefitsSubtitle:
      "Keep the language measured, attractive, and conversion-friendly while still supporting the chlorine-free campaign angle.",
    benefits: sharedBenefits,
    technologyTitle: "How the technology story should feel",
    technologySubtitle:
      "Use this section to explain the water path, the ownership workflow, and the premium experience without overcomplicating the pitch.",
    technologyCards: [
      {
        title: "Water experience",
        description:
          "Frame the product around cleaner-feeling water and a more controlled ownership experience.",
        highlight: "Customer-facing value",
      },
      {
        title: "Sanitation story",
        description:
          "Keep the copy focused on chlorine-free or chemical-reducing positioning and avoid unsupported absolute claims.",
        highlight: "Careful messaging",
      },
      {
        title: "Fit review",
        description:
          "Let visitors decide whether their pool size and goals make the system a good candidate.",
        highlight: "Consultation-ready",
      },
    ],
    comparisonTitle: "Compare the usual approach with the Fusion44x experience",
    comparisonSubtitle:
      "This keeps the page honest while showing why premium buyers would care about the upgrade.",
    comparisonRows: [
      {
        label: "Pool water feel",
        traditional: "Often tied to routine chlorine-first management",
        fusion44x: "Designed to support a cleaner-feeling, more premium experience",
      },
      {
        label: "Chemical dependence",
        traditional: "Frequent ongoing chemical adjustments",
        fusion44x: "Positioned to reduce traditional chemical dependence where appropriate",
      },
      {
        label: "Buying journey",
        traditional: "Unclear next step and scattered product information",
        fusion44x: "Simple route to checkout or a water specialist",
      },
      {
        label: "Visual presentation",
        traditional: "Commodity-style product page",
        fusion44x: "Cinematic, premium, and ad-ready",
      },
    ],
    financingTitle: "Make the upgrade feel reachable",
    financingSubtitle:
      "Use this section to reinforce the monthly-payment story and keep the price conversation simple.",
    financingBadge: "Finance from $75/mo",
    financingBullets: [
      "Designed for premium buyers who want a payment path",
      "Keep the current live checkout/payment flow in place for now",
      "Use specialist guidance when the pool needs a fit check first",
    ],
    testimonialsTitle: "Owner feedback placeholder",
    testimonialsSubtitle:
      "Replace these cards with approved customer quotes or case studies when they are available.",
    testimonials: sharedTestimonials,
    faqTitle: "Frequently asked questions",
    faqSubtitle: "These answer the main objections without overpromising.",
    faqs: sharedFaqs,
    finalTitle: "Ready to see if Fusion44x fits your pool?",
    finalSubtitle:
      "Move qualified traffic to the current live checkout or let a specialist confirm the right path first.",
    finalPrimaryCtaLabel: "Buy Now",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Finance Options",
    finalSecondaryCtaTarget: "finance",
  },
  "chlorine-free-pool2": {
    slug: "chlorine-free-pool2",
    seoTitle: "Chlorine-Free Pool Experience",
    heroImage: "/fusion-clear-pool.jpg",
    heroImageAlt: "Clear, chemical-free pool water shining in the sunlight",
    vslVideoUrl: "/0604-1.mov",
    vslPosterImage: "/fusion-clear-pool.jpg",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "A cleaner, softer-feeling pool experience without the harsh chlorine smell. Built for families who want the swim without the chemical bite.",
    heroEyebrow: "Chlorine-free pool experience",
    heroHeadline: "Clear water. Zero harsh smell.",
    heroSubheadline:
      "A softer, cleaner-feeling pool setup for families who want the swim without the chemical bite.",
    primaryCtaLabel: "Get My Pool Plan",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "See How It Works",
    secondaryCtaTarget: "consultation",
    heroStats: [
      { value: "No chlorine odor", label: "Water that feels fresh" },
      { value: "Gentler feel", label: "Less harshness on skin" },
      { value: "Simple switch", label: "Clean changeover" },
    ],
    trustBar: [
      "No chlorine odor",
      "Gentler feel on skin",
      "Simple switch process",
    ],
    vslEyebrow: "VSL overview",
    vslTitle: "See the water-technology story before you decide.",
    vslDescription:
      "Use this section for the paid-ad walkthrough. It should explain the product, show the visual system, and move visitors toward the next step without clutter.",
    vslBullets: [
      "What the system is designed to change",
      "How the ownership experience feels different",
      "When to choose checkout versus a consultation",
    ],
    problemTitle: "Why buyers start looking for something better",
    problemIntro:
      "Many pool owners are simply tired of the cycle of strong smells, chemical management, and inconsistent water feel.",
    problemItems: [
      "Routine chemical dependence becomes part of the experience",
      "The water can feel harsher than customers want",
      "Buyers struggle to compare premium alternatives quickly",
      "Most pool pages do not show the ownership path clearly",
    ],
    solutionTitle: "What Fusion44x changes",
    solutionIntro:
      "This landing page turns the pitch into a clear conversion path: understand the fit, review the options, and move forward only if the system matches the pool.",
    solutionItems: [
      "A premium water-technology framing instead of commodity language",
      "Cleaner-feeling pool water positioning with simpler buyer education",
      "A straightforward consult-or-buy next step for ad traffic",
      "Reusable sections that can support future campaign variations",
    ],
    benefitsTitle: "Benefits that matter to premium pool buyers",
    benefitsSubtitle:
      "Keep the language measured, attractive, and conversion-friendly while still supporting the chlorine-free campaign angle.",
    benefits: sharedBenefits,
    technologyTitle: "How the technology story should feel",
    technologySubtitle:
      "Use this section to explain the water path, the ownership workflow, and the premium experience without overcomplicating the pitch.",
    technologyCards: [
      {
        title: "Water experience",
        description:
          "Frame the product around cleaner-feeling water and a more controlled ownership experience.",
        highlight: "Customer-facing value",
      },
      {
        title: "Sanitation story",
        description:
          "Keep the copy focused on chlorine-free or chemical-reducing positioning and avoid unsupported absolute claims.",
        highlight: "Careful messaging",
      },
      {
        title: "Fit review",
        description:
          "Let visitors decide whether their pool size and goals make the system a good candidate.",
        highlight: "Consultation-ready",
      },
    ],
    comparisonTitle: "Compare the usual approach with the Fusion44x experience",
    comparisonSubtitle:
      "This keeps the page honest while showing why premium buyers would care about the upgrade.",
    comparisonRows: [
      {
        label: "Pool water feel",
        traditional: "Often tied to routine chlorine-first management",
        fusion44x: "Designed to support a cleaner-feeling, more premium experience",
      },
      {
        label: "Chemical dependence",
        traditional: "Frequent ongoing chemical adjustments",
        fusion44x: "Positioned to reduce traditional chemical dependence where appropriate",
      },
      {
        label: "Buying journey",
        traditional: "Unclear next step and scattered product information",
        fusion44x: "Simple route to checkout or a water specialist",
      },
      {
        label: "Visual presentation",
        traditional: "Commodity-style product page",
        fusion44x: "Cinematic, premium, and ad-ready",
      },
    ],
    financingTitle: "Make the upgrade feel reachable",
    financingSubtitle:
      "Use this section to reinforce the monthly-payment story and keep the price conversation simple.",
    financingBadge: "Finance from $75/mo",
    financingBullets: [
      "Designed for premium buyers who want a payment path",
      "Keep the current live checkout/payment flow in place for now",
      "Use specialist guidance when the pool needs a fit check first",
    ],
    testimonialsTitle: "Owner feedback placeholder",
    testimonialsSubtitle:
      "Replace these cards with approved customer quotes or case studies when they are available.",
    testimonials: sharedTestimonials,
    faqTitle: "Frequently asked questions",
    faqSubtitle: "These answer the main objections without overpromising.",
    faqs: sharedFaqs,
    finalTitle: "Make the pool feel new again.",
    finalSubtitle:
      "Replace this call-to-action with your booking link, phone number, or form embed when you move from prototype to live funnel.",
    finalPrimaryCtaLabel: "Request My Pool Plan",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Speak with a Water Specialist",
    finalSecondaryCtaTarget: "consultation",
  },
  financing: {
    slug: "financing",
    seoTitle: "Fusion44x Financing",
    heroImage: "/fusion-family-pool.jpeg",
    heroImageAlt: "Family enjoying a sparkling clean pool in their backyard",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "Premium financing landing page for Fusion44x. Present monthly payment options for the pool and spa systems while preserving the current checkout or specialist consultation flow.",
    heroEyebrow: "Flexible ownership path",
    heroHeadline: "Finance the Fusion44x System That Fits Your Pool or Spa.",
    heroSubheadline:
      "Show visitors the actual pool and spa products first, then make the monthly payment path feel easy, calm, and consistent with the rest of the site.",
    primaryCtaLabel: "Buy Now",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Finance Options",
    secondaryCtaTarget: "finance",
    heroStats: [
      { value: "From $65/mo", label: "spa financing" },
      { value: "From $99/mo", label: "pool financing" },
      { value: "2 products", label: "real checkout paths" },
    ],
    trustBar: [
      "Real product photos",
      "Pool and spa systems",
      "Monthly pricing visible",
      "Checkout preserved",
    ],
    vslEyebrow: "Why financing matters",
    vslTitle: "See the product lineup before the price conversation.",
    vslDescription:
      "The page should feel like the rest of Fusion44x: product-first, premium, and clear about the next step.",
    vslBullets: [
      "Show the real pool and spa products first",
      "Keep the checkout handoff obvious and simple",
      "Offer consultation support for custom pool situations",
    ],
    problemTitle: "What stops buyers from moving forward",
    problemIntro:
      "Even when the technology makes sense, premium buyers can hesitate if the page hides the actual products or turns the offer into abstract finance copy.",
    problemItems: [
      "They want to see the actual pool and spa systems",
      "The payment path should not feel buried",
      "The page should still look like the Fusion44x site",
      "The offer should feel premium instead of generic",
    ],
    solutionTitle: "How the financing page removes friction",
    solutionIntro:
      "The page keeps the premium tone, shows the real products, and points the customer to the live checkout or a specialist when they need help.",
    solutionItems: [
      "Lead with the actual product lineup",
      "Use a calm, premium presentation instead of pressure",
      "Keep the live checkout link ready for conversion",
      "Route uncertain buyers to a consultation path",
    ],
    benefitsTitle: "Why the Fusion44x lineup still converts",
    benefitsSubtitle:
      "The point is not to overpromise, but to make the upgrade feel understandable, visual, and accessible.",
    benefits: sharedBenefits,
    technologyTitle: "Choose the system that matches the job",
    technologySubtitle:
      "Show enough product detail to build confidence while still keeping the page focused on conversion.",
    technologyCards: [
      {
        title: "Residential pool",
        description:
          "The pool system carries the higher-ticket purchase, the stronger financing story, and the most visible product imagery.",
        highlight: "Featured product",
      },
      {
        title: "Spa system",
        description:
          "The spa and jacuzzi option gives the page a second real product path with a lower monthly entry point.",
        highlight: "Lower monthly price",
      },
      {
        title: "Support path",
        description:
          "Invite buyers to confirm fit before they commit, then move them to checkout or consultation.",
        highlight: "Specialist support",
      },
    ],
    comparisonTitle: "Compare the product paths",
    comparisonSubtitle:
      "Show why the pool and spa options both deserve a premium presentation and a clear payment path.",
    comparisonRows: [
      {
        label: "Pool system",
        traditional: "Bland product page with buried pricing",
        fusion44x: "Featured with clear pricing and monthly financing",
      },
      {
        label: "Spa system",
        traditional: "An afterthought in a generic funnel",
        fusion44x: "Shown as a real product with its own price point",
      },
      {
        label: "Buyer confidence",
        traditional: "Too much guesswork",
        fusion44x: "A consultation path if they want confirmation",
      },
      {
        label: "Campaign fit",
        traditional: "Generic pool marketing",
        fusion44x: "Built for premium paid-ad traffic",
      },
    ],
    financingTitle: "Monthly options should feel premium, not complicated.",
    financingSubtitle:
      "Use the page to make the upgrade feel accessible while preserving the current live payment flow.",
    financingBadge: "Pool + spa financing",
    financingBullets: [
      "Use price framing that supports paid-ad conversion",
      "Keep the live checkout flow in place for now",
      "Offer a specialist call for unusual pool layouts or concerns",
    ],
    testimonialsTitle: "Product clarity placeholder",
    testimonialsSubtitle:
      "Replace these with approved finance or customer feedback once available.",
    testimonials: sharedTestimonials,
    faqTitle: "Common financing questions",
    faqSubtitle: "Answer objections before they leave the page.",
    faqs: sharedFaqs,
    finalTitle: "Use the payment path that feels right for your pool or spa.",
    finalSubtitle:
      "Visitors can continue to the current live checkout or talk to a specialist first if they want confirmation.",
    finalPrimaryCtaLabel: "Buy Now",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Finance Options",
    finalSecondaryCtaTarget: "finance",
  },
  "financing-2": {
    slug: "financing-2",
    seoTitle: "Fusion44x Financing - Product First",
    seoDescription:
      "Second-pass financing landing page for Fusion44x. Lead with the product value, then make monthly payments feel like the natural next step.",
    heroEyebrow: "Fusion44x financing iteration 2",
    heroHeadline: "Make Fusion44x Feel Easier To Start With Monthly Payments.",
    heroSubheadline:
      "This second pass leads with the product story first, then uses financing to lower friction so premium buyers can say yes without getting stuck on the upfront number.",
    primaryCtaLabel: "See Monthly Options",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Talk to a Fusion44x Specialist",
    secondaryCtaTarget: "consultation",
    heroStats: [
      { value: "Payment-first", label: "framing that lowers friction" },
      { value: "Product-led", label: "still selling Fusion44x" },
      { value: "Premium", label: "calm, high-end close" },
    ],
    trustBar: [
      "Monthly payment story",
      "Fusion44x product value",
      "Specialist backup path",
      "Current live checkout preserved",
    ],
    vslEyebrow: "Why this version works",
    vslTitle: "Sell the product, then make the payment path feel easy.",
    vslDescription:
      "Iteration 2 should reduce the feeling of a hard sales ask by pairing the premium product story with a calm financing path from the start.",
    vslBullets: [
      "Show the product value before the money conversation gets heavy",
      "Make the monthly path feel like part of the normal decision",
      "Keep a specialist available when the buyer wants human reassurance",
    ],
    problemTitle: "What stops people from moving on a premium product",
    problemIntro:
      "The technology may make sense, but many buyers still stall when the upfront cost feels too sudden or too abstract.",
    problemItems: [
      "The product feels premium but the payment path feels invisible",
      "Buyers want to know whether monthly options are available",
      "The page needs to show value before it asks for commitment",
      "A generic sales page can make the decision feel heavier than it should",
    ],
    solutionTitle: "How this financing page creates momentum",
    solutionIntro:
      "This version keeps the product at the center, then uses financing as the bridge from interest to action.",
    solutionItems: [
      "Lead with monthly language in the hero and financing block",
      "Keep the Fusion44x product story prominent throughout",
      "Offer checkout for ready buyers and consultation for everyone else",
      "Use a calm premium tone so the payment path feels approachable",
    ],
    benefitsTitle: "Why the second pass should convert better",
    benefitsSubtitle:
      "The page is meant to feel like a premium buying path, not a pressure page.",
    benefits: sharedBenefits,
    technologyTitle: "What the buyer is really deciding",
    technologySubtitle:
      "Make the value of the system visible before the financing conversation takes over the page.",
    technologyCards: [
      {
        title: "Product value first",
        description:
          "Show why Fusion44x is worth considering, then let financing lower the barrier.",
        highlight: "Product-led framing",
      },
      {
        title: "Payment clarity",
        description:
          "Use monthly language early so the buyer can compare the offer without guesswork.",
        highlight: "Reduced friction",
      },
      {
        title: "Human backup",
        description:
          "Keep a specialist route open for buyers who want reassurance before they purchase.",
        highlight: "Safety net",
      },
    ],
    comparisonTitle: "Compare the usual pitch with the second-pass financing story",
    comparisonSubtitle:
      "The page should feel easier to understand because the payment path is part of the product story instead of an afterthought.",
    comparisonRows: [
      {
        label: "Opening message",
        traditional: "Start with a price wall",
        fusion44x: "Start with the premium product and monthly path",
      },
      {
        label: "Buyer confidence",
        traditional: "Unclear if financing is available",
        fusion44x: "Clear payment language from the start",
      },
      {
        label: "Sales tone",
        traditional: "Pushy or abrupt",
        fusion44x: "Calm, premium, and consultative",
      },
      {
        label: "Decision path",
        traditional: "Buyers have to ask the next question",
        fusion44x: "Checkout or specialist help is obvious",
      },
    ],
    financingTitle: "Monthly options should help the product sell itself.",
    financingSubtitle:
      "The goal of this iteration is to make the payment story easy without losing the Fusion44x product identity.",
    financingBadge: "Iteration 2",
    financingBullets: [
      "Lead with financing without hiding the product",
      "Keep the live checkout flow ready for qualified buyers",
      "Use consultation as the safety valve for harder-fit situations",
    ],
    testimonialsTitle: "Financing proof placeholder",
    testimonialsSubtitle:
      "Replace these with approved payment or customer quotes when they are ready.",
    testimonials: sharedTestimonials,
    faqTitle: "Second-pass financing questions",
    faqSubtitle: "Answer the money questions before they become objections.",
    faqs: sharedFaqs,
    finalTitle: "Make the purchase path feel lighter without weakening the product story.",
    finalSubtitle:
      "Visitors can move to checkout, review financing, or talk to a specialist if they want confirmation first.",
    finalPrimaryCtaLabel: "See Monthly Options",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Talk to a Fusion44x Specialist",
    finalSecondaryCtaTarget: "consultation",
  },
  "financing-3": {
    slug: "financing-3",
    seoTitle: "Fusion44x Financing - Visual Story",
    seoDescription:
      "Third-pass financing landing page for Fusion44x. Borrow the cleaner visual structure from the chlorine-free-pool2 design while keeping financing and product value connected.",
    heroImage: "/fusion-clear-pool.jpg",
    heroImageAlt: "Clear water and a premium backyard pool setting",
    vslVideoUrl: "/0604-1.mov",
    vslPosterImage: "/fusion-clear-pool.jpg",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    heroEyebrow: "Fusion44x financing iteration 3",
    heroHeadline: "Use the Visual Story to Make Financing Feel Natural.",
    heroSubheadline:
      "This third pass borrows the lighter, more visual structure of chlorine-free-pool2 so the financing conversation feels easier, while still selling the Fusion44x product itself.",
    primaryCtaLabel: "See Monthly Payment Options",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Review Fit With a Specialist",
    secondaryCtaTarget: "consultation",
    heroStats: [
      { value: "Visual-led", label: "cleaner page structure" },
      { value: "Finance-first", label: "lower the upfront barrier" },
      { value: "Product-led", label: "still selling Fusion44x" },
    ],
    trustBar: [
      "Visual story first",
      "Monthly payment path",
      "Premium buyer journey",
      "Consultation backup",
    ],
    vslEyebrow: "Why this version is different",
    vslTitle: "Lead with the image, then make financing feel obvious.",
    vslDescription:
      "The page should look calmer and more premium, with the visuals doing more of the work before the financing language appears.",
    vslBullets: [
      "Use a cleaner visual hierarchy like the chlorine-free-pool2 page",
      "Show the product and water story before the payment objection grows",
      "Keep the monthly path and consultation path both easy to find",
    ],
    problemTitle: "What makes premium buyers pause",
    problemIntro:
      "The product can feel right, but if the page is too text-heavy the financing story feels like a hurdle instead of a help.",
    problemItems: [
      "Too much copy can hide the visual appeal",
      "Buyers want to feel the value before they study pricing",
      "The payment path should feel calm and expected",
      "A stronger image-led flow can reduce hesitation",
    ],
    solutionTitle: "How this version reduces friction",
    solutionIntro:
      "This page uses a lighter visual structure to support the monthly-payment story and keep the product itself looking premium.",
    solutionItems: [
      "Use hero imagery and media blocks more like chlorine-free-pool2",
      "Keep financing language present but not overwhelming",
      "Let the product render and visual hierarchy do part of the selling",
      "Preserve a simple checkout-or-consultation decision",
    ],
    benefitsTitle: "Why the visual approach helps",
    benefitsSubtitle:
      "The financing story lands better when the page feels polished and easy to scan.",
    benefits: sharedBenefits,
    technologyTitle: "Visual structure, product story, payment story",
    technologySubtitle:
      "This section should feel closer to the chlorine-free-pool2 layout, but tuned for financing instead of pure product pitch.",
    technologyCards: [
      {
        title: "Cleaner layout",
        description:
          "Borrow the lighter, image-led structure so the page feels more premium and less dense.",
        highlight: "Design reference",
      },
      {
        title: "Product anchor",
        description:
          "Keep Fusion44x visible so financing supports the product instead of replacing it.",
        highlight: "Product-led",
      },
      {
        title: "Payment clarity",
        description:
          "Make the monthly option feel like part of the normal buyer journey.",
        highlight: "Lower friction",
      },
    ],
    comparisonTitle: "Compare the usual financing pitch with the visual version",
    comparisonSubtitle:
      "The goal is to feel more premium and easier to follow by using stronger visual hierarchy.",
    comparisonRows: [
      {
        label: "Page feel",
        traditional: "Dense and text-heavy",
        fusion44x: "Cleaner and more visual",
      },
      {
        label: "Buyer focus",
        traditional: "Fixates on price too early",
        fusion44x: "Balances product value and payment clarity",
      },
      {
        label: "Structure",
        traditional: "Generic sales page",
        fusion44x: "Closer to the chlorine-free-pool2 design language",
      },
      {
        label: "Conversion path",
        traditional: "Price first, context later",
        fusion44x: "Visual story first, financing second",
      },
    ],
    financingTitle: "Use visuals to make financing feel like the obvious next step.",
    financingSubtitle:
      "The third pass should make the monthly option feel like part of the product experience, not a separate sales pitch.",
    financingBadge: "Visual reference pass",
    financingBullets: [
      "Borrow the structure of chlorine-free-pool2 where it helps the flow",
      "Keep the live checkout flow available",
      "Use consultation for buyers who want human confirmation",
    ],
    testimonialsTitle: "Visual proof placeholder",
    testimonialsSubtitle:
      "Replace these with approved buyer feedback or finance proof later.",
    testimonials: sharedTestimonials,
    faqTitle: "Financing page questions",
    faqSubtitle: "Keep the answers short and easy to scan.",
    faqs: sharedFaqs,
    finalTitle: "Make the payment path feel like part of the premium product story.",
    finalSubtitle:
      "Visitors can continue to checkout, review financing, or talk to a specialist if they want confidence first.",
    finalPrimaryCtaLabel: "See Monthly Payment Options",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Review Fit With a Specialist",
    finalSecondaryCtaTarget: "consultation",
  },
  consultation: {
    slug: "consultation",
    seoTitle: "Fusion44x Consultation",
    heroImage: "/fusion-swim-lifestyle.jpeg",
    heroImageAlt: "Serene backyard pool setting with premium water quality",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "Specialist consultation landing page for Fusion44x. Guide visitors to a fit check, answer questions, and preserve the current live checkout handoff.",
    heroEyebrow: "Water specialist consult",
    heroHeadline: "See If Fusion44x Fits Your Pool.",
    heroSubheadline:
      "Help visitors understand whether the system matches their pool size, goals, and expectations before they buy.",
    primaryCtaLabel: "Speak With a Specialist",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Finance Options",
    secondaryCtaTarget: "finance",
    heroStats: [
      { value: "Fit-first", label: "clarify the right path" },
      { value: "Low friction", label: "easy next step" },
      { value: "Premium", label: "high-end presentation" },
    ],
    trustBar: [
      "Fit review",
      "Human support",
      "Clear payment path",
      "Premium page feel",
    ],
    vslEyebrow: "Before you book",
    vslTitle: "Give buyers confidence before the call.",
    vslDescription:
      "A consultation page works best when the buyer already understands the basics and only needs help confirming the fit.",
    vslBullets: [
      "Explain the pool-fit conversation",
      "Set expectations for the next call",
      "Keep the payment path available if they are ready",
    ],
    problemTitle: "Why buyers hesitate",
    problemIntro:
      "People often want a premium pool system but do not know if they are the right candidate or what the next step should be.",
    problemItems: [
      "They want someone to confirm the fit",
      "They do not want to waste time on a bad match",
      "They need a calmer explanation before buying",
      "They prefer a human conversation when the pool is unique",
    ],
    solutionTitle: "How the consultation page helps",
    solutionIntro:
      "This page should feel like a premium pre-sale conversation: concise, helpful, and designed to move the right lead forward.",
    solutionItems: [
      "Use the specialist call as the main CTA",
      "Offer financing as a backup path if they are ready to move",
      "Keep the language confident but measured",
      "Make the call feel like a fit check, not a sales trap",
    ],
    benefitsTitle: "Benefits of starting with a specialist",
    benefitsSubtitle:
      "A consultation path can reduce friction for higher-ticket purchases and unique pool setups.",
    benefits: sharedBenefits,
    technologyTitle: "What the specialist will help review",
    technologySubtitle:
      "Use this section to make the conversation feel concrete, not vague.",
    technologyCards: [
      {
        title: "Pool fit",
        description: "Confirm whether the system matches the pool size and setup.",
        highlight: "First decision",
      },
      {
        title: "Ownership goals",
        description:
          "Talk through the buyer's preferred water experience and expectations.",
        highlight: "Buyer context",
      },
      {
        title: "Next step",
        description: "Move toward checkout only after the fit question feels answered.",
        highlight: "Conversion path",
      },
    ],
    comparisonTitle: "Why consult before buying?",
    comparisonSubtitle:
      "This comparison helps buyers understand when a specialist conversation is the better move.",
    comparisonRows: [
      {
        label: "Decision clarity",
        traditional: "Buy first, ask questions later",
        fusion44x: "Confirm fit before payment",
      },
      {
        label: "Buyer confidence",
        traditional: "More uncertainty",
        fusion44x: "Higher confidence through a specialist review",
      },
      {
        label: "Offer framing",
        traditional: "Generic product pitch",
        fusion44x: "Premium consult-first flow",
      },
      {
        label: "Conversion path",
        traditional: "Single rigid path",
        fusion44x: "Consultation or checkout depending on need",
      },
    ],
    financingTitle: "If the fit looks good, the payment path is still simple.",
    financingSubtitle:
      "A specialist conversation should not block the sale; it should make the sale more confident.",
    financingBadge: "Consultation-first",
    financingBullets: [
      "Use the consultation as the primary action",
      "Keep checkout available for ready buyers",
      "Confirm fit before asking for commitment",
    ],
    testimonialsTitle: "Consultation proof placeholder",
    testimonialsSubtitle:
      "Replace these with approved customer feedback after the first campaign runs.",
    testimonials: sharedTestimonials,
    faqTitle: "Consultation questions",
    faqSubtitle: "Use these to reduce hesitation and improve lead quality.",
    faqs: sharedFaqs,
    finalTitle: "Talk to a specialist and confirm the fit.",
    finalSubtitle:
      "Qualified visitors can book a consultation now or continue to checkout if they are ready.",
    finalPrimaryCtaLabel: "Speak With a Specialist",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Finance Options",
    finalSecondaryCtaTarget: "finance",
  },
  "youtube-vsl": {
    slug: "youtube-vsl",
    seoTitle: "Fusion44x Video Sales Letter",
    heroImage: "/poolex4.webp",
    heroImageAlt: "Fusion44x advanced pool water technology system",
    vslVideoUrl: "/0604-1.mov",
    vslPosterImage: "/poolex4.webp",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "Premium VSL landing page for Fusion44x. Present the technology story with a high-end video-style layout and clear CTA paths.",
    heroEyebrow: "YouTube VSL campaign",
    heroHeadline: "Watch the Fusion44x Walkthrough Before You Decide.",
    heroSubheadline:
      "This page is built to pair a premium walkthrough video with a clear next step so ad traffic can convert without friction.",
    primaryCtaLabel: "Buy Now",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Finance Options",
    secondaryCtaTarget: "finance",
    heroStats: [
      { value: "Video-first", label: "built for VSL traffic" },
      { value: "Premium", label: "cinematic presentation" },
      { value: "Clear CTA", label: "watch then act" },
    ],
    trustBar: [
      "VSL-ready layout",
      "Premium visual system",
      "Conversion-focused copy",
      "Mobile-friendly",
    ],
    vslEyebrow: "Watch the walkthrough",
    vslTitle: "Use the video to explain the system fast.",
    vslDescription:
      "This section is the core of the page. It should load fast, look premium, and make the technology story feel understandable.",
    vslBullets: [
      "Show the product story in under two minutes",
      "Keep the CTA close to the video",
      "Let the rest of the page handle objections and fit questions",
    ],
    problemTitle: "Why VSL traffic still needs a strong page",
    problemIntro:
      "A great video introduces the idea, but the landing page still has to answer questions and make the next step obvious.",
    problemItems: [
      "Video viewers still want proof and clarity",
      "The page must carry the conversion flow",
      "Buyers need a path after the walkthrough",
      "Premium presentation should continue below the fold",
    ],
    solutionTitle: "How the VSL page closes the loop",
    solutionIntro:
      "The video grabs attention, and the page below it gives buyers a polished path into consultation or checkout.",
    solutionItems: [
      "Place the VSL at the center of the page",
      "Keep supporting sections focused and concise",
      "Repeat the CTA after objections have been handled",
      "Keep the current live payment flow available",
    ],
    benefitsTitle: "Why video-first pages convert",
    benefitsSubtitle:
      "A good VSL page feels like a guided experience, not a generic sales page.",
    benefits: sharedBenefits,
    technologyTitle: "The visual story behind the system",
    technologySubtitle:
      "Use the placeholder media area to swap in the final video, product render, or motion asset later.",
    technologyCards: [
      {
        title: "Video slot",
        description:
          "Swap in the final YouTube embed or hosted walkthrough when it is ready.",
        highlight: "Placeholder media",
      },
      {
        title: "Premium motion",
        description:
          "Use subtle glow, glass, and animated borders to keep the page feeling high-end.",
        highlight: "Visual polish",
      },
      {
        title: "Conversion path",
        description:
          "Keep the CTA close to the VSL so ad traffic never loses momentum.",
        highlight: "Direct response",
      },
    ],
    comparisonTitle: "Why the VSL page is different",
    comparisonSubtitle:
      "The comparison is about the experience, not a hard technical claim.",
    comparisonRows: [
      {
        label: "Attention flow",
        traditional: "A static brochure-like page",
        fusion44x: "A cinematic, video-led sales flow",
      },
      {
        label: "Next step",
        traditional: "Buried or unclear",
        fusion44x: "Clear consultation or checkout CTA",
      },
      {
        label: "Visual quality",
        traditional: "Generic marketing layout",
        fusion44x: "Premium dark SaaS-style finish",
      },
      {
        label: "Ad traffic fit",
        traditional: "Easy to bounce from",
        fusion44x: "Built to keep the viewer moving",
      },
    ],
    financingTitle: "After the video, keep the purchase path simple.",
    financingSubtitle:
      "The VSL should create interest; the CTA should make the next step obvious.",
    financingBadge: "Video campaign",
    financingBullets: [
      "Use the VSL to educate quickly",
      "Offer consultation for fit questions",
      "Keep checkout available for ready buyers",
    ],
    testimonialsTitle: "VSL proof placeholder",
    testimonialsSubtitle:
      "Replace with real reviews or case studies once they are approved for the campaign.",
    testimonials: sharedTestimonials,
    faqTitle: "Video sales letter questions",
    faqSubtitle: "Keep the answers short and useful.",
    faqs: sharedFaqs,
    finalTitle: "Watch the walkthrough, then take the next step.",
    finalSubtitle:
      "The video can start the conversation, but the CTA should always stay close.",
    finalPrimaryCtaLabel: "Buy Now",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Finance Options",
    finalSecondaryCtaTarget: "finance",
  },
};
