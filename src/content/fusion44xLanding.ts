import type { Fusion44xDestination } from "@/lib/fusion44xLinks";

export type Fusion44xLandingSlug =
  | "chlorine-free-pool"
  | "chlorine-free-pool2"
  | "science-of-purity"
  | "science-of-purity-2"
  | "science-of-purity-3"
  | "financing"
  | "financing-2"
  | "financing-3"
  | "obsolete-tech-diagnostic-table-2"
  | "30-day-tactical-content-loop-2"
  | "design-system-blueprint-2"
  | "linguistic-token-filter-2"
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

const diagnosticTable2Benefits = [
  {
    title: "Clear replacement story",
    description:
      "Frame Fusion44x as the upgrade path when the old stack of salt, UV, ozone, and ionizer talk starts sounding tired.",
  },
  {
    title: "Decision-ready table",
    description:
      "Use a clean comparison table so the buyer can see the tradeoffs without digging through a pile of marketing fluff.",
  },
  {
    title: "Myth check",
    description:
      "Call out the limits of legacy pool-tech positioning without getting sloppy about unsupported claims.",
  },
  {
    title: "Win summary",
    description:
      "End with the reason Fusion44x wins in one or two plain-English sentences.",
  },
];

const diagnosticTable2Faqs = [
  {
    question: "What is this page comparing?",
    answer:
      "It compares Fusion44x against saltwater, UV/ozone, and copper ionizer approaches so buyers can see the upgrade story fast.",
  },
  {
    question: "Why lead with the table?",
    answer:
      "Because the comparison does the heavy lifting. Once the tradeoffs are obvious, the next step is easier to trust.",
  },
  {
    question: "What should the CTA do?",
    answer:
      "Push the visitor toward a consultation or fit check if they want the comparison explained in human terms.",
  },
  {
    question: "Should the old pages be replaced?",
    answer:
      "No. This is a new numbered variant, not a replacement for the original campaign pages.",
  },
];

const tacticalLoop2Benefits = [
  {
    title: "30-day cadence",
    description:
      "Break the month into a repeatable rhythm so posting, follow-up, and review do not depend on memory.",
  },
  {
    title: "DM routing",
    description:
      "Show exactly how comments, DMs, and replies move into the next step without getting lost.",
  },
  {
    title: "CRM hygiene",
    description:
      "Make the handoff into the CRM feel like the normal end of a content action, not an afterthought.",
  },
  {
    title: "Repeatable machine",
    description:
      "Treat the loop like a machine that can be rerun every month without rebuilding the plan from scratch.",
  },
];

const tacticalLoop2Faqs = [
  {
    question: "What is the loop for?",
    answer:
      "It is a 30-day content system for posts, DMs, follow-up, and CRM routing that can be repeated instead of reinvented.",
  },
  {
    question: "Does it require a lot of manual work?",
    answer:
      "No. The point is to turn the same structure into a predictable operating rhythm.",
  },
  {
    question: "Why include CRM routing?",
    answer:
      "Because content that gets attention but never gets captured is just expensive noise.",
  },
  {
    question: "What should the visitor do next?",
    answer:
      "Map the loop to their own pipeline or book a strategy conversation if they want help implementing it.",
  },
];

const blueprint2Benefits = [
  {
    title: "Color discipline",
    description:
      "Define the palette once so every page feels like it belongs to the same system.",
  },
  {
    title: "Type hierarchy",
    description:
      "Lock in typography rules so headlines, body copy, and utility text never fight each other.",
  },
  {
    title: "Imagery rules",
    description:
      "Show what kinds of images belong and which ones will break the tone immediately.",
  },
  {
    title: "Do-not list",
    description:
      "Name the mistakes the brand should stop repeating, not just the things it should use more of.",
  },
];

const blueprint2Faqs = [
  {
    question: "Is this a brand guide or a landing page?",
    answer:
      "It is both: a landing page that explains the brand rules and a blueprint for the pages that follow.",
  },
  {
    question: "Why bother with a design system page now?",
    answer:
      "Because a consistent system saves time, prevents drift, and makes future campaign pages easier to build.",
  },
  {
    question: "What should be listed as not allowed?",
    answer:
      "Anything off-brand, too generic, or visually noisy enough to dilute the premium feel.",
  },
  {
    question: "How does this help conversion?",
    answer:
      "A cleaner system makes the whole funnel feel more trustworthy and easier to skim.",
  },
];

const tokenFilter2Benefits = [
  {
    title: "Approved language",
    description:
      "Define the words that should be used consistently so the offer sounds sharp and repeatable.",
  },
  {
    title: "Banned phrases",
    description:
      "List the dead phrases that make the brand sound weak, noisy, or too generic.",
  },
  {
    title: "Positioning clarity",
    description:
      "Turn the product story into a cleaner sentence before it gets fed into ads or landing pages.",
  },
  {
    title: "Conversion tone",
    description:
      "Keep the language calmer and more credible so the message converts without sounding desperate.",
  },
];

const tokenFilter2Faqs = [
  {
    question: "What is a token filter here?",
    answer:
      "It is a simple message filter that defines what should and should not appear in the copy.",
  },
  {
    question: "Why include forbidden language?",
    answer:
      "Because eliminating bad phrasing is often faster than writing better copy from scratch.",
  },
  {
    question: "Does this replace brand voice?",
    answer:
      "No. It sharpens the voice so the brand sounds more intentional and less scattered.",
  },
  {
    question: "What comes next after the filter?",
    answer:
      "Use the approved language in ads, pages, DMs, and CRM templates so the whole system stays aligned.",
  },
];

