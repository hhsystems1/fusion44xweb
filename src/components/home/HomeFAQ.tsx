import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { faqs } from "@/lib/constants";
import { FAQStructuredData } from "@/components/seo/StructuredData";

export function HomeFAQ() {
  return (
    <section className="relative py-20 sm:py-28">
      <FAQStructuredData items={faqs} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Questions?
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
