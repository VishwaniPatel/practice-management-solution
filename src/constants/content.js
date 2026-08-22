import {
  BarChart3,
  CalendarDays,
  Check,
  FileText,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Smartphone,
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
    title: "Visits & Treatment Records",
    text: "Keep patient visits, treatment information and history together for easy access.",
  },
  {
    icon: Wallet,
    title: "Payments & Expenses",
    text: "Track patient payments and practice expenses with clear, structured records.",
  },
  {
    icon: QrCode,
    title: "Smart ID & QR",
    text: "Generate patient IDs and quickly access records using QR-based workflows.",
  },
  {
    icon: FileText,
    title: "Digital Documents",
    text: "Manage consent forms, certificates, PDFs and other patient documents.",
  },
  {
    icon: BarChart3,
    title: "Practice Dashboard",
    text: "View useful statistics, patient counts and quick actions from a simple dashboard.",
  },
];

export const customizableFeatures = [
  {
    icon: CalendarDays,
    title: "Appointment Management",
    text: "Manage appointments, schedules, availability and patient bookings.",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    text: "Add doctors, assistants, receptionists, staff or other team members.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Permissions",
    text: "Control what each user can view, add, edit or manage.",
  },
  {
    icon: BarChart3,
    title: "Advanced Reports",
    text: "Create reports and dashboards based on your practice requirements.",
  },
  {
    icon: Wallet,
    title: "Billing & Invoicing",
    text: "Build billing, invoices, payment tracking and financial workflows.",
  },
  {
    icon: MessageCircle,
    title: "Notifications & Reminders",
    text: "Add appointment reminders, patient notifications and communication workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    text: "Build a mobile experience for doctors, staff or patients.",
  },
  {
    icon: FileText,
    title: "Web Application",
    text: "Create a browser-based solution accessible from desktop, tablet or mobile.",
  },
  {
    icon: Users,
    title: "Multiple Branches",
    text: "Manage multiple practice locations with centralized or branch-specific access.",
  },
];

export const steps = [
  [
    "01",
    "Understand your workflow",
    "We learn how your practice currently works, what your team needs and what you want the solution to improve.",
  ],
  [
    "02",
    "Plan the solution",
    "We define the required features, users, permissions, data and platform based on your requirements.",
  ],
  [
    "03",
    "Design the screens",
    "We plan the screens, navigation and user experience around your workflow, required data and visual preferences.",
  ],
  [
    "04",
    "Build the solution",
    "We develop the required mobile app, web application or both according to the agreed plan.",
  ],
  [
    "05",
    "Test with you",
    "You review and test the solution with us so we can refine the workflow based on your feedback.",
  ],
  [
    "06",
    "Launch",
    "Once everything is ready, we prepare and launch the solution for your practice.",
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

export const customization = [
    "Start with a simple single-user setup",
    "Add multiple doctors or staff users",
    "Create role-based access and permissions",
    "Add or remove features based on your workflow",
    "Build custom reports and practice-specific workflows",
    "Choose mobile, web or both based on your requirements",
];