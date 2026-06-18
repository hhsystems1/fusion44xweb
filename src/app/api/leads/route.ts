import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          receivedAt: new Date().toISOString(),
          source: "fusion44x.com",
        }),
      }).catch(() => {});
    }

    console.log("[LEAD]", JSON.stringify(body));

    return Response.json({ success: true });
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
