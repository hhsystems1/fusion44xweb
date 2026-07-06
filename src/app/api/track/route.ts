import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.CRM_TRACK_URL ?? process.env.TRACK_WEBHOOK_URL;
    const crmApiKey =
      process.env.CRM_FORM_API_KEY ?? process.env.LEAD_WEBHOOK_API_KEY;

    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(crmApiKey ? { "x-api-key": crmApiKey } : {}),
        },
        body: JSON.stringify({
          ...body,
          receivedAt: new Date().toISOString(),
          source: "fusion44x.com",
        }),
      }).catch(() => {});
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("[TRACK ERROR]", error);
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
