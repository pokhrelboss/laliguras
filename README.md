# Laliguras — Workplace Health, Safety & Professional Training

> **SafeStep:** An integrated health and safety training platform combining interactive real-world scenarios, 360° hazard simulations, video lessons, and measurable progress tracking.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red)](LICENSE)

---

## Overview

**Laliguras** is dedicated to transforming workplace safety from dry compliance checkboxes into engaging, practical, and retention-focused training. Drawing inspiration from the resilience and vibrancy of Nepal's national flower—the Laligurans (Rhododendron)—Laliguras provides modern organizations with the tools and training modules needed to protect their people and cultivate safer workplaces.

### Key Capabilities in Phase 1
- **Public Company Website:** Fully responsive, accessible, high-performance corporate portal.
- **Brand Identity:** Deep Rhododendron Crimson, Forest Green, clean typography, and subtle Himalayan motifs.
- **Interactive 360° Scenario Simulator:** Real-time hazard identification demo showcasing the core differentiator of SafeStep.
- **Curated Training Catalog:** Professional cards for Manual Handling, Fire Safety Awareness, COSHH, Working at Height, PPE, and Emergency Procedures.
- **Our Team Showcase:** Dedicated presentation of the founding team with neutral, respectful, professional profiles.
- **Request Demo Engine:** Multi-step demo request system with client/server validation and API routing.
- **Enterprise FAQ:** WCAG-compliant accordion answering critical organizational questions.
- **SEO & Performance:** Structured data (JSON-LD), OpenGraph, sitemap, robots, and mobile-first responsive architecture.
- **Phase 2 Extensibility:** Pre-built TypeScript schemas for multi-tenant white-label LMS and learner dashboards.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Full-stack React framework with Server Components & API routes |
| **React 19** | Component architecture & client interactivity |
| **Tailwind CSS v4** | Modern utility-first styling with native CSS variables |
| **TypeScript 5** | Strict end-to-end type safety |
| **Lucide React** | Consistent, accessible SVG iconography |

---

## Directory Structure

```
laliguras/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Global layout with meta, navbar, footer
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About Laliguras
│   ├── platform/page.tsx     # SafeStep platform capabilities
│   ├── training/page.tsx     # Safety training courses catalog
│   ├── team/page.tsx         # Our Team showcase
│   ├── faq/page.tsx          # Frequently Asked Questions
│   ├── contact/page.tsx      # Request a Demo & Contact
│   ├── privacy/page.tsx      # Privacy Policy
│   ├── terms/page.tsx        # Terms of Service
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Dynamic sitemap generator
│   ├── robots.ts             # Robots.txt generator
│   └── api/
│       └── demo-request/     # Serverless demo submission endpoint
├── components/
│   ├── ui/                   # Reusable primitives (Button, Card, Badge, Input, Accordion)
│   ├── layout/               # Navbar, MobileNav, Footer, Container, Section
│   └── sections/             # Page sections (Hero, ValueProps, HazardSimulator, etc.)
├── data/                     # Centralized content store (courses, team, faqs, company)
├── lib/                      # Utilities, class merger (cn), validators
├── types/                    # Domain models and TypeScript interfaces
├── public/                   # Static assets, SVG vector graphics
├── PRD.md                    # Detailed Product Requirements Document
├── TODO.md                   # Implementation checklist & progress tracker
├── AGENTS.md                 # Developer & AI agent guidelines
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites
- Node.js 18.17+ or later (Tested on Node v26)
- npm or pnpm

### Installation
```bash
# Clone repository
git clone https://github.com/pokhrelboss/laliguras.git
cd laliguras

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

### Contact Email Delivery

The `/api/demo-request` route sends contact and Request Demo submissions through Resend from the server only. It sends from `Laliguras <noreply@pokhrel.tech>` to `team@pokhrel.tech`, and sets the visitor's submitted email as `reply_to`.

Set the server-only variable in Netlify (and in a local `.env.local` when testing):

```bash
RESEND_API_KEY=re_xxxxxxxxx
```

Before enabling delivery, add and verify `pokhrel.tech` in Resend. In Cloudflare DNS, add the exact records Resend shows for that domain: the SPF TXT record, the `send` MX feedback/return-path record, and the generated DKIM record(s) (usually CNAME; use the type and value shown in your Resend dashboard). Add a tracking CNAME only if you enable tracking, and add DMARC separately at `_dmarc` if you want that additional policy. Keep mail-related DNS records unproxied in Cloudflare. Do not commit the API key or expose it in client-side code.

### Code Quality & Validation
```bash
# Run linting
npm run lint

# Check TypeScript types
npx tsc --noEmit
```

---

## Brand Colors

| Color | Hex | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| Rhododendron Crimson | `#9E1A2F` | `--color-crimson` | Primary brand, main CTAs, active highlights |
| Crimson Hover | `#851526` | `--color-crimson-hover` | Button hover and pressed states |
| Forest Green | `#0F2D24` | `--color-forest` | Secondary accents, hero accents, footer |
| Light Surface | `#F8FAF9` | `--color-surface-light` | Neutral cards and section backgrounds |
| Deep Text | `#0A1914` | `--color-text-primary` | High contrast headings and body text |

---

## Phase 2 Roadmap
- [ ] White-label Client Portals (Tenant customization, custom logo & domain)
- [ ] Learner Training Dashboard (Enrolled courses, video player, progress bar)
- [ ] Full 360° WebGL / Panorama Scenario Engine
- [ ] Interactive Assessments & Instant Certificate Generator (PDF generation with verification QR code)
- [ ] Admin & Compliance Analytics Dashboard (Export CSV/PDF, completion rates, audit logs)

---

## Contributors
- **Sakshyam Pokhrel**
- **Sijan Kafle**
- **Arbin Giri**
- **Ishan Bhandari**
- **Aayush Nepaune**
- **Sukriti Rimal**

---

© 2026 Laliguras. All rights reserved. Built for safer, stronger workplaces.
