import { createCheckoutSession, getStripePriceId } from "@/lib/stripe";

const trackingParams = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "fbclid", "ttclid", "referrer",
] as const;

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const productId = requestUrl.searchParams.get("product") ?? "";
  const origin = requestUrl.origin;

  const utmParams: Record<string, string> = {};
  let referrer = "";

  for (const param of trackingParams) {
    const val = requestUrl.searchParams.get(param);
    if (val) {
      if (param === "referrer") referrer = val;
      else utmParams[param] = val;
    }
  }

  const hasStripeKey = !!process.env.STRIPE_SECRET_KEY;
  const hasPriceId = getStripePriceId(productId);

  if (hasStripeKey && hasPriceId && productId) {
    try {
      const session = await createCheckoutSession({
        productId,
        utmParams: Object.keys(utmParams).length > 0 ? utmParams : undefined,
        referrer: referrer || undefined,
        origin,
      });

      if (session?.url) {
        return Response.redirect(session.url, 302);
      }
    } catch (err) {
      console.error("[CHECKOUT] Stripe session creation failed:", err);
    }
  }

  const fallbackUrl = new URL("/pricing", request.url);
  fallbackUrl.searchParams.set("intent", "purchase");
  if (productId) fallbackUrl.searchParams.set("product", productId);

  for (const key of Object.keys(utmParams)) {
    const val = utmParams[key];
    if (val) fallbackUrl.searchParams.set(key, val);
  }
  if (referrer) fallbackUrl.searchParams.set("referrer", referrer);

  return Response.redirect(fallbackUrl.toString(), 302);
}
