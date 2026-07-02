import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Stats } from "@/components/sections/Stats";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Volta",
  description:
    "Volta is an AI automation studio that builds the systems ambitious companies use to operate leaner, respond faster, and grow without adding headcount.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We don't measure success by hours logged or features shipped. We measure it in hours saved and revenue moved — and we report on both.",
  },
  {
    icon: Eye,
    title: "No black boxes",
    description:
      "Every system we build is documented, explained, and handed over in full. You should never need us to understand what we built for you.",
  },
  {
    icon: Heart,
    title: "Built to last past launch",
    description:
      "We design for the messy, real version of your business — edge cases, exceptions, and all — not the clean demo version.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">About {brand.name}</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            We started Volta because most "automation" was just expensive duct tape.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted">
            Founded in {brand.founded}, Volta began after watching too many
            businesses get sold pre-built chatbots and rigid Zapier templates
            that broke the moment a real customer did something unexpected.
            We build differently: we map how a business actually runs first,
            then engineer automation around that reality — not the other way
            around.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-bone-muted">
            Today we work with real estate brokerages, healthcare practices,
            logistics operators, legal teams, and fast-growing service
            businesses — anywhere repetitive work is quietly costing more
            than leadership realizes.
          </p>
        </Container>
      </section>

      <Stats />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Three principles that shape every build."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-volt-500/10 text-volt-400">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-medium text-bone">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="The team"
            title="A small senior team. No account managers relaying messages."
            description="Every engagement is run by a dedicated project lead and automation engineer who you talk to directly — not a rotating cast of juniors learning on your dime."
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
