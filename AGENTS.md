# AGENTS.md — Laliguras Engineering Guidelines for AI & Developers

Welcome to the **Laliguras** codebase. This document outlines architectural standards, coding conventions, design system tokens, and extension patterns for future agents and engineers working on this platform.

---

## 1. Project Philosophy & Stack
- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4.
- **Goal:** Position Laliguras as the premier workplace health, safety, and compliance training solution.
- **Design Philosophy:** Human-designed, clean, grounded in Himalayan natural resilience (Laligurans / Rhododendron), corporate yet warm, high contrast, zero AI clichés (no floating blobs, no neon gradients, no generic stock AI portraits).
- **Icons:** Use `lucide-react` exclusively with consistent stroke widths (`strokeWidth={1.75}`).

---

## 2. Directory Architecture
```
/app
  layout.tsx            # Global layout with fonts, metadata, navbar, and footer
  page.tsx              # Homepage
  about/page.tsx        # About Laliguras
  platform/page.tsx     # SafeStep platform capabilities & 360° simulator
  training/page.tsx     # Safety training courses catalog
  team/page.tsx         # Our Team showcase
  faq/page.tsx          # Frequently Asked Questions
  contact/page.tsx      # Request a Demo & Contact Form
  privacy/page.tsx      # Privacy Policy
  terms/page.tsx        # Terms of Service
  not-found.tsx         # Custom 404 page
  api/
    demo-request/route.ts # Server-side demo request processing
/components
  /ui                   # Reusable atomic UI primitives (Button, Card, Badge, Input, Accordion)
  /layout               # Navbar, MobileNav, Footer, Container, Section
  /sections             # Domain-specific page sections (Hero, PlatformDemo, HowItWorks, etc.)
/data                   # Content single-source-of-truth (courses, team, faqs, company)
/lib                    # Helper utilities (cn, formatting, validators)
/types                  # TypeScript type definitions and domain schemas
/public                 # Static assets, SVG vector marks
```

---

## 3. Brand Tokens & CSS Variables
Defined in `app/globals.css` and tailored for Tailwind v4:
- **Crimson Brand Primary:** `var(--color-crimson)` (`#9E1A2F` / `#8B1E2D` / `#A31D36`)
- **Forest Green Accent:** `var(--color-forest)` (`#0F2D24` / `#163E32`)
- **Neutral Background Light:** `var(--color-surface)` (`#F9FAF9`, `#FFFFFF`)
- **Dark Neutral Typography:** `var(--color-text-primary)` (`#0A1914`), `var(--color-text-secondary)` (`#3F4F46`)
- **Border / Divider:** `var(--color-border)` (`#E2E8E4`)

When writing Tailwind classes, prefer the semantic tokens or utility classes configured for the project.

---

## 4. Coding Standards & Conventions

### Server vs. Client Components
- **Default to Server Components:** All route pages (`page.tsx`) and static presentation sections should be Server Components (`async` where necessary).
- **Client Components (`"use client"`):** Use only where user interaction or browser state is strictly required:
  - Interactive navigation toggles (`MobileNav.tsx`)
  - Form validation and submission (`DemoRequestForm.tsx`)
  - Accordion expand/collapse (`Accordion.tsx`)
  - Interactive 360° hazard identification mini-simulator (`HazardSimulator.tsx`)
  - Filtering/search tabs in training catalog (`CourseCatalog.tsx`)

### Content Integrity
- **Do not hardcode content into JSX components.** All course details, team data, FAQs, company values, and contact points must reside in `/data/`.
- **Team Roles:** Do not fabricate or invent job titles for team members. Use optional role fields.
- **Portraits:** If photos are unavailable, use clean geometric/initials-based neutral placeholders. Never use AI-generated human faces.

### Form Handling & APIs
- Validate forms both client-side and server-side.
- Always provide accessible form labels (`<label htmlFor="...">`), clear error messages, and loading feedback.
- Never write hardcoded API keys or sensitive credentials into client-side code.

---

## 5. Phase 2 Extension Architecture (LMS & Multi-Tenancy)
When Phase 2 begins (Client Portals & Learner Dashboards):
1. **Multi-Tenancy:** Each enterprise client will have a unique `tenant_id` and custom branding settings.
2. **Domain Models:** See `/types/lms.ts` for pre-architected schemas:
   - `Tenant`: Organization profile, logo, domain, license tier.
   - `Learner`: Employee profile, department, assigned modules, progress metrics.
   - `CourseModule`: Video lessons, interactive 360° scenarios, knowledge checks.
   - `AssessmentAttempt`: Answers, score, pass/fail status, timestamp.
   - `CertificateRecord`: Tamper-proof certificate ID, issue date, expiry date, verification hash.
3. Keep the public marketing site separated cleanly from `/dashboard` or `/learn` portals to allow independent scaling.

---

## 6. Verification Checklist
Before submitting any code changes:
- [ ] Run `npm run build` — must succeed with zero errors.
- [ ] Run `npm run lint` — zero ESLint warnings or errors.
- [ ] Run `npx tsc --noEmit` — zero TypeScript diagnostics.
- [ ] Verify accessibility in mobile and desktop viewports (320px to 1920px).
