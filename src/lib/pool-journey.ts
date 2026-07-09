export type PoolJourneyContext = "parents" | "pet-owners" | "luxury" | "general";

const contextConfig: Record<
  PoolJourneyContext,
  {
    landingHref: string;
    formHref: string;
    sourcePage?: string;
    cardButtonLabel: string;
    formButtonLabel: string;
    formEyebrow: string;
    formTitle: string;
    formSubtitle: string;
  }
> = {
  parents: {
    landingHref: "/parents",
    formHref: "/pool-analysis?segment=parents&source_page=family-pool-water",
    sourcePage: "family-pool-water",
    cardButtonLabel: "Open parents page",
    formButtonLabel: "Check family fit",
    formEyebrow: "Parents landing page",
    formTitle: "Quick recommendation quiz for families",
    formSubtitle:
      "Tell us about the pool your children swim in so the recommendation stays centered on comfort, safety, and fit.",
  },
  "pet-owners": {
    landingHref: "/pet-owners",
    formHref: "/pool-analysis?segment=pet-owners",
    cardButtonLabel: "Open pet owners page",
    formButtonLabel: "Check pet-safe fit",
    formEyebrow: "Pet owners landing page",
    formTitle: "Quick recommendation quiz for pet owners",
    formSubtitle:
      "Share a few details about the pool and we’ll keep the recommendation focused on pets, fumes, and water comfort.",
  },
  luxury: {
    landingHref: "/luxury",
    formHref: "/pool-analysis?segment=luxury",
    cardButtonLabel: "Open luxury page",
    formButtonLabel: "Check luxury fit",
    formEyebrow: "Luxury landing page",
    formTitle: "Quick recommendation quiz for luxury pools",
    formSubtitle:
      "Use the form to keep the recommendation aligned with finishes, aesthetics, and premium pool ownership expectations.",
  },
  general: {
    landingHref: "/",
    formHref: "/pool-analysis",
    cardButtonLabel: "Open page",
    formButtonLabel: "Check pool fit",
    formEyebrow: "Pool analysis form",
    formTitle: "Quick recommendation quiz",
    formSubtitle:
      "Tell us a little about the pool and we’ll help route you to the right next step.",
  },
};

export function normalizePoolJourneyContext(
  value: string | string[] | null | undefined,
): PoolJourneyContext {
  const segment = Array.isArray(value) ? value[0] : value;

  if (segment === "parents" || segment === "pet-owners" || segment === "luxury") {
    return segment;
  }

  return "general";
}

export function getPoolJourneyConfig(context: PoolJourneyContext) {
  return contextConfig[context];
}

export function getPoolLandingHref(context: PoolJourneyContext) {
  return contextConfig[context].landingHref;
}

export function getPoolAnalysisHref(context: PoolJourneyContext) {
  return contextConfig[context].formHref;
}
