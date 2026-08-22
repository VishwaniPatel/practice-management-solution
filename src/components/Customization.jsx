import React from "react";
import {
    ArrowRight,
    Check,
    Smartphone,
    Globe,
    Users,
    ShieldCheck,
} from "lucide-react";
import { customization } from "../constants/content";

const setupOptions = [
    {
        number: "01",
        icon: Users,
        title: "Single-User Practice",
        text: "Start with a simple setup for an individual doctor or practitioner.",
    },
    {
        number: "02",
        icon: Users,
        title: "Multi-User Practice",
        text: "Add doctors, assistants, receptionists, staff or visiting doctors.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Role-Based Access",
        text: "Control what each user can view, add, edit or manage.",
    },
];

const platformOptions = [
    {
        icon: Smartphone,
        title: "Mobile App",
        text: "A dedicated mobile experience for doctors, staff or patients.",
    },
    {
        icon: Globe,
        title: "Web Application",
        text: "A browser-based solution accessible from desktop, tablet or mobile.",
    },
    {
        icon: Smartphone,
        title: "App + Web",
        text: "Combine mobile and web experiences around the way your practice works.",
    },
];

export default function Customization() {
    return (
        <section id="customization" className="bg-white py-24">
            <div className="container-wide">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="font-bold uppercase tracking-[0.18em] text-[#376D0E]">
                        Built for your requirements
                    </span>

                    <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1E41] sm:text-5xl">
                        Your practice. Your workflow. Your solution.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        There is no fixed setup. Start with what you need today
                        and customize the solution as your practice grows.
                        Features, users, permissions and platforms can be
                        adapted around your requirements.
                    </p>
                </div>

                {/* Customization Points */}
                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {customization.map((item) => (
                        <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:-translate-y-1 hover:border-[#376D0E]/30 hover:shadow-md"
                        >
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#376D0E]">
                                <Check className="h-4 w-4 text-white" />
                            </span>

                            <span className="font-medium leading-6 text-slate-700">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* User Setup */}
                <div className="mt-16">
                    <div className="mb-7">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#376D0E]">
                            Flexible access
                        </span>

                        <h3 className="mt-2 text-3xl font-black text-[#0B1E41]">
                            One solution. Different users. Different access.
                        </h3>

                        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                            Decide who can access what. Permissions can be
                            configured according to each person's role in
                            your practice.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {setupOptions.map(
                            ({ number, icon: Icon, title, text }) => (
                                <div
                                    key={number}
                                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B1E41]">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>

                                        <span className="text-sm font-black text-[#376D0E]">
                                            {number}
                                        </span>
                                    </div>

                                    <h4 className="mt-6 text-xl font-extrabold text-[#0B1E41]">
                                        {title}
                                    </h4>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {text}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Platform Options */}
                <div className="mt-16 rounded-[32px] bg-[#0B1E41] p-7 sm:p-10">
                    <div className="max-w-3xl">
                        <span className="font-bold uppercase tracking-[0.18em] text-[#8CC63E]">
                            Choose your platform
                        </span>

                        <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                            Mobile, web or both.
                        </h3>

                        <p className="mt-4 text-lg leading-8 text-slate-300">
                            Your solution can be designed for the platform
                            that fits your workflow. Start with one platform
                            or combine multiple experiences.
                        </p>
                    </div>

                    <div className="mt-9 grid gap-4 md:grid-cols-3">
                        {platformOptions.map(
                            ({ icon: Icon, title, text }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                                >
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#376D0E]">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>

                                    <h4 className="mt-5 text-lg font-extrabold text-white">
                                        {title}
                                    </h4>

                                    <p className="mt-2 leading-6 text-slate-300">
                                        {text}
                                    </p>
                                </div>
                            )
                        )}
                    </div>



                    {/* CTA */}
                    <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="font-bold text-white">
                                Have a different workflow?
                            </p>

                            <p className="mt-1 text-sm leading-6 text-slate-400">
                                Tell us what you need and we can discuss how
                                your app or web solution can be customized.
                            </p>
                        </div>

                        {/* <a
                            href="#contact"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#0B1E41] transition hover:bg-[#8CC63E]"
                        >
                            Discuss Your Requirements
                            <ArrowRight className="h-5 w-5" />
                        </a> */}
                    </div>
                </div>

                {/* UI & Branding Customization */}
                <div className="mt-16">
                    <div className="mb-7">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#376D0E]">
                            UI & Branding
                        </span>

                        <h3 className="mt-2 text-3xl font-black text-[#0B1E41]">
                            Make the experience feel like yours.
                        </h3>

                        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                            The interface can be adapted to match your practice, brand and
                            workflow — from colors and branding to screens and the information
                            you need to manage.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">

                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                            <div className="flex gap-2">
                                <span className="h-8 w-8 rounded-lg bg-[#0B1E41]" />
                                <span className="h-8 w-8 rounded-lg bg-[#376D0E]" />
                                <span className="h-8 w-8 rounded-lg bg-slate-100 border border-slate-200" />
                            </div>

                            <h4 className="mt-6 text-xl font-extrabold text-[#0B1E41]">
                                Color Theming
                            </h4>

                            <p className="mt-3 leading-7 text-slate-600">
                                Choose colors and visual styling that match your practice
                                branding and create a consistent experience.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B1E41]">
                                <Check className="h-6 w-6 text-white" />
                            </div>

                            <h4 className="mt-6 text-xl font-extrabold text-[#0B1E41]">
                                Custom Screens
                            </h4>

                            <p className="mt-3 leading-7 text-slate-600">
                                Design screens around the information, actions and workflow
                                your team actually uses.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#376D0E]">
                                <Users className="h-6 w-6 text-white" />
                            </div>

                            <h4 className="mt-6 text-xl font-extrabold text-[#0B1E41]">
                                Custom Workflow
                            </h4>

                            <p className="mt-3 leading-7 text-slate-600">
                                Define the flow, required data and features based on how
                                your practice operates.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}