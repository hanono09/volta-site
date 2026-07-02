import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials",
  description:
    "What clients say about working with Volta on AI automation, chatbots, and website projects.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-20 pb-6 sm:pt-28">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">Testimonials</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            What it's actually like to work with us.
          </h1>
        </Container>
      </section>
      <Testimonials />
      <CTASection />
    </>
  );
}
