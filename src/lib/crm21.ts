import type { NextRequest } from "next/server";

const CRM21_WEBHOOK_URL =
  process.env.CRM21_WEBHOOK_URL ?? process.env.LEAD_WEBHOOK_URL ?? null;

export type Crm21FormType = "lead" | "financing" | "distributor";

export function getCrm21WebhookUrl() {
  return CRM21_WEBHOOK_URL;
}

export async function forwardToCrm21(
  request: NextRequest,
  payload: Record<string, unknown>,
) {
  const webhookUrl = getCrm21WebhookUrl();

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        receivedAt: new Date().toISOString(),
        source: "fusion44x.com",
        crm: "crm2.1",
      }),
    }).catch(() => {});
  }

  return Response.json({ success: true, path: request.nextUrl.pathname });
}

