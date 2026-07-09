import type { NextRequest } from "next/server";

import { forwardToCrm21 } from "@/lib/crm21";
import { sendLeadNotificationEmail } from "@/lib/lead-notifications";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[LEAD]", JSON.stringify(body));
    const leadPayload = {
      ...body,
      formType: "lead",
      campaign: body.campaign ?? "fusion44xweb",
      page: body.page ?? body.sourceUrl ?? body.pageUrl ?? null,
      pagePath: body.pagePath ?? null,
    };
    const receivedAt = new Date().toISOString();
    const crmTrackUrl = process.env.CRM_TRACK_URL ?? process.env.TRACK_WEBHOOK_URL;
    const crmApiKey =
      process.env.CRM_FORM_API_KEY ?? process.env.LEAD_WEBHOOK_API_KEY;

    const response = await forwardToCrm21(request, leadPayload);

    await sendLeadNotificationEmail(leadPayload).catch((emailError) => {
      console.error("[LEAD EMAIL ERROR]", emailError);
    });

    if (crmTrackUrl) {
      fetch(crmTrackUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(crmApiKey ? { "x-api-key": crmApiKey } : {}),
        },
        body: JSON.stringify({
          event: "lead.submitted",
          source: "fusion44xweb",
          receivedAt,
          properties: {
            ...leadPayload,
            receivedAt,
          },
        }),
      }).catch((error) => {
        console.error("[LEAD TRACK ERROR]", error);
      });
    }

    return response;
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
