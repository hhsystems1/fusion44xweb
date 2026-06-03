import type { Metadata } from "next";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { faqs } from "@/lib/constants";
import { FAQStructuredData, BreadcrumbStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Got questions about Fusion 44X? Find answers about installation, maintenance, cost, warranty, and how the system works.",
};

export default function FAQPage() {
  return (
    <div className="py-20 sm:py-28">
      <FAQStructuredData items={faqs} />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-10">
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-foreground-secondary">
            Everything you need to know about Fusion 44X.
          </p>
        </div>
        <FAQAccordion items={faqs} />
        <div className="mt-8 text-center">
          <p className="text-xs text-foreground-secondary">
            Still have questions?{" "}
            <a
              href="mailto:info@fusion44x.com"
              className="text-accent hover:text-accent-hover"
            >
              Contact us
            </a>{" "}
            and we will get back to you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
