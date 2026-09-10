# Product Requirements Document (PRD) — Laliguras

**Project Name:** Laliguras  
**Version:** 1.0.0 (Phase 1 — Official Company Website & Platform Architecture)  
**Status:** In Progress  
**Repository:** [github.com/pokhrelboss/laliguras](https://github.com/pokhrelboss/laliguras)  
**Target Delivery:** Production-grade modern web application  

---

## 1. Executive Summary & Product Overview
**Laliguras** is a modern workplace health, safety, and professional training company and technology platform. Taking inspiration from Nepal's resilient national flower—the Laligurans (Rhododendron)—Laliguras empowers organizations and their workforce through interactive, real-world scenario training, replacing outdated compliance checklists with engaging, practical, and measurable safety education.

### Phase 1 Scope
Phase 1 focuses on designing and delivering the **official public company website** and establishing the underlying architectural foundation for Phase 2 (the multi-tenant client and learner training dashboard).

### Strategic Value Proposition
- **Understand in 5–10 seconds:**
  1. What Laliguras does (practical, interactive workplace health & safety training).
  2. Who it is for (business owners, HR, HSE managers, enterprise organizations).
  3. Why interactive training outperforms traditional methods (active hazard identification, 360° environments, retention).
  4. Available training modules (Manual Handling, Fire Safety, COSHH, Working at Height, PPE, Emergency Procedures).
  5. How to request a demo or partner with Laliguras.

---

## 2. Target Audience & Personas
### Primary Users
- **Business Owners & Executives:** Seeking reduced workplace incidents, legal compliance, reduced downtime, and scalable team onboarding.
- **Health & Safety (HSE) Officers:** Demanding verifiable compliance, practical hazard awareness, and up-to-date certification records.
- **HR & People Operations:** Looking for streamlined employee onboarding, intuitive training management, and automated tracking.
- **Operations & Facility Managers:** Needing warehouse, industrial, and office safety with measurable behavioral change.

### Secondary Users
- **Employees & Learners:** Seeking intuitive, non-tedious, mobile-friendly training with real-world scenarios and verifiable certificates.
- **Prospective Training Partners:** Seeking collaborative safety training frameworks in South Asia and globally.

---

## 3. Brand Identity & Visual Direction
Inspired by the Laligurans flower and Himalayan resilience, balanced with world-class corporate software ergonomics:

| Element | Specification | Rationale |
| :--- | :--- | :--- |
| **Primary Brand Color** | Crimson / Rhododendron Red (`#9E1A2F` / `#8B1E2D` / `#A31D36`) | Evokes the Laligurans flower, alertness, safety, high energy. |
| **Primary Deep Accent** | Deep Forest Green (`#0F2D24` / `#163E32`) | Represents growth, nature, balance, and stability. |
| **Neutral Backgrounds** | Soft Chalk & Off-White (`#F9FAF9`, `#F4F6F4`, `#FFFFFF`) | High readability, clean aesthetic without harsh pure white glare. |
| **Typography** | Inter / System Sans, Deep Pine (`#0A1914` / `#0E221B`) | Crisp corporate authority, high legibility across all screen sizes. |
| **Aesthetic Principles** | Human-designed, clean, grounded, authentic. | **Strictly avoid:** generic AI glowing blobs, floating glass orbs, fake metrics, stock robot illustrations, emoji icons. |
| **Iconography** | Crisp SVG line icons (Lucide React) | Professional clarity and accessible sizing. |

---

## 4. Information Architecture & Navigation

### Routes & Structure
- `/` — **Home:** High-impact hero, value pillars, platform showcase teaser, 360° interactive preview, featured training modules, how it works, employer/employee benefits, testimonials/trust banner, final CTA.
- `/about` — **About Us:** Mission, Vision, Core Values, The Laliguras Story, dedication to workplace safety.
- `/platform` — **Platform (SafeStep):** Deep dive into the interactive training ecosystem, 360° workplace scenario interactive simulation, video lessons, assessments, compliance tracking, and white-label capabilities.
- `/training` — **Training Modules:** Catalog of professional safety courses (Manual Handling, Fire Safety, COSHH, Working at Height, PPE, Emergency Procedures) with duration, lessons count, and learning outcomes.
- `/team` — **Our Team:** Dedicated showcase for the Laliguras team (Sakshyam Pokhrel, Sijan Kafle, Arbin Giri, Ishan Bhandari, Ayush Nepaune, Sukriti Rimal) with elegant neutral avatars and extensible social links.
- `/faq` — **Frequently Asked Questions:** Accessible accordions answering 8 critical questions on certification, mobile access, customization, and platform capabilities.
- `/contact` — **Request Demo / Contact:** Complete request demo form with client and server-side validation, interest selector, feedback states, and company details.
- `/privacy` & `/terms` — **Legal Policies:** Privacy policy and terms of service.
- `/not-found` — **Custom 404:** Professional fallback with recovery navigation.

---

## 5. Functional Requirements

### 5.1 Hero & Homepage
- **Tagline Eyebrow:** "TRAINING FOR A SAFER TOMORROW"
- **Headline:** SafeStep — An Integrated Health and Safety Training Platform
- **Core Mantra:** Learn • Practise • Stay Safe
- **Primary Action:** "Request a Demo" (leads to demo form / modal)
- **Secondary Action:** "Explore Platform" (leads to `/platform`)
- **Interactive Teaser:** Interactive 360° hazard identification mini-demo simulating the warehouse environment.
- **Value Proposition Ribbon:**
  1. Engaging Learning (Interactive modules, high retention)
  2. Real-World Scenarios (Branching simulated workplace situations)
  3. Practical Knowledge (Actionable safety habits, not rote memorization)
  4. Measurable Progress (Detailed completion & competency tracking)
  5. Safer Workplaces (Reduced workplace risks and incident rates)

### 5.2 About Laliguras
- Headline: "People. Innovation. Safer Tomorrows."
- Pillars:
  - **Our Mission:** To build healthier, safer workplaces through accessible and engaging training and awareness.
  - **Our Vision:** To be a trusted leader in workplace safety, by empowering teams with knowledge and confidence to create positive outcomes.
  - **Our Values:** People First, Integrity, Innovation, Collaboration, Continuous Improvement, Safety.
  - **Our Story:** Grounded in resilience and community, creating safer futures one step at a time.
- Extensible content architecture in `data/` for non-destructive updates.

### 5.3 Platform Showcase & 360° Simulation
- Showcase SafeStep ecosystem:
  - Training Content (HD video, interactive step-by-step guides)
  - 360° Scenario Simulation (Explorable workplace with hazard tags)
  - Knowledge Assessments (Targeted quizzes with instant rationale)
  - Progress Tracking (Visual streaks, completion metrics, time spent)
  - Verifiable Certifications (Tamper-evident completion certificates)
  - Employer Reporting (Centralized compliance dashboards)
- Working interactive warehouse scenario preview showing real hazard detection pins and immediate feedback.

### 5.4 Training Catalog
- Structured course cards featuring:
  - Course Title, Category, Short Description, Duration (mins), Number of Lessons, Status (Available / Coming Soon), Target Audience.
  - Initial Courses:
    1. Manual Handling Training (Available - Featured)
    2. Fire Safety Awareness (Available)
    3. COSHH — Control of Substances Hazardous to Health (Available)
    4. Working at Height (Coming Soon)
    5. PPE — Personal Protective Equipment (Available)
    6. Emergency Procedures & Evacuation (Coming Soon)

### 5.5 Team Section
- Required Team Members:
  1. **Sakshyam Pokhrel**
  2. **Sijan Kafle**
  3. **Arbin Giri**
  4. **Ishan Bhandari**
  5. **Ayush Nepaune**
  6. **Sukriti Rimal**
- Design requirement: No fabricated job titles; support optional roles, neutral avatars, LinkedIn/social fields, responsive grid (3-col desktop, 2-col tablet, 1-col mobile).

### 5.6 Demo Request & Contact Engine
- Fields: Full Name*, Organization/Company*, Work Email*, Phone Number, Interest Dropdown* (Request a Demo, Training Partnership, Enterprise Training, General Inquiry), Message.
- Strict validation (email format, required fields, minimum message length).
- API Route `/api/demo-request` with structured logging/storage readiness.
- User feedback: Idle, Submitting (spinner), Success (confirmation banner with next steps), Error (actionable alert).

### 5.7 Frequently Asked Questions
- Accordion component with WCAG keyboard accessibility.
- Answers to: Starting modules, Certificate generation, Mobile accessibility, Organization multi-employee management, Types of training, Custom course requests, 360° simulation mechanics, Demo requests.

---

## 6. Technical Stack & Architecture
- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 with semantic CSS variables
- **Icons:** Lucide React
- **Directory Structure:**
  ```
  /app                  # Routes, layouts, and API endpoints
  /components
    /ui                 # Primitives (Button, Card, Badge, Input, Accordion, etc.)
    /layout             # Navbar, Footer, MobileNav, Container
    /sections           # Page-specific sections (Hero, PlatformPreview, etc.)
  /lib                  # Utilities (cn, validation, api helpers)
  /data                 # Content stores (courses, team, faq, company)
  /types                # TypeScript models (Courses, Team, DemoRequest, Platform)
  /public               # Static assets, SVG marks, brand references
  ```

---

## 7. Future Platform (Phase 2) Readiness
Architectural preparation for multi-tenant white-label LMS:
- **Tenant Hierarchy:** Laliguras Root -> Client Companies -> Client Admins -> Learners / Employees.
- **Domain Models:** Pre-defined TypeScript interfaces for `Tenant`, `Organization`, `Learner`, `Course`, `Lesson`, `Assessment`, `CertificateRecord`, and `ComplianceReport`.

---

## 8. Quality Assurance & Performance Targets
- **Lighthouse Targets:** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- **Viewport Testing:** 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px, 1920px.
- **No Tolerances:** No dead links (`#`), no horizontal scrolling, no missing alt tags, no broken controls.
