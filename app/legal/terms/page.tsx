import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms governing use of ${brand.domain} and engagement of ${brand.name}'s services.`,
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-2xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-4xl font-medium tracking-tight text-bone">Terms of Service</h1>
        <p className="mt-3 text-sm text-bone-dim">Last updated: June 1, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <p>
            These Terms of Service ("Terms") govern your use of{" "}
            {brand.domain} (the "Site") and any services provided by{" "}
            {brand.legalName} ("Volta," "we," "us"). By accessing the Site or
            engaging our services, you agree to these Terms.
          </p>

          <h2>1. Services</h2>
          <p>
            Volta provides AI automation, chatbot development, website and
            landing page design, CRM integration, and related digital
            services ("Services"). The specific scope, timeline, and
            deliverables for any engagement will be defined in a separate
            written proposal or service agreement signed by both parties,
            which takes precedence over these general Terms in the event of
            conflict.
          </p>

          <h2>2. Engagement and Payment</h2>
          <ul>
            <li>
              Projects are quoted on a fixed-scope basis unless otherwise
              agreed in writing. A deposit (typically 50%) is required to
              begin work, with the remaining balance due upon completion or
              per the schedule outlined in the signed proposal.
            </li>
            <li>
              Monthly maintenance and retainer plans are billed in advance
              and renew automatically until cancelled with 30 days' written notice.
            </li>
            <li>
              Late payments may result in a pause of active work and, for
              amounts more than 30 days overdue, may accrue interest at 1.5%
              per month or the maximum rate permitted by law.
            </li>
          </ul>

          <h2>3. Client Responsibilities</h2>
          <p>
            Timely delivery depends on the client providing necessary
            access, content, feedback, and approvals within agreed
            timeframes. Delays caused by the client may extend project
            timelines accordingly and do not constitute a breach by Volta.
          </p>

          <h2>4. Intellectual Property and Ownership</h2>
          <p>
            Upon final payment, all custom code, designs, workflows, and
            content created specifically for the client become the
            exclusive property of the client. This does not include Volta's
            pre-existing tools, frameworks, or general methodologies, which
            Volta retains the right to reuse across other engagements.
            Third-party software, platforms, and licenses (e.g., CRM
            subscriptions, automation platform accounts) remain subject to
            their respective providers' terms.
          </p>

          <h2>5. Revisions</h2>
          <p>
            Each pricing tier includes a defined number of revision rounds
            as specified in the proposal. Requests beyond that scope, or
            changes to the originally agreed scope of work, will be quoted
            separately.
          </p>

          <h2>6. Warranties and Support</h2>
          <p>
            Volta warrants that delivered work will function substantially
            as described in the signed proposal. Post-launch support
            windows (30–90 days depending on tier) cover defect
            correction at no additional cost. This warranty does not cover
            issues arising from third-party platform changes, client-made
            modifications, or use outside the intended scope.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Volta's total liability
            for any claim arising from these Terms or our Services is
            limited to the total amount paid by the client for the
            Services giving rise to the claim. Volta is not liable for
            indirect, incidental, or consequential damages, including lost
            profits or data, arising from use of delivered systems.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate an active engagement with 14 days'
            written notice. Upon termination, the client is responsible for
            payment for all work completed up to the termination date.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any non-public business,
            technical, or financial information disclosed during the course
            of the engagement, and will sign a mutual NDA upon request
            prior to discovery calls involving sensitive information.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Texas,
            without regard to conflict-of-law principles, and any disputes
            will be resolved in the state or federal courts located in
            Travis County, Texas.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of
            the Site or Services after changes are posted constitutes
            acceptance of the revised Terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these Terms can be directed to{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
