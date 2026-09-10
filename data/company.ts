export interface CompanyValue {
  title: string;
  description: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  shortLabel: string;
}

export const COMPANY_INFO = {
  name: "Laliguras",
  tagline: "Engineering Ambitious Digital Products & Platforms",
  headline: "Digital Product Engineering & Technology Studio",
  subheadline: "We design and build high-quality software, enterprise platforms, and interactive client solutions.",
  mantra: "Architect • Build • Deliver",
  shortDescription: "Laliguras is a modern technology and product engineering studio. We partner with forward-thinking organizations to design, engineer, and scale mission-critical digital products, interactive 3D simulations, and enterprise platforms.",
  
  mission: "To engineer exceptional digital software and client platforms that combine architectural precision, human-centered design, and lasting impact.",
  vision: "To be recognized as a premier digital product studio from South Asia, known globally for engineering resilience, craft, and client-centric innovation.",
  
  values: [
    {
      title: "Engineering Rigor",
      description: "We architect resilient, clean, and scalable systems built for longevity—prioritizing performance, maintainability, and security.",
    },
    {
      title: "Human-Centered Craft",
      description: "Technology must serve people. Every interface, interaction, and workflow we design is rooted in ergonomic clarity and user empathy.",
    },
    {
      title: "Himalayan Resilience",
      description: "Inspired by the Laligurans flower thriving in alpine altitudes, we bring relentless persistence, resourcefulness, and grit to tough technical challenges.",
    },
    {
      title: "Transparent Partnership",
      description: "No black boxes, no tech jargon. We act as an embedded engineering ally with open communication, clear milestones, and complete IP ownership for clients.",
    },
    {
      title: "Continuous Innovation",
      description: "From 360° spatial simulations to modern reactive architectures, we continuously push the boundaries of what web technology can achieve.",
    },
    {
      title: "Measurable Impact",
      description: "We measure success by real business outcomes, operational efficiencies, and tangible user satisfaction, not vanity metrics.",
    },
  ] as CompanyValue[],

  story: "Laliguras takes its name from Nepal's national flower—the Laligurans (Rhododendron)—a symbol of enduring resilience, natural beauty, and quiet strength across challenging mountain terrain. Founded as a modern technology and product development studio, we set out to prove that world-class software engineering and human-centered design can flourish from Kathmandu to the world. We partner with enterprises, startups, and institutions to turn ambitious concepts into reliable, production-grade digital platforms—such as SafeStep, our flagship client health and safety training suite.",

  quote: {
    text: "Inspired by the strength of the Laligurans, we build enduring digital products that move industries forward.",
    author: "Team Laliguras",
  },

  contact: {
    email: "info@laliguras.com",
    location: "Lalitpur, Nepal",
    hours: "Monday – Friday, 9:00 AM – 6:00 PM (NPT)",
  },

  howWeWork: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We deep-dive into your operational challenges, stakeholder needs, and system requirements to draft a precise technical roadmap.",
    },
    {
      step: "02",
      title: "System Architecture",
      description: "We design robust data models, API schemas, security postures, and scalable cloud topologies before writing production code.",
    },
    {
      step: "03",
      title: "UI/UX & Interactive Prototyping",
      description: "Our design team crafts intuitive user journeys, high-fidelity design systems, and responsive, accessible interfaces.",
    },
    {
      step: "04",
      title: "Agile Engineering",
      description: "Full-stack development with modern frameworks, clean TypeScript, rigorous automated testing, and bi-weekly sprint reviews.",
    },
    {
      step: "05",
      title: "Deployment & Scale",
      description: "Zero-downtime CI/CD pipelines, production monitoring, documentation handover, and ongoing platform evolution.",
    },
  ],


  valueProps: [
    {
      shortLabel: "Engaging Learning",
      title: "Engaging Learning",
      description: "Interactive bite-sized video lessons that keep learners focused, resulting in significantly higher retention.",
    },
    {
      shortLabel: "Real-World Scenarios",
      title: "Real-World Scenarios",
      description: "Explore simulated workplace environments, navigate hazards, and test real-time judgment without physical danger.",
    },
    {
      shortLabel: "Practical Knowledge",
      title: "Practical Knowledge",
      description: "Immediate, actionable safety behaviors and posture techniques that employees carry directly onto the floor.",
    },
    {
      shortLabel: "Measurable Progress",
      title: "Measurable Progress",
      description: "Granular learner metrics, assessment scores, completion times, and instant tamper-evident certification records.",
    },
    {
      shortLabel: "Safer Workplaces",
      title: "Safer Workplaces",
      description: "Training designed to support clearer safety awareness and more consistent workplace practice.",
    },
  ] as ValueProposition[],

  benefits: {
    employers: [
      "Centralized employee training management across multiple teams and sites",
      "Real-time completion tracking with automated reminder triggers",
      "Immutable, auditable digital training and certification records",
      "Rigorous knowledge assessments proving true understanding",
      "Verifiable tamper-evident completion certificates",
      "Substantial reduction in preventable workplace accidents and liability",
      "Scalable onboarding that grows effortlessly with your workforce",
      "Consistent, standardized safety experiences across all departments",
    ],
    employees: [
      "Intuitive, easy-to-follow lessons designed for busy schedules",
      "Interactive 360° workplace scenarios where you learn by doing",
      "100% mobile-friendly interface for learning anytime, anywhere",
      "Clear personal progress tracking and learning streaks",
      "Instant feedback on quizzes with clear rationales",
      "Downloadable certificates of completion",
      "Practical, life-saving knowledge applicable on day one",
    ],
  },

  workflowSteps: [
    {
      step: "01",
      title: "Choose Training",
      description: "Select from the course catalog or request customized modules tailored to your industry risks.",
    },
    {
      step: "02",
      title: "Invite Your Team",
      description: "Upload employee rosters or send seamless magic-link invitations to specific departments.",
    },
    {
      step: "03",
      title: "Employees Learn",
      description: "Staff complete engaging video lessons and explore interactive 360° hazard scenarios on mobile or desktop.",
    },
    {
      step: "04",
      title: "Complete Assessments",
      description: "Learners test their understanding with practical knowledge checks and scenario-based questions.",
    },
    {
      step: "05",
      title: "Earn Certificates",
      description: "Successful learners immediately receive verifiable certificates complete with secure verification hashes.",
    },
    {
      step: "06",
      title: "Track Compliance & Progress",
      description: "Monitor real-time completion rates, audit readiness, and department safety metrics from a single dashboard.",
    },
  ],
};

