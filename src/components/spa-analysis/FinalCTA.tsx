"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

import { siteConfig } from "@/lib/constants";
import { getPoolJourneyConfig, type PoolJourneyContext } from "@/lib/pool-journey";
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

function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded-full transition-colors ${
            i <= currentStep ? "bg-[#1749b7]" : "bg-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

function ChoiceCard({
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
        "flex min-h-[80px] w-full items-center justify-center rounded-2xl border px-5 py-4 text-center text-base font-semibold transition",
        active
          ? "border-[#1749b7] bg-[#eef4ff] text-[#123c96] shadow-[0_8px_24px_rgba(23,73,183,0.12)]"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

type StepProps = {
  formData: RecommendationFormData;
  updateField: (field: keyof RecommendationFormData, value: string) => void;
  onNext: () => void;
};

function PoolTypeStep({ formData, updateField, onNext }: StepProps) {
  const options = [
    { value: "swimming-pool", label: "Swimming Pool" },
    { value: "spa", label: "Spa" },
    { value: "pool-and-spa", label: "Pool & Spa" },
    { value: "other", label: "Other" },
  ];
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 1 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">What type of pool do you have?</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <ChoiceCard key={o.value} label={o.label} active={formData.poolType === o.value} onClick={() => { updateField("poolType", o.value); setTimeout(onNext, 200); }} />
        ))}
      </div>
    </div>
  );
}

function PoolSizeStep({ formData, updateField, onNext }: StepProps) {
  const options = [
    { value: "up-to-5000", label: "Up to 5,000 Gallons" },
    { value: "5000-to-15000", label: "5,000 – 15,000 Gallons" },
    { value: "15000-to-30000", label: "15,000 – 30,000 Gallons" },
    { value: "over-30000", label: "Over 30,000 Gallons" },
  ];
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 2 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">What size is your pool?</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <ChoiceCard key={o.value} label={o.label} active={formData.poolSize === o.value} onClick={() => { updateField("poolSize", o.value); setTimeout(onNext, 200); }} />
        ))}
      </div>
    </div>
  );
}

function SanitizationStep({ formData, updateField, onNext }: StepProps) {
  const options = [
    { value: "chlorine", label: "Chlorine" },
    { value: "salt-system", label: "Salt System" },
    { value: "other", label: "Other" },
  ];
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 3 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">What do you currently use to sanitize your pool?</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {options.map((o) => (
          <ChoiceCard key={o.value} label={o.label} active={formData.sanitization === o.value} onClick={() => { updateField("sanitization", o.value); setTimeout(onNext, 200); }} />
        ))}
      </div>
    </div>
  );
}

