import React from "react";
import { customizableFeatures, features } from "../constants/content";
import { ArrowRight, Check } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="bg-[#F6F8FC] py-24">
      <div className="container-wide">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
            Flexible capabilities
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
            Start with what you need. Customize what you want.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The current demo shows a real-world practice management app.
            Your solution can include additional features based on your
            workflow, team and requirements.
          </p>
        </div>

        {/* Current Demo */}
        <div className="mt-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#376D0E]/10 px-4 py-2 text-sm font-bold text-[#376D0E]">
                <span className="h-2 w-2 rounded-full bg-[#376D0E]" />
                Available in the demo
              </div>

              <h3 className="mt-4 text-3xl font-black text-[#0B1E41]">
                Features already demonstrated
              </h3>

              <p className="mt-2 max-w-2xl text-slate-600">
                These features are currently demonstrated in the Navdant
                Dental Clinic project.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1E41] transition group-hover:bg-[#376D0E]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <Check className="h-5 w-5 text-[#376D0E]" />
                </div>

                <h4 className="mt-6 text-xl font-extrabold text-[#0B1E41]">
                  {title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Customizable Features */}
        <div className="mt-20">
          <div className="rounded-[32px] bg-[#0B1E41] p-7 sm:p-10">

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#8CC63E]">
                <span className="h-2 w-2 rounded-full bg-[#8CC63E]" />
                Available as customization
              </div>

              <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Build the features your practice actually needs.
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                The demo is only one example. We can add, remove or customize
                features according to your practice, team, workflow and
                business requirements.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {customizableFeatures.map(
                ({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#376D0E]">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <h4 className="mt-5 font-extrabold text-white">
                      {title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Bottom Message */}
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-white">
                  Need something different?
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Tell us what your practice needs and we can discuss a
                  custom solution.
                </p>
              </div>

              {/* <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0B1E41] transition hover:bg-[#8CC63E] hover:text-[#0B1E41]"
              >
                Discuss Your Requirements
                <ArrowRight className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}