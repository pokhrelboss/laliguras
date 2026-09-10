import { HazardPoint } from "@/types";

export interface PlatformCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const PLATFORM_CAPABILITIES: PlatformCapability[] = [
  {
    id: "training-content",
    title: "Training Content Framework",
    subtitle: "Structured course and lesson model",
    description: "The current catalogue maps workplace-safety subjects into modules and learning objectives. Qualified safety review is required before any content is presented as accredited or compliance-ready.",
    iconName: "BookOpen",
    badge: "Content Model",
  },
  {
    id: "interactive-learning",
    title: "Interactive Learning",
    subtitle: "Active decisions and direct feedback",
    description: "The product direction moves beyond passive slides by asking learners to identify hazards, make choices, and see a clear explanation of the safer action.",
    iconName: "Sparkles",
    badge: "Core Innovation",
  },
  {
    id: "video-lessons",
    title: "Video Lesson Experience",
    subtitle: "A clear interface for instructional media",
    description: "The current interface maps chapter navigation, playback, supporting text, and completion actions. Final instructional media production remains content work.",
    iconName: "PlayCircle",
  },
  {
    id: "360-scenarios",
    title: "360° Workplace Scenarios",
    subtitle: "Immersive simulated inspection tours",
    description: "The product direction includes panoramic workplace recreations. The public preview demonstrates the hazard-identification and feedback interaction in a lightweight browser experience.",
    iconName: "Scan",
    badge: "Signature Feature",
  },
  {
    id: "assessments",
    title: "Knowledge Assessments",
    subtitle: "Structured questions and answer rationale",
    description: "The assessment interface maps question progression, selected answers, and result feedback as part of the end-to-end learner journey.",
    iconName: "ClipboardCheck",
  },
  {
    id: "progress-tracking",
    title: "Granular Progress Tracking",
    subtitle: "Visible milestones across the learner journey",
    description: "The dashboard concept brings module state, learning activity, and completion records into a single learner-facing overview.",
    iconName: "TrendingUp",
  },
  {
    id: "completion-feedback",
    title: "Instant Completion & Feedback",
    subtitle: "A clear post-assessment result state",
    description: "The result experience maps score, completion status, and next actions without claiming a live production assessment service.",
    iconName: "Award",
  },
  {
    id: "certificates",
    title: "Certificate Records",
    subtitle: "A dedicated completion artifact",
    description: "A dedicated completion and certificate record gives learners a clear result to retain after finishing a module.",
    iconName: "FileCheck",
    badge: "Product Direction",
  },
  {
    id: "employee-records",
    title: "Centralized Employee Training Records",
    subtitle: "A planned history of learning activity",
    description: "The Phase 2 direction includes organization-level records, renewal information, and department views. These are not presented as live production services today.",
    iconName: "Users",
  },
  {
    id: "company-reporting",
    title: "Executive Company Reporting",
    subtitle: "A planned oversight surface",
    description: "The proposed administrator experience includes completion views and reporting exports, subject to product implementation and qualified compliance review.",
    iconName: "BarChart3",
  },
];

export const WAREHOUSE_HAZARDS: HazardPoint[] = [
  {
    id: "hazard-1",
    title: "Obstructed Fire Exit",
    description: "Pallets and cartons are stacked directly against the emergency egress door, blocking escape routes in a smoke emergency.",
    xPercent: 18,
    yPercent: 38,
    severity: "critical",
    correctAction: "Immediately remove obstructions and maintain a minimum 1.2m clear corridor to all emergency exits at all times.",
  },
  {
    id: "hazard-2",
    title: "Unsecured High-Tier Pallet",
    description: "A top-rack pallet is loosely wrapped with overhang, presenting an immediate falling object hazard to workers below.",
    xPercent: 44,
    yPercent: 24,
    severity: "critical",
    correctAction: "Wrap pallet loads securely, inspect weight distribution, and store heavier loads on lower racking tiers.",
  },
  {
    id: "hazard-3",
    title: "Blind Intersection Without Mirror",
    description: "Forklift operating near a pedestrian aisle without a convex safety mirror or audible proximity beepers.",
    xPercent: 78,
    yPercent: 52,
    severity: "critical",
    correctAction: "Install wide-angle parabolic mirrors at every blind junction and enforce designated pedestrian walkways.",
  },
  {
    id: "hazard-4",
    title: "Unmarked Fluid Spill",
    description: "Hydraulic oil leak on the smooth polished warehouse floor with no warning triangle or absorbent powder applied.",
    xPercent: 62,
    yPercent: 78,
    severity: "moderate",
    correctAction: "Cordon off the area with a wet-floor cone immediately, deploy absorbent boom pads, and report the machinery leak.",
  },
  {
    id: "hazard-5",
    title: "Improper Manual Handling Posture",
    description: "Worker bending straight from the waist with locked knees while lifting a heavy 25kg container.",
    xPercent: 33,
    yPercent: 68,
    severity: "moderate",
    correctAction: "Bend knees, keep back straight, bring load close to chest, and utilize mechanical lifting aids for loads over 20kg.",
  },
];
