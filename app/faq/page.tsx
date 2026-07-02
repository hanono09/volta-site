import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/structured-data";
import { faqs } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Answers to the most common questions about working with Volta.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <section className="pt-20 pb-6 sm:pt-28">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            Frequently asked questions.
          </h1>
        </Container>
      </section>
      <FAQSection showHeading={false} />
      <CTASection />
    </>
  );
}
