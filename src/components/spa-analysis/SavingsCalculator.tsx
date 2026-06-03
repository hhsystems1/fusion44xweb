"use client";

import { useState } from "react";

export function SavingsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(50);
  const yearlySavings = monthlySpend * 12 * 0.85;

  return (
    <section className="py-20 sm:py-28 bg-surface/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Savings Calculator
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Calculate Your <span className="text-accent">Savings</span>
          </h2>
          <p className="mt-4 text-foreground-secondary">
            See how much you could save by eliminating monthly chemical purchases.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground">
                How much do you spend on chemicals per month?
              </label>
              <div className="mt-3 flex items-center gap-4">
                <span className="text-lg text-foreground-secondary">$0</span>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none bg-white/10 accent-accent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-accent/30"
                />
                <span className="text-lg text-foreground-secondary">$200</span>
              </div>
              <p className="mt-2 text-center text-sm text-accent font-semibold">
                ${monthlySpend}/month
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <p className="text-xs text-foreground-secondary mb-1">
                    Yearly Chemical Cost
                  </p>
                  <p className="font-serif text-2xl font-bold text-foreground">
                    ${(monthlySpend * 12).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-center">
                  <p className="text-xs text-foreground-secondary mb-1">
                    Estimated Yearly Savings
                  </p>
                  <p className="font-serif text-2xl font-bold text-accent">
                    ${Math.round(yearlySavings).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-center text-foreground-secondary">
                Estimated savings based on 85% reduction in chemical costs.
                Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
