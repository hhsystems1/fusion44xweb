"use client";

import { useState, type FormEvent } from "react";
import { trackEvent, getStoredUTMParams } from "@/lib/tracking";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    poolType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const updateField = (field: string, value: string) =>
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

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);

      trackEvent({ name: "Lead", properties: { type: "free-spa-analysis", poolType: formData.poolType } });
    } catch {
      setError(true);
    }
  }

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground-secondary/50 outline-none transition-colors focus:border-accent/50";

  if (submitted) {
    return (
      <section id="analysis-form" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,133,43,0.1)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">Thank You!</h2>
            <p className="mt-3 text-foreground-secondary">
              Your free spa analysis request has been received. A Fusion 44X specialist will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="analysis-form"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,133,43,0.1)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Get Your Free{" "}
              <span className="text-accent">Spa Analysis</span>
            </h2>
            <p className="mt-4 text-foreground-secondary">
              Fill out the form below and a Fusion 44X specialist will contact
              you within 24 hours with your personalized analysis and quote.
              No obligation, just clarity.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-foreground mb-1.5">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                    className={inputClass}
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-foreground mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Your last name"
                    className={inputClass}
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="(555) 555-5555"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="poolType" className="block text-xs font-medium text-foreground mb-1.5">
                  What type of spa or pool do you have?
                </label>
                <select
                  id="poolType"
                  required
                  className={inputClass}
                  value={formData.poolType}
                  onChange={(e) => updateField("poolType", e.target.value)}
                >
                  <option value="" className="bg-surface">
                    Select one...
                  </option>
                  <option value="spa" className="bg-surface">
                    Spa / Hot Tub
                  </option>
                  <option value="pool" className="bg-surface">
                    Swimming Pool
                  </option>
                  <option value="both" className="bg-surface">
                    Both Spa & Pool
                  </option>
                  <option value="unsure" className="bg-surface">
                    Not Sure Yet
                  </option>
                </select>
              </div>
              {error && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.02] active:scale-100"
              >
                Get My Free Spa Analysis
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <p className="text-center text-[10px] text-foreground-secondary">
                By submitting, you agree to be contacted about Fusion 44X
                products and services. Your information will not be shared or
                sold. View our Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
