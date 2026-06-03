import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function ReviewsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Real Results
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Hear from homeowners who have made the switch to Fusion 44X.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              location={t.location}
              rating={t.rating}
              text={t.text}
              hasBeforeAfter={t.beforeAfter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
