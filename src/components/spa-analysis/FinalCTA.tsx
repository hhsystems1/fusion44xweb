"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

import { siteConfig } from "@/lib/constants";
import { getStoredUTMParams, trackEvent } from "@/lib/tracking";

type RecommendationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  poolType: string;
  poolSize: string;
  sanitization: string;
  currentEquipment: string;
  installationSetup: string;
};

const poolTypeOptions = [
  { value: "swimming-pool", label: "Swimming Pool" },
  { value: "spa", label: "Spa" },
  { value: "pool-and-spa", label: "Pool & Spa" },
  { value: "other", label: "Other" },
];

const poolSizeOptions = [
  { value: "up-to-5000", label: "Up to 5,000 Gallons" },
  { value: "5000-to-15000", label: "5,000 - 15,000 Gallons" },
  { value: "15000-to-30000", label: "15,000 - 30,000 Gallons" },
  { value: "over-30000", label: "Over 30,000 Gallons" },
];

const sanitizationOptions = [
  { value: "chlorine", label: "Chlorine" },
  { value: "salt-system", label: "Salt System" },
  { value: "other", label: "Other" },
];

const installationOptions = [
  { value: "existing-pad", label: "Existing Equipment Pad", note: "(Preferred)" },
  { value: "new-install", label: "New Installation", note: "(No existing pad)" },
];

const equipmentOptions = [
  "Select current equipment",
  "Cartridge filter",
  "Sand filter",
  "DE filter",
  "Not sure yet",
];

const initialFormData: RecommendationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  poolType: "",
  poolSize: "",
  sanitization: "",
  currentEquipment: "",
  installationSetup: "existing-pad",
};

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="m6 12 3.5 3.5L18 7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M9 7.5 10.2 6h3.6L15 7.5h2.5A2.5 2.5 0 0 1 20 10v7.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5V10A2.5 2.5 0 0 1 6.5 7.5H9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function StepBadge({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1749b7] text-xs font-bold text-white shadow-sm shadow-blue-500/20">
        {step}
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

function ChoiceTile({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group min-h-[82px] rounded-2xl border px-4 py-4 text-center text-sm font-semibold transition",
        active
          ? "border-[#1749b7] bg-[#eef4ff] text-[#123c96] shadow-[0_12px_32px_rgba(23,73,183,0.14)]"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50",
      ].join(" ")}
    >
      <span className="block leading-5">{label}</span>
      <span
        className={[
          "mx-auto mt-2 block h-1.5 w-10 rounded-full transition",
          active ? "bg-[#1749b7]" : "bg-transparent group-hover:bg-blue-100",
        ].join(" ")}
      />
    </button>
  );
}

function FieldLabel({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </label>
  );
}

