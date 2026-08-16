import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#07152F] py-10 text-white">
            <div className="container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>
                    <div className="text-xl font-black tracking-tight text-white">
                        Practice Management
                    </div>

                    <div className="text-[10px] font-semibold tracking-[0.18em] text-[#8CC63E]">
                        SOLUTIONS
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                        Custom apps and websites built around your workflow.
                    </p>
                </div>

                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Practice Management Solutions.
                </p>

            </div>
        </footer>
    );
}