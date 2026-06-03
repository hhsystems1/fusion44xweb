export function ComparisonTable() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            The Difference
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Traditional Spa Maintenance vs.{" "}
            <span className="text-accent">Fusion 44X</span>
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left font-semibold text-foreground">
                  Comparison
                </th>
                <th className="px-6 py-4 text-left font-medium text-red-400/80">
                  Traditional Spa
                </th>
                <th className="px-6 py-4 text-left font-medium text-accent">
                  Fusion 44X
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                {
                  feature: "Chemicals Added",
                  traditional: "Chlorine, salt, algaecide, clarifiers, shock",
                  fusion: "No chemicals added to the water",
                },
                {
                  feature: "Weekly Maintenance",
                  traditional: "Test water 2-3x weekly, add chemicals",
                  fusion: "Minimal — acid check twice monthly",
                },
                {
                  feature: "Water Feel",
                  traditional: "Harsh on skin, red eyes, dry hair",
                  fusion: "Soft, silky, gentle on skin and eyes",
                },
                {
                  feature: "Equipment Wear",
                  traditional: "Chemicals degrade covers, pumps, heaters",
                  fusion: "Reduced chemical wear on equipment",
                },
                {
                  feature: "Ongoing Cost",
                  traditional: "Monthly chemical purchases add up",
                  fusion: "No recurring chemical costs",
                },
                {
                  feature: "Installation",
                  traditional: "None required (just add chemicals)",
                  fusion: "One-time professional installation",
                },
              ].map((row) => (
                <tr key={row.feature} className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-foreground-secondary">
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 shrink-0 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {row.traditional}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 text-accent">
                      <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {row.fusion}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
