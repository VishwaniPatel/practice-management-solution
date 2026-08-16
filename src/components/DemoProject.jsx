import React from "react";
import {
    ArrowRight,
    Check,
    ShieldCheck,
} from "lucide-react";
import { demoFeatures } from "../constants/content";

export default function DemoProject() {
    return (
        <section id="demo" className="bg-white py-24">
            <div className="container-wide">

                <div className="mx-auto max-w-3xl text-center">
                    <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
                        Real-world demo
                    </span>

                    <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
                        See a practice management solution in action.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Explore a real-world mobile application developed for a dental practice.
                        This project demonstrates how a custom solution can bring everyday
                        practice workflows together in one place.
                    </p>
                </div>

                {/* Demo Card */}
                <div className="mt-14 overflow-hidden rounded-[36px] bg-[#0B1E41] shadow-2xl">

                    <div className="grid items-center gap-12 p-7 sm:p-10 lg:grid-cols-2 lg:p-14">

                        {/* Screenshots */}
                        <div className="grid grid-cols-2 gap-5">

                            <div className="overflow-hidden rounded-[28px] border-8 border-white/10 bg-white shadow-xl">
                                <img
                                    src="/screenshots/login.jpeg"
                                    alt="Practice management application login screen"
                                    className="w-full"
                                />
                            </div>

                            <div className="mt-10 overflow-hidden rounded-[28px] border-8 border-white/10 bg-white shadow-xl">
                                <img
                                    src="/screenshots/user-profile.jpeg"
                                    alt="Practice management application profile screen"
                                    className="w-full"
                                />
                            </div>

                        </div>

                        {/* Content */}
                        <div className="text-white">

                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                                <span className="h-2 w-2 rounded-full bg-[#8CC63E]" />
                                Client Demo Project
                            </div>

                            <h3 className="mt-6 text-3xl font-black sm:text-4xl">
                                Navdant Dental Clinic
                            </h3>

                            <p className="mt-5 leading-8 text-slate-300">
                                A custom application developed for a dental practice,
                                demonstrating patient management, treatment records, payments,
                                expenses, documents and other everyday workflows.
                            </p>

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

                            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                                <div className="flex gap-3">
                                    <ShieldCheck className="h-6 w-6 shrink-0 text-[#8CC63E]" />

                                    <div>
                                        <h4 className="font-bold">
                                            Built as a customizable foundation
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-400">
                                            The same approach can be adapted for different doctors,
                                            specialties, users and workflows.
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
        </section>
    );
}