import {
  BarChart3,
  Check,
  FileText,
  QrCode,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

export const BLUE = "#0B1E41";
export const GREEN = "#376D0E";

export const navLinks = [
  ["Features", "#features"],
  ["Customization", "#customization"],
  ["How It Works", "#how-it-works"],
  ["Demo", "#demo"],
];

export const features = [
  {
    icon: Users,
    title: "Patient Management",
    text: "Register, search, filter and manage patient profiles from one organized system.",
  },
  {
    icon: FileText,
    title: "Treatment & Visit Records",
    text: "Keep patient visits, treatment information and history together for easier access.",
  },
  {
    icon: Wallet,
    title: "Payments & Expenses",
    text: "Track patient payments and practice expenses with clear, structured records.",
  },
  {
    icon: QrCode,
    title: "Smart ID & QR",
    text: "Generate patient IDs and quickly access records through QR-based workflows.",
  },
  {
    icon: FileText,
    title: "Digital Documents",
    text: "Manage consent forms, medical certificates, PDFs and documents from patient records.",
  },
  {
    icon: BarChart3,
    title: "Practice Overview",
    text: "See useful patient statistics and quick actions from a simple dashboard.",
  },
];

export const customization = [
  "Start with a simple single-user setup",
  "Add multiple doctors or staff users",
  "Create role-based access and permissions",
  "Add or remove features based on your workflow",
  "Build custom reports and practice-specific workflows",
  "Choose mobile, web or both based on your requirements",
];

export const steps = [
  [
    1,
    "Tell us about your practice",
    "Share your current workflow, team size and the features you need.",
  ],
  [
    2,
    "Explore the solution",
    "See a working example and discuss how it can be adapted to your requirements.",
  ],
  [
    3,
    "Customize your solution",
    "Add, remove or adapt features around the way your practice actually works.",
  ],
];

export const demoFeatures = [
  "Patient records",
  "Treatment & visit history",
  "Payments & expenses",
  "Digital documents",
  "Smart ID & QR",
  "Dashboard & reports",
];