import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: `How ${brand.name} uses cookies on ${brand.domain}.`,
  path: "/legal/cookies",
});

const cookieTable = [
  {
    category: "Essential",
    purpose: "Required for core Site functionality (navigation, form submission, security).",
    canDisable: "No",
  },
  {
    category: "Analytics",
    purpose: "Helps us understand how visitors use the Site so we can improve it.",
    canDisable: "Yes",
  },
  {
    category: "Scheduling",
    purpose: "Set by Calendly when you use the booking widget on /book-a-call.",
    canDisable: "Yes (disables booking widget)",
  },
];

export default function CookiesPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-2xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-4xl font-medium tracking-tight text-bone">Cookie Policy</h1>
        <p className="mt-3 text-sm text-bone-dim">Last updated: June 1, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <p>
            This Cookie Policy explains how {brand.legalName} ("Volta")
            uses cookies and similar tracking technologies on {brand.domain}.
          </p>

          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you
            visit a website. They help websites remember information about
            your visit, which can make it easier to use the site and more
            useful to you.
          </p>

          <h2>2. Cookies We Use</h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-ink-600">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-800">
              <tr>
                <th className="px-4 py-3 font-medium text-bone">Category</th>
                <th className="px-4 py-3 font-medium text-bone">Purpose</th>
                <th className="px-4 py-3 font-medium text-bone">Can be disabled?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700">
              {cookieTable.map((row) => (
                <tr key={row.category}>
                  <td className="px-4 py-3 text-bone-muted">{row.category}</td>
                  <td className="px-4 py-3 text-bone-muted">{row.purpose}</td>
                  <td className="px-4 py-3 text-bone-muted">{row.canDisable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <h2>3. Managing Cookies</h2>
          <p>
            You can control and delete cookies through your browser
            settings. Most browsers allow you to refuse cookies entirely or
            be notified when a cookie is being set. Disabling essential
            cookies may affect Site functionality; disabling analytics or
            scheduling cookies will not affect your ability to browse the
            Site or contact us directly.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies are set by third-party services embedded on our
            Site, such as Calendly for scheduling. These third parties are
            responsible for their own cookie practices, which are governed
            by their respective privacy and cookie policies.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically to reflect changes
            in the cookies we use or for legal, operational, or regulatory reasons.
          </p>

          <h2>6. Contact</h2>
          <p>
            Questions about this Cookie Policy can be directed to{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
