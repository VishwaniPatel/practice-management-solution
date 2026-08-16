import React from "react";
import { features } from "../constants/content";

export default function Features() {
  return (
    <section id="features" className="bg-[#F6F8FC] py-24">
      <div className="container-wide">

        <div className="mx-auto max-w-2xl text-center">
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
            Core capabilities
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
            Everything you need to keep your practice organized.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
           A flexible foundation that can be adapted to the everyday workflows of different doctors, clinics and healthcare practices.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1E41] transition group-hover:bg-[#376D0E]">
                <Icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#0B1E41]">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}