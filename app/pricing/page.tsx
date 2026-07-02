import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { pricingTiers, maintenancePlans, faqs } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Three fixed-scope pricing tiers for AI automation, chatbots, and websites — Starter, Professional, and Enterprise — with transparent timelines and deliverables.",
  path: "/pricing",
});

const pricingFaqQuestions = [
  "How long does a typical project take?",
  "Who owns the systems and code after the project is done?",
  "How is pricing determined for Enterprise projects?",
  "Do you sign contracts and NDAs?",
];
const pricingFaqs = faqs.filter((f) => pricingFaqQuestions.includes(f.question));

export default function PricingPage() {
  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <Container className="max-w-3xl text-center mx-auto">
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            Fixed scope. Fixed price. No hourly surprises.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted">
            Every project is quoted as a fixed-price engagement after a
            short discovery call — never open-ended hourly billing. Pick the
            tier closest to your needs below; we'll fine-tune scope together.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-volt-500 bg-ink-800"
                    : "border-ink-600 bg-ink-800/40"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-volt-500 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h2 className="text-xl font-medium text-bone">{tier.name}</h2>
                <p className="mt-2 text-4xl font-medium tracking-tight text-bone">
                  {tier.price}
                  <span className="ml-1.5 text-sm font-normal text-bone-dim">
                    {tier.cadence}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone-muted">
                  {tier.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-ink-700 py-4 text-xs">
                  <div>
                    <dt className="text-bone-dim">Timeline</dt>
                    <dd className="mt-1 font-medium text-bone">{tier.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-bone-dim">Best for</dt>
                    <dd className="mt-1 font-medium text-bone leading-snug">{tier.bestFor}</dd>
                  </div>
                </dl>

                <p className="eyebrow mt-6 mb-3">Features</p>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-bone-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-6 mb-3">Deliverables</p>
                <ul className="space-y-2.5">
                  {tier.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-bone-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      {d}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book-a-call"
                  className={`mt-8 w-full text-center ${
                    tier.highlighted ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {tier.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-bone-dim">
            Need something between tiers, or a project that spans multiple
            services? <Link href="/contact" className="text-volt-400 underline underline-offset-4">Tell us what you're working with</Link> and we'll scope it properly.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="After launch"
            title="Monthly maintenance plans"
            description="Keep systems monitored, optimized, and evolving after launch — entirely optional, never required."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {maintenancePlans.map((plan) => (
              <div key={plan.name} className="card-surface p-6">
                <h3 className="text-base font-medium text-bone">{plan.name}</h3>
                <p className="mt-1 text-2xl font-medium text-bone">{plan.price}</p>
                <p className="mt-2 text-sm text-bone-muted">{plan.description}</p>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-bone-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection items={pricingFaqs.length ? pricingFaqs : faqs.slice(0, 4)} />

      <CTASection />
    </>
  );
}
