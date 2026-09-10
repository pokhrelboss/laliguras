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
    title: "Accredited Training Content",
    subtitle: "Built by certified safety professionals",
    description: "Every module is designed according to current occupational safety regulations, translating complex legal mandates into clear, actionable workplace behaviors.",
    iconName: "BookOpen",
    badge: "Accredited",
  },
  {
    id: "interactive-learning",
    title: "Interactive Learning",
    subtitle: "Active engagement, zero passive clicking",
    description: "Instead of clicking 'Next' on endless text slides, learners make real-time decisions, identify hazards, and experience realistic consequences in safe virtual environments.",
    iconName: "Sparkles",
    badge: "Core Innovation",
  },
  {
    id: "video-lessons",
    title: "High-Definition Video Lessons",
    subtitle: "Clear demonstrations of correct technique",
    description: "High-definition, professionally produced video lessons demonstrate real-world lifting kinematics, PPE fit-checks, and emergency response sequences.",
    iconName: "PlayCircle",
  },
  {
    id: "360-scenarios",
    title: "360° Workplace Scenarios",
    subtitle: "Immersive simulated inspection tours",
    description: "Learners explore panoramic 360° recreations of warehouses, industrial plant rooms, and office suites, panning around to spot hidden safety hazards before they cause injuries.",
    iconName: "Scan",
    badge: "Signature Feature",
  },
  {
    id: "assessments",
    title: "Knowledge Assessments",
    subtitle: "Targeted question banks with instant rationales",
    description: "Dynamic quizzes test conceptual grasp, visual hazard recognition, and procedural steps, providing immediate explanations for incorrect choices to reinforce learning.",
    iconName: "ClipboardCheck",
  },
  {
    id: "progress-tracking",
    title: "Granular Progress Tracking",
    subtitle: "Visible milestones and completion streaks",
    description: "Learners track their modules completed, time invested, learning streaks, and upcoming deadlines through a clean, motivational dashboard interface.",
    iconName: "TrendingUp",
  },
  {
    id: "completion-feedback",
    title: "Instant Completion & Feedback",
    subtitle: "Actionable post-module performance reviews",
    description: "Immediate score breakdowns highlight areas of mastery and point learners directly to refresher material for questions they missed.",
    iconName: "Award",
  },
  {
    id: "certificates",
    title: "Verifiable Digital Certificates",
    subtitle: "Tamper-evident credentials with QR verification",
    description: "Every passing learner automatically receives a cryptographic certificate featuring a unique identification hash and instant QR verification for safety audits.",
    iconName: "FileCheck",
    badge: "Audit-Ready",
  },
  {
    id: "employee-records",
    title: "Centralized Employee Training Records",
    subtitle: "Complete compliance history at your fingertips",
    description: "Maintain historical training logs, renewal reminders, and department-level competency matrices in a centralized, secure cloud archive.",
    iconName: "Users",
  },
  {
    id: "company-reporting",
    title: "Executive Company Reporting",
    subtitle: "Bird's-eye visibility for leadership and HSE teams",
    description: "Export comprehensive audit reports, monitor pass rates across business units, and prove organizational compliance to regulators with one click.",
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
