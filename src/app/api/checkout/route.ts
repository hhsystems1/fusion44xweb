const checkoutEnvByProduct = {
  "fusion-spas-jacuzzis": "CHECKOUT_FUSION_SPAS_JACUZZIS_URL",
  "fusion-residential-pool": "CHECKOUT_FUSION_RESIDENTIAL_POOL_URL",
} as const;

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const product = requestUrl.searchParams.get("product") ?? "";
  const envKey =
    product in checkoutEnvByProduct
      ? checkoutEnvByProduct[product as keyof typeof checkoutEnvByProduct]
      : null;
  const configuredCheckoutUrl = envKey ? process.env[envKey] : null;

  if (configuredCheckoutUrl) {
    return Response.redirect(configuredCheckoutUrl, 302);
  }

  const fallbackUrl = new URL("/free-spa-analysis", request.url);
  fallbackUrl.searchParams.set("intent", "purchase");

  if (product) {
    fallbackUrl.searchParams.set("product", product);
  }

  return Response.redirect(fallbackUrl, 302);
}