const scienceOfPurityBenefits = [
  {
    title: "Hydroxyl-radical story",
    description:
      "Frame the Hydro-pH-Infusion pitch around highly reactive hydroxyl radicals that break down unwanted compounds quickly.",
  },
  {
    title: "Cleaner water language",
    description:
      "Keep the benefit on the water experience itself so the copy feels premium, calm, and easy to scan.",
  },
  {
    title: "Simple science, not jargon",
    description:
      "Explain the process in plain English so the buyer understands why the system matters without a chemistry lecture.",
  },
  {
    title: "Consultation-safe path",
    description:
      "Let cautious visitors confirm fit before they move forward, instead of forcing a hard sell too early.",
  },
  {
    title: "Brand-aligned presentation",
    description:
      "Use the HHS style guide as the tone and visual reference: clear, blue-forward, and easy to trust.",
  },
  {
    title: "Paid-traffic ready",
    description:
      "Keep the hierarchy short enough for ad clicks, mobile scans, and a fast decision path.",
  },
];

const scienceOfPurityFaqs = [
  {
    question: "What is Hydro-pH-Infusion?",
    answer:
      "Hydro-pH-Infusion is the science-forward name for the Fusion44x water experience on this page. The copy should keep the explanation simple, premium, and easy to compare.",
  },
  {
    question: "How do hydroxyl radicals help?",
    answer:
      "Hydroxyl radicals are highly reactive and short-lived, which makes them useful for rapidly breaking down unwanted compounds in a water treatment process.",
  },
  {
    question: "Is this a chemical-first pool page?",
    answer:
      "No. The page should explain the technology in a cleaner, more premium way while keeping the conversation focused on fit and next steps.",
  },
  {
    question: "What should the CTA do?",
    answer:
      "The primary path should let visitors continue into checkout or a specialist conversation, depending on how confident they are.",
  },
];

const scienceOfPurity2Benefits = [
  {
    title: "Saltwater myth-busting",
    description:
      "Explain that salt systems still generate chlorine, so the visitor understands the difference between saltwater branding and actual water treatment.",
  },
  {
    title: "Cleaner science story",
    description:
      "Use plain language to show why Hydro-pH-Infusion is a more premium explanation than generic pool chemistry chatter.",
  },
  {
    title: "Reactive oxygen framing",
    description:
      "Describe hydroxyl radicals as highly reactive, short-lived oxidants that help break down unwanted compounds quickly.",
  },
  {
    title: "Trust-first health angle",
    description:
      "Keep the health discussion measured: fewer harsh-feeling pool conditions and a calmer ownership story, not miracle claims.",
  },
  {
    title: "Master briefing CTA",
    description:
      "Offer a downloadable briefing-style next step so the page can keep educating while still moving the lead forward.",
  },
  {
    title: "Video-ready layout",
    description:
      "Support stitch/react and split-screen creative with a structure that can feed both ads and a landing page.",
  },
];

