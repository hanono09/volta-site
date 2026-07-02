import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${brand.name} collects, uses, and protects your information.`,
  path: "/legal/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-2xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-4xl font-medium tracking-tight text-bone">Privacy Policy</h1>
        <p className="mt-3 text-sm text-bone-dim">Last updated: June 1, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <p>
            {brand.legalName} ("Volta," "we," "us," or "our") respects your
            privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit{" "}
            {brand.domain} (the "Site") or engage our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide directly:</strong> Name, email
              address, company name, phone number, and any details submitted
              through our contact form, booking form, or chat widget.
            </li>
            <li>
              <strong>Automatically collected information:</strong> IP
              address, browser type, device information, pages visited, and
              time spent on the Site, collected via cookies and analytics
              tools.
            </li>
            <li>
              <strong>Third-party scheduling data:</strong> When you book a
              call through our Calendly integration, Calendly collects and
              processes your scheduling information under its own privacy
              policy.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries and provide requested services</li>
            <li>To schedule and manage consultations and project work</li>
            <li>To send project updates, invoices, and administrative communications</li>
            <li>To improve our Site, services, and marketing based on aggregated usage data</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p>
            We do not sell your personal information to third parties under
            any circumstances.
          </p>

          <h2>3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to operate and improve
            the Site. For full details on the categories of cookies we use
            and how to manage your preferences, see our{" "}
            <a href="/legal/cookies">Cookie Policy</a>.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We use trusted third-party providers to operate our business,
            including Calendly (scheduling), Resend (transactional email),
            and standard web analytics tools. These providers only receive
            the information necessary to perform their function and are
            contractually bound to protect it.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to
            fulfill the purposes outlined in this policy, or as required by
            law. Contact form submissions and project-related communications
            are typically retained for the duration of our business
            relationship plus a reasonable period thereafter for record-keeping.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, delete, or restrict the use of your personal
            information, and to receive a copy of the data we hold about
            you. To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your information against unauthorized access, loss, or
            misuse. No method of transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are intended for businesses and individuals over
            the age of 18. We do not knowingly collect personal information
            from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by an updated "Last updated" date at
            the top of this page.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            Questions about this Privacy Policy can be directed to{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