function EquipmentStep({ formData, updateField, onNext }: StepProps) {
  const equipmentOptions = [
    "Cartridge filter",
    "Sand filter",
    "DE filter",
    "Not sure yet",
  ];
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 4 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">What best describes your current pool equipment?</h2>
      <div className="mt-6 space-y-3">
        {equipmentOptions.map((option) => {
          const isSelected = formData.currentEquipment === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                updateField("currentEquipment", option);
                setTimeout(onNext, 200);
              }}
              className={[
                "flex w-full items-center rounded-2xl border px-5 py-4 text-left text-base font-semibold transition",
                isSelected
                  ? "border-[#1749b7] bg-[#eef4ff] text-[#123c96] shadow-[0_8px_24px_rgba(23,73,183,0.12)]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50",
              ].join(" ")}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-300 mr-3 shrink-0">
                {isSelected && <span className="h-3 w-3 rounded-full bg-[#1749b7]" />}
              </span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function InstallationStep({ formData, updateField, onNext }: StepProps) {
  const options = [
    { value: "existing-pad", label: "Existing Equipment Pad", note: "I already have a pad" },
    { value: "new-install", label: "New Installation", note: "No existing pad" },
  ];
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 5 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">What best describes your installation setup?</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((o) => {
          const isSelected = formData.installationSetup === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => {
                updateField("installationSetup", o.value);
                setTimeout(onNext, 200);
              }}
              className={[
                "flex flex-col items-start rounded-2xl border px-5 py-5 text-left transition",
                isSelected
                  ? "border-[#1749b7] bg-[#eef4ff] shadow-[0_8px_24px_rgba(23,73,183,0.12)]"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50",
              ].join(" ")}
            >
              <span className="text-base font-semibold text-slate-900">{o.label}</span>
              <span className="mt-1 text-sm text-slate-500">{o.note}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PhotosStep() {
  const labels = [
    "Pool Photo\n(Required)",
    "Equipment Photo\n(Required)",
    "Equipment Pad\n(Recommended)",
  ];
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 6 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Upload photos of your setup</h2>
      <p className="mt-2 text-base text-slate-500">Photos help us provide the most accurate recommendation.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {labels.map((label) => (
          <button
            key={label}
            type="button"
            className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center text-sm font-semibold text-slate-700 transition hover:border-[#1749b7] hover:bg-[#f6f9ff]"
          >
            <CameraIcon className="h-8 w-8 text-[#1749b7]" />
            <span className="mt-3 whitespace-pre-line leading-5">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function FieldLabel({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
      {children}
    </label>
  );
}

function ContactStep({ formData, updateField }: StepProps) {
  const fields = [
    { field: "firstName", label: "First Name", type: "text" },
    { field: "lastName", label: "Last Name", type: "text" },
    { field: "email", label: "Email Address", type: "email" },
    { field: "phone", label: "Phone Number", type: "tel" },
    { field: "streetAddress", label: "Street Address", type: "text" },
    { field: "city", label: "City", type: "text" },
    { field: "state", label: "State", type: "text" },
    { field: "zipCode", label: "ZIP Code", type: "text" },
  ] as const;
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">Step 7 of 7</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Where should we send your recommendation?</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.field}>
            <FieldLabel htmlFor={f.field}>{f.label}</FieldLabel>
            <input
              id={f.field}
              type={f.type}
              required
              placeholder={f.label}
              value={formData[f.field as keyof RecommendationFormData]}
              onChange={(e) => updateField(f.field as keyof RecommendationFormData, e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1749b7] focus:ring-4 focus:ring-blue-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FinalCTA({
  journeyContext = "general",
}: {
  journeyContext?: PoolJourneyContext;
}) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<RecommendationFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const journey = getPoolJourneyConfig(journeyContext);

  const updateField = (field: keyof RecommendationFormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);

    const payload = {
      ...formData,
      ...getStoredUTMParams(),
      type: "free-spa-analysis",
      journeyContext,
      campaign: "free-spa-analysis",
      pagePath: window.location.pathname,
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
          journeyContext,
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
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="p-8 sm:p-10">
              <div className="mx-auto max-w-lg text-center">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isLastStep = step === 6;
  const canSubmit = formData.firstName && formData.email && formData.phone;

  return (
    <section className="relative isolate overflow-hidden bg-[#eef5ff] px-4 py-4 text-slate-950 sm:px-6 lg:px-8 lg:py-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,169,255,0.24),transparent_34%),radial-gradient(circle_at_18%_12%,rgba(23,73,183,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(239,245,255,0.98))]"
      />

      <div className="relative mx-auto max-w-2xl">
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
              <p className="text-xs text-slate-500">{journey.formEyebrow}</p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="hidden text-sm font-semibold text-[#1749b7] sm:inline-flex"
          >
            Questions? Call {siteConfig.phone}
          </a>
        </div>

        <div className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.1)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <ProgressBar currentStep={step} totalSteps={7} />

            <div className="mt-6 rounded-[1.6rem] border border-blue-100 bg-blue-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1749b7]">
                {journey.formEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {journey.formTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                {journey.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              {step === 0 && <PoolTypeStep formData={formData} updateField={updateField} onNext={nextStep} />}
              {step === 1 && <PoolSizeStep formData={formData} updateField={updateField} onNext={nextStep} />}
              {step === 2 && <SanitizationStep formData={formData} updateField={updateField} onNext={nextStep} />}
              {step === 3 && <EquipmentStep formData={formData} updateField={updateField} onNext={nextStep} />}
              {step === 4 && <InstallationStep formData={formData} updateField={updateField} onNext={nextStep} />}
              {step === 5 && <PhotosStep />}
              {step === 6 && <ContactStep formData={formData} updateField={updateField} onNext={nextStep} />}

              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="m11 18-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back
                </button>

                <div className="flex items-center gap-1 text-sm text-slate-400">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                    const stepFields: Record<number, keyof RecommendationFormData> = {
                      0: "poolType",
                      1: "poolSize",
                      2: "sanitization",
                      3: "currentEquipment",
                      4: "installationSetup",
                      5: "poolType",
                      6: "firstName",
                    };
                    const isFilled = i === 5 || !!formData[stepFields[i]];
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setStep(i)}
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition ${
                          i === step
                            ? "bg-[#1749b7] text-white"
                            : isFilled
                              ? "bg-blue-100 text-[#1749b7]"
                              : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>

                {!isLastStep ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-1 rounded-2xl bg-[#1749b7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123c96]"
                  >
                    Next
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#1749b7,#1f66d1,#2d7ff0)] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_32px_rgba(23,73,183,0.26)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(23,73,183,0.32)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    Get My Recommendation
                    <CheckIcon className="h-4 w-4" />
                  </button>
                )}
              </div>

              {error ? (
                <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Something went wrong. Try again or call us directly.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Your information is secure and never shared.
        </p>
      </div>
    </section>
  );
}
