import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function SAReviews() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            What Homeowners Are{" "}
            <span className="text-accent">Saying</span>
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Real reviews from real customers who made the switch.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
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
