export type ProjectCategory = 
  | "Enterprise Platforms" 
  | "Web Applications" 
  | "Interactive & 3D" 
  | "Health & Safety";

export interface CaseStudyMetric {
  value: string;
  label: string;
  context?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  tag?: string;
  screenshotKey?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientName: string;
  clientType: "Client Project" | "Studio Innovation" | "Enterprise Partnership";
  category: ProjectCategory;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  features: ProjectFeature[];
  technologies: string[];
  metrics: CaseStudyMetric[];
  isFeatured: boolean;
  coverImage?: string;
  showcaseScreenshots?: {
    title: string;
    description: string;
    imagePath: string;
    caption: string;
  }[];
  ctaText?: string;
  ctaHref?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  benefits: string[];
  keyTechnologies: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  initials: string;
  photoUrl?: string;
  linkedInUrl?: string;
  githubUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Services & Studio" | "SafeStep Platform" | "Engineering & Tech" | "Partnership";
}

export type DemoInterest = 
  | "New Digital Product" 
  | "Enterprise Platform / LMS" 
  | "SafeStep Platform Demo" 
  | "Technical Consultation" 
  | "General Inquiry";

export interface DemoRequestPayload {
  fullName: string;
  organization: string;
  workEmail: string;
  phoneNumber?: string;
  interest: DemoInterest;
  message?: string;
}

// ==========================================
// SafeStep Safety Simulation & Course Types
// ==========================================
export type CourseCategory = 
  | "Core Safety" 
  | "Compliance" 
  | "Workplace Health" 
  | "Industrial" 
  | "Emergency";

export type CourseStatus = "available" | "coming-soon";

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CourseCategory;
  durationMinutes: number;
  lessonsCount: number;
  status: CourseStatus;
  featured: boolean;
  has360Scenario: boolean;
  keyTopics: string[];
  learningObjectives: string[];
  targetAudience: string[];
  badgeText?: string;
}

export interface HazardPoint {
  id: string;
  title: string;
  description: string;
  xPercent: number; // 0 - 100 for interactive positioning
  yPercent: number; // 0 - 100
  severity: "critical" | "moderate" | "advisory";
  correctAction: string;
}

// ==========================================
// Phase 2 Multi-Tenant LMS Preparation Types
// ==========================================
export interface Tenant {
  id: string;
  slug: string;
  name: string;
  customLogoUrl?: string;
  primaryBrandColor?: string;
  domain?: string;
  plan: "standard" | "professional" | "enterprise";
  maxLearners: number;
  activeLearnersCount: number;
  createdAt: string;
}

export interface LearnerProfile {
  id: string;
  tenantId: string;
  fullName: string;
  email: string;
  department?: string;
  enrolledCourseIds: string[];
  completedCourseIds: string[];
  certificatesCount: number;
  streakDays: number;
  totalTrainingHours: number;
}

export interface CertificateRecord {
  id: string;
  certificateNumber: string;
  learnerId: string;
  learnerName: string;
  courseId: string;
  courseTitle: string;
  scorePercent: number;
  issueDate: string;
  expiryDate?: string;
  verificationHash: string;
}
