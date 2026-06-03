import { BenefitIcon } from "@/components/shared/BenefitIcon";
import { benefits } from "@/lib/constants";

export function BenefitIcons() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {benefits.map((b) => (
            <BenefitIcon
              key={b.title}
              icon={b.icon as "sparkles" | "heart" | "clock" | "dollar"}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
