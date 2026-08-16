import React from "react";
import { steps } from "../constants/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F6F8FC] py-24">
      <div className="container-wide">

        <div className="mx-auto max-w-2xl text-center">
          <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
            Simple process
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
            From your requirements to your solution.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
           Start with a conversation. We understand your workflow and build a solution around what your practice actually needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B1E41] text-lg font-black text-white">
                {number}
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