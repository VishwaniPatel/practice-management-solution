import React from "react";
import { ArrowRight, Check, Monitor, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1E41] pt-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#376D0E]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#8CC63E]/10 blur-3xl" />

      <div className="container-wide relative grid min-h-[680px] items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">

        {/* ================= CONTENT ================= */}
        <div className="relative z-10">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#8CC63E]" />
            Custom Healthcare Solutions
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-[64px]">
            Practice Management Solution,
            <span className="block text-[#8CC63E]">
              Built Around Your Workflow.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            We build custom web applications and mobile apps for doctors,
            clinics and healthcare practices — with features, users and
            workflows tailored to your specific requirements.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#0B1E41] shadow-xl transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              Request a Free Demo
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition duration-200 hover:bg-white/10"
            >
              See Real-World Demo
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#8CC63E]" />
              Web Applications
            </div>

            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#8CC63E]" />
              Mobile Apps
            </div>

            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#8CC63E]" />
              Custom Workflows
            </div>
          </div>
        </div>

        {/* ================= VISUAL ================= */}
        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">

          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-[#376D0E]/25 blur-[90px]" />

          {/* Main Web Application */}
          <div className="relative z-10">

            {/* Web label */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#8CC63E]/10">
                  <Monitor className="h-4 w-4 text-[#8CC63E]" />
                </span>
                Web Application
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                Desktop
              </span>
            </div>

            {/* Screenshot */}
            <div className="overflow-hidden rounded-[26px] border border-white/15 bg-white p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/screenshots/dashboard_web.jpg"
                  alt="Practice management web application dashboard"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* ================= MOBILE CARD ================= */}
          <div className="absolute -bottom-12 -left-8 z-20 hidden sm:block">

            <div className="relative">

              {/* Mobile label */}
              <div className="absolute -top-4 -left-5 z-30 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#0B1E41] shadow-lg">
                <Smartphone className="h-4 w-4 text-[#376D0E]" />
                Mobile App
              </div>

              {/* Phone */}
              <div className="w-[145px] overflow-hidden rounded-[28px] border-[6px] border-slate-800 bg-white shadow-2xl">
                <img
                  src="/screenshots/dashboard.jpeg"
                  alt="Practice management mobile application"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Small workflow card */}
          <div className="absolute -bottom-8 right-0 z-20 hidden rounded-2xl border border-white/10 bg-[#13294F]/95 px-5 py-4 shadow-xl backdrop-blur md:block">
            <div className="text-xs font-medium text-slate-400">
              Designed around
            </div>

            <div className="mt-1 text-sm font-bold text-white">
              Your Workflow
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}