import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const eventType = body.type;
    const session = body.data?.object;

    if (eventType === "checkout.session.completed" && session) {
      const payload = {
        event: "purchase",
        stripeSessionId: session.id,
        customerEmail: session.customer_details?.email ?? session.customer_email,
        customerName: session.customer_details?.name,
        amountTotal: session.amount_total,
        currency: session.currency,
        paymentStatus: session.payment_status,
        metadata: session.metadata ?? {},
        receivedAt: new Date().toISOString(),
        source: "fusion44x.com",
      };

      const webhookUrl = process.env.LEAD_WEBHOOK_URL;

      if (webhookUrl) {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      }

      console.log("[PURCHASE]", JSON.stringify(payload));
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error("[STRIPE WEBHOOD ERROR]", error);
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }
}
