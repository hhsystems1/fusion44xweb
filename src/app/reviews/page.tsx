import type { Metadata } from "next";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "Read real reviews from Fusion 44X customers. See before and after results from homeowners who made the switch.",
};

export default function ReviewsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h1>
          <p className="mt-4 text-foreground-secondary">
            Real reviews from homeowners across the Southwest who have made
            the switch to Fusion 44X.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[...testimonials, ...testimonials].slice(0, 8).map((t, i) => (
            <TestimonialCard
              key={`${t.name}-${i}`}
              name={t.name}
              location={t.location}
              rating={t.rating}
              text={t.text}
              hasBeforeAfter={t.beforeAfter}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xs text-foreground-secondary">
            Individual results may vary. Reviews are from verified customers
            and have been edited for clarity.
          </p>
        </div>
      </div>
    </div>
  );
}
