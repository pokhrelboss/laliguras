# Laliguras Implementation Checklist & Roadmap

## Phase 1: Environment & Repository Setup
- [x] Check Git and GitHub CLI authentication (`pokhrelboss`)
- [x] Create GitHub repository `pokhrelboss/laliguras`
- [x] Scaffold Next.js 16 + TypeScript + Tailwind CSS v4 project
- [x] Install core packages (`lucide-react`, `clsx`, `tailwind-merge`)
- [x] Create core documentation (`/PRD.md`, `/TODO.md`, `/README.md`, `/AGENTS.md`)
- [x] Connect local repository and push initial commit to `pokhrelboss/laliguras`

## Phase 2: Design System & Visual Identity
- [x] Configure Tailwind CSS tokens & CSS variables (Rhododendron crimson, forest green, light neutral, typography)
- [x] Build reusable UI primitives:
  - [x] `Button` (Primary Crimson, Secondary Forest, Outline, Ghost, sizes)
  - [x] `Badge` (Status indicators, category tags, eyebrow tags)
  - [x] `Card` (Clean elevation, subtle borders, hover transitions)
  - [x] `Container` & `Section` (Responsive max-widths, standard padding scale)
  - [x] `Input`, `Textarea`, `Select` (Accessible form controls with focus rings)
  - [x] `Accordion` (Accessible collapse/expand for FAQs)
  - [x] `LaligurasLogo` (Vector SVG brand mark and typography)

## Phase 3: Data Architecture & Domain Models
- [x] Create TypeScript types (`/types/index.ts`):
  - [x] Training Course / Module schema
  - [x] Team Member schema
  - [x] Demo Request form & payload schema
  - [x] FAQ item schema
  - [x] Phase 2 Multi-tenant LMS preparation models (`Tenant`, `Organization`, `Learner`, `Certificate`)
- [x] Build centralized content data in `/data/`:
  - [x] `courses.ts` (Manual Handling, Fire Safety, COSHH, Working at Height, PPE, Emergency Procedures)
  - [x] `team.ts` (Sakshyam Pokhrel, Sijan Kafle, Arbin Giri, Ishan Bhandari, Ayush Nepaune, Sukriti Rimal)
  - [x] `faqs.ts` (8 core questions answered with clarity)
  - [x] `company.ts` (Mission, Vision, Values, Story, contact coordinates)
  - [x] `platform.ts` (Capabilities, 360° scenario data points)

## Phase 4: Layout & Navigation
- [x] Build responsive `Navbar`:
  - [x] Desktop navigation links with active state indicator
  - [x] Prominent "Request Demo" CTA button
  - [x] Mobile hamburger toggle and accessible slide-out navigation
  - [x] Backdrop blur & scroll header elevation
- [x] Build comprehensive `Footer`:
  - [x] Brand mark, mission summary, Nepal connection
  - [x] Structured navigation columns (Platform, Training, Company, Legal)
  - [x] Contact details & hours
  - [x] Copyright and policy links

## Phase 5: Home Page
- [x] Build Hero Section:
  - [x] Eyebrow: "TRAINING FOR A SAFER TOMORROW"
  - [x] Headline: SafeStep — An Integrated Health and Safety Training Platform
  - [x] Supporting copy & mantra: Learn • Practise • Stay Safe
  - [x] Dual CTAs: "Request a Demo" and "Explore Platform"
  - [x] Visual composition with subtle Himalayan / Laligurans motif
- [x] Build Value Proposition Ribbon (5 pillars: Engaging Learning, Real-World Scenarios, Practical Knowledge, Measurable Progress, Safer Workplaces)
- [x] Build Interactive 360° Hazard Simulation Preview (interactive warehouse scenario with clickable hazard pins)
- [x] Build Featured Training Modules Preview
- [x] Build How It Works Workflow (6 simple steps)
- [x] Build Employer vs. Employee Benefits Section
- [x] Build High-impact Call to Action (CTA) Banner

## Phase 6: About Us Page (`/about`)
- [x] Hero banner: "People. Innovation. Safer Tomorrows."
- [x] Core Pillars: Our Mission, Our Vision, Our Values (People First, Integrity, Innovation, Collaboration, Continuous Improvement, Safety), Our Story
- [x] The Laliguras Heritage: Connection to resilience, nature, and workplace human dignity
- [x] Team Quote banner: "Inspired by the strength of the Laligurans, we build safer workplaces for a brighter tomorrow."

## Phase 7: Platform (SafeStep) Page (`/platform`)
- [x] Hero: "Comprehensive Training for Real-World Safety"
- [x] 10 Key Capabilities breakdown (Content, 360° Scenarios, Video, Quizzes, Progress, Certifications, Records, Reporting, etc.)
- [x] Full Interactive 360° Workplace Hazard Scenario Simulator
- [x] Multi-tenant / White-label enterprise architecture preview

## Phase 8: Training Catalog Page (`/training`)
- [x] Course filter by category and status
- [x] Course cards with duration, lesson count, badges, detailed learning objectives
- [x] Course modal or detail drawer with syllabus overview
- [x] Custom training curriculum consultation CTA

## Phase 9: Our Team Page (`/team`)
- [x] Dedicated page & responsive grid: 3-col desktop, 2-col tablet, 1-col mobile
- [x] Team members:
  - [x] Sakshyam Pokhrel
  - [x] Sijan Kafle
  - [x] Arbin Giri
  - [x] Ishan Bhandari
  - [x] Ayush Nepaune
  - [x] Sukriti Rimal
- [x] Clean neutral avatar placeholders, no fake AI portraits
- [x] Extensible bio and LinkedIn links

## Phase 10: Request Demo & Contact System (`/contact` & `/api/demo-request`)
- [x] Complete Request Demo form with real-time validation:
  - [x] Full Name, Company, Work Email, Phone, Interest dropdown, Message
- [x] Next.js Server API route `/api/demo-request` with data validation & error handling
- [x] Interactive UI states: Idle, Loading spinner, Success message with next steps, Error alert
- [x] Office details, contact email (`info@laliguras.com`), phone, location

## Phase 11: FAQ Page (`/faq`)
- [x] Accessible accordion component for 8 core safety training questions
- [x] Direct quick-search filter for instant answers
- [x] "Still have questions?" support card

## Phase 12: Legal & Fallback Pages
- [x] `/privacy` (Privacy Policy)
- [x] `/terms` (Terms of Service)
- [x] `/not-found` (Custom 404 with navigation back to Home)

## Phase 13: Technical SEO & Metadata
- [x] Root metadata (title template, description, keywords, OpenGraph, Twitter card)
- [x] Page-level metadata for each route
- [x] Dynamic `/sitemap.xml` and `/robots.txt`
- [x] JSON-LD structured data (Organization, WebSite, Course schema)

## Phase 14: Quality Assurance & Optimization
- [x] Full responsive testing across viewports (320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px, 1920px)
- [x] WCAG contrast & keyboard navigation audit
- [x] ESLint check (`npm run lint`) — 0 errors, 0 warnings
- [x] TypeScript typecheck (`npx tsc --noEmit`) — 0 diagnostics
- [x] Production build (`npm run build`) — successful optimized static and dynamic outputs
- [x] Browser E2E verification of all interactive components (Simulator, Form, Accordion, Mobile Drawer)

## Phase 15: Git Workflow & GitHub Sync
- [x] Clean semantic commits for each milestone
- [x] Final push to `pokhrelboss/laliguras`
- [x] Verify GitHub repository state
