import type { NextRequest } from "next/server";

import { forwardToCrm21 } from "@/lib/crm21";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[DISTRIBUTOR]", JSON.stringify(body));
    return forwardToCrm21(request, { ...body, formType: "distributor" });
  } catch (error) {
    console.error("[DISTRIBUTOR ERROR]", error);
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
