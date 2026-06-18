import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;

let stripe: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripe) {
    if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
    stripe = new Stripe(key);
  }
  return stripe;
}

const priceEnvByProduct = {
  "fusion-residential-pool": "STRIPE_PRICE_POOL",
  "fusion-spas-jacuzzis": "STRIPE_PRICE_SPA",
} as const;

export type CheckoutProductId = keyof typeof priceEnvByProduct;

export function getStripePriceId(productId: string): string | null {
  const envKey =
    priceEnvByProduct[productId as CheckoutProductId];
  return envKey ? (process.env[envKey] ?? null) : null;
}

type CreateSessionParams = {
  productId: string;
  customerEmail?: string;
  utmParams?: Record<string, string>;
  referrer?: string;
  origin: string;
};

export async function createCheckoutSession(params: CreateSessionParams) {
  const { productId, customerEmail, utmParams, referrer, origin } = params;

  const priceId = getStripePriceId(productId);
  if (!priceId) return null;

  const metadata: Record<string, string> = {};

  if (utmParams) {
    for (const [key, val] of Object.entries(utmParams)) {
      if (val) metadata[key] = val.slice(0, 500);
    }
  }

  if (referrer) metadata.referrer = referrer.slice(0, 500);

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: customerEmail,
    metadata,
    success_url: `${origin}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing`,
    allow_promotion_codes: true,
  });

  return session;
}

export function getStripeInstance() {
  return key ? getStripe() : null;
}
