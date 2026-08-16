import React from "react";
import { ArrowRight, Check, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#0B1E41] pt-32">
      <div className="container-wide grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#8CC63E]" />
            Custom healthcare solutions
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Practice Management Solution,
            <span className="text-[#8CC63E]">
              {" "}
              Built Around Your Workflow.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            We build custom apps and websites for doctors, clinics and healthcare practices — with features, users and workflows tailored to your specific requirements.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#0B1E41] shadow-xl transition hover:-translate-y-0.5"
            >
              Request a Free Demo
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              See Real-World Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
            {[
              "Single or Multi-User",
              "Custom Features",
              "Flexible Workflows",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"
              >
                <Check className="h-4 w-4 text-[#8CC63E]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Demo Screenshot */}
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-10 rounded-full bg-[#376D0E]/20 blur-3xl" />

          <div className="relative rounded-[34px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[27px] bg-white shadow-2xl">
              <img
                src="/screenshots/dashboard.jpeg"
                alt="Practice management dashboard demo"
                className="w-full"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#376D0E]/10">
                <Users className="h-6 w-6 text-[#376D0E]" />
              </div>

              <div>
                <div className="text-sm font-bold text-[#0B1E41]">
                  Organized Records
                </div>
                <div className="text-xs text-slate-500">
                  Designed around your workflow
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}