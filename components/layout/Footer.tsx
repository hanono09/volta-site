import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brand, footerNav } from "@/lib/data";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-900">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
                  fill="#6E6BFF"
                  stroke="#6E6BFF"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-semibold text-bone">{brand.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-muted">
              {brand.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/voltaautomation" },
                { Icon: Twitter, href: "https://x.com/voltaautomation" },
                { Icon: Instagram, href: "https://www.instagram.com/voltaautomation" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 text-bone-muted transition-colors hover:border-volt-400 hover:text-volt-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Empresa</p>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-muted transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Servicios</p>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-muted transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Legal</p>
            <ul className="space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-muted transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-700 pt-8 text-xs text-bone-dim md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. Todos los derechos reservados.
          </p>
          <p className="font-mono">{brand.address}</p>
        </div>
      </Container>
    </footer>
  );
}
