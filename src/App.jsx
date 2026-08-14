import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  FileText,
  Menu,
  MessageCircle,
  QrCode,
  Search,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Users,
  Wallet,
  X,
} from "lucide-react";
import logo from "../public/screenshots/navdant_logo.png"

const BLUE = "#0B1E41";
const GREEN = "#376D0E";

const features = [
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
    text: "Track patient payments and clinic expenses with clear, structured records.",
  },
  {
    icon: QrCode,
    title: "Smart ID & QR",
    text: "Generate patient Smart IDs and quickly access records through QR scanning.",
  },
  {
    icon: FileText,
    title: "Digital Documents",
    text: "Manage consent forms, medical certificates, PDFs and sharing from patient records.",
  },
  {
    icon: BarChart3,
    title: "Clinic Overview",
    text: "See useful patient statistics and quick actions from a simple dashboard.",
  },
];

const customization = [
  "Start with a simple single-user setup",
  "Add multiple dentists or staff users",
  "Create role-based access and permissions",
  "Add or remove features based on your workflow",
  "Build custom reports and clinic-specific workflows",
  "Scale the system as your clinic grows",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Features", "#features"],
    ["Customization", "#customization"],
    ["How It Works", "#how-it-works"],
    ["Screenshots", "#screenshots"],
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-wide flex h-20 items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Navdant Dental Clinic"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[#376D0E]"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#0B1E41] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0B1E41]/15 transition hover:-translate-y-0.5 hover:bg-[#376D0E]"
          >
            Request a Demo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-[#0B1E41] md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 md:hidden">
          <div className="container-wide flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-semibold text-slate-700"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[#0B1E41] px-5 py-3 text-center font-bold text-white"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden bg-[#0B1E41] pt-32">
      <div className="container-wide grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#376D0E]" />
            Dental clinic management, tailored to you
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Smart Dental Clinic Management,
            <span className="text-[#8CC63E]"> Built Around Your Practice.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Manage patients, treatment history, payments, expenses and clinic records in one place — with a solution that can be customized to your clinic's needs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#0B1E41] shadow-xl transition hover:-translate-y-0.5">
              Request a Free Demo <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10">
              Explore Features
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
            {["Single or Multi-User", "Custom Features", "Flexible Workflows"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Check className="h-4 w-4 text-[#8CC63E]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-10 rounded-full bg-[#376D0E]/20 blur-3xl" />
          <div className="relative rounded-[34px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[27px] bg-white shadow-2xl">
              <img src="/screenshots/dashboard.jpeg" alt="Navdant dental clinic dashboard" className="w-full" />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#376D0E]/10">
                <Users className="h-6 w-6 text-[#376D0E]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0B1E41]">Patient Records</div>
                <div className="text-xs text-slate-500">Organized in one place</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-[#F6F8FC] py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">Powerful, practical features</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
            Everything your clinic needs to stay organized.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Built around the everyday tasks of an independent dentist or small dental clinic.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1E41] transition group-hover:bg-[#376D0E]">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-[#0B1E41]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Customization() {
  return (
    <section id="customization" className="bg-white py-24">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">Not one-size-fits-all</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
            Your clinic. Your workflow. Your software.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Navdant can start as a simple solution for an individual dentist and evolve as your clinic grows. We can customize the system around your actual requirements.
          </p>

          <div className="mt-8 grid gap-4">
            {customization.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#376D0E]">
                  <Check className="h-4 w-4 text-white" />
                </span>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0B1E41] px-6 py-4 font-bold text-white transition hover:bg-[#376D0E]">
            Discuss Your Requirements <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="rounded-[32px] bg-[#0B1E41] p-8 shadow-2xl">
          <div className="rounded-3xl bg-white/10 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-300">Clinic setup</p>
                <h3 className="mt-1 text-2xl font-extrabold text-white">Built to grow with you</h3>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#376D0E]">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["01", "Single dentist", "Simple setup for an individual practice"],
                ["02", "Multi-user clinic", "Add dentists, assistants or staff"],
                ["03", "Custom solution", "Features and workflows tailored to your needs"],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-2xl bg-white p-5">
                  <div className="flex gap-4">
                    <span className="text-sm font-black text-[#376D0E]">{number}</span>
                    <div>
                      <h4 className="font-extrabold text-[#0B1E41]">{title}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [1, "Tell us about your clinic", "Share your current workflow, team size and the features you need."],
    [2, "See the solution", "We demonstrate the existing system and discuss possible customizations."],
    [3, "Build around your needs", "Add, remove or adapt features for your clinic's workflow."],
  ];

  return (
    <section id="how-it-works" className="bg-[#F6F8FC] py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">Simple process</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">From idea to clinic workflow.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <div key={number} className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B1E41] text-lg font-black text-white">{number}</div>
              <h3 className="mt-6 text-xl font-extrabold text-[#0B1E41]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section id="screenshots" className="bg-white py-24">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">Inside Navdant</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">A clean experience for everyday clinic work.</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">
            These are screenshots from the current Navdant mobile application. Your customized solution can evolve from this foundation.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-3">
          <div className="mx-auto max-w-[280px] overflow-hidden rounded-[32px] border-8 border-[#0B1E41] bg-[#0B1E41] shadow-2xl">
            <img src="/screenshots/login.jpeg" alt="Navdant login screen" className="w-full" />
          </div>
          <div className="mx-auto max-w-[360px] overflow-hidden rounded-[32px] border-8 border-[#0B1E41] bg-[#0B1E41] shadow-2xl md:scale-105">
            <img src="/screenshots/user-profile.jpeg" alt="Navdant dashboard screen" className="w-full" />
          </div>
          <div className="rounded-3xl bg-[#0B1E41] p-8 text-white">
            <ShieldCheck className="h-10 w-10 text-[#8CC63E]" />
            <h3 className="mt-6 text-2xl font-extrabold">Designed with real clinic workflows in mind.</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Patient records, filtering, treatment visits, payments, expenses, documents, Smart IDs and more can be brought together in one system.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-bold text-white hover:text-[#8CC63E]">
              Get a personalized demo <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-[#0B1E41] py-24">
      <div className="container-wide">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-7 py-14 text-center shadow-2xl sm:px-14">
          <MessageCircle className="mx-auto h-12 w-12 text-[#8CC63E]" />
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to build a better workflow for your clinic?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need a simple single-user setup or a customized multi-user clinic management system, let's discuss what your clinic needs.
          </p>
          <a
            // href="https://wa.me/919999999999?text=Hi%20Navdant%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dental%20clinic%20management%20solution."
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#376D0E] px-7 py-4 font-bold text-white shadow-xl transition hover:bg-white hover:text-[#0B1E41]"
          >
            <MessageCircle className="h-5 w-5" />
            Request a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#07152F] py-10 text-white">
      <div className="container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* Logo */}
        <div className="rounded-xl bg-white px-3 py-2">
          <img
            src={logo}
            alt="Navdant Dental Clinic"
            className="h-12 w-auto object-contain"
          />
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Navdant. Dental clinic management solutions.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Customization />
        <HowItWorks />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </>
  );
}