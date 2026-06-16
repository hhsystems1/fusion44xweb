const UTM_STORAGE_KEY = "fusion44x_utm";
const REFERRER_STORAGE_KEY = "fusion44x_referrer";

export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  ttclid?: string;
};

export function captureUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};

  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "ttclid",
  ] as const;

  for (const key of keys) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }

  if (Object.keys(utm).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {}
  }

  return utm;
}

export function getStoredUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function persistReferrer() {
  if (typeof window === "undefined") return;
  try {
    const referrer = document.referrer;
    if (referrer && !sessionStorage.getItem(REFERRER_STORAGE_KEY)) {
      sessionStorage.setItem(REFERRER_STORAGE_KEY, referrer);
    }
  } catch {}
}

export function appendTrackingParams(baseUrl: string): string {
  const utm = getStoredUTMParams();
  const url = new URL(baseUrl, window.location.origin);

  for (const [key, val] of Object.entries(utm)) {
    if (val) url.searchParams.set(key, val);
  }

  const referrer = sessionStorage.getItem(REFERRER_STORAGE_KEY);
  if (referrer) url.searchParams.set("referrer", referrer);

  return url.toString();
}

type TrackEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | undefined>;
};

export function trackEvent(event: TrackEvent) {
  if (typeof window === "undefined") return;

  const utm = getStoredUTMParams();
  const payload = {
    event: event.name,
    properties: {
      ...event.properties,
      ...utm,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    },
  };

  try {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {}

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", event.name, event.properties);
    } catch {}
  }

  if (typeof window.fbq === "function") {
    try {
      window.fbq("track", event.name, event.properties);
    } catch {}
  }

  if (typeof window.ttq === "object" && typeof window.ttq.track === "function") {
    try {
      window.ttq.track(event.name, event.properties);
    } catch {}
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void };
  }
}
