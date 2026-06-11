import { siteConfig } from "@/lib/constants";

export const CURRENT_MAIN_SITE_URL =
  process.env.NEXT_PUBLIC_FUSION44X_MAIN_SITE_URL ?? siteConfig.url;

// Replace these with the live checkout / consultation paths when the final
// payment flow is confirmed on the production Fusion44x site.
export const CURRENT_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_FUSION44X_CHECKOUT_URL ??
  `${CURRENT_MAIN_SITE_URL}/checkout`;

export const CURRENT_CONSULTATION_URL =
  process.env.NEXT_PUBLIC_FUSION44X_CONSULTATION_URL ??
  `${CURRENT_MAIN_SITE_URL}/consultation`;

export type Fusion44xDestination = "checkout" | "consultation" | "main";

const ATTRIBUTION_KEYS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
  "msclkid",
  "ttclid",
  "gbraid",
  "wbraid",
]);

export function captureAttributionParams(entries: Iterable<[string, string]>) {
  const attribution: Record<string, string> = {};

  for (const [key, value] of entries) {
    if (ATTRIBUTION_KEYS.has(key) || key.startsWith("utm_")) {
      attribution[key] = value;
    }
  }

  return attribution;
}

export function appendAttributionParams(
  baseUrl: string,
  attribution: Record<string, string>
) {
  const nextUrl = new URL(baseUrl);

  Object.entries(attribution).forEach(([key, value]) => {
    if (value) {
      nextUrl.searchParams.set(key, value);
    }
  });

  return nextUrl.toString();
}

export function getOutboundUrl(
  destination: Fusion44xDestination,
  attribution: Record<string, string>
) {
  const baseUrl =
    destination === "checkout"
      ? CURRENT_CHECKOUT_URL
      : destination === "consultation"
        ? CURRENT_CONSULTATION_URL
        : CURRENT_MAIN_SITE_URL;

  return appendAttributionParams(baseUrl, attribution);
}

