"use client";

import { useState, type FormEvent } from "react";

import { getStoredUTMParams, trackEvent } from "@/lib/tracking";

type DistributorFormData = {
  firstName: string;
  lastName: string;
  title: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  territory: string;
  annualVolume: string;
  experience: string;
  notes: string;
};

const initialFormData: DistributorFormData = {
  firstName: "",
  lastName: "",
  title: "",
  companyName: "",
  email: "",
  phone: "",
  website: "",
  territory: "",
  annualVolume: "",
  experience: "",
  notes: "",
};

const annualVolumeOptions = [
  "0-10 systems/year",
  "11-25 systems/year",
  "26-50 systems/year",
  "50+ systems/year",
] as const;

const experienceOptions = [
  "Pool builder",
  "Pool service company",
  "Retail / showroom",
  "Water treatment",
  "New to the category",
] as const;

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  id: keyof DistributorFormData;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
        {label}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? label}
        className="w-full rounded-2xl border border-[#0757c7]/12 bg-white px-4 py-3 text-sm text-[#071832] outline-none transition placeholder:text-slate-400 focus:border-[#0757c7] focus:ring-4 focus:ring-blue-100"
        required
      />
    </label>
  );
}

export function DistributorApplicationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);

    const payload = {
      ...formData,
      ...getStoredUTMParams(),
      type: "distributor-application",
      page: window.location.href,
    };

    try {
      const res = await fetch("/api/distributor", {
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
          type: "distributor-application",
          territory: formData.territory,
          annualVolume: formData.annualVolume,
        },
      });
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-[#0757c7]/14 bg-white p-8 shadow-[0_24px_70px_rgba(4,29,75,0.10)]">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
          Distributor application received
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.045em] text-[#071832]">
          We&apos;ll review your distributor request next.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#052f78]">
          Your application has been sent to CRM 2.1 so the team can review territory, business
          fit, and follow-up details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#0757c7]/14 bg-white p-6 shadow-[0_24px_70px_rgba(4,29,75,0.10)] sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="firstName" label="First Name" value={formData.firstName} onChange={(value) => setFormData((prev) => ({ ...prev, firstName: value }))} />
        <Field id="lastName" label="Last Name" value={formData.lastName} onChange={(value) => setFormData((prev) => ({ ...prev, lastName: value }))} />
        <Field id="title" label="Title" value={formData.title} onChange={(value) => setFormData((prev) => ({ ...prev, title: value }))} />
        <Field id="companyName" label="Company Name" value={formData.companyName} onChange={(value) => setFormData((prev) => ({ ...prev, companyName: value }))} />
        <Field id="email" label="Email Address" value={formData.email} onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))} type="email" />
        <Field id="phone" label="Phone Number" value={formData.phone} onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))} type="tel" />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field id="website" label="Website" value={formData.website} onChange={(value) => setFormData((prev) => ({ ...prev, website: value }))} placeholder="https://..." />
        <Field id="territory" label="Territory / Market" value={formData.territory} onChange={(value) => setFormData((prev) => ({ ...prev, territory: value }))} />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
            Annual Volume
          </span>
          <select
            value={formData.annualVolume}
            onChange={(e) => setFormData((prev) => ({ ...prev, annualVolume: e.target.value }))}
            className="w-full rounded-2xl border border-[#0757c7]/12 bg-white px-4 py-3 text-sm text-[#071832] outline-none transition focus:border-[#0757c7] focus:ring-4 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select one
            </option>
            {annualVolumeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
            Industry Experience
          </span>
          <select
            value={formData.experience}
            onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
            className="w-full rounded-2xl border border-[#0757c7]/12 bg-white px-4 py-3 text-sm text-[#071832] outline-none transition focus:border-[#0757c7] focus:ring-4 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select one
            </option>
            {experienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 block">
        <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
          Notes
        </span>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
          placeholder="Tell us about your team, market, and what kind of distributor relationship you want."
          rows={5}
          className="w-full rounded-2xl border border-[#0757c7]/12 bg-white px-4 py-3 text-sm text-[#071832] outline-none transition placeholder:text-slate-400 focus:border-[#0757c7] focus:ring-4 focus:ring-blue-100"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#0757c7] px-6 text-center text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_46px_rgba(7,87,199,0.28)] transition hover:-translate-y-0.5 hover:bg-[#052f78]"
        >
          Become a distributor
        </button>
        <p className="flex items-center text-sm text-[#052f78]">
          Your application is sent to CRM 2.1 for review.
        </p>
      </div>

      {error ? (
        <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Something went wrong. Try again or call us directly.
        </p>
      ) : null}
    </form>
  );
}
