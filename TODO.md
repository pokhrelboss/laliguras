# Laliguras Implementation Checklist & Roadmap

## Phase 1: Environment & Repository Setup
- [x] Check Git and GitHub CLI authentication (`pokhrelboss`)
- [x] Create GitHub repository `pokhrelboss/laliguras`
- [x] Scaffold Next.js 16 + TypeScript + Tailwind CSS v4 project
- [x] Install core packages (`lucide-react`, `clsx`, `tailwind-merge`)
- [x] Create core documentation (`/PRD.md`, `/TODO.md`, `/README.md`, `/AGENTS.md`)
- [ ] Connect local repository and push initial commit to `pokhrelboss/laliguras`

## Phase 2: Design System & Visual Identity
- [ ] Configure Tailwind CSS tokens & CSS variables (Rhododendron crimson, forest green, light neutral, typography)
- [ ] Build reusable UI primitives:
  - [ ] `Button` (Primary Crimson, Secondary Forest, Outline, Ghost, sizes)
  - [ ] `Badge` (Status indicators, category tags, eyebrow tags)
  - [ ] `Card` (Clean elevation, subtle borders, hover transitions)
  - [ ] `Container` & `Section` (Responsive max-widths, standard padding scale)
  - [ ] `Input`, `Textarea`, `Select` (Accessible form controls with focus rings)
  - [ ] `Accordion` (Accessible collapse/expand for FAQs)
  - [ ] `LaligurasLogo` (Vector SVG brand mark and typography)

## Phase 3: Data Architecture & Domain Models
- [ ] Create TypeScript types (`/types/index.ts`):
  - [ ] Training Course / Module schema
  - [ ] Team Member schema
  - [ ] Demo Request form & payload schema
  - [ ] FAQ item schema
  - [ ] Phase 2 Multi-tenant LMS preparation models (`Tenant`, `Organization`, `Learner`, `Certificate`)
- [ ] Build centralized content data in `/data/`:
  - [ ] `courses.ts` (Manual Handling, Fire Safety, COSHH, Working at Height, PPE, Emergency Procedures)
  - [ ] `team.ts` (Sakshyam Pokhrel, Sijan Kafle, Arbin Giri, Ishan Bhandari, Ayush Nepaune, Sukriti Rimal)
  - [ ] `faqs.ts` (8 core questions answered with clarity)
  - [ ] `company.ts` (Mission, Vision, Values, Story, contact coordinates)
  - [ ] `platform.ts` (Capabilities, 360° scenario data points)

## Phase 4: Layout & Navigation
- [ ] Build responsive `Navbar`:
  - [ ] Desktop navigation links with active state indicator
  - [ ] Prominent "Request Demo" CTA button
  - [ ] Mobile hamburger toggle and accessible slide-out navigation
  - [ ] Backdrop blur & scroll header elevation
- [ ] Build comprehensive `Footer`:
  - [ ] Brand mark, mission summary, Nepal connection
  - [ ] Structured navigation columns (Platform, Training, Company, Legal)
  - [ ] Contact details & hours
  - [ ] Copyright and policy links

## Phase 5: Home Page
- [ ] Build Hero Section:
  - [ ] Eyebrow: "TRAINING FOR A SAFER TOMORROW"
  - [ ] Headline: SafeStep — An Integrated Health and Safety Training Platform
  - [ ] Supporting copy & mantra: Learn • Practise • Stay Safe
  - [ ] Dual CTAs: "Request a Demo" and "Explore Platform"
  - [ ] Visual composition with subtle Himalayan / Laligurans motif
- [ ] Build Value Proposition Ribbon (5 pillars: Engaging Learning, Real-World Scenarios, Practical Knowledge, Measurable Progress, Safer Workplaces)
- [ ] Build Interactive 360° Hazard Simulation Preview (interactive warehouse scenario with clickable hazard pins)
- [ ] Build Featured Training Modules Preview
- [ ] Build How It Works Workflow (6 simple steps)
- [ ] Build Employer vs. Employee Benefits Section
- [ ] Build High-impact Call to Action (CTA) Banner

## Phase 6: About Us Page (`/about`)
- [ ] Hero banner: "People. Innovation. Safer Tomorrows."
- [ ] Core Pillars: Our Mission, Our Vision, Our Values (People First, Integrity, Innovation, Collaboration, Continuous Improvement, Safety), Our Story
- [ ] The Laliguras Heritage: Connection to resilience, nature, and workplace human dignity
- [ ] Team Quote banner: "Inspired by the strength of the Laligurans, we build safer workplaces for a brighter tomorrow."

## Phase 7: Platform (SafeStep) Page (`/platform`)
- [ ] Hero: "Comprehensive Training for Real-World Safety"
- [ ] 10 Key Capabilities breakdown (Content, 360° Scenarios, Video, Quizzes, Progress, Certifications, Records, Reporting, etc.)
- [ ] Full Interactive 360° Workplace Hazard Scenario Simulator
- [ ] Multi-tenant / White-label enterprise architecture preview

## Phase 8: Training Catalog Page (`/training`)
- [ ] Course filter by category and status
- [ ] Course cards with duration, lesson count, badges, detailed learning objectives
- [ ] Course modal or detail drawer with syllabus overview
- [ ] Custom training curriculum consultation CTA

## Phase 9: Our Team Page (`/team`)
- [ ] Dedicated page & responsive grid: 3-col desktop, 2-col tablet, 1-col mobile
- [ ] Team members:
  - [ ] Sakshyam Pokhrel
  - [ ] Sijan Kafle
  - [ ] Arbin Giri
  - [ ] Ishan Bhandari
  - [ ] Ayush Nepaune
  - [ ] Sukriti Rimal
- [ ] Clean neutral avatar placeholders, no fake AI portraits
- [ ] Extensible bio and LinkedIn links

## Phase 10: Request Demo & Contact System (`/contact` & `/api/demo-request`)
- [ ] Complete Request Demo form with real-time validation:
  - [ ] Full Name, Company, Work Email, Phone, Interest dropdown, Message
- [ ] Next.js Server API route `/api/demo-request` with data validation & error handling
- [ ] Interactive UI states: Idle, Loading spinner, Success message with next steps, Error alert
- [ ] Office details, contact email (`info@laliguras.com`), phone, location

## Phase 11: FAQ Page (`/faq`)
- [ ] Accessible accordion component for 8 core safety training questions
- [ ] Direct quick-search filter for instant answers
- [ ] "Still have questions?" support card

## Phase 12: Legal & Fallback Pages
- [ ] `/privacy` (Privacy Policy)
- [ ] `/terms` (Terms of Service)
- [ ] `/not-found` (Custom 404 with navigation back to Home)

## Phase 13: Technical SEO & Metadata
- [ ] Root metadata (title template, description, keywords, OpenGraph, Twitter card)
- [ ] Page-level metadata for each route
- [ ] Dynamic `/sitemap.xml` and `/robots.txt`
- [ ] JSON-LD structured data (Organization, WebSite, Course schema)

## Phase 14: Quality Assurance & Optimization
- [ ] Full responsive testing across viewports (320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px, 1920px)
- [ ] WCAG contrast & keyboard navigation audit
- [ ] ESLint check (`npm run lint`)
- [ ] TypeScript typecheck (`npx tsc --noEmit`)
- [ ] Production build (`npm run build`)
- [ ] Browser E2E verification of all interactive components

## Phase 15: Git Workflow & GitHub Sync
- [ ] Clean semantic commits for each milestone
- [ ] Final push to `pokhrelboss/laliguras`
- [ ] Verify GitHub repository state
