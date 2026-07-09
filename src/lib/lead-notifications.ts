import { siteConfig } from "@/lib/constants";

const NOTIFICATION_SOURCES = new Set(["family-pool-water", "youtube-vsl-2"]);

type LeadPayload = Record<string, unknown>;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  if (Array.isArray(value)) {
    return value.map((item) => formatValue(item)).join(", ");
  }

  if (typeof value === "object") {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return "[unserializable object]";
    }
  }

  return String(value);
}

function buildLabel(sourcePage: string | undefined) {
  if (sourcePage === "family-pool-water") {
    return "Family Pool Water Page";
  }

  if (sourcePage === "youtube-vsl-2") {
    return "YouTube VSL 2 Page";
  }

  return "Fusion 44X Lead";
}

export function shouldSendLeadNotification(payload: LeadPayload) {
  const sourcePage =
    typeof payload.source_page === "string"
      ? payload.source_page
      : typeof payload.sourcePage === "string"
        ? payload.sourcePage
        : undefined;
  return !!sourcePage && NOTIFICATION_SOURCES.has(sourcePage);
}

export async function sendLeadNotificationEmail(payload: LeadPayload) {
  if (!shouldSendLeadNotification(payload)) {
    return { sent: false, reason: "source_not_targeted" as const };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[LEAD EMAIL] RESEND_API_KEY is not set; skipping notification email");
    return { sent: false, reason: "missing_api_key" as const };
  }

  const sourcePage =
    typeof payload.source_page === "string"
      ? payload.source_page
      : typeof payload.sourcePage === "string"
        ? payload.sourcePage
        : undefined;
  const subject = `New Fusion 44X Lead - ${buildLabel(sourcePage)}`;
  const from = process.env.RESEND_FROM_EMAIL ?? `Fusion 44X <${siteConfig.email}>`;
  const to = process.env.LEAD_NOTIFICATION_EMAIL ?? siteConfig.email;

  const entries = Object.entries(payload).map(([key, value]) => ({
    key,
    value: formatValue(value),
  }));

  const textLines = [
    subject,
    "",
    `Source page: ${formatValue(sourcePage)}`,
    `Page path: ${formatValue(payload.pagePath)}`,
    `Page URL: ${formatValue(payload.page)}`,
    "",
    "Submitted fields:",
    ...entries.map(({ key, value }) => `${key}: ${value}`),
  ];

  const htmlRows = entries
    .map(
      ({ key, value }) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #dbeafe;font-weight:700;color:#0f172a;">${escapeHtml(key)}</td>
          <td style="padding:8px 12px;border:1px solid #dbeafe;color:#0f172a;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a">
      <h2 style="margin:0 0 12px;font-size:20px;">${escapeHtml(subject)}</h2>
      <p style="margin:0 0 8px;"><strong>Source page:</strong> ${escapeHtml(formatValue(sourcePage))}</p>
      <p style="margin:0 0 8px;"><strong>Page path:</strong> ${escapeHtml(formatValue(payload.pagePath))}</p>
      <p style="margin:0 0 20px;"><strong>Page URL:</strong> ${escapeHtml(formatValue(payload.page))}</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:860px;border:1px solid #dbeafe;">
        <tbody>
          ${htmlRows}
        </tbody>
      </table>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      reply_to: typeof payload.email === "string" && payload.email ? payload.email : undefined,
      subject,
      text: textLines.join("\n"),
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Lead notification email failed: ${response.status} ${detail}`);
  }

  return { sent: true as const };
}
