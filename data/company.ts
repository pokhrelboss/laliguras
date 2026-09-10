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
  platformName: "SafeStep",
  tagline: "Training for a Safer Tomorrow",
  headline: "An Integrated Health and Safety Training Platform",
  mantra: "Learn • Practise • Stay Safe",
  shortDescription: "Laliguras delivers modern, interactive workplace health and safety training. We replace outdated compliance checklists with immersive 360° scenarios, practical exercises, and measurable safety outcomes.",
  
  mission: "To build healthier, safer workplaces through accessible, engaging, and practical training that protects every worker.",
  vision: "To be a trusted leader in workplace safety, empowering teams with the knowledge, confidence, and habits to prevent accidents before they occur.",
  
  values: [
    {
      title: "People First",
      description: "Human well-being, dignity, and physical protection guide every decision we make and every module we design.",
    },
    {
      title: "Integrity",
      description: "We provide truthful, scientifically grounded, and strictly compliant safety education that organizations can rely upon.",
    },
    {
      title: "Innovation",
      description: "We replace passive slide decks with immersive 360° workplace hazard simulations and active decision-making.",
    },
    {
      title: "Collaboration",
      description: "We partner closely with employers, frontline workers, and safety professionals to solve real-world workplace risks.",
    },
    {
      title: "Continuous Improvement",
      description: "Safety is not static. We continuously update content, improve simulations, and adapt to evolving industrial standards.",
    },
    {
      title: "Safety",
      description: "Proactive prevention is our core creed. We build a safety-first mindset that workers carry throughout their careers.",
    },
  ] as CompanyValue[],

  story: "Laliguras takes its name from Nepal's national flower—the Laligurans (Rhododendron)—a symbol of enduring resilience, natural beauty, and strength across challenging mountain terrain. We began with a straightforward conviction: workplace safety training has been broken for decades. Too often treated as a mindless box-ticking exercise, traditional training leaves employees unprepared when real hazards arise. Laliguras was founded to change this. By pairing accredited occupational health standards with interactive technology, we enable workers to identify hazards before they cause harm.",

  quote: {
    text: "Inspired by the strength of the Laligurans, we build safer workplaces for a brighter tomorrow.",
    author: "Team Laliguras",
  },

  contact: {
    email: "info@laliguras.com",
    phone: "+977 9801234567",
    location: "Lalitpur, Nepal",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM",
  },

  valueProps: [
    {
      shortLabel: "Engaging Learning",
      title: "Engaging Learning",
      description: "Interactive bite-sized video lessons that keep learners focused, resulting in significantly higher retention than traditional paper manuals.",
    },
    {
      shortLabel: "Real-World Scenarios",
      title: "Real-World Scenarios",
      description: "Explore simulated workplace environments, navigate hazards, and test real-time judgment without physical danger.",
    },
    {
      shortLabel: "Practical Knowledge",
      title: "Practical Knowledge",
      description: "Immediate, actionable safety behaviors and posture techniques that employees carry directly onto the warehouse and office floor.",
    },
    {
      shortLabel: "Measurable Progress",
      title: "Measurable Progress",
      description: "Granular learner metrics, assessment scores, completion times, and instant tamper-evident certification records.",
    },
    {
      shortLabel: "Safer Workplaces",
      title: "Safer Workplaces",
      description: "A proven reduction in workplace accidents, minimized operational downtime, and a pervasive safety-first team culture.",
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
      "Downloadable, industry-recognized certificates of completion",
      "Practical, life-saving knowledge applicable on day one",
    ],
  },

  workflowSteps: [
    {
      step: "01",
      title: "Choose Training",
      description: "Select from our accredited catalog or request customized modules tailored to your industry risks.",
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