const scienceOfPurity2Faqs = [
  {
    question: "Is saltwater better?",
    answer:
      "Saltwater systems are not the same as a chlorine-free or chemical-free experience. Salt systems still create chlorine, so the story should focus on what the buyer is actually getting, not just the label.",
  },
  {
    question: "What makes Hydro-pH-Infusion different?",
    answer:
      "Hydro-pH-Infusion is the Fusion44x story for a more premium water experience, with the explanation centered on reactive chemistry instead of routine chemical management.",
  },
  {
    question: "How do hydroxyl radicals work?",
    answer:
      "Hydroxyl radicals are highly reactive, short-lived oxidants. In a water-treatment context, that means they react quickly and do not linger as part of the pool experience.",
  },
  {
    question: "What should I do next?",
    answer:
      "If the science makes sense, the cleanest next step is to download the briefing or book a specialist conversation so the fit can be confirmed without pressure.",
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
  "science-of-purity": {
    slug: "science-of-purity",
    seoTitle: "The Science of Purity",
    heroImage: "/poolex4.webp",
    heroImageAlt: "Fusion44x system presented in a premium water-technology setting",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "A premium Fusion44x landing page that explains Hydro-pH-Infusion, highlights hydroxyl radicals, and routes qualified visitors to consultation or checkout.",
    heroEyebrow: "Monday campaign: The Science of Purity",
    heroHeadline: "The Science of Purity Starts with Hydro-pH-Infusion.",
    heroSubheadline:
      "Show buyers how Hydro-pH-Infusion uses highly reactive hydroxyl radicals to break down unwanted compounds quickly, then guide them to the next step.",
    primaryCtaLabel: "See If It Fits My Pool",
    primaryCtaTarget: "consultation",
    secondaryCtaLabel: "Explore Checkout Options",
    secondaryCtaTarget: "checkout",
    heroStats: [
      { value: "Fast", label: "reactive hydroxyl-radical story" },
      { value: "Premium", label: "science-forward presentation" },
      { value: "Clear", label: "consultation or checkout next step" },
    ],
    trustBar: [
      "Hydro-pH-Infusion story",
      "Hydroxyl-radical explanation",
      "Brand-guide aligned tone",
      "Mobile-first conversion path",
    ],
    vslEyebrow: "Science, simplified",
    vslTitle: "Explain the chemistry without turning the page into a textbook.",
    vslDescription:
      "The goal is to make the process feel credible and premium, while keeping the buyer focused on the practical result.",
    vslBullets: [
      "How Hydro-pH-Infusion fits the ownership story",
      "Why hydroxyl radicals matter in the treatment process",
      "When to choose the consultation path versus checkout",
    ],
    problemTitle: "Why buyers need a better science story",
    problemIntro:
      "Most pool pages either drown visitors in jargon or flatten the technology into vague hype. This page should do neither.",
    problemItems: [
      "The buyer does not understand why the process is different",
      "The language feels technical without feeling trustworthy",
      "The next step is not obvious enough for ad traffic",
      "The brand story is lost when the science gets overcooked",
    ],
    solutionTitle: "What this page should solve",
    solutionIntro:
      "Use the science to build confidence, keep the tone premium and simple, and then offer a clean next move.",
    solutionItems: [
      "Introduce Hydro-pH-Infusion in plain English",
      "Explain hydroxyl radicals as the active, fast-moving part of the story",
      "Keep the visuals blue-forward, modern, and brand-consistent",
      "Route uncertain buyers into consultation without friction",
    ],
    benefitsTitle: "Why the Science of Purity angle works",
    benefitsSubtitle:
      "The page should feel like a clean explanation, not a lecture or a billboard.",
    benefits: scienceOfPurityBenefits,
    technologyTitle: "How the Hydro-pH-Infusion story should read",
    technologySubtitle:
      "Keep the copy grounded, premium, and readable in one pass, following the HHS brand style guide.",
    technologyCards: [
      {
        title: "Reactive chemistry",
        description:
          "Hydroxyl radicals are short-lived and highly reactive, which is why the explanation centers on fast breakdown of unwanted compounds.",
        highlight: "Core science",
      },
      {
        title: "Contained process",
        description:
          "Position the system as a controlled in-unit process instead of an open-ended chemical dump.",
        highlight: "Product framing",
      },
      {
        title: "Simple buyer path",
        description:
          "Let the buyer decide whether they want to continue to checkout or ask a specialist a few questions first.",
        highlight: "Conversion path",
      },
    ],
    comparisonTitle: "Compare the usual pool story with the science-first version",
    comparisonSubtitle:
      "This keeps the page honest while showing why a clearer explanation converts better.",
    comparisonRows: [
      {
        label: "Technology explanation",
        traditional: "Generic claims with little detail",
        fusion44x: "A clear Hydro-pH-Infusion story with a defined active process",
      },
      {
        label: "Science language",
        traditional: "Jargon that confuses the buyer",
        fusion44x: "Plain-English explanation of hydroxyl radicals and why they matter",
      },
      {
        label: "Buyer confidence",
        traditional: "Unclear whether the page is trustworthy",
        fusion44x: "Premium, calm, and easier to evaluate at a glance",
      },
      {
        label: "Next step",
        traditional: "No obvious action",
        fusion44x: "Consultation first, checkout second, with no dead ends",
      },
    ],
    financingTitle: "Keep the upgrade within reach",
    financingSubtitle:
      "The science matters, but the payment story still needs to feel simple and manageable.",
    financingBadge: "Premium ownership path",
    financingBullets: [
      "Keep the monthly language visible for ready buyers",
      "Let uncertain visitors go to consultation without pressure",
      "Preserve a clean transition into the live checkout flow",
    ],
    testimonialsTitle: "Owner feedback placeholder",
    testimonialsSubtitle:
      "Replace these cards with approved quotes or science-led case studies when available.",
    testimonials: sharedTestimonials,
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Answers should stay clear, calm, and legally sane.",
    faqs: scienceOfPurityFaqs,
    finalTitle: "Ready to see whether Hydro-pH-Infusion fits your pool?",
    finalSubtitle:
      "Continue into checkout if you are ready, or use the consultation path if you want the fit explained first.",
    finalPrimaryCtaLabel: "See If It Fits My Pool",
    finalPrimaryCtaTarget: "consultation",
    finalSecondaryCtaLabel: "Explore Checkout Options",
    finalSecondaryCtaTarget: "checkout",
  },
  "science-of-purity-2": {
    slug: "science-of-purity-2",
    seoTitle: "The Science of Purity",
    heroImage: "/poolex4.webp",
    heroImageAlt: "Fusion44x system in a premium, science-forward presentation",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "A science-first Fusion44x landing page that breaks down saltwater myths, explains Hydro-pH-Infusion, and gives buyers a clean next step.",
    heroEyebrow: "Monday CTA: The Science of Purity",
    heroHeadline: "Everyone thinks saltwater is the natural choice. They’re wrong.",
    heroSubheadline:
      "This page explains Hydro-pH-Infusion in plain English, shows why hydroxyl radicals are the active part of the story, and keeps the next step simple.",
    primaryCtaLabel: "Get the Master Briefing",
    primaryCtaTarget: "consultation",
    secondaryCtaLabel: "See Checkout Options",
    secondaryCtaTarget: "checkout",
    heroStats: [
      { value: "Fast", label: "science explained without fluff" },
      { value: "Clear", label: "saltwater myth-busting" },
      { value: "Simple", label: "briefing or checkout next step" },
    ],
    trustBar: [
      "Hydro-pH-Infusion explained",
      "Saltwater myth-busted",
      "Reactive oxygen story",
      "Brand-guide aligned copy",
    ],
    vslEyebrow: "Science explainer",
    vslTitle: "Show the chemistry, then get out of the way.",
    vslDescription:
      "This version is built for people who want the logic first, then the offer. Keep it readable, visual, and calm.",
    vslBullets: [
      "Use a stitch/react or split-screen video treatment",
      "Explain the chemistry without overpromising",
      "Move viewers toward the briefing or a specialist call",
    ],
    problemTitle: "Why the usual pool story falls apart",
    problemIntro:
      "Saltwater branding sounds safer than it often is. If the page does not explain the chemistry, buyers stay confused.",
    problemItems: [
      "Salt systems still generate chlorine",
      "Pool chemistry is often explained in a way that feels defensive",
      "Health concerns get exaggerated or oversimplified",
      "The buyer leaves without a clear next step",
    ],
    solutionTitle: "What the Science of Purity page should do",
    solutionIntro:
      "Show the buyer the mechanism, keep the tone premium, and offer a low-friction briefing path when they want more detail.",
    solutionItems: [
      "Define Hydro-pH-Infusion in one sentence",
      "Explain hydroxyl radicals as the fast-acting part of the process",
      "Contrast the story against saltwater and chlorine-first thinking",
      "Use a briefing CTA that feels educational, not pushy",
    ],
    benefitsTitle: "Why this version should convert",
    benefitsSubtitle:
      "The page should feel like the sensible version of the conversation, not the loudest one.",
    benefits: scienceOfPurity2Benefits,
    technologyTitle: "The science explainer should read like this",
    technologySubtitle:
      "Keep the explanation direct enough for a reel, but polished enough for a landing page.",
    technologyCards: [
      {
        title: "Saltwater reframe",
        description:
          "Saltwater is often marketed as natural, but the system still generates chlorine. The page should say that plainly and move on.",
        highlight: "Myth-busting",
      },
      {
        title: "Reactive radicals",
        description:
          "Hydroxyl radicals are short-lived and highly reactive, which is the core science point buyers need to remember.",
        highlight: "Core concept",
      },
      {
        title: "Video-friendly hook",
        description:
          "Use a strong opening line, a clean split-screen visual, and a quick CTA to the briefing or consultation.",
        highlight: "Creative ready",
      },
    ],
    comparisonTitle: "Compare the old story with the science-first version",
    comparisonSubtitle:
      "This is where the page earns trust by being specific instead of dramatic.",
    comparisonRows: [
      {
        label: "Saltwater positioning",
        traditional: "Natural-sounding but vague",
        fusion44x: "Clear about what salt systems actually do",
      },
      {
        label: "Chemistry explanation",
        traditional: "Too technical or too slippery",
        fusion44x: "Plain-English Hydro-pH-Infusion story",
      },
      {
        label: "Health framing",
        traditional: "Overstated or scary",
        fusion44x: "Measured and trust-first",
      },
      {
        label: "Lead path",
        traditional: "Confusing or dead-end",
        fusion44x: "Download the briefing or book a specialist",
      },
    ],
    financingTitle: "Keep the action path obvious",
    financingSubtitle:
      "Education should lead into a clean decision, not stall the buyer after they’ve paid attention.",
    financingBadge: "Briefing-first",
    financingBullets: [
      "Use the briefing CTA as the primary educational next step",
      "Keep checkout available for people already convinced",
      "Use consultation for buyers who want a human check",
    ],
    testimonialsTitle: "Proof placeholder",
    testimonialsSubtitle:
      "Replace these with approved testimonials, expert quotes, or case-study snippets later.",
    testimonials: sharedTestimonials,
    faqTitle: "FAQ breakdown",
    faqSubtitle: "Address the sticky questions before they bounce.",
    faqs: scienceOfPurity2Faqs,
    finalTitle: "If the science makes sense, take the briefing.",
    finalSubtitle:
      "Start with the master briefing, or continue to checkout if you already know the fit is right.",
    finalPrimaryCtaLabel: "Get the Master Briefing",
    finalPrimaryCtaTarget: "consultation",
    finalSecondaryCtaLabel: "See Checkout Options",
    finalSecondaryCtaTarget: "checkout",
  },
  "science-of-purity-3": {
    slug: "science-of-purity-3",
    seoTitle: "The Science of Purity",
    heroImage: "/poolex4.webp",
    heroImageAlt: "Fusion44x system in a premium science-forward presentation",
    productImage: "/poolex4.webp",
    productImageAlt: "Fusion44x premium pool sanitation system",
    seoDescription:
      "A checkout-forward Science of Purity landing page that keeps the Hydro-pH-Infusion story simple, premium, and ready for conversion.",
    heroEyebrow: "Monday CTA: The Science of Purity",
    heroHeadline: "Chlorine is old tech. Hydro-pH-Infusion is the upgrade.",
    heroSubheadline:
      "Show how hydroxyl radicals work fast, keep the science easy to understand, and move ready buyers straight toward checkout.",
    primaryCtaLabel: "See Checkout Options",
    primaryCtaTarget: "checkout",
    secondaryCtaLabel: "Get the Master Briefing",
    secondaryCtaTarget: "consultation",
    heroStats: [
      { value: "Direct", label: "checkout-first framing" },
      { value: "Fast", label: "hydroxyl-radical science" },
      { value: "Clear", label: "briefing as backup path" },
    ],
    trustBar: [
      "Checkout-forward CTA",
      "Hydro-pH-Infusion story",
      "Science made simple",
      "Brand-guide aligned tone",
    ],
    vslEyebrow: "Conversion version",
    vslTitle: "Lead with the product path, not the homework.",
    vslDescription:
      "This version keeps the science present but makes the purchase path the obvious move for ready buyers.",
    vslBullets: [
      "Explain the process in one clean pass",
      "Keep checkout visually dominant",
      "Use consultation only for visitors who still need reassurance",
    ],
    problemTitle: "What slows the sale down",
    problemIntro:
      "If the buyer already believes the science, extra education just gets in the way. The page should cut straight to the action.",
    problemItems: [
      "Too much explanation can delay the click",
      "Buyers want to know the upgrade path quickly",
      "The brand still needs to stay credible and calm",
      "The page has to work for paid traffic on mobile",
    ],
    solutionTitle: "How this version should convert",
    solutionIntro:
      "Use a premium science story to support the purchase, then give the buyer one obvious primary action.",
    solutionItems: [
      "Keep Hydro-pH-Infusion front and center",
      "Use hydroxyl radicals as the credibility anchor",
      "Make checkout the primary CTA throughout the page",
      "Offer the briefing and consultation only as backup paths",
    ],
    benefitsTitle: "Why the checkout-first version works",
    benefitsSubtitle:
      "Ready buyers should not have to hunt for the buy path after they’ve already bought the idea.",
    benefits: scienceOfPurityBenefits,
    technologyTitle: "How the science should read here",
    technologySubtitle:
      "The copy should sound smart, but it should still feel like a sales page that knows where the button is.",
    technologyCards: [
      {
        title: "Fast-reacting chemistry",
        description:
          "Explain hydroxyl radicals as the active part of the process so the buyer understands why this is different.",
        highlight: "Science anchor",
      },
      {
        title: "Premium ownership feel",
        description:
          "Keep the water story calm and high-end so the conversion path feels like an upgrade, not a gamble.",
        highlight: "Product story",
      },
      {
        title: "Checkout first",
        description:
          "Make the purchase action the strongest visual and textual cue on the page.",
        highlight: "Conversion focus",
      },
    ],
    comparisonTitle: "What changes when checkout leads",
    comparisonSubtitle:
      "This version reduces friction by making the sale path obvious for buyers who already want the product.",
    comparisonRows: [
      {
        label: "Primary action",
        traditional: "Ask questions first",
        fusion44x: "Go straight to checkout",
      },
      {
        label: "Science content",
        traditional: "Long explanation before the button",
        fusion44x: "Short, credible explanation that supports the click",
      },
      {
        label: "Buyer mindset",
        traditional: "Still deciding",
        fusion44x: "Already convinced, just needs the path",
      },
      {
        label: "Backup option",
        traditional: "No clear fallback",
        fusion44x: "Briefing or consultation if needed",
      },
    ],
    financingTitle: "Make the path to purchase obvious",
    financingSubtitle:
      "If the visitor is ready, do not make them work for it. Put the checkout path up front.",
    financingBadge: "Checkout-first",
    financingBullets: [
      "Use checkout as the primary action",
      "Keep the master briefing available for detail-oriented buyers",
      "Use consultation as the fallback if they still need fit confirmation",
    ],
    testimonialsTitle: "Proof placeholder",
    testimonialsSubtitle:
      "Replace these with approved customer feedback, expert quotes, or case-study snippets later.",
    testimonials: sharedTestimonials,
    faqTitle: "Checkout questions",
    faqSubtitle: "Give the buyer enough confidence to move now.",
    faqs: scienceOfPurity2Faqs,
    finalTitle: "If you already know the fit, go straight to checkout.",
    finalSubtitle:
      "The science is here to support the decision, not delay it.",
    finalPrimaryCtaLabel: "See Checkout Options",
    finalPrimaryCtaTarget: "checkout",
    finalSecondaryCtaLabel: "Get the Master Briefing",
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
  "obsolete-tech-diagnostic-table-2": {
    slug: "obsolete-tech-diagnostic-table-2",
    seoTitle: "Fusion44x Obsolete Tech Diagnostic Table",
    seoDescription:
      "A comparison-table landing page built from the 9-picture source set. Compare Fusion44x with saltwater, UV/ozone, and copper ionizers, then summarize why the upgrade wins.",
    heroEyebrow: "9-picture diagnostic pass",
    heroHeadline: "Compare Fusion44x Against the Old Pool-Tech Stack.",
    heroSubheadline:
      "This page turns the 9-picture source set into a clean comparison table so buyers can see why Fusion44x beats saltwater, UV/ozone, and copper ionizers without reading a white paper.",
    primaryCtaLabel: "See the Fit",
    primaryCtaTarget: "consultation",
    secondaryCtaLabel: "Open Main Site",
    secondaryCtaTarget: "main",
    heroStats: [
      { value: "4 lanes", label: "legacy tech compared side by side" },
      { value: "Plain English", label: "no chemistry fog machine" },
      { value: "Decision-ready", label: "table first, summary second" },
    ],
    trustBar: [
      "Built from 9-picture source set",
      "Fusion44x vs legacy systems",
      "Table-first conversion flow",
      "Plain-English win summary",
    ],
    vslEyebrow: "Comparison table",
    vslTitle: "The table should do the selling for you.",
    vslDescription:
      "Use the comparison to show what Fusion44x replaces, what it improves, and why the older approaches stop short.",
    vslBullets: [
      "Saltwater still leans on chlorine generation",
      "UV and ozone can help, but they are not the whole story",
      "Copper ionizers add another legacy maintenance branch",
    ],
    problemTitle: "Why the old stack feels obsolete",
    problemIntro:
      "Buyers often get pushed into a pile of half-explanations: saltwater branding, UV add-ons, ozone claims, and ionizer side quests.",
    problemItems: [
      "The story is fragmented before the buyer even understands the system",
      "Each legacy option adds another layer of maintenance or explanation",
      "The comparison is usually written by marketing, not by decision logic",
      "The page needs a clean summary of why the upgrade wins",
    ],
    solutionTitle: "What this table should solve",
    solutionIntro:
      "The table should make the tradeoffs obvious, then end with a short explanation of why Fusion44x is the cleaner path.",
    solutionItems: [
      "Compare Fusion44x directly against saltwater, UV/ozone, and copper ionizers",
      "Keep the language concise enough for quick scanning",
      "End with a clear reason the newer system wins",
      "Send interested visitors into a specialist fit check",
    ],
    benefitsTitle: "Why the diagnostic table works",
    benefitsSubtitle:
      "The 9-picture source set becomes a practical comparison tool instead of a design exercise.",
    benefits: diagnosticTable2Benefits,
    technologyTitle: "How the comparison should read",
    technologySubtitle:
      "The cards should feel like an executive summary, not a feature dump.",
    technologyCards: [
      {
        title: "Saltwater lane",
        description:
          "Call out that salt systems still rely on chlorine generation, so the label sounds cleaner than the underlying chemistry.",
        highlight: "Myth check",
      },
      {
        title: "UV / ozone lane",
        description:
          "Acknowledge the usefulness of UV and ozone without letting the page pretend they solve every part of the problem.",
        highlight: "Partial answer",
      },
      {
        title: "Copper ionizer lane",
        description:
          "Show how ionizers add another legacy maintenance branch instead of replacing the need for a clearer system story.",
        highlight: "Legacy stack",
      },
    ],
    comparisonTitle: "Fusion44x wins where the old stack gets messy",
    comparisonSubtitle:
      "The summary row should make it obvious why the upgrade deserves the buyer's attention.",
    comparisonRows: [
      {
        label: "Saltwater",
        traditional: "Still generates chlorine and leans on branding more than clarity",
        fusion44x: "Cleaner story with a more direct ownership path",
      },
      {
        label: "UV / ozone",
        traditional: "Useful support, but not the whole decision",
        fusion44x: "Presented as the system that simplifies the pitch",
      },
      {
        label: "Copper ionizers",
        traditional: "Another legacy maintenance branch to explain",
        fusion44x: "A more streamlined premium option",
      },
      {
        label: "Bottom line",
        traditional: "Complicated and fragmented",
        fusion44x: "One cleaner, easier-to-understand upgrade path",
      },
    ],
    financingTitle: "Why the winner should still feel reachable",
    financingSubtitle:
      "The table should close the gap between interest and action, not create a new one.",
    financingBadge: "Comparison-first",
    financingBullets: [
      "Use the table to justify the upgrade",
      "Keep consultation ready for buyers who want a human review",
      "Let the main site and payment flow stay available for ready buyers",
    ],
    testimonialsTitle: "Table proof placeholder",
    testimonialsSubtitle:
      "Swap in approval-only proof once the comparison is validated for the campaign.",
    testimonials: sharedTestimonials,
    faqTitle: "Diagnostic table questions",
    faqSubtitle: "Answer the obvious comparison objections quickly.",
    faqs: diagnosticTable2Faqs,
    finalTitle: "If the old stack feels tired, compare the upgrade path.",
    finalSubtitle:
      "Use the table to see the difference, then move into consultation if you want the fit explained.",
    finalPrimaryCtaLabel: "See the Fit",
    finalPrimaryCtaTarget: "consultation",
    finalSecondaryCtaLabel: "Open Main Site",
    finalSecondaryCtaTarget: "main",
  },
  "30-day-tactical-content-loop-2": {
    slug: "30-day-tactical-content-loop-2",
    seoTitle: "Fusion44x 30-Day Tactical Content Loop",
    seoDescription:
      "A 30-day content cadence page built from the 9-picture source set. Show the repeatable machine for posts, DMs, and CRM routing.",
    heroEyebrow: "9-picture cadence map",
    heroHeadline: "Run the Same Content Loop Every 30 Days.",
    heroSubheadline:
      "Use the 9-picture source set to define a repeatable machine for content, DM follow-up, and CRM routing so the work stops depending on memory.",
    primaryCtaLabel: "Map My Loop",
    primaryCtaTarget: "consultation",
    secondaryCtaLabel: "Open Main Site",
    secondaryCtaTarget: "main",
    heroStats: [
      { value: "30 days", label: "one repeatable campaign cycle" },
      { value: "3 channels", label: "posts, DMs, and CRM" },
      { value: "1 machine", label: "the same loop every month" },
    ],
    trustBar: [
      "Built from 9-picture source set",
      "Posts, DMs, CRM routing",
      "Repeatable monthly cadence",
      "No more ad hoc guessing",
    ],
    vslEyebrow: "Cadence, not chaos",
    vslTitle: "Treat content like an operating system.",
    vslDescription:
      "The page should show how one content loop can be repeated month after month without rethinking the whole process each time.",
    vslBullets: [
      "Use the same 30-day structure every cycle",
      "Route replies into a consistent DM path",
      "Push qualified interest into the CRM without delay",
    ],
    problemTitle: "Why content loops break down",
    problemIntro:
      "Most content plans fail because the structure lives in someone's head instead of in a repeatable system.",
    problemItems: [
      "Posting cadence changes every week",
      "Replies never get routed consistently",
      "CRM capture happens late or not at all",
      "The team has to reinvent the play every month",
    ],
    solutionTitle: "What the 30-day loop should solve",
    solutionIntro:
      "The loop should turn the strategy into a cycle that can be rerun, reviewed, and improved without rewriting it.",
    solutionItems: [
      "Plan the monthly cadence once",
      "Define what happens after each post or DM",
      "Route interest into CRM with a clear handoff",
      "Keep the loop simple enough to repeat",
    ],
    benefitsTitle: "Why the loop is worth building",
    benefitsSubtitle:
      "The 9-picture source set becomes a playbook the team can actually execute.",
    benefits: tacticalLoop2Benefits,
    technologyTitle: "The machine behind the month",
    technologySubtitle:
      "These cards should read like an ops checklist, not a motivational poster.",
    technologyCards: [
      {
        title: "Content sprint",
        description:
          "Define the weekly posts and creative outputs before the month starts so nobody guesses mid-cycle.",
        highlight: "Planning layer",
      },
      {
        title: "DM branch",
        description:
          "Specify the reply path when someone engages so the conversation does not die in the inbox.",
        highlight: "Conversation layer",
      },
      {
        title: "CRM handoff",
        description:
          "Capture the lead, tag it, and route it into the right follow-up queue as soon as interest shows up.",
        highlight: "Routing layer",
      },
    ],
    comparisonTitle: "Ad hoc content versus a working loop",
    comparisonSubtitle:
      "The contrast should make the operational value obvious at a glance.",
    comparisonRows: [
      {
        label: "Content planning",
        traditional: "Posts decided last minute",
        fusion44x: "One repeatable 30-day cadence",
      },
      {
        label: "DM follow-up",
        traditional: "Inconsistent or forgotten",
        fusion44x: "Defined branch for every response",
      },
      {
        label: "CRM routing",
        traditional: "Late or missing capture",
        fusion44x: "Immediate handoff into the system",
      },
      {
        label: "Team memory",
        traditional: "Relies on whoever remembers",
        fusion44x: "Documented loop that can be rerun",
      },
    ],
    financingTitle: "A loop is only useful if it gets used again.",
    financingSubtitle:
      "The page should finish with a clear next step that turns the idea into an actual operating plan.",
    financingBadge: "Ops-first",
    financingBullets: [
      "Map the 30-day loop to the current pipeline",
      "Use consultation if the team wants help setting it up",
      "Keep the main site open for anyone who needs more context",
    ],
    testimonialsTitle: "Loop proof placeholder",
    testimonialsSubtitle:
      "Replace with approved operational proof once the cadence is tested.",
    testimonials: sharedTestimonials,
    faqTitle: "Content loop questions",
    faqSubtitle: "Keep the answers tactical and blunt.",
    faqs: tacticalLoop2Faqs,
    finalTitle: "Build the loop once, then rerun it every month.",
    finalSubtitle:
      "If the cadence makes sense, move into consultation and turn the plan into a repeatable machine.",
    finalPrimaryCtaLabel: "Map My Loop",
    finalPrimaryCtaTarget: "consultation",
    finalSecondaryCtaLabel: "Open Main Site",
    finalSecondaryCtaTarget: "main",
  },
  "design-system-blueprint-2": {
    slug: "design-system-blueprint-2",
    seoTitle: "Fusion44x Design System Blueprint",
    seoDescription:
      "A brand-system landing page built from the 9-picture source set. Define color, typography, imagery, and the rules that keep Fusion44x consistent.",
    heroEyebrow: "9-picture brand kit",
    heroHeadline: "Build the Design System Before the Next Page Ships.",
    heroSubheadline:
      "Use the 9-picture source set to define the brand rules: color tokens, type hierarchy, imagery style, and the list of things that do not belong.",
    primaryCtaLabel: "Review the Blueprint",
    primaryCtaTarget: "consultation",
    secondaryCtaLabel: "Open Main Site",
    secondaryCtaTarget: "main",
    heroStats: [
      { value: "Colors", label: "palette and token rules" },
      { value: "Typography", label: "headline and body hierarchy" },
      { value: "Imagery", label: "approved visual style" },
    ],
    trustBar: [
      "Built from 9-picture source set",
      "Color tokens and spacing rules",
      "Typography guardrails",
      "Do / don't library",
    ],
    vslEyebrow: "Brand system",
    vslTitle: "Treat the brand like a blueprint, not a vibe.",
    vslDescription:
      "This page should make the design decisions feel documented and repeatable instead of subjective.",
    vslBullets: [
      "Define the palette and token names clearly",
      "Lock in type hierarchy and spacing rules",
      "Show the imagery style that belongs in the brand",
    ],
    problemTitle: "Why brand drift keeps happening",
    problemIntro:
      "When the design system is fuzzy, every new page improvises a little differently and the brand starts to wobble.",
    problemItems: [
      "Color choices drift from page to page",
      "Typography gets too many voices",
      "Images stop matching the tone",
      "The team has no clean do-not list",
    ],
    solutionTitle: "What the blueprint should solve",
    solutionIntro:
      "The blueprint should turn the brand into a shared reference that keeps future pages from going off the rails.",
    solutionItems: [
      "Document the palette and type hierarchy",
      "Show approved imagery treatment",
      "List the mistakes that should be avoided",
      "Give the team a system they can actually use",
    ],
    benefitsTitle: "Why the system matters",
    benefitsSubtitle:
      "The 9-picture source set becomes a working brand guide instead of a loose reference board.",
    benefits: blueprint2Benefits,
    technologyTitle: "What belongs in the system",
    technologySubtitle:
      "The cards should read like a style guide, not a mood board.",
    technologyCards: [
      {
        title: "Palette",
        description:
          "Define the blues, neutrals, and accent colors that keep the brand visually consistent.",
        highlight: "Color system",
      },
      {
        title: "Type stack",
        description:
          "Set the hierarchy for headlines, subheads, and body text so every page scans the same way.",
        highlight: "Typography rules",
      },
      {
        title: "Imagery style",
        description:
          "Specify the lighting, crops, and tone that future pages should follow.",
        highlight: "Visual guardrails",
      },
    ],
    comparisonTitle: "A system beats improvisation",
    comparisonSubtitle:
      "The comparison should make it obvious why design rules are a speed boost, not bureaucracy.",
    comparisonRows: [
      {
        label: "Color usage",
        traditional: "Random choices each time",
        fusion44x: "A defined palette with reusable tokens",
      },
      {
        label: "Typography",
        traditional: "Too many styles competing",
        fusion44x: "One hierarchy that stays consistent",
      },
      {
        label: "Imagery",
        traditional: "Whatever looks okay in the moment",
        fusion44x: "Approved visual language with guardrails",
      },
      {
        label: "Workflow",
        traditional: "Every page feels custom in the wrong way",
        fusion44x: "A system that speeds up future builds",
      },
    ],
    financingTitle: "A good blueprint saves time on every page after this one.",
    financingSubtitle:
      "Once the system is clear, the next landing page gets easier instead of harder.",
    financingBadge: "System-first",
    financingBullets: [
      "Use the blueprint before the next launch",
      "Let consultation fill in the gaps if the team wants help applying it",
      "Keep the main site available as the living reference",
    ],
    testimonialsTitle: "Blueprint proof placeholder",
    testimonialsSubtitle:
      "Swap in approved design feedback when the system is signed off.",
    testimonials: sharedTestimonials,
    faqTitle: "Design-system questions",
    faqSubtitle: "Answer the rules questions before they turn into style drift.",
    faqs: blueprint2Faqs,
    finalTitle: "If it doesn't fit the system, it doesn't ship.",
    finalSubtitle:
      "Use the blueprint to keep the next pages aligned, then review it with a specialist if the team wants help.",
    finalPrimaryCtaLabel: "Review the Blueprint",
    finalPrimaryCtaTarget: "consultation",
    finalSecondaryCtaLabel: "Open Main Site",
    finalSecondaryCtaTarget: "main",
  },
  "linguistic-token-filter-2": {
    slug: "linguistic-token-filter-2",
    seoTitle: "Fusion44x Linguistic Token Filter",
    seoDescription:
      "A copy and messaging landing page built from the 9-picture source set. Define approved language, forbidden phrases, positioning, and cleaner conversion copy.",
    heroEyebrow: "9-picture message filter",
    heroHeadline: "Filter the Words Before They Hit the Page.",
    heroSubheadline:
      "Use the 9-picture source set to define approved language, banned phrases, positioning statements, and cleaner conversion copy across the funnel.",
    primaryCtaLabel: "Review the Language",
    primaryCtaTarget: "consultation",
    secondaryCtaLabel: "Open Main Site",
    secondaryCtaTarget: "main",
    heroStats: [
      { value: "Approved copy", label: "what should always be said" },
      { value: "Banned phrases", label: "what should never ship" },
      { value: "Cleaner tone", label: "the words convert better" },
    ],
    trustBar: [
      "Built from 9-picture source set",
      "Approved language list",
      "Forbidden phrase list",
      "Conversion tone guardrails",
    ],
    vslEyebrow: "Copy system",
    vslTitle: "Words are part of the product.",
    vslDescription:
      "The page should show how a small set of language rules can make the whole funnel sound sharper and more believable.",
    vslBullets: [
      "Define the preferred language once",
      "Remove phrases that weaken trust",
      "Keep the positioning sentence clean and repeatable",
    ],
    problemTitle: "Why copy drifts off brand",
    problemIntro:
      "Without a filter, pages, DMs, and ads start using different words for the same idea and the message gets noisy.",
    problemItems: [
      "The offer sounds different in every channel",
      "Buzzy language replaces clear positioning",
      "A few bad phrases make the brand feel weaker",
      "Conversion copy loses confidence when it gets sloppy",
    ],
    solutionTitle: "What the token filter should solve",
    solutionIntro:
      "The filter should create a shared language system that keeps the message consistent from ads to landing pages to CRM follow-up.",
    solutionItems: [
      "Write the approved sentence first",
      "List the phrases that should never be used",
      "Keep the position statement short and repeatable",
      "Make the whole funnel sound like one voice",
    ],
    benefitsTitle: "Why the filter improves conversion",
    benefitsSubtitle:
      "The 9-picture source set becomes a message map instead of a pile of words.",
    benefits: tokenFilter2Benefits,
    technologyTitle: "What belongs in the filter",
    technologySubtitle:
      "The cards should feel like a copy deck the team can actually follow.",
    technologyCards: [
      {
        title: "Position statement",
        description:
          "Write the clean one-sentence version of what Fusion44x is and why it matters.",
        highlight: "Core message",
      },
      {
        title: "Forbidden language",
        description:
          "Call out the weak, vague, or overly noisy phrases that should never make it into the funnel.",
        highlight: "Copy guardrail",
      },
      {
        title: "Conversion tone",
        description:
          "Set the voice so the offer sounds calm, credible, and easier to trust.",
        highlight: "Funnel tone",
      },
    ],
    comparisonTitle: "Clean language beats noisy language",
    comparisonSubtitle:
      "The comparison should make the value of the filter obvious in one glance.",
    comparisonRows: [
      {
        label: "Copy quality",
        traditional: "Different wording every time",
        fusion44x: "One approved message system",
      },
      {
        label: "Positioning",
        traditional: "Buzzy and vague",
        fusion44x: "Short, clear, repeatable",
      },
      {
        label: "Trust signal",
        traditional: "Words sound overworked",
        fusion44x: "Calm, precise, and credible",
      },
      {
        label: "Team workflow",
        traditional: "Everyone rewrites from scratch",
        fusion44x: "The filter keeps the funnel aligned",
      },
    ],
    financingTitle: "A cleaner sentence makes every next step easier.",
    financingSubtitle:
      "Once the language is clean, the page can push the user toward a consultation or the main site without confusion.",
    financingBadge: "Language-first",
    financingBullets: [
      "Use the approved copy in every channel",
      "Route questions to consultation if the message needs a human",
      "Keep the main site as the always-available reference",
    ],
    testimonialsTitle: "Copy proof placeholder",
    testimonialsSubtitle:
      "Replace with approved message or conversion proof when the system is tested.",
    testimonials: sharedTestimonials,
    faqTitle: "Token-filter questions",
    faqSubtitle: "Keep the answers blunt and useful.",
    faqs: tokenFilter2Faqs,
    finalTitle: "Use the cleaner sentence, not the louder one.",
    finalSubtitle:
      "If the language feels right, move into consultation and apply the same filter everywhere else.",
    finalPrimaryCtaLabel: "Review the Language",
    finalPrimaryCtaTarget: "consultation",
    finalSecondaryCtaLabel: "Open Main Site",
    finalSecondaryCtaTarget: "main",
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