export function FinalCTA() {
  const [formData, setFormData] = useState<RecommendationFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const updateField = (field: keyof RecommendationFormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);

    const payload = {
      ...formData,
      ...getStoredUTMParams(),
      type: "free-spa-analysis",
      page: window.location.href,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      trackEvent({
        name: "Lead",
        properties: {
          type: "free-spa-analysis",
          poolType: formData.poolType,
          installationSetup: formData.installationSetup,
        },
      });
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <section className="relative overflow-hidden bg-[#eef5ff] px-4 py-8 text-slate-950 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-[1fr_0.92fr]">
              <div className="p-8 sm:p-10">
                <div className="mx-auto max-w-2xl text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                    Submission received
                  </div>
                  <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    We&apos;ve got your pool details.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                    A Fusion 44X specialist will review the form and contact you with the next step
                    within one business day.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      "Simple next step",
                      "No obligation",
                      "Quick response",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-full">
                <Image
                  src="/fusion-family-pool.jpeg"
                  alt="Family pool setting with Fusion 44X"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,18,45,0.15),rgba(9,18,45,0.58))]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#eef5ff] px-4 py-4 text-slate-950 sm:px-6 lg:px-8 lg:py-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,169,255,0.24),transparent_34%),radial-gradient(circle_at_18%_12%,rgba(23,73,183,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(239,245,255,0.98))]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <Image
              src="/fusion44x-logo.png"
              alt="Fusion 44X"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-slate-200 bg-white object-cover"
              priority
            />
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-950">Fusion 44X</p>
              <p className="text-xs text-slate-500">Water recommendation form</p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="hidden text-sm font-semibold text-[#1749b7] sm:inline-flex"
          >
            Questions? Call us at {siteConfig.phone}
          </a>
        </div>

        <div className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.1)]">
          <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-5">
                <StepBadge step="1" label="Your pool" />
                <StepBadge step="2" label="Equipment" />
                <StepBadge step="3" label="Photos" />
                <StepBadge step="4" label="Contact" />
              </div>

              <div className="pt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1749b7]">
                  Let&apos;s learn about your pool
                </p>
                <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Get the right Fusion 44X recommendation without the guesswork.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  This is the reusable lead form page. Keep it on hand for home pages, landing pages,
                  and any place you want the owner to submit their pool details without hunting around.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                        1. Pool type
                      </p>
                      <p className="mt-1 text-sm text-slate-500">What type of pool do you have?</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {poolTypeOptions.map((option) => (
                      <ChoiceTile
                        key={option.value}
                        label={option.label}
                        active={formData.poolType === option.value}
                        onClick={() => updateField("poolType", option.value)}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                    2. Pool size
                  </p>
                  <p className="mt-1 text-sm text-slate-500">What is the approximate size of your pool?</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {poolSizeOptions.map((option) => (
                      <ChoiceTile
                        key={option.value}
                        label={option.label}
                        active={formData.poolSize === option.value}
                        onClick={() => updateField("poolSize", option.value)}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                    3. Current sanitization
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    What do you currently use to sanitize your pool?
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {sanitizationOptions.map((option) => (
                      <ChoiceTile
                        key={option.value}
                        label={option.label}
                        active={formData.sanitization === option.value}
                        onClick={() => updateField("sanitization", option.value)}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                        4. Current equipment
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        What best describes your current pool equipment?
                      </p>
                    </div>
                    <div>
                      <FieldLabel htmlFor="currentEquipment">Select current equipment</FieldLabel>
                      <select
                        id="currentEquipment"
                        required
                        value={formData.currentEquipment}
                        onChange={(e) => updateField("currentEquipment", e.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1749b7] focus:ring-4 focus:ring-blue-100"
                      >
                        {equipmentOptions.map((option) => (
                          <option key={option} value={option === "Select current equipment" ? "" : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                    5. Installation setup
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    What best describes your installation environment?
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {installationOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateField("installationSetup", option.value)}
                        className={[
                          "rounded-2xl border px-5 py-4 text-left transition",
                          formData.installationSetup === option.value
                            ? "border-[#1749b7] bg-[#eef4ff] shadow-[0_12px_32px_rgba(23,73,183,0.14)]"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        <span className="block text-sm font-semibold text-slate-900">{option.label}</span>
                        <span className="mt-1 block text-xs text-slate-500">{option.note}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                        6. Upload photos
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Photos help us provide the most accurate recommendation.
                      </p>
                    </div>
                    <p className="hidden text-xs font-medium text-slate-400 sm:block">
                      Visual placeholders for the full upload flow
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {[
                      "Pool Photo\n(Required)",
                      "Equipment Photo\n(Required)",
                      "Equipment Pad Photo\n(Recommended)",
                    ].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="flex min-h-[126px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-[#1749b7] hover:bg-[#f6f9ff]"
                      >
                        <CameraIcon className="h-6 w-6 text-[#1749b7]" />
                        <span className="mt-3 whitespace-pre-line leading-5">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                    7. Your information
                  </p>
                  <p className="mt-1 text-sm text-slate-500">How can we reach you?</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {[
                      { field: "firstName", label: "Full Name", placeholder: "Full Name*" },
                      { field: "email", label: "Email Address", placeholder: "Email Address*", type: "email" },
                      { field: "phone", label: "Phone Number", placeholder: "Phone Number*", type: "tel" },
                      { field: "streetAddress", label: "Street Address", placeholder: "Street Address*" },
                      { field: "city", label: "City", placeholder: "City*" },
                      { field: "state", label: "State", placeholder: "State*" },
                      { field: "zipCode", label: "ZIP Code", placeholder: "ZIP Code*" },
                    ].map((item) => (
                      <div key={item.field}>
                        <FieldLabel htmlFor={item.field}>{item.label}</FieldLabel>
                        <input
                          id={item.field}
                          type={item.type ?? "text"}
                          required
                          placeholder={item.placeholder}
                          value={formData[item.field as keyof RecommendationFormData]}
                          onChange={(e) => updateField(item.field as keyof RecommendationFormData, e.target.value)}
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1749b7] focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {error ? (
                  <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    Something went wrong. Try again or call us directly.
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#1749b7,#1f66d1,#2d7ff0)] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_rgba(23,73,183,0.26)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(23,73,183,0.32)]"
                >
                  Get My Pool Recommendation
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-[#1749b7]" />
                    Your information is secure and never shared.
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                  <span>Form can be dropped into other pages later without redesigning it.</span>
                </div>
              </form>
            </div>

            <div className="relative min-h-[760px] overflow-hidden bg-slate-900 lg:min-h-full">
              <Image
                src="/fusion-family-pool.jpeg"
                alt="Premium pool lifestyle scene"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,43,0.1),rgba(5,18,43,0.62)),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%)]" />

              <div className="absolute inset-x-5 top-5 rounded-[1.6rem] border border-white/20 bg-white/88 p-4 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1749b7]">
                  Recommended setup
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Match the pool size, equipment, and installation path before quoting the system.
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/18 bg-slate-950/70 p-4 text-white backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                    What this form does
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/86">
                    It gives you a reusable contact entry point for every page that needs a cleaner
                    conversion path than a simple button.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/18 bg-white/90 p-4 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1749b7]">
                    Call first
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Questions? Call us at {siteConfig.phone}. If you want this swapped for the screenshot number later, say the word.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
