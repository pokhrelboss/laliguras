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

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  bio: string;
  initials: string;
  linkedInUrl?: string;
  specialization?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Certification" | "Technology" | "Enterprise";
}

export type DemoInterest = 
  | "Request a Demo" 
  | "Training Partnership" 
  | "Enterprise Training" 
  | "General Inquiry";

export interface DemoRequestPayload {
  fullName: string;
  organization: string;
  workEmail: string;
  phoneNumber?: string;
  interest: DemoInterest;
  message?: string;
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
  issueDate: string;
  expiryDate?: string;
  verificationHash: string;
  scorePercent: number;
}
