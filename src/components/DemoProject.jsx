import React from "react";
import {
  ArrowRight,
  Check,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { demoFeatures } from "../constants/content";

export default function DemoProject() {
  return (
    <section id="demo" className="bg-white py-24">
      <div className="container-wide">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
            Real-world demo
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
            See a healthcare solution across web & mobile.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore a real-world practice management solution developed for a
            dental practice — available across desktop web and mobile,
            bringing everyday workflows together in one place.
          </p>
        </div>

        {/* Main Demo Card */}
        <div className="mt-14 overflow-hidden rounded-[36px] bg-[#0B1E41] shadow-2xl">

          <div className="p-7 sm:p-10 lg:p-14">

            {/* Screenshots Section */}
            <div className="grid gap-10 lg:grid-cols-[1.5fr_.7fr]">

              {/* ================= WEB APP ================= */}
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#8CC63E]/10">
                      <Monitor className="h-5 w-5 text-[#8CC63E]" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        Web Application
                      </h3>

                      <p className="text-sm text-slate-400">
                        Desktop practice management
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Dashboard */}
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-xl">
                  <div className="flex items-center gap-2 bg-slate-100 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                    <div className="ml-3 flex-1 rounded-lg bg-white px-3 py-1.5 text-[10px] text-slate-400">
                      Practice Management Dashboard
                    </div>
                  </div>

                  <img
                    src="/screenshots/dashboard_web.jpg"
                    alt="Practice management web application dashboard"
                    className="w-full"
                  />
                </div>

                {/* Other Web Screens */}
                <div className="mt-5 grid grid-cols-2 gap-5">

                  <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white shadow-lg">
                    <img
                      src="/screenshots/expense.jpg"
                      alt="Patient management web application screen"
                      className="w-full"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white shadow-lg">
                    <img
                      src="/screenshots/report.jpg"
                      alt="Patient details web application screen"
                      className="w-full"
                    />
                  </div>

                </div>
              </div>

              {/* ================= MOBILE APP ================= */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#8CC63E]/10">
                    <Smartphone className="h-5 w-5 text-[#8CC63E]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Mobile App
                    </h3>

                    <p className="text-sm text-slate-400">
                      On-the-go practice access
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">

                  {/* Mobile Screen 1 */}
                  <div className="overflow-hidden rounded-[24px] border-[6px] border-white/10 bg-white shadow-xl">
                    <img
                      src="/screenshots/login.jpeg"
                      alt="Mobile application login screen"
                      className="w-full"
                    />
                  </div>

                  {/* Mobile Screen 2 */}
                  <div className="mt-8 overflow-hidden rounded-[24px] border-[6px] border-white/10 bg-white shadow-xl">
                    <img
                      src="/screenshots/user-profile.jpeg"
                      alt="Mobile application profile screen"
                      className="w-full"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="my-12 h-px bg-white/10" />

            {/* Project Content */}
            <div className="grid gap-10 lg:grid-cols-[1fr_.9fr]">

              {/* Description */}
              <div className="text-white">

                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-[#8CC63E]" />
                  Client Demo Project
                </div>

                <h3 className="mt-6 text-3xl font-black sm:text-4xl">
                  Dental Practice Management Solution
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  A custom web and mobile solution developed for a dental
                  practice, demonstrating how patient management, treatment
                  records, payments, expenses, documents and everyday
                  workflows can be brought together into one connected system.
                </p>

                {/* Features */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {demoFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-200"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#8CC63E]" />
                      {feature}
                    </div>
                  ))}
                </div>

              </div>

              {/* Customizable Foundation */}
              <div className="flex flex-col justify-center">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex gap-3">

                    <ShieldCheck className="h-6 w-6 shrink-0 text-[#8CC63E]" />

                    <div>
                      <h4 className="font-bold text-white">
                        Built as a customizable foundation
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        The same approach can be adapted for different
                        doctors, specialties, users and workflows — whether
                        you need a web application, mobile app, or both.
                      </p>
                    </div>

                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-white transition hover:text-[#8CC63E]"
                >
                  Discuss your requirements
                  <ArrowRight className="h-5 w-5" />
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}