import React from "react";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import { customization } from "../constants/content";

export default function Customization() {
    return (
        <section id="customization" className="bg-white py-24">
            <div className="container-wide grid items-center gap-14 lg:grid-cols-2">

                <div>
                    <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
                        Built for your requirements
                    </span>

                    <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
                        Your practice. Your workflow. Your solution.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Start with what you need today and expand as your practice grows. We can customize the app, website or complete solution around your actual requirements.
                    </p>

                    <div className="mt-8 grid gap-4">
                        {customization.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#376D0E]">
                                    <Check className="h-4 w-4 text-white" />
                                </span>

                                <span className="font-medium text-slate-700">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0B1E41] px-6 py-4 font-bold text-white transition hover:bg-[#376D0E]"
                    >
                        Discuss Your Requirements
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>

                <div className="rounded-[32px] bg-[#0B1E41] p-8 shadow-2xl">
                    <div className="rounded-3xl bg-white/10 p-6">

                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div>
                                <p className="text-sm text-slate-300">
                                    Flexible setup
                                </p>

                                <h3 className="mt-1 text-2xl font-extrabold text-white">
                                    Built to grow with your practice
                                </h3>
                            </div>

                            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#376D0E]">
                                <Stethoscope className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {[
                                [
                                    "01",
                                    "Single-user practice",
                                    "Simple setup for an individual doctor or practitioner.",
                                ],
                                [
                                    "02",
                                    "Multi-user practice",
                                    "Add doctors, assistants, receptionists or staff.",
                                ],
                                [
                                    "03",
                                    "Mobile + Web",
                                    "Choose the platforms and features that fit your workflow.",
                                ],
                            ].map(([number, title, text]) => (
                                <div
                                    key={number}
                                    className="rounded-2xl bg-white p-5"
                                >
                                    <div className="flex gap-4">
                                        <span className="text-sm font-black text-[#376D0E]">
                                            {number}
                                        </span>

                                        <div>
                                            <h4 className="font-extrabold text-[#0B1E41]">
                                                {title}
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                {text}
                                            </p>
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