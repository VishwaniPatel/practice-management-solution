import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/screenshots/navdant_logo.png";
import { navLinks } from "../constants/content";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
            <div className="container-wide flex h-20 items-center justify-between">

                {/* Portfolio / Service Logo */}
                <a href="#" className="flex items-center">
                    <div>
                        <div className="text-xl font-black tracking-tight text-[#0B1E41]">
                            Practice Management
                        </div>
                        <div className="text-[10px] font-semibold tracking-[0.18em] text-[#376D0E]">
                            SOLUTIONS
                        </div>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="text-sm font-semibold text-slate-600 transition hover:text-[#376D0E]"
                        >
                            {label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="rounded-full bg-[#0B1E41] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#376D0E]"
                    >
                        Request a Demo
                    </a>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-xl p-2 text-[#0B1E41] md:hidden"
                    aria-label="Toggle navigation"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="border-t border-slate-100 bg-white px-4 py-5 md:hidden">
                    <div className="container-wide flex flex-col gap-4">
                        {navLinks.map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="font-semibold text-slate-700"
                            >
                                {label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="rounded-xl bg-[#0B1E41] px-5 py-3 text-center font-bold text-white"
                        >
                            Request a Demo
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}