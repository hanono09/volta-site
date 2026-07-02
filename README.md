# Volta — AI Automation Agency Website

A production-ready marketing site for an AI automation agency, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (dark-mode-only design system, custom tokens)
- **Motion:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Geist Sans / Geist Mono
- **Email:** Resend (contact form notifications)
- **Scheduling:** Calendly (embedded widget)
- **Validation:** Zod

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your real values
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

See `.env.example`. Nothing is required to run the site locally — every integration degrades gracefully:

- **`RESEND_API_KEY`** — if unset, contact form submissions are logged to the server console instead of emailed. Get a key at resend.com and verify your sending domain before going live.
- **`NOTIFY_EMAIL`** — where contact form notifications are sent.
- **`NEXT_PUBLIC_CALENDLY_URL`** — your real Calendly booking link. The `/book-a-call` page embeds this directly.
- **`NEXT_PUBLIC_WHATSAPP_NUMBER`** — your WhatsApp Business number (digits only, with country code, no `+`).
- **`NEXT_PUBLIC_SITE_URL`** — your production domain, used for canonical URLs, sitemap, and Open Graph tags.

## Project structure

```
app/
  page.tsx                 → Home
  about/                    → About
  services/                 → Services (all 10 services, detailed)
  pricing/                   → Pricing (3 tiers + maintenance plans)
  case-studies/              → Case studies index
    [slug]/                   → Individual case study (statically generated)
  testimonials/               → Testimonials
  faq/                         → FAQ (with FAQPage structured data)
  contact/                      → Contact form
  book-a-call/                   → Calendly embed
  blog/                            → Blog index
    [slug]/                         → Blog post (statically generated)
  legal/
    privacy-policy/
    terms/
    cookies/
  api/
    contact/route.ts               → Contact form handler (Resend)
    chat/route.ts                  → Chat widget backend (rule-based; swap in an LLM call)
  sitemap.ts                       → Dynamic sitemap.xml
  robots.ts                        → robots.txt
  manifest.ts                      → PWA manifest
  layout.tsx                       → Root layout, nav/footer/widgets, org schema
  not-found.tsx                    → Custom 404

components/
  layout/    → Navbar, Footer, WhatsAppButton, ChatWidget
  sections/  → Hero, Stats, Benefits, Process, Portfolio, Testimonials,
               PricingTeaser, FAQSection, CTASection, ContactForm, CalendlyEmbed
  ui/        → Container, SectionHeading, Badge, NodeGraph (hero signature animation)

lib/
  data.ts            → All copywriting/content: services, pricing, testimonials,
                        case studies, FAQs, blog index — single source of truth
  blog-content.ts     → Full long-form blog article bodies
  seo.ts              → buildMetadata() helper for consistent OpenGraph/Twitter tags
  structured-data.ts  → JSON-LD builders (Organization, ProfessionalService, FAQPage,
                        BreadcrumbList, BlogPosting)
```

## Editing content

Almost everything on the site (copy, pricing, services, testimonials, case studies, FAQs) lives in `lib/data.ts`. Change it there and it propagates everywhere it's used — no need to touch components.

Blog article bodies live separately in `lib/blog-content.ts` to keep `data.ts` scannable.

## Connecting a real AI model to the chat widget

`app/api/chat/route.ts` currently ships with a lightweight keyword-matching responder so the widget works with zero configuration. To power it with a real model, swap the rule-matching block for a call to the Anthropic or OpenAI API using `messages` as the conversation history, and return `{ reply: <model output> }`. Keep the API key server-side only (never in `NEXT_PUBLIC_*`).

## Design system

Defined in `tailwind.config.ts` and `app/globals.css`:

- **`ink`** — near-black background scale (`#0A0A0D` base)
- **`bone`** — off-white text scale
- **`volt`** — signature electric violet-blue accent (`#6E6BFF`)
- **`mint`** — secondary accent, used sparingly for "live" states
- Type: Geist Sans (UI/body), Geist Mono (labels, eyebrows, data)

The signature visual element is the animated node-graph in the hero (`components/ui/NodeGraph.tsx`) — an SVG pipeline diagram showing a lead flowing through an AI agent into CRM/WhatsApp/Calendar/Dashboard, with traveling dashed connectors. It's the one deliberately "loud" element; everything else stays quiet and disciplined.

## Before launching

1. Replace `public/favicon.svg`, `public/logo.svg` with your final brand marks; add `public/og-image.png` (1200×630) for social previews.
2. Add real `icon-192.png` / `icon-512.png` for the PWA manifest.
3. Set all environment variables in your hosting provider (Vercel recommended).
4. Verify your sending domain in Resend so contact-form emails don't land in spam.
5. Update social links in `components/layout/Footer.tsx` and `lib/structured-data.ts`.
6. Swap placeholder phone number in `lib/data.ts` (`brand.phone`) for a real one.
7. Run `npm run build` locally to confirm a clean production build before deploying.

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel with zero config:

```bash
npx vercel
```

Or build and run anywhere Node is supported:

```bash
npm run build
npm run start
```
